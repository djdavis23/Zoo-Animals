class Iguana {

  constructor(name, age, gender, weight, health, isAlive = true) {
    this.id = Math.random();
    this.name = name || "";
    this.age = age || 0;
    this.gender = gender || "";
    this.weight = weight || 0;
    this.health = health || 0;
    this.isAlive = isAlive;
  }

  eat() {
    if (this.isAlive) {
      console.log(this.name + " is keeping the flies away!")
    }
    else {
      console.log(this.name + " is dead")
    }
  }

}
export default Iguana;