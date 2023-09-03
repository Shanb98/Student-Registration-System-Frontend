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
        imgContainer.innerHTML = '';

        // Store the selected image
        selectedImage = file;

        // Append the new image inside the label and show the delete button
        imgLabel.innerHTML = '';
        imgLabel.appendChild(newImg);
        deleteButton.style.display = "block";
    };

    // Reset image input
    imgInputHelper.value = "";
};

// Function to handle deleting the image
const deleteImgHandler = () => {
    // Clear the selected image
    selectedImage = null;

    // Clear the image container and hide the delete button
    imgContainer.innerHTML = '';
    deleteButton.style.display = "none";

    // Reset the input field
    imgInputHelper.value = "";

    // Restore the label with the "+" sign
    imgLabel.innerHTML = '+';
};

// Attach event listeners
imgInputHelper.addEventListener("change", addImgHandler);
deleteButton.addEventListener("click", deleteImgHandler);


// Retrieve the username from local storage
var userName = localStorage.getItem("userName");

// Set the username in the "user-username" element
document.getElementById("user-username").textContent = userName;


// Check if a username is stored in local storage and update the UI
if (storedUsername) {
    usernameElement.textContent = storedUsername;
} else {
    // Handle the case where there's no username in local storage
    usernameElement.textContent = "Guest"; // You can set a default value
}

// Rest of your code
function StudentPortal1(formFullName,formEmail,formPhone,formBirthday,formNic,formGender,formAddress,formCity,formZipcode,formRegistrationNumber,formFaculty,formSpecialization,formYear,formSemester){
    this.formFullName=formFullName;
    this.formEmail=formEmail;
    this.formPhone=formPhone;
    this.formBirthday=formBirthday;
    this.formNic=formNic;
    this.formGender=formGender;
    this.formAddress=formAddress;
    this.formCity=formCity;
    this.formZipcode=formZipcode;
    this.formRegistrationNumber=formRegistrationNumber;
    this.formFaculty=formFaculty;
    this.formSpecialization=formSpecialization;
    this.formYear=formYear;
    this.formSemester=formSemester;
}
function retrieveStudentData1() {
    // Retrieve the username and password from local storage
    var userName = localStorage.getItem("userName");
    var password = localStorage.getItem("password");
    var id = localStorage.getItem("id")

    console.log("user name"+userName);

    var formFullName = document.getElementById("form-fullname").value;
    var formEmail = document.getElementById("form-email").value;
    var formPhone = document.getElementById("form-phone").value;
    var formBirthday = document.getElementById("form-birthday").value;
    var formNic = document.getElementById("form-nic").value;

    var formGender = document.querySelector('input[name="gender"]:checked').value;

    var formAddress = document.getElementById("form-address").value;
    var formCity = document.getElementById("form-city").value;
    var formZipcode = document.getElementById("form-zipcode").value;
    var formRegistrationNumber = document.getElementById("form-registrationnumber").value;
    var formFaculty = document.getElementById("form-faculty").value;
    var formSpecialization = document.getElementById("form-specialization").value;
    var formYear = document.getElementById("form-year").value;
    var formSemester = document.getElementById("form-semester").value;
    var url=`http://localhost:8080/StudentPortal/${id}`;


    var studentPortal1 = new StudentPortal1(formFullName,formEmail,formPhone,formBirthday,formNic,formGender,formAddress,formCity,formZipcode,formRegistrationNumber,formFaculty,formSpecialization,formYear,formSemester)    
    var studentPortal1Json = JSON.stringify(studentPortal1)
    
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: studentPortal1Json,
        redirect: 'follow'
      };
      
    fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    const everythingIsFine = true;
    if (everythingIsFine===true) {
        //alert("Registration Success! 😀");
        document.getElementById("successModal").style.display = "flex";
        document.getElementById("container").style.display = "none";
       // setTimeout(function() {
       //     window.location.href = "http://127.0.0.1:5500/index-login.html";
        //}, 2000);
    }    
}

