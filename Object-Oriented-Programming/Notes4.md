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
acc1.approveLoan(1000);
acc1.deposit(250);
acc1.withdraw(140);
acc1.getMovements(acc1.getMovements());

console.log(acc1);
console.log(acc1.pin);

```
