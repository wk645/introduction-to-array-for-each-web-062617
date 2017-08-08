function doToElementsInArray(array, callback) {
	array.forEach(callback);
}


function changeCompletely(element, index, array) 
{
	array[index] =  Math.floor(Math.random() * 102).toString() + `${array[index]}s!!!`;
}

var animals = ["dog", "cat", "squirrel"];

doToElementsInArray(animals, changeCompletely);

console.log(animals);