// import Island class
import Island from "./island.js";

const island = new Island();

export default class World {
    constructor() {
      this.islands = []; // a good place to keep track of your islands
      this.hookEvents(); // let's kick things of by hooking up events
    }
  
    hookEvents() {
      // hook events like clicking buttons to a specific function
      document.querySelector("#btnAddIsland").addEventListener("click", () => {
          this.addIsland();
    });
      document.querySelector("#btnSave").addEventListener("click", () => {
          this.save();
        
      });
  }
  
    save() {
      // save array islands to localstorage as string
      // loop over all this.islands and save the names
      localStorage.setItem("islands", JSON.stringify(this.islands));
      console.log(localStorage.getItem("islands"));
    }
  
    load() {
      // load islands from localstorage into array
      // loop over the array and addIslands()
    }
  
    getCoordinates() {
      // return coordinates within the screen at random, feel free to change it up!
      let randomSign = Math.random() < 0.5 ? -1 : 1;
      return {
        x: ((Math.random() * window.innerWidth) / 2) * randomSign,
        y: ((Math.random() * window.innerHeight) / 2) * randomSign
      };
    }
  
    addIsland() {
      // add the islands to the DOM
     
      let name = island.getRandomName();
      let color = island.getRandomColor();
      let islandElement = document.createElement("div");

      islandElement.classList.add("island");
      islandElement.style.backgroundColor = color;
      islandElement.innerHTML = name;

      document.body.appendChild(islandElement);
      this.moveIsland(islandElement);
      this.islands.push(color, name);
       
    }
  
    moveIsland(islandElement) {
      // this might be a good point to animate the islands with JS Animations API
      
      let coords = this.getCoordinates();
      //use js web animations api to animate island to coords
         islandElement.animate([
             {transform: 'translate(0px, 0px)'},
             {transform: `translate(${coords.x}px, ${coords.y}px)`}
         ], {
             duration: 1000,
             iterations:1,
             fill: 'forwards'
         });

    }
  }
