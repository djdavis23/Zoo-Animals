class Koala {

  constructor(name, age, gender, weight, health, isAlive = true) {
    this.id = Math.random();
    this.name = name || "";
    this.age = age || 0;
    this.gender = gender || "";
    this.weight = weight || 0;
    this.health = health || 0;
    this.isAlive = isAlive;
  }

  sleep() {
    if (this.isAlive) {
      this.health += 2;
      console.log(this.name + " is sleeping.")
    }
    else {
      console.log(this.name + " is dead")
    }
  }

}
export default Koala;