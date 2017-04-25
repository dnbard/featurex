module.exports = function(options){
    options = options || {};

    const title = options.title;
    const detect = options.detect;
    const env = options.env || {};

    if (typeof title !== 'string'){
        throw new Error('feature title should be defined');
    }

    if (typeof detect !== 'function'){
        throw new Error('feature detect handler should be defined');
    }

    return {
        title: title,
        detect: detect,
        env: env
    }
}
