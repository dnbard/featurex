const fs = require('fs');

const exclude = [
    'index.js',
    'base.js'
];

const files = fs.readdirSync(__dirname).filter(f => exclude.indexOf(f) === -1);
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

exports.getEnvironment = function(featureArgs){
    if (!featureArgs){
        return {};
    }

    if (!Array.isArray(featureArgs)){
        featureArgs = [ featureArgs ];
    }

    return featureArgs.map(featureName => {
        const feature = features.filter(f => f.title.toLowerCase() === featureName.toLowerCase())[0];

        if (typeof feature !== 'object' || !feature.env){
            return {};
        }

        return feature.env;
    }).reduce((a, b) => {
        const keys = Object.keys(a).concat(Object.keys(b));
        const result = {};

        keys.forEach(k => {
            const aValue = a[k] || 0;
            const bValue = b[k] || 0;

            result[k] = Math.max(aValue, bValue);
        });

        return result;
    }, {});
}
