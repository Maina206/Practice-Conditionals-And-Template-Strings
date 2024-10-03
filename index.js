// Age restriction program
function ageRestrictor(age) {
    if (age === null || isNaN(age)) {
        return "Invalid age";
        console.log("Invalid age");
    }

    if (age >= 18 && age < 65) {
        console.log("Access granted.");
        return "Access granted";
    } else if (age < 18) {
        console.log("Access denied. You are too young.");
        return "Access denied. You are too young.";
    } else if (age > 65) {
        console.log("Access denied. You are too old.");
        return "Access denied. You are too old.";
    }
}

console.log(ageRestrictor(35));
console.log(ageRestrictor(90));
console.log(ageRestrictor(17));
console.log(ageRestrictor("Twenty"));


//flighting book system
function flightBookingSystem(age, hasPassport, isFlightAvailable) {
    if (age === null || isNaN(age)) {
        // console.log("Invalid age");
        return "Invalid age";
    }
    
    if(age >= 18 && age <= 70 && hasPassport === true && isFlightAvailable === true) {
        // console.log("Booking succesfull");
        return "Booking successfull";
    } else {
        // console.log("Booking failed.");
        return "Booking failed.";
    }
}

console.log("Bookig Flight System");
console.log(flightBookingSystem(20, true, true));
console.log(flightBookingSystem(80, true, true));
console.log(flightBookingSystem(12, true, true));
console.log(flightBookingSystem(35, false, true));
console.log(flightBookingSystem(37, true, false));
console.log(flightBookingSystem(90, false, false));
console.log(flightBookingSystem(42, true, true));


//job application system
function jobApplicationSystem(age, yearsExperience, knowsJavaScript) {
    if (age > 25 && age < 50 && knowsJavaScript === true) {
        if (age < 30 && yearsExperience >=3) {
            console.log("Eligible for the job");
            return "Eligible for the job";
        } else if (age > 30 && yearsExperience > 5) {
            console.log("Eligible for the job");
            return "Eligible for the job";
        } else {
            console.log("Not eligible");
            return "Not eligible";
        }
    } else {
        console.log("Not eligible")
        return "Not eligible";
    }
}

console.log("Job application eligibility system");
jobApplicationSystem(27, 5, true)
jobApplicationSystem(12, 4, true)
jobApplicationSystem(70, 12, true)
jobApplicationSystem(29, 4, false)
jobApplicationSystem(22, 4, true)
jobApplicationSystem(42, 10, true)


//Template string for welcome message
function welcomeMessage(firstName, lastName) {
    console.log(`Hello, ${firstName} ${lastName}! Welcome to our website.`);
}
console.log("Welcome message using template string");
welcomeMessage("Alex", "Maina")


// Scenario:
// You are building an online store. You need to show product details with dynamic values such as the productName, price, and availability.
// Task:
// Write a function that takes in productName, price, and isAvailable (boolean).
// Return a message using a template string in the format:"The <productName> costs $<price>. It is <available/not available>."

//online store system
function onlineStore(productName, price, isAvailable) {
    let availability = null;
    if (isAvailable) {
        availability = "available";
    } else {
        availability = "not available";
    }

    console.log(`The ${productName} costs $${price}. It is ${availability}.`)
}

onlineStore("Mouse Pas",5.8 , true);
onlineStore("Gaming console",50 , false);