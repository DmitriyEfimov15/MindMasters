import path from 'path';
import webpack from 'webpack';
import {BuildMode, buildWebpack, BuildPaths, BuildPlatform} from '@packages/build-config';
import packageJson from './package.json'

interface EnvVariables {
    mode?: BuildMode,
    port?: number,
    platform?: BuildPlatform,

}

export default (env: EnvVariables) => {

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        public: path.resolve(__dirname, 'public')
    }

    const config: webpack.Configuration = buildWebpack({
        mode: env.mode ?? 'development',
        port: env.port ?? 3001,
        paths,
        platform: env.platform ?? 'desktop'
    })

    config.plugins.push(new webpack.container.ModuleFederationPlugin({
        name: 'login',
        filename: 'remoteEntry.js',
        exposes: {
            './Router': './src/components/router/Router.tsx'
        },
        shared: {
            ...packageJson.dependencies,
            react: {
                eager: true,
                requiredVersion: packageJson.dependencies['react'],
            },
            'react-router-dom': {
                eager: true,
                requiredVersion: packageJson.dependencies['react-router-dom'],
            },
            'react-dom': {
                eager: true,
                requiredVersion: packageJson.dependencies['react-dom'],
            },
        },
    }))

    return config;
}