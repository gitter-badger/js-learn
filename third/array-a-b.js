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
	} else {
		return 1;
	}
};


/**
 * @param {Array.<number>} arrayA
 * @return {Array.<number>}
 */
var toFilterArray = function(arrayA) {
	var arrayB = [];
	for (var i = 0; i < arrayA.length; i++) {
		if (i % 2 === 0 && arrayA[i] > 0) {
			arrayB[arrayB.length] = arrayA[i];
		}
	}
	return arrayB;
};
var arrayA = generateArray(10, 0, 100);
toFilterArray(arrayA);
