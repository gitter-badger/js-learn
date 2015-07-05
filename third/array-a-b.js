/**
 * Created by igor on 05.07.15.
 */

//Сформировать массив B из положительных элементов массива A, имеющих четный индекс

//формируем массив А
//var A =
//выбираем четные элементы

//выбираем положительные элементы

//формируем массив B


/**
 * @param {number} arraySize
 * @param {number} randomMin
 * @param {number} randomMax
 * @return {Array.<number>}
 */
var generateArray = function(arraySize, randomMin, randomMax) {
	var arrayFirst = [];
	for (var i = 0; i < arraySize; i++) {
		var randomNumber = getRandom(randomMin, randomMax);
		arrayFirst[i] = Math.round(randomNumber) * makePlusMinus();
	}
	return arrayFirst;
};


/**
 * @param {number} randomMin
 * @param {number} randomMax
 * @return {number}
 */
var getRandom = function getRandom(randomMin, randomMax) {
	return Math.random() * (randomMax - randomMin) + randomMin;
};


/**
 * @return {number}
 */
var makePlusMinus = function makePlusMinus() {
	if (Math.random() < 0.5) {
		return -1;
	}
	else {
		return 1;
	}
};

generateArray(10, 0, 100);


//var toFilterArray = function() {
//	TODO toFilterArray
//};
