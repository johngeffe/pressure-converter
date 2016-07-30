var expect = require('chai').expect;
var should = require('chai').should();
var assert = require('chai').assert;
var PressureConverter = require('../index');

convertPressure = PressureConverter.convertPressure;

describe('#convertPressure', function() {
    it('Pa to psi = 14.69596432068', function() {
        var options = {
            fromUnits: 'Pa',
            toUnits: 'psi',
            value: 101325
        };
        expect(convertPressure(options)).equals(14.69596432068);
    });
    it('Pa to atm = 1', function() {
        var options = {
            fromUnits: 'Pa',
            toUnits: 'atm',
            value: 101325
        };
        expect(convertPressure(options)).equals(1);
    });
    it('Pa to bar = 1.01325', function() {
        var options = {
            fromUnits: 'Pa',
            toUnits: 'bar',
            value: 101325
        };
        expect(convertPressure(options)).equals(1.01325);
    });
});