const fs = require('fs');

const exclude = [
    'index.js',
    'base.js'
];

const files = fs.readdirSync('./features')
    .filter(f => exclude.indexOf(f) === -1);
const features = files.map(f => require(`./${f}`));

exports.detect = function(file){
    return features.filter(f => f.detect(file))
        .map(f => f.title);
}

exports.detectOne = function(file, featureName){
    const feature = features.filter(f => 
        f.title.toLowerCase() === featureName.toLowerCase()
    )[0];

    if(!feature){
        return null;
    }

    return feature.detect(file);
}