# **PROTECTED PROPERTY WITH \_ CONVENTION = ANOTHER CLASS EXAMPLE**

## **ENCAPSULATION : PROTECTED PROPERTIES AND METHODS**

```
Keep some properties and methods private inside the class so that they are not accessible from outside
of the class , the rest of the methods are basically exposed as a public interface , which we can also
call API
```

```
class Account {
constructor(owner, currency, pin) {
this.owner = owner;
this.currency = currency;
```

**Protected Property**

```
this._movements = [];
this._pin = pin;
this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);

}
```

**PUBLIC INTERFACE**

```
getMovements() {
return this._movements; // You have access but they cannot override them.
}

deposit(val) {
this._movements.push(val);
}

withdraw(val) {
this.deposit(-val);
}

_approveLoan(val) {
return true;
}

requestLoan(val) {
if (this._approveLoan(val)) {
this.deposit(val);
console.log(`Loan approved`);
  }
 }
}

```

```

const acc1 = new Account('Jonas', 'EUR', 1111);
/*
acc1.movements.push(250);
acc1.movements.push(-140);*/

acc1.requestLoan(1000);
acc1._approveLoan(1000);
acc1.deposit(250);
acc1.withdraw(140);
acc1.getMovements(acc1.getMovements());

console.log(acc1);
console.log(acc1.pin);

```

## **ENCAPSULATION = PRIVATE CLASS FIELDS AND METHODS**

1. Public fields = We can think of a field as a property that will be on all instances , So that's why we can
   also call this a public instance field , the two fields could be the movements and the locale, Because these
   are basically two properties that are gonna be on all the objects that we create with this class , because we do
   not pass any of the values here into the constructor and this.array and this.language they will always be set
   for all the instances.

2. Private fields = using #
3. Public methods
4. Private methods = Are very useful to hide the implementation details from the outside and using #.
5. (there is also the static version) = that worked by simply adding the static keyword in front of it.
   example = static helper(){
   console.log('Helper);
   }

```
class Account {

  //1.Public fields(instances)

  locale = navigator.language;
  // _movements = [];

  //2.Private fields

  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //this._movements = [];
    //this._pin = pin;
    this.#pin = pin;
    //this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  //3.Public interface

  getMovements() {
    //return this._movements; // You have access but they cannot override them.
    return this.#movements; // You have access but they cannot override them.
  }

  deposit(val) {
    // this._movements.push(val);
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  /*
  _approveLoan(val) {
    return true;
  }*/

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }

  //4.Private methods = # Is not working in this moment!

  //#approveLoan
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
/*
acc1.movements.push(250);
acc1.movements.push(-140);*/

acc1.requestLoan(1000);
acc1.deposit(250);
acc1.withdraw(140);
acc1.getMovements(acc1.getMovements());

console.log(acc1);
//console.log(acc1.#movements); //Private field '#movements' must be declared in an enclosing class
//console.log(acc1.#pin); //Private field '#pin' must be declared in an enclosing class
```

## **CHAINING METHODS**

**Example**

```
  deposit(val) {
    // this._movements.push(val);
    this.#movements.push(val);
    return this; //for chaining methods!
  }

  withdraw(val) {
    this.deposit(-val);
    return this; //for chaining methods!
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this; //for chaining methods!
    }
  }
```

**CHAINING**

```
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(40000);

console.log(acc1.getMovements()); //[1000, 250, -140, 300, 500, -35, 25000, -40000]
```
