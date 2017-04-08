const expect = require('chai').expect;

const lib = require('../');

describe('Library', () => {
    it('should open file', done => {
        lib(__dirname + '/indexSpec.js')
            .then(() => done());
    });

    it('should not open missing file', done => {
        lib(__dirname + '/123.js')
            .catch(() => done());
    });
});
