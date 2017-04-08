module.exports = function({ title, detect } = {}){
    if (typeof title !== 'string'){
        throw new Error('feature title should be defined');
    }

    if (typeof detect !== 'function'){
        throw new Error('feature detect handler should be defined');
    }

    return {
        title,
        detect
    }
}