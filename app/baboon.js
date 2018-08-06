class Baboon {

  constructor(name, age, gender, weight, health, isAlive = true) {
    this.id = Math.random();
    this.name = name || "";
    this.age = age || 0;
    this.gender = gender || "";
    this.weight = weight || 0;
    this.health = health || 0;
    this.isAlive = isAlive;
  }

  smiling() {
    if (this.isAlive) {
      console.log(this.name + " is smiling at you!")
    }
    else {
      console.log(this.name + " is dead")
    }
  }

}
export default Baboon;