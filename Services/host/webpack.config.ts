import path from 'path';
import webpack from 'webpack';
import {BuildMode, buildWebpack, BuildPaths, BuildPlatform} from '@packages/build-config';
import packageJson from './package.json'

interface EnvVariables {
    mode?: BuildMode,
    port?: number,
    platform?: BuildPlatform,
    LOGIN_REMOTE_URL: string
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
        port: env.port ?? 3000,
        paths,
        platform: env.platform ?? 'desktop'
    })

    const LOGIN_REMOTE_URL = env.LOGIN_REMOTE_URL ?? 'http://localhost:3001'

    config.plugins.push(new webpack.container.ModuleFederationPlugin({
        name: 'host',
        filename: 'remoteEntry.js',

        remotes: {
            login: `login@${LOGIN_REMOTE_URL}/remoteEntry.js`
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