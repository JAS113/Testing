/*VARIABLES */

/*Creates the userList object (list) */
const userList = {
};


/*FUNCTIONS RELATING TO userInput */

/*Returns true if userInput is an empty string */
function emptyInput(userInput){
    if (userInput === "")
    return true
};

/*Returns true if userInput contains numbers */
function containsNumbers(userInput) {
    return /\d/.test(userInput);
};

/*Takes the infoType parameter and asks the user for specified type of information. E.g occupation, favourite colour, pet's name
   Will tell the user that their input is invalid until the input is not empty and only contains letters.*/
function getUserInfoString (infoType) {
    var userInput = prompt ("What is your " + infoType + "?")
            while (containsNumbers(userInput) === true || emptyInput(userInput) === true) {
             var userInput = prompt ("Invalid input. Please enter characters from A-Z. What is your " + infoType + "?")
        };
    return userInput
    };


/*Takes the infoType parameter and asks user for specified type of information. E.g. phone number, age.
  Will tell the user that their input is invalid until the input is not empty and only contains numbers. */
function getUserInfoNumber (infoType) {
    var userInput = prompt ("What is your " + infoType + "?")
         while (isNaN (userInput) || userInput === "") {
            var userInput = prompt ("Invalid input. Please enter a number. What is your " + infoType + "?")
        };
    return userInput
    };

/*Takes the infoType parameter and asks the user for specified type of information. E.g email address, postcode 
  Will tell the user that their input is invalid until the input is not empty.*/
function getUserInfoMixed (infoType) {
    var userInput = prompt ("What is your " + infoType + "?")
        while (emptyInput(userInput) === true) {
             var userInput = prompt ("Invalid input. Please enter an answer. What is your " + infoType + "?")
        };
    return userInput
    };



/*addUser LOOP*/

/*Ask if user wants to add a new user entry */
var addUser = confirm ("Do you want to add a user?")
while (addUser === true) {


/*Asks user for their details */
    function getUserDetails () {
            var infoType= "first name"
            var firstName = getUserInfoString(infoType)
            var infoType = "last name"
            var lastName = getUserInfoString (infoType)
            var infoType = "age"
            var age = getUserInfoNumber (infoType)
            return {firstName, lastName, age};
        };


    /*Creates the user object */
    var user = getUserDetails ()


    /*Creates a user profile for e.g. John Smith */
    var newUser = user.firstName + user.lastName



/*Asks user if they would like to add a pet. */
let userResponse = confirm("Do you want to add a pet?")

    /*If user answers yes, takes user input and adds it to the user object */
    if (userResponse === true) {

    /*Asks user for their pet details */
    function getPetDetails () {
        var infoType = "pet"
        var petType = getUserInfoString (infoType)
        var infoType = "pet's name"
        var petName = getUserInfoString (infoType)
        return {petType, petName}
    };

    /*Adds PetDetails to the User object */
    /*function addPet (petType, )*/
        var pet = getPetDetails ()
        Object.assign (user, pet)

    
    /*If user answers no, says bye and doesn't change user object */
    } else {
    console.log("User has no pet.")
    };


/*Adds e.g JohnSmith user and associated object to the userList object */
userList[newUser] = user

/*Ask if user wants to add a new user entry */
var addUser = confirm ("Do you want to add a user?")
}

console.log(userList)