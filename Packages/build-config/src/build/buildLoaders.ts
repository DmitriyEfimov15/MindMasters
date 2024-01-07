import {ModuleOptions} from 'webpack'
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/types";
import ReactRefreshTypeScript from 'react-refresh-typescript'

export function buildLoaders({mode}: BuildOptions): ModuleOptions['rules'] {
    const isDev = mode === 'development'

    const assetLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    }

    const svgrLoader = {
        test: /\.svg$/i,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    icon: true,
                    svgoConfig: {
                        plugins: [
                            {
                                name: 'convertColors',
                                params: {
                                    currentColor: true,
                                }
                            }
                        ]
                    }
                }
            }
        ],
    }

    const cssWithModulesLoader = {
            loader: "css-loader",
            options: {
                modules: {
                    localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
                },
            },
        }

    const cssLoader = {
            test: /\.css$/i,
            use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, cssWithModulesLoader],
        }

    const tsLoader = {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
            {
                loader: 'ts-loader',
                options: {  
                    transpileOnly: isDev,
                    getCustomTransformers: () => ({
                        before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
                    }),
                }
            }
        ]
    }

    return [
        assetLoader,
        cssLoader,
        tsLoader,
        svgrLoader
    ]
}