const BaseFeature = require('./base');

module.exports = BaseFeature({
    title: 'object.assign',
    detect: function(file){
        return file.indexOf('Object.assign(') !== -1 ||
            file.indexOf('Object[\'assign\'](') !== -1 ||
            file.indexOf('Object["assign"](') !== -1;
    },
    env: {
        chrome: 49,
        edge: 12,
        firefox: 34,
        safari: 10
    }
});
