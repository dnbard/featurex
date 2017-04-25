const BaseFeature = require('./base');

module.exports = BaseFeature({
    title: 'const',
    detect: function(file){
        return file.indexOf('const ') !== -1;
    },
    env: {
        chrome: 5,
        firefox: 3,
        safari: 5.1,
        ie: 11
    }
});
