const lodash=require('lodash');
items=[1,[2,[3,[4]]]];
newItems=lodash.flattenDeep(items);
console.log(newItems);