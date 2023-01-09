// Functions
// Return function
let array = [{"fruit":"mango"},
{"student":"kelvin"}
]
const users = [
  {
    firstName: "Niky",
    lastName: "Morgan",
    favoriteColor: "Blue",
    favoriteAnimal: "Jaguar",
  },
  {
    firstName: "Tracy",
    lastName: "Lum",
    favoriteColor: "Yellow",
    favoriteAnimal: "Penguin",
  },
  {
    firstName: "Josh",
    lastName: "Rowley",
    favoriteColor: "Blue",
    favoriteAnimal: "Elephant",
  }]

  users.map((user)=>{
    console.log("1. ",user)
  })


function filter(collection) {
  for (const user of collection) {
    if (likesElephants(user)) {
      console.log(user.firstName);
    }
  }
}

function likesElephants(user) {
  return user["favoriteAnimal"] === "Elephant";
}

filter(users);




const array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2);
console.log(map1);
sdfd