const HtmlWebPackPlugin         = require('html-webpack-plugin'); 
const MiniCssExtractPlugin      = require('mini-css-extract-plugin');
const optimizeCssAssetsPlugins = require('optimize-css-assets-webpack-plugin')

module.exports = {
    //mode: 'development',
    mode: 'production',
    optimization: {
        minimizer: [new optimizeCssAssetsPlugins() ]
    },
    module: {
        rules: [
            {
                test: /\.js$/, 
                exclude: /node_modules/, 
                use: [
                    loader: "babel-loader" 
                ]
            },
            {
                test: /\.css$/,
                exclude: /styles\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.css$/,
                exclude: /styles\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: false }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
       
        new MiniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: false
        }),
    
    ]

}

