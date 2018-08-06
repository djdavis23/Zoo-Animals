class Fox {

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
      console.log("Get the shotgun! " + this.name + " is in the hen house!")
    }
    else {
      console.log(this.name + " is dead")
    }
  }
  shoot() {
    this.health -= 5;
    if (this.health <= 0) {
      this.isAlive = false;
    }
  }

}
export default Fox;