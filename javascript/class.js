

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }
    static getname() {
        return "evan"
    }
    getAge() {
        return this.age;
    }
}

const ram = new Student("ram", 30);

//console.log(ram.age);

const age = ram.getAge();
//console.log(age);


class PhysicalStudent extends Student {
    constructor(name, age, instiute) {
        super(name, age);
        this.instiute = instiute

    }
    setInstiute(name) {
        this.instiute = name
    }
    getInstitute() {
        return this.instiute;
    }
}
class OnlineStudent extends Student {
    constructor(name, age, time) {
        super(name, age);
        this.time = time;
    }
}

let sabin = new OnlineStudent("sabin kunwar", 20, 9);
let shyam = new PhysicalStudent("sam", 50, "Microsoft");
shyam.setInstiute("google");

console.log(shyam);
console.log(sabin);
console.log(Student.getname());

let x= new Student("hari", 30);