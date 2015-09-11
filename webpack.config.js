module.exports = function(name){
    name = name || require("./package.json").name;
    var ExtractTextPlugin = require("extract-text-webpack-plugin");
    var ExtractCSS = new ExtractTextPlugin(name+".css");

    return {
        entry: './bonaparte.build.js',
        output: {
            path: "./dist",
            filename: name+".js"
        },
        module: {
            preLoaders : [
                // {
                //     test: /.*/,
                //     loader : "include-loader"
                // },
                {
                    test: /.*/,
                    loader : "import-style-loader"
                }
                // {
                //     test: /.*/,
                //     loader : "includePath-loader"
                // }
            ],
            loaders: [
                {
                    test: /\.css$/i,
                    exclude : /wsj-fonts\.css$/,
                    loader: ExtractCSS.extract("css-loader!autoprefixer-loader")
                },
                {
                    test: /\.less$/i,
                    loader: ExtractCSS.extract("css-loader!autoprefixer-loader!less-loader")
                },
                {
                    test: /\.scss$/i,
                    loader: ExtractCSS.extract("css-loader!autoprefixer-loader!sass-loader")
                },
                {
                    test: /\.(woff|woff2|eot|ttf)$/i,
                    loader: "copy-file-loader?name=fonts/[name]-[hash].[ext]"
                },
                {
                    test: /\.(jpe?g|png|gif|svg)$/i,
                    loader: "file-loader?name=images/[name]-[hash].[ext]"
                },
                {
                    test : /wsj-fonts\.css$/i,
                    loader: ExtractCSS.extract("external-css-loader?name=css/[name].[ext]")
                },
                // {
                //     test: /\.woff$/,   
                //     loader: "url?limit=1000000" 
                // },
                // {
                //     test: /\.woff2$/,   
                //     loader: "url?limit=1000000" 
                // },
                // { 
                //     test: /\.ttf$/,    
                //     loader: "url?limit=1000000"
                // },
                // { 
                //     test: /\.eot$/,    
                //     loader: "url?limit=1000000" 
                // },
                // { 
                //     test: /\.svg$/,    
                //     loader: "url?limit=1000000" 
                // }
            ],
            // noParse : /\.(woff|woff2|eot|ttf)$/

        },
        // Use the plugin to specify the resulting filename (and add needed behavior to the compiler)
        plugins: [
           ExtractCSS,
        ]
    }
}();