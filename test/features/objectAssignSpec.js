const expect = require('chai').expect;

const featurex = require('../../');

describe('Features >> Object.assign', () => {
    it('should detect Object.assign', done => {
        featurex(__dirname + '/../../mocks/es6.js', 'object.assign').then(r => {
            expect(r.features).to.be.equal('object.assign');
            done();
        });
    });

    it('should not detect in ES5 code', done => {
        featurex(__dirname + '/../../mocks/es5.js', 'const').then(r => {
            expect(r.features).to.be.null;
            done();
        });
    });
});