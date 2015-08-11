/**
 * Created by igor on 11.08.15.
 */
/**
 *
 * @constructor
 */
Man = function() {
	Human.apply(this, arguments);
};


/**
 * @type {Human}
 */
Man.prototype = Object.create(Human.prototype);


/**
 *
 * @type {Function}
 */
Man.prototype.constructor = Man;

/*
/!**
 *
 * @enum
 *!/
Man.Gender = Human.Gender;*/
