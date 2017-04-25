const expect = require('chai').expect;

const features = require('../../features');

describe('Features', () => {
    describe('#getEnvironment', () => {
        it('should work with 1 argument', () => {
            const envs = features.getEnvironment('const')

            expect(envs).to.be.object;
            expect(envs.chrome).to.be.equal(5);
        });

        it('should work with 2+ arguments', () => {
            const envs = features.getEnvironment(['const', 'object.assign'])

            expect(envs).to.be.object;
            expect(envs.chrome).to.be.equal(49);
        });
    });
});
