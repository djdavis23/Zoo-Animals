import Hedgehog from './Hedgehog.js'
import Mouse from './Mouse.js'
import Zebra from './Zebra.js'

class Lion {

  constructor(name, age, gender, weight, health, isAlive = true) {
    this.id = Math.random();
    this.name = name || "";
    this.age = age || 0;
    this.gender = gender || "";
    this.weight = weight || 0;
    this.health = health || 0;
    this.isAlive = isAlive;
  }

  roar() {
    if (this.isAlive) {
      console.log(this.name + " is roaring!")
    }
    else {
      console.log(this.name + " is dead")
    }
  }

  eat(food) {
    if (food instanceof Mouse || food instanceof Hedgehog || food instanceof Zebra) {
      this.health += 5;
      food.isAlive = false;
      console.log(this.name + " says " + food.name + " was delicious");
    }
    else {
      console.log(food.name + " is NOT on the diet plan");
      this.health -= 5;
      if (this.health <= 0) {
        this.alive = false;
        console.log(this.name + " starved to death")
      }
    }
  }

}
export default Lion;