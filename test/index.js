var expect = require('chai').expect;
var should = require('chai').should();
var assert = require('chai').assert;
var PressureConverter = require('../index');

convert = PressureConverter.convertPressure;

describe('#convertPressure', function() {
    it('Pa to psi = 0', function() {
        var options = {
            fromUnits: 'Pa',
            toUnits: 'psi',
            value: 101325
        };
        expect(convertPressure(options)).equals(0);
    });
});