/*Initialises the variables */
var firstName = ""
var lastName = ""
var age = ""
var userName = ""
var userPetType = ""
var userPetName = ""

/*Asks user for their details */
function getUserDetails (firstName, lastName, age) {
    var firstName = prompt ("What is your first name?")
    var lastName = prompt ("What is your last name?")
    var age = prompt ("How old are you?")
    return {firstName, lastName, age};
};

/*Creates the user object*/
var user = getUserDetails ()

/*Asks user if they would like to add a pet. */
let userResponse = confirm("Do you want to add a pet?")

    /*If user answers yes, takes user input and adds it to the user object */
    if (userResponse === true) {

    /*Asks user for their pet details */
    function getUserPetDetails (userPetType, userPetName) {
        var userPetType = prompt ("What animal is your pet?")
        var userPetName = prompt ("What is your pet's name?")
        return {userPetType, userPetName}
    };

    var userPet = getUserPetDetails ()

    Object.assign (user, {userPet});
    
    /*If user answers no, says bye and doesn't change user object */
    } else {
    alert("Okay! Bye!");
    };

/*Creates the userList object (list) */
const userList = {
};

/*Creates a user profile for e.g. John Smith */
var newUser = user.firstName + user.lastName

/*Adds e.g JohnSmith user and associated object to the userList object */
userList[newUser] = user

console.log(userList)


let userResponse = confirm ("Do you want to add another user?")

    if (userResponse === true) {

    } 

