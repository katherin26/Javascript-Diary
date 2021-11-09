/*NOTE: Circle object using the object literal syntax radius property = 
circle.radius = 2 , circle.area = 20.*/

const circle = {
  radius: 1,
  get area() {
    return Math.PI * this.radius * this.radius;
  },
};

console.log(circle.area);

/*NOTE: Literal object o constructors */

//3 WAYS TO CREATE A TEXT STRING

//Constructor

let st1 = new String('My string Contructor');
console.log(st1); //[String: 'My string constructor!']

//Literal object

let st2 = 'Simple literal string';
console.log(st2); //Simple literal string!

//Boxed string

let st3 = String('Just string!');
console.log(st3); //Just String!

//Now Numbers

let n1 = 7;
console.log(n1);

let n2 = new Number(7);
console.log(n2);

let n3 = Number(7);
console.log(n3);

//Boolean
let b1 = true;
console.log(b1);

let b2 = new Boolean(true);
console.log(b2);

let b3 = Boolean(true); //Boxed
console.log(b3);

//Literal Object =

let object = {
  name: 'Br',
  lastName: 'Men',
  age: 12,
};
console.log(object);

//Constructor =

function person1(name, age) {
  this.name = name;
  this.age = age;
}

let datos = new person1('Ka', '27');
console.log(datos);
