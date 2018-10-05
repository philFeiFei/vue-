const path = require("path")
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HTMLPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const isDev = process.env.NODE_ENV === 'development'   ////这是设置环境变量process.env.NODE_ENV,在package。json中设置，运行启动命令会加载这个变量，这里能够读取
const config = {
    target: 'web',
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        // filename: 'bundle.js',
        filename: '[name].js',
        path: path.join(__dirname, 'dist')
    },
    plugins: [
        // make sure to include the plugin for the magic
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDev ? '"development"' : '"production"',
            }
        }),
        new VueLoaderPlugin(), //vue-loader 15版本之后，需要加载这个plugin
        new HTMLPlugin()    //该plugin最后会把编译的js注入到html页面。此方法里面有很多参数，甚至可以指定html名字，用现成的html文件等。

    ],
    //webpack配置loader功能，对vue、css、jpg等进行加载。 在打包的时候。。
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.styl/,
                use: ['style-loader', 'css-loader',

                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                        }
                    },
                    'stylus-loader']
            },
            {
                test: /\.(jpg|gif|png|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // limit: 10000,  //加上这个限制，生成的图片引用位置有问题，咋回事？？
                            name: '[name]-aaa.[ext]'
                        }
                    }
                ],
            },

        ]
    }
}

if (isDev) {//配置开发模式
    config.devtool = "#cheap-module-eval-source-map"   //es6代码不能再浏览器运行，用这个工具调试原生es6代码
    config.devServer = {
        port: '8000',
        host: '127.0.0.1',
        overlay: {
            error: true,
        },
        open: true,  //这个编译完毕，会自动打开浏览器
        hot: true   //这个热加载，只更新当前的改动的组件

    }
    config.plugins.push(//加入这个plugin才能实现热加载
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
}

module.exports = config;