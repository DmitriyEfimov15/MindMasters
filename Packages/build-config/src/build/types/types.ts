export interface BuildPaths {
    entry: string,
    output: string,
    html: string,
    src: string,
    public: string
}

export type BuildMode = 'production' | 'development'
export type BuildPlatform = 'desktop' | 'mobile'

export interface BuildOptions {
    mode: BuildMode,
    port: number,
    paths: BuildPaths,
    platform?: BuildPlatform
}