const edades = [1,3,18,21];

const newValue = edades.reduce(function(currentValue, acumulator){return acumulator+= currentValue});

console.log(newValue);
