const parentObj = {
  greet() {
    console.log("Hello from parent!");
  }
};

const childObj = Object.create(parentObj);
parentObj.name = "Child";

console.log(childObj.name); // Output: Child
childObj.greet(); // Output: Hello from parent!
