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
var newFamily = humanMasha.married(humanPasha);
console.log (humanMasha.lastname);
newFamily.childBirth('Pizduk');
console.log(newFamily.dad);

