var humanMasha = new Human({
	name: 'Masha',
	lastname: 'Emelyanova',
	gender: Human.Gender.FEMALE
});
var humanPasha = new Human({
	name: 'Pasha',
	lastname: 'Ivanov',
	gender: Human.Gender.MALE
});

//var newFamily = humanMasha.married(humanPasha);

//console.log (humanMasha.lastname);
//newFamily.childBirth('Pizduk');
//console.log(newFamily.dad);

var foo = {};
foo.bar = {};
foo.bar.baz = function() {
	console.log('this', this);
	document.getElementById('el').style.backgroundColor = 'black';
};

//foo.bar.baz.call(humanMasha, a, b ,c);
//foo.bar.baz.apply(humanMasha, [a, b ,c]);
//fooForMasha();

document.getElementById('el').addEventListener('click', foo.bar.baz.bind(foo.bar));
//setTimeout(foo.bar.baz.bind(foo.bar), 2000);

