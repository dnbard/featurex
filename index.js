const fs = require('fs');

const features = require('./features');

module.exports = function(path, featureName){
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err){
                return reject(err);
            }

            const file = data.toString();

            const detectedFeatures = (featureName ?
                features.detectOne(file, featureName) ? featureName : null :
                features.detect(file));

            return resolve({
                features: detectedFeatures,
                environments: features.getEnvironment(detectedFeatures)
            });
        });
    });
}