/**
 * @param {{
 *      name: string,
 *      lastname: string
 * }} params
 * @constructor
 */
Human = function(params) {
	this.name = params.name;
	this.lastname = params.lastname;
};

//todo https://learn.javascript.ru/classes

/**
 */
Human.prototype.sayMyName = function() {
	console.log('My name is', this.name);
};

Human.prototype.married = function() {

};


/**
 * @type {string}
 */
Human.prototype.name;


/**
 * @type {string}
 */
Human.prototype.lastname;


/**
 * @type {Human.Gender}
 */
Human.prototype.gender;


/**
 * @enum {string}
 */
Human.Gender = {
	MALE: 'male',
	FEMALE: 'female'
};


//добавить метод Human.protoype.married

