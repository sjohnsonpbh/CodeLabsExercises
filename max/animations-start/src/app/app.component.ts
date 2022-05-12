// remember me - Animation transitions
import {
  animate,
  group,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",

  // remember me - trigger can be named anything, and create a
  // target that will kick off the animations div
  
  animations: [
    trigger("divState", [
      state(
        "normal",
        style({
          "background-color": "red",
          transform: "translateX(0)",
        })
      ),
      state(
        "highlighted",
        style({
          backgroundColor: "blue",
          transform: "translateX(100px)",
        })
      ),
      transition("normal <=> highlighted", animate(1300)),
      // transition("highlighted => normal", animate(800)),
    ]),
    trigger("wildState", [
      state(
        "normal",
        style({
          "background-color": "red",
          transform: "translateX(0) scale(1)",
        })
      ),
      state(
        "highlighted",
        style({
          backgroundColor: "blue",
          transform: "translateX(100px) scale(1)",
        })
      ),
      state(
        "shrunken",
        style({
          backgroundColor: "green",
          transform: "translateX(0) scale(0.5)",
        })
      ),
      transition("normal => highlighted", animate(300)),
      transition("highlighted => normal", animate(800)),
      transition("shrunken <=> *", [
        style({
          "background-color": "orange",
        }),
        animate(
          1000,
          style({
            borderRadius: "50px",
          })
        ),
        animate(2300),
      ]),
    ]),
    trigger("list1", [
      state(
        "in",
        style({
          opacity: 1,
          transform: "translateX(0)",
        })
      ),
      transition("void => *", [
        style({
          opacity: 0,
          transform: "translateX(-100)",
        }),
        animate(500),
      ]),
      transition("* => void", [
        animate(500),
        style({
          transform: "translateX(100px)",
          opacity: 0,
        }),
      ]),
    ]),
    // remember me - using Keyframes for animation
    trigger("list2", [
      state(
        "in",
        style({
          opacity: 1,
          transform: "translateX(0)",
        })
      ),
      transition("void => *", [
        animate(
          2000,
          keyframes([
            style({
              transform: "translateX(-100)",
              opacity: 0,
              offset: 0,
            }),
            style({
              transform: "translateX(-50px)",
              opacity: 0.5,
              offset: 0.3,
            }),
            style({
              transform: "translateX(-20px)",
              opacity: 1,
              offset: 0.8,
            }),
            style({
              transform: "translateX(0px)",
              opacity: 1,
              offset: 1,
            }),
          ])
        ),
      ]),
      transition("* => void", [
        group([
          animate(300),
          style({
            color: "red",
          }),
          animate(800),
          style({
            transform: "translateX(100px)",
            opacity: 0,
          }),
        ]),
      ]),
    ]),
  ],
})
export class AppComponent {
  state = "normal";
  wildState = "normal";
  list = ["Milk", "Sugar", "Bread"];

  onAnimate() {
    this.state == "normal"
      ? (this.state = "highlighted")
      : (this.state = "normal");
    this.wildState == "normal"
      ? (this.wildState = "highlighted")
      : (this.wildState = "normal");
  }
  onShrink() {
    this.wildState = "shrunken";
  }
  onAdd(item) {
    this.list.push(item);
  }

  onDelete(item) {
    this.list.splice(this.list.indexOf(item), 1);
  }

  animationStarted(event) {
    console.log(event);
  }
  animationEnded(event) {
    console.log(event);
  }
}
