// @flow

class Dog {
  constructor(name) {
    this.name = name
  }

  bark() {
    return `Wah Wah! I am ${this.name}`
  }
}

module.exports = Dog
