const expect = require('chai').expect;

const BaseFeature = require('../../features/base');

describe('Base Feature', () => {
    it('should be a function', () => {
        expect(BaseFeature).to.be.a('function');
    });

    it('should throw an error on missing title', () => {
        expect(() => {
            BaseFeature()
        }).to.throw('feature title should be defined');
    });

    it('should throw an error on missing handler', () => {
        expect(() => {
            BaseFeature({ title: 'some-title' })
        }).to.throw('feature detect handler should be defined');
    });

    it('should return feature object', () => {
        const title = 'feature title';
        const detect = () => {};

        const feature = new BaseFeature({ title, detect });

        expect(feature).to.be.an('object');
        expect(feature.title).to.be.equal(title);
        expect(feature.detect).to.be.equal(detect);
    });
});
