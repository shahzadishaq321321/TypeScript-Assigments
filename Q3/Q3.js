/*Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
uppercase, and titlecase.*/
var personName = 'Shahzad Ishaq';
console.log("Name : ".concat(personName));
console.log("lowercae : ".concat(personName.toLowerCase()));
console.log("Uppercase : ".concat(personName.toUpperCase()));
var titleCase = personName.split(' ');
for (var i = 0; i < titleCase.length; i++) {
    titleCase[i] = titleCase[i].charAt(0).toUpperCase() + titleCase[i].slice(i).toLowerCase();
}
console.log(titleCase.toString().replace(/,/g, ' '));
