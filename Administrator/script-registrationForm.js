function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Get the userName from the URL
var userName = getQueryParam("userName");
console.log(userName);


var url=`http://localhost:8080/StudentPortal/${userName}`;
document.addEventListener("DOMContentLoaded", () => {
    fetch(url)
    .then((response) => response.json())
    .then((json) => {
        let studentCard = document.getElementById("form");

        let studentDiv = ``;

        json.forEach((element) => {
            localStorage.setItem("RegisterId", element.id);
            studentDiv = `

            <div class="img" id="image">
              <div class="custom__image-container">
                <!-- The image label with a "+" sign -->
                <label id="add-img-label" for="add-single-img">+</label>
                <!-- The input to select an image -->
                <input type="file" id="add-single-img" accept="image/jpeg" />
              </div>
              <br />
              <!-- The image preview container -->
              <div class="image-preview" id="image-preview"></div>
              <br />
              <!-- Delete button for the selected image -->
              <button
                class="delete-button"
                id="delete-button"
                style="display: none"
              >
                Delete Image
              </button>
            </div>
            <div class="personal-data">
              <div class="input-box">
                <label>Full Name</label>
                <input
                  type="text"
                  id="form-fullname"
                  value="${element.formFullName}"
                  required
                  readonly
                />
              </div>
              <div class="input-box">
                <label>Email Address</label>
                <input
                  type="text"
                  id="form-email"
                  value="${element.formEmail}"
                  required
                  readonly
                />
              </div>
              <div class="column">
                <div class="input-box">
                  <label>Phone Number</label>
                  <input
                    type="number"
                    id="form-phone"
                    value="${element.formPhone}"
                    required
                    readonly
                  />
                </div>
                <div class="input-box">
                  <label>Birth Date</label>
                  <input
                    type="date"
                    id="form-birthday"
                    value="${element.formBirthday}"
                    required
                    readonly
                  />
                </div>
              </div>
              <div class="input-box">
                <label>National Identity Card Number</label>
                <input
                  type="text"
                  id="form-nic"
                  value="${element.formNic}"
                  required
                  readonly
                />
              </div>
              <div class="gender-box">
                <label for="">Gender</label>
                <div class="gender-option">
                  <div class="gender">
                    <input
                      type="radio"
                      id="check-male"
                      name="gender"
                      value="${element.formGender}"
                      checked
                      disabled
                    />
                    <label for="check-male">Male</label>
                  </div>
                  <div class="gender">
                    <input
                      type="radio"
                      id="check-female"
                      name="gender"
                      value="Female"
                      disabled
                    />
                    <label for="check-female">Female</label>
                  </div>
                  <div class="gender">
                    <input
                      type="radio"
                      id="check-other"
                      name="gender"
                      value="Prefer not to say"
                      disabled
                    />
                    <label for="check-other">Prefer not to say</label>
                  </div>
                </div>
              </div>
              <div class="input-box address">
                <label>Address</label>
                <input
                  type="text"
                  id="form-address"
                  value="${element.formAddress}"
                  required
                  readonly
                />
  
                <div class="column">
                  <input
                    type="text"
                    id="form-city"
                    value="${element.formCity}"
                    required
                    readonly
                  />
                  <input
                    type="number"
                    id="form-zipcode"
                    value="${element.formZipcode}"
                    required
                    readonly
                  />
                </div>
              </div>
            </div>
            <div class="course-details">
              <br />
              <br />
              <br />
              <label for=""><h3>Course Details</h3></label>
              <div class="input-box address">
                <label>Registration Number</label>
                <input
                  type="text"
                  id="form-registrationnumber"
                  value="${element.formRegistrationNumber}"
                  required
                  readonly
                />
              </div>
              <div class="column">
                <div class="input-box">
                  <label>Faculty</label>
                  <div class="select-box">
                    <select
                      class="form-select"
                      id="form-faculty"
                      aria-label="Default select example"
                      disabled
                    >
                      <option selected>${element.formFaculty}</option>
                      <option value="Engineering">Engineering</option>
                      <option value="Computing">Computing</option>
                      <option value="Bussiness">Bussiness</option>
                      <option value="Hospitality & Culinary">
                        Hospitality & Culinary
                      </option>
                      <option value="Humanities & Sciences">
                        Humanities & Sciences
                      </option>
                    </select>
                  </div>
                </div>
                <div class="input-box">
                  <label>Specialization</label>
                  <div class="select-box">
                    <select
                      class="form-select"
                      id="form-specialization"
                      aria-label="Default select example"
                      disabled
                    >
                      <option selected>${element.formSpecialization}</option>
                      <option value="${element.formSpecialization}">
                        ${element.formSpecialization}
                      </option>
                      <option value="Masters">Masters</option>
                      <option value="Doctoral">Doctoral</option>
                      <option value="Higher Diploma">Higher Diploma</option>
                      <option value="Pg. Diploma">Pg. Diploma</option>
                      <option value="MPhil">MPhil</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="column">
                <div class="input-box">
                  <label>Current Year</label>
                  <input
                    type="text"
                    id="form-year"
                    value="${element.formYear}"
                    required
                    readonly
                  />
                </div>
                <div class="input-box">
                  <label>Current Semester</label>
                  <input
                    type="text"
                    id="form-semester"
                    value="${element.formSemester}"
                    required
                    readonly
                  />
                </div>
              </div>
            </div>
            <br />
            <br />
            <button
              id="Submit"
              class="submit"
              onclick="retrieveStudentData1()"
              ondblclick="retrieveStudentData1()"
            >
              Submit
            </button>

        `;
    });

    studentCard.innerHTML = studentDiv;

      // Hide the "Submit" button by default
      document.getElementById("Submit").style.display = "none";

      // Add an event listener to the "Edit Information" button
      document.getElementById("editButton").addEventListener("click", function () {
        // Make textboxes, select fields, and radio buttons editable
        toggleInputFields(false);
        document.getElementById("form-faculty").removeAttribute("disabled");
        document.getElementById("form-specialization").removeAttribute("disabled");

        // Enable the radio buttons
        enableRadioButtons();

        // Hide the "Edit Information" button
        this.style.display = "none";

        // Show the "Submit" button
        document.getElementById("Submit").style.display = "block";
      });

      // Function to toggle readonly attribute on input fields
      function toggleInputFields(readonly) {
        const inputFields = document.querySelectorAll(
          'input:not([type="checkbox"]), select'
        );
        inputFields.forEach((input) => {
          input.readOnly = readonly;
        });
      }

      // Function to enable radio buttons
      function enableRadioButtons() {
        const radioButtons = document.querySelectorAll('input[type="radio"]');
        radioButtons.forEach((radio) => {
          radio.removeAttribute("disabled");
        });
      }
  });
});

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
    event.preventDefault(); 

    var id = localStorage.getItem("RegisterId")

    console.log("user name"+id);

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