/**
 * @param {{
 *      name: string,
 *      lastname: string,
 *      gender: Human.Gender
 * }} params
 * @constructor
 */
Human = function(params) {
	this.name = params.name;
	this.lastname = params.lastname;
	this.gender = params.gender;
};

//todo https://learn.javascript.ru/classes


/**
 */
Human.prototype.sayMyName = function() {
	console.log('My name is', this.name);
};


/**
 *
 * @param {Human} human
 * @return {boolean}
 */
Human.prototype.married = function(human) {
	var isHuman = human instanceof Human;
	var isDifferentGender = this.gender !== human.gender;
	var isFemale = this.gender === Human.Gender.FEMALE;

	if (isHuman && isDifferentGender) {
		if (isFemale) {
			this.lastname = human.lastname;
		} else {
			human.lastname = this.lastname;
		}
		return true;
	} else {
		return false;
	}
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
