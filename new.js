/*INITIALISE */

/*Initialise userList and database */
const userList = []
const database = []

/*Creates array containing more information that is required from a user */
const extraInfo = [
    "favourite colour",
    "favourite animal"
]

/*Initialise loggedIn and loggedInUser to make user logged out by default */
let loggedIn = false
let loggedInUser;



/*FUNCTIONS RELATING TO userInput */

/*VALIDATION OF INPUT */

/*Returns true if userInput is an empty string */
function emptyInput(userInput){
    if (userInput === "")
    return true
};

/*Returns true if userInput contains numbers */
function containsNumbers(userInput) {
    return /\d/.test(userInput);
};

/*Returns true (i.e invalid) if a text-only input is empty or contains numbers */
function invalidTextOnlyInput (userInput) {
    if (containsNumbers(userInput) === true || emptyInput(userInput) === true) {
        return true;
    } else {
        return false;
    };
}

/*Returns true (i.e invalid) if an input is blank or does NOT contain numbers */
function invalidMustContainNumbers (userInput) {
    if (containsNumbers(userInput) === false || emptyInput(userInput) === true) {
        return true;
    } else {
        return false;
    };
}


/*Takes a user input of specified type (must contain text only), 
  checks the text string is valid, and returns it. */
function getUserInputTextOnly(infoType) {
    let userInput = ""
    while (invalidTextOnlyInput(userInput) === true) {
        let userInput = prompt ("What is your " + infoType + "? (Answer must not be blank or contain numbers.)") 
            if (invalidTextOnlyInput(userInput) === false) {
                const validInput = userInput
                return validInput
            };
    };
};

/*Takes a user input of specified type (must contain numbers), 
  checks the text string is valid, and returns it. */
function getUserInputIncludesNumbers(infoType) {
    let userInput = ""
    while (invalidMustContainNumbers(userInput) === true) {
        let userInput = prompt ("What is your " + infoType + "? (Answer must contain numbers)") 
            if (invalidMustContainNumbers(userInput) === false) {
                const validInput = userInput
                return validInput
            };
    };
};


/*CREATION OF NEW USER */

/*Asks user for first name, last name, and password.
  Creates a username which becomes the name of the object containing
  the associated user details.
  Adds user details object to userList, adds userName and password to database array. */
function createNewUser() {
        let firstName = getUserInputTextOnly("first name")
        let lastName = getUserInputTextOnly("last name")
        let password = getUserInputIncludesNumbers("password")

        /*Creates an object containing firstName and lastName keys and values */
        function populateUserObject(){
            return {firstName, lastName}
        };

        /*Creates userName by joining firstName and lastName */
        function createUsername () {
            let userName = firstName + lastName
            return userName
        };
        
        /*Adds a username and password object to the database array*/
        function addToDatabase() {
            let userName = createUsername()
            let newEntry = {
                userName: userName,
                password: password}
            database.push(newEntry);
            return database
        };

        /*Creates an empty object titled with userName */
        function createEmptyUserObject() {
            let newUserObject = {}
            let userName = createUsername()
            newUserObject[userName] = {}
            return newUserObject
        };

        /*Assigns the object (called by populateUserObject()) to the userName object */
        function mergeObjects(){
            let newUser = createEmptyUserObject()
            let userName = createUsername()
            Object.assign(newUser[userName], populateUserObject())
            return newUser
        };

        /*Adds the named user object and its contents to the userList array */
        function addToUserList () {
            userObject = mergeObjects()
            Object.assign(userList, userObject)
            return userList
        };
        alert("Sign up complete! Your username is " + createUsername())

    return addToUserList(), addToDatabase()
};


/*Iterates over the specified array. (Test using 'extraInfo' array).
  Asks user for answers to the elements listed in the array. (E.g. favourite animal)
  Creates a new object containing the elements as keys and the user's input as the values.   */
function getExtraInformation(array) {
let arrayToIterate = array
let i = 0
object = {}
for (i = 0; i <arrayToIterate.length; i++) {
    let infoType = arrayToIterate[i]
    let userInput = getUserInputTextOnly(infoType)
    object[infoType] = userInput
}
return object
};


/*Takes variables for userName and object.
  userName should be a valid entry on userList written in speech marks.
  object can either be a manually created object or an output from getExtraInformation() 
  Adds extra information to the user object stored in userList*/
function assignExtraInfoToUser(userName, object) {
    Object.assign(userList[userName], object)
}


/*Takes user input of a name already stored in userList and adds extra information to the user object.
  Does not yet check if given username actually exists on the list. */
function addInfo() {
    if (loggedIn === false){
        logIn()
    }
    if (loggedIn === true) {
        object = getExtraInformation(extraInfo)
        assignExtraInfoToUser([loggedInUser], object)
        return userList
    };
}


/*RELATING TO USERNAME/PASSWORD */


/*Asks user for username and returns it as userName
  Does not change database array.*/
function askForUserName () {
    let userName = prompt("What is your username?")
    return userName
};


/*Asks user for password and returns it as password
  Does not change database array.*/
function askForPassword () {
    let password = prompt("What is your password?")
    return password
};

function databaseIsEmpty (database) {
    if (database.length === 0) {
        return true
    }
}

function checkIfDatabaseIsEmpty() {
    if (databaseIsEmpty(database) === true) {
        alert("No available users. Please register first.")
        return true
    }
}

/*Takes a username and password as an input. (E.g. "vickygrey", "password123") 
Searches the database object to check if the user-inputted data matches.
Returns true if username and password are correct. */
function validCredentials(userName, password) {
    let databaseIndex = database
    valid = false
    if (checkIfDatabaseIsEmpty() === true) {
        return
    } else for (let i=0; i < database.length; i++) {
            databaseIndex = database[i]
            if (databaseIndex.userName === userName && databaseIndex.password === password) {
                valid = true
                return valid
            }
        };
        return valid
};


/*Logs the user in.
  If user is already logged in, will display the current loggedInUser instead. */
function logIn () {
    if (loggedIn === true){
        alert("You are already logged in " + loggedInUser + ". Please log out first if you wish to change user.")
        return
    } else if (checkIfDatabaseIsEmpty() === true) {
        return
    } else if (loggedIn === false) {
        let userName = askForUserName()
        let password = askForPassword()
        if (validCredentials(userName, password) === true) {
            loggedIn = true
            loggedInUser = userName
            alert("Welcome " +[loggedInUser] + "! You are now logged in.")
            return (loggedIn, loggedInUser)
        } else {
            loggedIn = false
            alert("Incorrect username or password. Please try again.")
            return loggedIn
    }}
}

/*Logs the user out. 
  Resets the loggedIn variable to false and the loggedInUser variable to empty. */
function logOut () {
            if (checkIfDatabaseIsEmpty() === true) {
                return
            } else {
                alert("Thank you, " + loggedInUser + ". You are now logging out.")
                loggedIn = false
                loggedInUser = ""
                return (loggedIn, loggedInUser)
            }
};


/*Checks that database contains user. If not, asks user to register first.
  Checks if the user is logged in. If they are not, logs them in.
  Returns the user object from userList. Does not change userList.*/
function findUser() {
        if (checkIfDatabaseIsEmpty() === true) {
            return
        } if (loggedIn === false){
            logIn()
        } else if (loggedIn === true) {
            let userProfile = userList[loggedInUser]
            let showProfile = JSON.stringify(userProfile)
            alert([showProfile])
            return userProfile;
            }
    };


    /*EVENT LISTENERS RELATING TO PAGE4.HTML */

    /*Allows user to click 'New User' button on page 4 and run the createNewUser() function.*/
    let newUserButton = document.getElementById("newUser")
    newUserButton.addEventListener("click", function(){
        createNewUser()
    })

    /*Allows user to click 'More Information' button on page 4 and run the addInfo() function */
    let addMoreButton = document.getElementById("addMore")
    addMoreButton.addEventListener("click", function(){
        addInfo()
    })

    /*Allows user to click 'View Profile' button on page 4 and run the findUser() function */
    let viewProfileButton = document.getElementById("viewProfile")
    viewProfileButton.addEventListener("click", function(){
        findUser()
    })

    /*Allows user to click the 'Log In' button on page 4 and run the logIn() function */
    let logInButton = document.getElementById("logIn")
    logInButton.addEventListener("click", function(){
        logIn()
    })

    let logOutButton = document.getElementById("logOut")
    logOutButton.addEventListener("click", function(){
        logOut ()
    })


