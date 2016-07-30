var expect = require('chai').expect;
var should = require('chai').should();
var assert = require('chai').assert;
var PressureConverter = require('../index');

convertPressure = PressureConverter.convertPressure;
/// value, from, to
describe('#convertPressure', function() {
    it('Pa to psi = 14.69596432068', function() {
        expect(convertPressure(101325, 'Pa', 'psi')).equals(14.69596432068);
    });
    it('Pa to atm = 1', function() {
        expect(convertPressure(101325, 'Pa', 'atm')).equals(1);
    });
    it('Pa to bar = 1.01325', function() {
        expect(convertPressure(101325, 'Pa', 'bar')).equals(1.01325);
    });
});