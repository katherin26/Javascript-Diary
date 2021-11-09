/*NOTE: Circle object using the object literal syntax radius property = 
circle.radius = 2 , circle.area = 20.*/

const circle = {
  radius: 1,
  get area() {
    return Math.PI * this.radius * this.radius;
  },
};

console.log(circle.area);
