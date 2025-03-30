const flavor = "vanilla";
const topping = "sprinkles";
const vessel = "wafer cone";
// your code here
if ((flavor === "vanilla" || flavor === "chocolate") && (topping === "sprinkles" || topping === "peanuts") && (vessel === "sugar cone" || vessel === "wafer cone")){
    console.log ("Great choice! Your ice cream is at the next window.");
} else {
    console.log ("Please check our menu and try again.");
}