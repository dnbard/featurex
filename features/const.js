const BaseFeature = require('./base');

module.exports = BaseFeature({
    title: 'const',
    detect: function(file){
        return file.indexOf('const') !== -1;
    }
});
