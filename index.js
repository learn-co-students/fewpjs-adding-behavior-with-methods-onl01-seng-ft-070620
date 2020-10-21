// Your code here
// "name says meow!"

// "name says woof!"

// If the instance of Bird is male "It's me! name, the parrot!"

// If it is not male, speak returns "name says squawk!".

class Cat {
    constructor(name, sex) {
        this.name = name
        this.sex = sex
    }

    speak() {
        return `${this.name} says meow!`
    }
}

class Dog {
    constructor(name, sex) {
        this.name = name
        this.sex = sex
    }

    speak() {
        return `${this.name} says woof!`
    }
}

class Bird {
    constructor(name, sex) {
        this.name = name
        this.sex = sex
    }

    speak() {
        if (this.sex === "male") {
            return `It's me! ${this.name}, the parrot!`
        } else {
            return `${this.name} says squawk!`
        }
    }
}