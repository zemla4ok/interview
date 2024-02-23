// ***************** 1 *****************

let user = { name: "Vas" };
let admin = { name: "Paul" };

function sayHi() {
  console.log( this.name );
}

user.f = sayHi;
admin.f = sayHi;

user.f();   //
admin.f();  //

// Vas  Paul

// ***************** 2 *****************

let user = {
  name: "Dima",
  hi() { console.log(this.name); }
};

let hi = user.hi;
hi();

// undefined
// + как сделать, чтобы было не undefined


// ***************** 3 *****************

let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],

  showList() {
    this.students.forEach(
      student => console.log(this.title + ': ' + student)
    );
  }
};

group.showList();



let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],

  showList() {
    this.students.forEach(function(student) {
      console.log(this.title + ': ' + student)
    });
  }
};

group.showList();

