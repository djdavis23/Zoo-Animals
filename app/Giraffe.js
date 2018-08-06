class Giraffe {

  constructor(name, age, gender, weight, height, health, isAlive = true) {
    this.id = Math.random();
    this.name = name || "";
    this.age = age || 0;
    this.gender = gender || "";
    this.weight = weight || 0;
    this.height = height || 0;
    this.health = health || 0;
    this.isAlive = isAlive;
  }

  growing() {
    if (this.isAlive) {
      this.height += Math.floor(Math.random() * 4 + 1);
      console.log(this.name + " grew another " + this.height + " feet!")
    }
    else {
      console.log(this.name + " is dead")
    }
  }

}
export default Giraffe;