// JavaScript code to handle the image input and delete button

const imgInputHelper = document.getElementById("add-single-img");
const imgLabel = document.getElementById("add-img-label");
const imgContainer = document.getElementById("image-preview");
const deleteButton = document.getElementById("delete-button");

let selectedImage = null;

const addImgHandler = () => {
  const file = imgInputHelper.files[0];
  if (!file) return;

  // Generate img preview
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    const newImg = document.createElement("img");
    newImg.src = reader.result;

    // Clear existing images
    imgContainer.innerHTML = "";

    // Store the selected image
    selectedImage = file;

    // Append the new image inside the label and show the delete button
    imgLabel.innerHTML = "";
    imgLabel.appendChild(newImg);
    deleteButton.style.display = "block";

    // Convert the selected image to a byte array
    convertImageToByteArray(file);
  };

  // Reset image input
  imgInputHelper.value = "";
};

// Function to handle deleting the image
const deleteImgHandler = () => {
  // Clear the selected image
  selectedImage = null;

  // Clear the image container and hide the delete button
  imgContainer.innerHTML = "";
  deleteButton.style.display = "none";

  // Reset the input field
  imgInputHelper.value = "";

  // Restore the label with the "+" sign
  imgLabel.innerHTML = "+";
};

// Function to convert the selected image to a byte array
const convertImageToByteArray = (imageFile) => {
  const reader = new FileReader();
  reader.onload = (event) => {
    // Convert the base64 string to a byte array
    const base64String = event.target.result.split(",")[1];
    const byteCharacters = atob(base64String);
    const byteArray = new Uint8Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {
      byteArray[i] = byteCharacters.charCodeAt(i);
    }

    // Now 'byteArray' contains the image data as a byte array
    console.log(byteArray);
    sendByteArrayToBackend(byteArray);
  };

  // Read the image file as a data URL
  reader.readAsDataURL(imageFile);
};
// Function to send the byte array to the backend
const sendByteArrayToBackend = (byteArray) => {
  var id = localStorage.getItem("id");
  console.log(byteArray);
  localStorage.setItem("imageByteArray", JSON.stringify(Array.from(byteArray)));

  // Construct your PUT request here
  const url = `http://localhost:8080/StudentPortal/image/${id}`; // Replace with your actual backend endpoint
  const myHeaders = new Headers({
    "Content-Type": "application/json",
  });

  const requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: JSON.stringify({ imageByteArray: Array.from(byteArray) }), // Assuming your backend expects a JSON object with an 'imageByteArray' property
    redirect: "follow",
  };

  fetch(url, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
// Attach event listeners
imgInputHelper.addEventListener("change", addImgHandler);
deleteButton.addEventListener("click", deleteImgHandler);

// Retrieve the username from local storage
var userName = localStorage.getItem("userName");

// Set the username in the "user-username" element
document.getElementById("user-username").textContent = userName;

// Check if a username is stored in local storage and update the UI
// if (storedUsername) {
//     usernameElement.textContent = storedUsername;
// } else {
//     // Handle the case where there's no username in local storage
//     usernameElement.textContent = "Guest"; // You can set a default value
// }

// // Rest of your code
// function StudentPortal1(formFullName,formEmail,formPhone,formBirthday,formNic,formGender,formAddress,formCity,formZipcode,formRegistrationNumber,formFaculty,formSpecialization,formYear,formSemester){

//     this.formFullName=formFullName;
//     this.formEmail=formEmail;
//     this.formPhone=formPhone;
//     this.formBirthday=formBirthday;
//     this.formNic=formNic;
//     this.formGender=formGender;
//     this.formAddress=formAddress;
//     this.formCity=formCity;
//     this.formZipcode=formZipcode;
//     this.formRegistrationNumber=formRegistrationNumber;
//     this.formFaculty=formFaculty;
//     this.formSpecialization=formSpecialization;
//     this.formYear=formYear;
//     this.formSemester=formSemester;
// }
// function retrieveStudentData1() {
//     event.preventDefault();
//     // Retrieve the username and password from local storage
//     var userName = localStorage.getItem("userName");
//     var password = localStorage.getItem("password");
//     var id = localStorage.getItem("id")

//     console.log("user name"+userName);

//     var formFullName = document.getElementById("form-fullname").value;
//     var formEmail = document.getElementById("form-email").value;
//     var formPhone = document.getElementById("form-phone").value;
//     var formBirthday = document.getElementById("form-birthday").value;
//     var formNic = document.getElementById("form-nic").value;

//     var formGender = document.querySelector('input[name="gender"]:checked').value;

//     var formAddress = document.getElementById("form-address").value;
//     var formCity = document.getElementById("form-city").value;
//     var formZipcode = document.getElementById("form-zipcode").value;
//     var formRegistrationNumber = document.getElementById("form-registrationnumber").value;
//     var formFaculty = document.getElementById("form-faculty").value;
//     var formSpecialization = document.getElementById("form-specialization").value;
//     var formYear = document.getElementById("form-year").value;
//     var formSemester = document.getElementById("form-semester").value;
//     var url=`http://localhost:8080/StudentPortal/${id}`;

//     var studentPortal1 = new StudentPortal1(formFullName,formEmail,formPhone,formBirthday,formNic,formGender,formAddress,formCity,formZipcode,formRegistrationNumber,formFaculty,formSpecialization,formYear,formSemester)
//     var studentPortal1Json = JSON.stringify(studentPortal1)

//     var myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");

//     var requestOptions = {
//         method: 'PUT',
//         headers: myHeaders,
//         body: studentPortal1Json,
//         redirect: 'follow'
//       };

//     fetch(url, requestOptions)
//         .then(response => response.text())
//         .then(result => console.log(result))
//         .catch(error => console.log('error', error));

//     const everythingIsFine = true;
//     if (everythingIsFine===true) {
//         //alert("Registration Success! 😀");
//         document.getElementById("successModal").style.display = "flex";
//         document.getElementById("container").style.display = "none";
//        // setTimeout(function() {
//        //     window.location.href = "http://127.0.0.1:5500/index-login.html";
//         //}, 2000);
//     }
// }

//Validations for the form

var formFullNameE = document.getElementById("form-fullname");
var formEmailE = document.getElementById("form-email");
var formPhoneE = document.getElementById("form-phone");
var formBirthdayE = document.getElementById("form-birthday");
var formNicE = document.getElementById("form-nic");

var formGenderE = document.querySelector('input[name="gender"]:checked');

var formAddressE = document.getElementById("form-address");
var formCityE = document.getElementById("form-city");
var formZipcodeE = document.getElementById("form-zipcode");
var formRegistrationNumberE = document.getElementById(
  "form-registrationnumber"
);
var formFacultyE = document.getElementById("form-faculty");
var formSpecializationE = document.getElementById("form-specialization");
var formYearE = document.getElementById("form-year");
var formSemesterE = document.getElementById("form-semester");

const setError = (element, message) => {
  const inputField = element.parentElement;
  const errorDisplay = inputField.querySelector(".error");

  errorDisplay.innerText = message;
  inputField.classList.add("error");
  inputField.classList.remove("success");
};

const setSuccess = (element) => {
  const inputField = element.parentElement;
  const errorDisplay = inputField.querySelector(".error");

  errorDisplay.innerText = "";
  inputField.classList.add("success");
  inputField.classList.remove("error");
};

//Validation for the name
function validateName() {
  let formFullName = formFullNameE.value.trim();

  if (formFullName === "") {
    setError(formFullNameE, "Fullname is required");
    return false;
  } else {
    setSuccess(formFullNameE);
    return true;
  }
}

//Validating the email
function validateEmail() {
  let formEmail = formEmailE.value.trim();

  const isValidEmail = (formEmail) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(formEmail).toLowerCase());
  };

  if (formEmail === "") {
    setError(formEmailE, "Email is required");
    return false;
  } else if (!isValidEmail(formEmail)) {
    setError(formEmailE, "Provide a valid email address");
    return false;
  } else {
    setSuccess(formEmailE);
    return true;
  }
}

//Validating the tpNumber
function validateTpNumber() {
  let formPhone = formPhoneE.value.trim();

  let isValidTpNumber = (formPhone) => {
    if (formPhone.charAt(0) != 0) {
      return false;
    }

    let tpS = formPhone.toString();
    let tp = tpS.substring(1, 10);

    if (tp.length != 9) {
      return false;
    }

    let serviceCode = [
      "70",
      "71",
      "72",
      "74",
      "75",
      "76",
      "77",
      "78",
      "11",
      "36",
      "31",
      "33",
      "38",
      "34",
      "81",
      "54",
      "51",
      "52",
      "66",
      "91",
      "41",
      "47",
      "21",
      "23",
      "24",
      "63",
      "65",
      "67",
      "26",
      "25",
      "27",
      "32",
      "37",
      "55",
      "57",
      "45",
      "35",
    ];
    for (let i = 0; i < serviceCode.length; i++) {
      if (tpS.substring(1, 3) == serviceCode[i]) {
        return true;
      }
    }
    return false;
  };

  if (formPhone === "") {
    setError(formPhoneE, "Telephone number is required");
    return false;
  } else if (!isValidTpNumber(formPhoneE)) {
    setError(formPhoneE, "Invalid telephone number");
    return false;
  } else {
    setSuccess(formPhoneE);
    return true;
  }
}

//Validation for the birthday
function validateDob() {
  let formBirthday = formBirthdayE.value.trim();

  const inValidDob = (formBirthday) => {
    let mm = formBirthday.substring(5, 7);
    let dd = formBirthday.substring(8, 10);
    let yy = formBirthday.substring(0, 4);

    const date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDay;

    if (yy >= year) {
      return true;
    }
    return false;
  };

  if (formBirthday === "") {
    setError(formBirthdayE, "Birthday is required");
    return false;
  } else if (inValidDob(formBirthday)) {
    setError(formBirthdayE, "Enter valid birthday");
    return false;
  } else {
    setSuccess(formBirthdayE);
    return true;
  }
}

//Validating the nic
function validateNic() {
  let formNic = formNicE.value.trim();

  let isValidNic = (formNic) => {
    let formNicV = formNic.toString();
    if (formNicV.length == 12) {
      return true;
    }
    if (formNicV.length != 10 && formNicV.substring(8, 10).toUpperCase != "V") {
      return false;
    }
    return true;
  };

  if (formNic == "") {
    setError(formNicE, "NIC is required");
    return false;
  } else if (!isValidNic(formNic)) {
    setError(formNicE, "Invalid NIC number");
    return false;
  } else {
    setSuccess(formNicE);
    return true;
  }
}

//Validating the address
function validateAddress() {
  var formAddress = document.getElementById("form-address").value.trim();
  var formCity = document.getElementById("form-city").value.trim();
  var formZipcode = document.getElementById("form-zipcode").value.trim();

  if (formAddress === "" && formCity === "" && formZipcode === "") {
    setError(formAddressE, "Address is required");
    setError(formCityE, "City is required");
    setError(formZipcodeE, "Postalcode is required");
    return false;
  } else {
    setSuccess(formAddressE);
    setSuccess(formCityE);
    setSuccess(formZipcodeE);
    return true;
  }
}

//Validating the registration number
function validateRegNumber() {
  let formRegistrationNumber = formRegistrationNumberE.value.trim();

  if (formRegistrationNumber === "") {
    setError(formRegistrationNumberE, "Registration number is required");
    return false;
  } else {
    setSuccess(formRegistrationNumberE);
    return true;
  }
}

//Validating the faculty
function validateFaculty(formFacultyE) {
  let formFaculty = formFacultyE.value.trim();

  if (formFaculty === "Select Faculty") {
    setError(formFacultyE, "Select an option");
    return false;
  } else {
    setSuccess(formFacultyE);
    return true;
  }
}

//Validating the specialization
function validateSpecialization(formSpecializationE) {
  let formSpecialization = formSpecializationE.value.trim();

  if (formSpecialization === "Select Specialization") {
    setError(formSpecializationE, "Select an option");
    return false;
  } else {
    setSuccess(formSpecializationE);
    return true;
  }
}

//Validating the currentyear
function validateCurrentYear() {
  let formYear = formYearE.value.trim();

  if (formYear === "") {
    setError(formYearE, "Select your current semester");
    return false;
  } else {
    setSuccess(formYearE);
    return true;
  }
}

//Validating the currentsemester
function validateCurrentSemester() {
  let formSemester = formSemesterE.value.trim();

  if (formSemester === "") {
    setError(formSemesterE, "Enter your current semester");
    return false;
  } else {
    setSuccess(formSemesterE);
    return true;
  }
}

//validating all the inputs
const isValidAllInputs = () => {
  const isValidName = validateName();
  const isValidEmail = validateEmail();
  const isValidTpNumber = validateTpNumber();
  const isValidDob = validateDob();
  const isValidAddress = validateAddress();
  const isValidNic = validateNic();
  const isValidRegNumber = validateRegNumber();
  const isValidFaculty = validateFaculty(formFacultyE);
  const isValidSpecialization = validateSpecialization(formSpecializationE);
  const isValidCurrentYear = validateCurrentYear();
  const isValidCurrentSemester = validateCurrentSemester();

  return (
    isValidName &&
    isValidEmail &&
    isValidTpNumber &&
    isValidDob &&
    isValidNic &&
    isValidAddress &&
    isValidRegNumber &&
    isValidFaculty &&
    isValidSpecialization &&
    isValidCurrentYear &&
    isValidCurrentSemester
  );
};

function StudentPortal1(
  formFullName,
  formEmail,
  formPhone,
  formBirthday,
  formNic,
  formGender,
  formAddress,
  formCity,
  formZipcode,
  formRegistrationNumber,
  formFaculty,
  formSpecialization,
  formYear,
  formSemester
) {
  this.formFullName = formFullName;
  this.formEmail = formEmail;
  this.formPhone = formPhone;
  this.formBirthday = formBirthday;
  this.formNic = formNic;
  this.formGender = formGender;
  this.formAddress = formAddress;
  this.formCity = formCity;
  this.formZipcode = formZipcode;
  this.formRegistrationNumber = formRegistrationNumber;
  this.formFaculty = formFaculty;
  this.formSpecialization = formSpecialization;
  this.formYear = formYear;
  this.formSemester = formSemester;
}

let submitBtn = document.querySelector(".submit");

submitBtn.addEventListener("click", (event) => {
  event.preventDefault;

  if (isValidAllInputs()) {
    var id = localStorage.getItem("id");

    var formFullName = document.getElementById("form-fullname").value;
    var formEmail = document.getElementById("form-email").value;
    var formPhone = document.getElementById("form-phone").value;
    var formBirthday = document.getElementById("form-birthday").value;
    var formNic = document.getElementById("form-nic").value;

    var formGender = document.querySelector(
      'input[name="gender"]:checked'
    ).value;

    var formAddress = document.getElementById("form-address").value;
    var formCity = document.getElementById("form-city").value;
    var formZipcode = document.getElementById("form-zipcode").value;
    var formRegistrationNumber = document.getElementById(
      "form-registrationnumber"
    ).value;
    var formFaculty = document.getElementById("form-faculty").value;
    var formSpecialization = document.getElementById(
      "form-specialization"
    ).value;
    var formYear = document.getElementById("form-year").value;
    var formSemester = document.getElementById("form-semester").value;

    let StudentPortalOb = new StudentPortal1(
      formFullName,
      formEmail,
      formPhone,
      formBirthday,
      formNic,
      formGender,
      formAddress,
      formCity,
      formZipcode,
      formRegistrationNumber,
      formFaculty,
      formSpecialization,
      formYear,
      formSemester
    );

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(StudentPortalOb);

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`http://localhost:8080/StudentPortal/${id}`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

    location.reload();

    document.getElementById("successModal").style.display = "flex";
    document.getElementById("container").style.display = "none";
  } else {
    alert("Check the inputs!");
  }
});
