var names = ['Yar', 'Luke', 'Maen', 'Michael'];

// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) =>  {
//   console.log('forEachArrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));
//
// var returnMe = (name) => name + '!';
// console.log(returnMe('Yar'));

// var person = {
//   name: 'Yar',
//   greet: function() {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to' + name)
//     });
//   }
// }
//
// person.greet();


// function add (a,b) {
//   return a+ b;
// }
// console.log(add(1,3));
// console.log(add(1,3));

var addStatement = (a,b) => {
  return a+b;
}
console.log(addStatement(7,7));

var addExpressions = (a,b)=> a+b;
console.log(addExpressions(3,7));
