import webpack, {Configuration} from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/types";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'

export function buildPlugins({mode, paths, platform}: BuildOptions): Configuration['plugins']{

    const isProd = mode === 'production'
    const isDev = mode === 'development'

    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({
            template: paths.html,
            favicon: path.resolve(paths.public, 'favicon.ico'),
            publicPath: '/'
        }),
        new webpack.DefinePlugin({
            __PLATFORM__: JSON.stringify(platform)
        }),
    ]

    if(isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }))
    }

    if (isDev) {
        plugins.push(
            new webpack.ProgressPlugin(),
        )
        plugins.push(new ForkTsCheckerWebpackPlugin())
        plugins.push(new ReactRefreshWebpackPlugin())
    }


    return plugins;
}