/**
 *
 * @param {{
 *      humanMale: Human
 *      humanFemale: Human
 * }}humans
 * @constructor
 */
Family = function(humans) {
	this.dad = humans.humanMale;
	this.mom = humans.humanFemale;
};

/**
 *
 * @param {string} childName
 */
Family.prototype.childBirth = function (childName) {
	this.child = new Human({name: childName, lastname: this.dad.lastname, gender: Human.Gender.MALE});
	return this.child;
};

/**
 * @type {Human}
 */
Family.prototype.mom;

/**
 * @type {Human}
 */
Family.prototype.dad;

/**
 * @type {Human}
 */
Family.prototype.child;
