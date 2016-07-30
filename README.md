# pressure-converter
converts pressure units

Developing

# Usage

```sh
$ npm install pressure-converter --save
```

```javascript
var pressureConverter = require('pressure-converter');

console.log(pressureConverter.convertPressure(101325, 'Pa', 'psi'));
```

##API

convertPressure(pressure, from, to);

* **pressure** (*Float*)
* **from** (*String*)
* **to** (*String*)

Accepts any of the following unit types as strings.

```javascript
    ['atmosphere (atm)','atm']
    ['bar (b)','b','bar'],
    ['millibar','mBar'],
    ['pascal (Pa)','Pa','pa'],
    ['hectopascal (hPa)','hPa'],
    ['kilogram per sq. cm (kgf/cm²)','kgf/cm²'],
    ['kilogram per sq. meter (kgf/m²)','kgf/m²'],
    ['kilopascal (kPa)','kPa'],
    ['millimeter of mercury (mmHg)','mmHg'],
    ['pounds per square foot (psf)','psf'],
    ['pounds per square inch (psi)','psi'],
    ['torr']
```
