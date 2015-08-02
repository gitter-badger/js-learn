/**
 * Created by igor on 02.08.15.
 */
var bob = new Human({
	name: 'bob',
	lastname: 'dylan'
});

console.log(bob);

bob.sayMyName();

var sarah = new Human({
	name: 'Sarah',
	lastname: 'Conor'
});

//todo https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
var newBindFunction = sarah.sayMyName.bind(bob);
newBindFunction();

//todo https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
sarah.sayMyName.apply(bob, []);

//todo https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/call
sarah.sayMyName.call(bob, arg1, arg1);


//todo http://stackoverflow.com/questions/6750880/javascript-how-does-new-work-internally
function NEW(Human, prop) {
	var obj, ret, proto;

	// Check if `f.prototype` is an object, not a primitive
	proto = Object(Human.prototype) === Human.prototype ? Human.prototype : Object.prototype;

	// Create an object that inherits from `proto`
	obj = Object.create(proto);
	// Apply the function setting `obj` as the `this` value
	ret = Human.call(obj, prop);

	if (Object(ret) === ret) { // the result is an object?
		return ret;
	}
	return obj;
}

// Example usage:
function Foo (arg) {
	this.prop = arg;
}
Foo.prototype.inherited = 'baz';

var obj = NEW(Foo, 'bar');
obj.prop;          // 'bar'
obj.inherited;     // 'baz'
obj instanceof Foo // true
