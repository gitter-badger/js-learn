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
humanMasha.married(humanPasha);
newFamily.childBirth ('Pizduk');
console.log(newFamily.child.name);

