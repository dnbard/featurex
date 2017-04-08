const expect = require('chai').expect;

const featurex = require('../../');

describe('const', () => {
    it('should detect const', done => {
        featurex(__dirname + '/constSpec.js', 'const').then(r => {
            expect(r).to.be.equal('const');
            done();
        });
    });

    it('should not detect const in ES5 code', done => {
        featurex(__dirname + '/../../mocks/es5.js', 'const').then(r => {
            expect(r).to.be.null;
            done();
        });
    });
});