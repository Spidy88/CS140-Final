var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require("sinon-chai");
var reduce = require('../../src/collections/reduce');
var expect = chai.expect;

chai.use(sinonChai);

describe('reduce', function() {
    function sum(result, x) {
        return result + x;
    }

    it('should invoke the callback once for every element in the array', function() {
        var input = [1, 2, 3];
        var cb = sinon.spy(sum);

        var output = reduce(input, cb, 0);

        expect(cb).to.have.callCount(3);
        expect(cb).to.have.been.calledWith(input[0], 0, input);
        expect(cb).to.have.been.calledWith(input[1], 1, input);
        expect(cb).to.have.been.calledWith(input[2], 2, input);
        expect(output).to.eql(6);
    });

    it('should use intial value as the first result parameter', function() {
        var input = [1, 2, 3];
        var cb = sinon.spy(sum);

        var output = reduce(input, cb, 5);

        expect(cb).to.have.callCount(3);
        expect(cb).to.have.been.calledWith(input[0], 0, input);
        expect(cb).to.have.been.calledWith(input[1], 1, input);
        expect(cb).to.have.been.calledWith(input[2], 2, input);
        expect(output).to.eql(11);
    });

    it('should throw an exception when the collection is any other data type', function() {
        var input = 5;
        var cb = sinon.fake();

        expect(function() {
            reduce(input, cb, 0);
        }).to.throw();

        expect(cb).to.not.have.been.called;
    });

    it('should throw an exception when the collection is null', function() {
        var input = null;
        var cb = sinon.fake();

        expect(function() {
            reduce(input, cb, 0);
        }).to.throw();

        expect(cb).to.not.have.been.called;
    });
});