/*Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
uppercase, and titlecase.*/

let personName = 'Shahzad Ishaq';
console.log(`Name : ${personName}`);
console.log(`lowercae : ${personName.toLowerCase()}`);
console.log(`Uppercase : ${personName.toUpperCase()}`);


let titleCase = personName.split(' ');
for(let i=0; i < titleCase.length; i++){
titleCase[i] = titleCase[i].charAt(0).toUpperCase() + titleCase[i].slice(i).toLowerCase();
}
console.log(titleCase.toString().replace(/,/g , ' '));