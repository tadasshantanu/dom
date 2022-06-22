const fruits = ['apples','oranges','pears','grapes'];
fruits[4]='pineapple';

fruits.push('mangoes');
fruits.unshift('strawberries');
fruits.pop();
console.log(fruits);
console.log(Array.isArray(fruits))
console.log(fruits.indexOf('pears'))