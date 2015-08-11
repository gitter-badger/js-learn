/**
 * Created by igor on 11.08.15.
 */
/**
 *
 * @constructor
 */
Woman = function() {
	Human.apply(this, arguments);
};


/**
 *
 * @type {Human}
 */
Woman.prototype = Object.create(Human.prototype);


/**
 *
 * @type {Function}
 */
Woman.prototype.constructor = Woman;



