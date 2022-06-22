function convertTemp(n,conversionUnit)

{ var n = n;

var conversionUnit = conversionUnit;

let result = (conversionUnit == 'K' ) ? 273+n+'K' : n-273+'C';

return (result);

}

console.log (convertTemp(35,'K'));

console.log (convertTemp(308,'C'));
