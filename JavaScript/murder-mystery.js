const room = "billiards room";
const suspect = "Mrs. Sparr"; 

/* ****************************************** */

/* IMPLEMENTATION LOGIC*/

// Initial values
let weapon = "";
let solved = false;

if (room === 'dining room' && suspect==="Mr. Parkes") { 
    weapon = 'knife'; 
    solved = true; 
} else if (room === 'gallery' && suspect==="Ms. Van Cleve") { 
    weapon = 'trophy'; 
    solved = true; 
} else if (room === 'billiards room' && suspect==="Mrs. Sparr") { 
    weapon = 'pool stick'; 
    solved = true; 
} else if (room === 'ballroom' && suspect==="Mr. Kalehoff") { 
    weapon = 'poison'; 
    solved = true; 
} 

if (solved) {
	console.log(suspect + " did it in the " + room  + " with the " + weapon);
} else {
  console.log("The case is not solved!")
}