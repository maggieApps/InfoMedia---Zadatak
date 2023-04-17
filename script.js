// Stores user input
const buyerInfo = {
  firstName: document.getElementById("first-name"),
  lastName: document.getElementById("last-name"),
  phoneNumber: document.getElementById("phone-number"),
  homeAdress: document.getElementById("home-adress"),
  homeNumber: document.getElementById("home-number"),
  zipCode: document.getElementById("zip-code"),
  city: document.getElementById("city"),
  emailAdress: document.getElementById("email-adress"),
  aditionlInfo: document.getElementById("note"),
};


// Main function
const buyerInfoHandler = () => {

  let errorsFound = 0;

  const multipleErrorCatcher = () => {
    const multipleErrorWarningMessage =
      "Some of the information you provided are missing or weren't correct. Please, enter correct info!";

    // Checks for empty inputs
    for (let i = 0; i <= 7; i++) {
      if (Object.values(buyerInfo)[i].value == "") {
        errorsFound++;
      }
    }

    if (errorsFound > 1) {
      alert(multipleErrorWarningMessage);
    }
  };

  const firstNameErrorCatcher = (a = buyerInfo.firstName.value) => {
    if (!a && !(errorsFound > 1)) {
      alert("Name field can not be empty!");
      errorsFound++;
    } else if (a.length < 3 && !(errorsFound > 1)) {
      alert("First name must have more than 2 letters!");
      errorsFound++;
    } else if (
      a.match("0") ||
      a.match("1") ||
      a.match("2") ||
      a.match("3") ||
      a.match("4") ||
      a.match("5") ||
      a.match("6") ||
      a.match("7") ||
      a.match("8") ||
      a.match("9")
    ) {
      alert("Name must contain letters only!");
      errorsFound++;
    }
  };

  const lastNameErrorCatcher = (a = buyerInfo.lastName.value) => {
    if (!a && !(errorsFound > 1)) {
      alert("Last name field can not be empty!");
      errorsFound++;
    } else if (a.length < 3 && !(errorsFound > 1)) {
      alert("Last name must have more than 2 letters!");
      errorsFound++;
    } else if (
      a.match("0") ||
      a.match("1") ||
      a.match("2") ||
      a.match("3") ||
      a.match("4") ||
      a.match("5") ||
      a.match("6") ||
      a.match("7") ||
      a.match("8") ||
      a.match("9")
    ) {
      alert("Last name must contain letters only!");
      errorsFound++;
    }
  };

  const phoneNumberErrorCatcher = (a = buyerInfo.phoneNumber.value) => {
    if (!a && !(errorsFound > 1)) {
      alert("Phone number field can not be empty!");
      errorsFound++;
    } else if (a.length < 9 && !(errorsFound > 1)) {
      alert("Phone number must have more than 8 digits!");
      errorsFound++;
    }
  };

  const homeAdressErrorCatcher = (a = buyerInfo.homeAdress.value) => {
    if (!a && !(errorsFound > 1)) {
      alert("Home adress field can not be empty!");
      errorsFound++;
    } else if (a.length < 5 && !(errorsFound > 1)) {
      alert("Home adress must have more than 5 letters!");
      errorsFound++;
    }
  };

  const homeNumberErrorCatcher = (a = buyerInfo.homeNumber.value) => {
    if (!a && !(errorsFound > 1)) {
      alert("Home number field can not be empty!");
      errorsFound++;
    } else if (a.length < 1 && !(errorsFound > 1)) {
      alert("Home number must have more than 1 digit!");
      errorsFound++;
    }
  };

  const zipCodeErrorCatcher = (a = buyerInfo.zipCode.value) => {
    if (!a && !(errorsFound > 1)) {
      alert("ZIP code field can not be empty!");
      errorsFound++;
    } else if (a.length < 5 && !(errorsFound > 1)) {
      alert("ZIP code must have 5 digits!");
      errorsFound++;
    }
  };

  const cityErrorCatcher = (a = buyerInfo.city.value) => {
    if (!a && !(errorsFound > 1)) {
      alert("City name field can not be empty!");
      errorsFound++;
    } else if (a.length < 2 && !(errorsFound > 1)) {
      alert("City name must have more than 2 letters!");
      errorsFound++;
    }
  };

  const emailErrorCatcher = (a = buyerInfo.emailAdress.value) => {
    let enteredDomain = a;

    if (enteredDomain.match("@")) {
      enteredDomain = a.slice(a.indexOf("@"));
    } else if (!enteredDomain.match("@")) {
      enteredDomain = "Bad domain";
    }

    // Dummy domain list, most commonly used
    const domainList = [
      "@gmail.com",
      "@hotmail.com",
      "@yahoo.com",
      "@live.com",
    ];

    // Returns bool value
    let isDomainCorrect;

    for (let i = 0; i < domainList.length; i++) {
      if (enteredDomain == domainList[i]) {
        isDomainCorrect = true;
        break;
      } else {
        isDomainCorrect = false;
      }
    }

    if (!a && !(errorsFound > 1)) {
      alert("Email adress field can not be empty!");
      errorsFound++;
    } else if (a == enteredDomain && !(errorsFound > 1)) {
      alert("Please check if you entered a correct email adress!");
      errorsFound++;
    } else if (!isDomainCorrect && !(errorsFound > 1)) {
      alert("Please check if you entered a correct email adress!");
      errorsFound++;
    }
  };

  multipleErrorCatcher();
  firstNameErrorCatcher();
  lastNameErrorCatcher();
  phoneNumberErrorCatcher();
  homeAdressErrorCatcher();
  homeNumberErrorCatcher();
  zipCodeErrorCatcher();
  cityErrorCatcher();
  emailErrorCatcher();

  if (errorsFound == 0) {
    console.log(`First name: ${buyerInfo.firstName.value}`);
    console.log(`Last name: ${buyerInfo.lastName.value}`);
    console.log(`Phone number: ${buyerInfo.phoneNumber.value}`);
    console.log(`Home adress: ${buyerInfo.homeAdress.value}`);
    console.log(`Home number: ${buyerInfo.homeNumber.value}`);
    console.log(`ZIP Code: ${buyerInfo.zipCode.value}`);
    console.log(`City: ${buyerInfo.city.value}`);
    console.log(`Email adress: ${buyerInfo.emailAdress.value}`);
    if ((a = buyerInfo.aditionlInfo.value)) {
      console.log(`Aditional info: ${a}`);
    }
    document.getElementById("my-form").reset();
  }
};
