import {CricketCoach} from "./CricketCoach";
import {Coach} from "./Coach";
import {GolfCoach} from "./GolfCoach";

let myCricketCoach: Coach = new CricketCoach();
let myGolfCoach: Coach = new GolfCoach();

let coaches: Coach[] = [];
coaches.push(myCricketCoach);
coaches.push(myGolfCoach);

for (let coach of coaches) {
  console.log(coach.getDailyWorkout());
}
