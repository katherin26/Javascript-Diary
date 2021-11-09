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
