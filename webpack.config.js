var path = require('path');
module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname ,'./build'),
        filename: 'bundle.js'      
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:[
                    {
                        loader:"babel-loader",
                        options:{
                            presets:[['es2015',{module:false}]],
                            cacheDirectory:true
                        }
                    }
                ]
            }
        ]
    }
};