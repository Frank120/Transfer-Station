let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

const publicPath = './';

let config = {
    //入口文件配置
    entry: {
        index: path.resolve(__dirname, './src/js/page/index.js'),
        vendors: ['vue', 'vue-router','vue-resource','vuex','element-ui','element-ui/lib/theme-default/index.css'] 
    },
    //出口文件配置
    output: {
        path: path.resolve(__dirname, 'dist'), 
        publicPath,
        filename: 'js/[name].js',
        chunkFilename: 'async-chunks/[name].js',
        libraryTarget: 'umd'
    },

    devtool: 'cheap-module-eval-source-map',
    
    module: {
        //加载器
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
                        sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
                    }
                }
            },
            {
                test: /\.html$/,
                loader: "raw-loader"
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ["es2015","stage-0"],
                    plugins: ['syntax-dynamic-import']
                }
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            },
            {
                //图片加载器，雷同file-loader，更适合图片，可以将较小的图片转成base64，减少http请求
                test: /\.(png|jpg|gif|svg)$/,
                include: [path.resolve(__dirname, 'src'), path.resolve(__dirname,'dist'), path.resolve(__dirname,'node_modules')],
                loader: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images',
                        publicPath,
                    },
                }],
            },
            {
                test: /\.(woof|woof2|eot|ttf|otf|)(\?[a-z0-9])?$/,
                include: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'dist'), path.resolve(__dirname, 'node_modules')],
                loader: [{
                    loader: 'url-loader',
                    options: {
                        limit: Infinity,
                        name : '/[name].[ext]/',
                        outputPath: 'assets/fonts',
                    },
                }],
            },
        ]
    },
    //插件
    plugins: [
        //webpack3.0的范围提升
        new webpack.optimize.ModuleConcatenationPlugin(),
        //打包生成html文件，并且将js文件引入进来
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, 'dist/html/index.html'), //生成的html存放路径，相对于path
            template: path.resolve(__dirname, 'src/html/index.html'), //模板路径,前面最好加上loader用于处理
            inject: 'body', 
            hash: true
        }),
        //提取功能模块
        new CommonsChunkPlugin({
            name: 'vendors', 
            minChunks: 2, 
            // children:true
        }),
    ],
    //使用webpack-dev-server，启动热刷新插件
    devServer: {
        contentBase: path.join(__dirname, "/"),
        host: 'localhost',
        port: 9090, //默认9090
        inline: true, //可以监控js变化
        hot: true
    },
    //搜索路径变量
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        },
        extensions:['.js','.scss','.vue','.json']
    }
};
module.exports = config; 