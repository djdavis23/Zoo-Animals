import Hedgehog from './Hedgehog.js'
import Mouse from './Mouse.js'
import Zebra from './Zebra.js'

class Wolf {

  constructor(name, age, gender, weight, health, isAlive = true) {
    this.id = Math.random();
    this.name = name || "";
    this.age = age || 0;
    this.gender = gender || "";
    this.weight = weight || 0;
    this.health = health || 0;
    this.isAlive = isAlive;
  }

  makeNoise() {
    if (this.isAlive) {
      console.log(this.name + " is howling")
    }
    else {
      console.log(this.name + " is dead")
    }
  }

  eat(food) {
    if (food instanceof Mouse || food instanceof Hedgehog || food instanceof Zebra) {
      this.health += 5;
      console.log(this.name + " has a full belly!");
    }
    else {
      console.log("That is NOT on the diet plan");
      this.health -= 5;
      if (this.health <= 0) {
        this.alive = false;
        console.log(this.name + " starved to death")
      }
    }
  }

}
export default Wolf;