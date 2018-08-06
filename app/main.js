import Ape from './Ape.js'
import Baboon from './Baboon.js'
import Cougar from './Couger.js'
import Duck from './Duck.js'
import Elephant from './Elephant.js'
import Fox from './Fox.js'
import Giraffe from './Giraffe.js'
import Hedgehog from './Hedgehog.js'
import Iguana from './Iguana.js'
import Jaguar from './Jaguar.js'
import Koala from './Koala.js'
import Lion from './Lion.js'
import Mouse from './Mouse.js'
import Narwhal from './Narwhal.js'
import Owl from './Owl.js'
import Penguin from './Penguin.js'
import Quail from './Quail.js'
import Rhino from './Rhino.js'
import Snake from './Snake.js'
import Turtle from './Turtle.js'
import Urial from './Urial.js'
import Vulture from './Vulture.js'
import Wolf from './Wolf.js'
import XRayFish from './XRayFish.js'
import Yak from './Yak.js'
import Zebra from './Zebra.js'

let Abe = new Ape('Abe', 16, 'M', 400, 50);
Abe.beatChest();

let Ralph = new Mouse("Ralph", 2, "M", 0.3, 10);
Ralph.squeak();

let Leo = new Lion("Leo", 6, "M", 400, 60);
Leo.roar();
Leo.eat(Ralph);
console.log("Did Ralph survive?  " + Ralph.isAlive)
Leo.eat(Abe);
Abe.beatChest();
Leo.roar();