document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:8080/StudentPortal")
    .then((response) => response.json())
    .then((json) => {
        let studentCard = document.getElementById("main-div");

        let studentDiv = ``;

        json.forEach((element) => {
            studentDiv += `
            <div class="container">
                <div class="pro-image">
                    <img
                    src="https://cdn.vectorstock.com/i/preview-1x/66/14/default-avatar-photo-placeholder-profile-picture-vector-21806614.webp"
                    alt="pro-pic"
                    />
                </div>

                <div class="personal-info">
                    <span>${element.formFullName}</span>
                    <br>
                    <div class="info">
                        <table>
                            <tr>
                                <td>Date of Birth  &emsp;&emsp;&nbsp;&nbsp;: </td>
                                <td>${element.formBirthday}</td>
                            </tr>
                            <tr>
                                <td>Gender &emsp;&emsp;&emsp;&emsp;&emsp;: </td>
                                <td>${element.formGender}</td>
                            </tr>
                            <tr>
                                <td>Email &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;: </td>
                                <td>${element.formEmail}</td>
                            </tr>
                            <tr>
                                <td>Contact Number &nbsp;: </td>
                                <td>${element.formPhone}</td>
                            </tr>
                            <tr>
                                <td>Address &emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;: </td>
                                <td>${element.formAddress}</td>
                            </tr>
                            <tr>
                                <td>NIC &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;: </td>
                                <td>${element.formNic}</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <br></br>
                <div class="course-details">
                    <span>Course Details</span>
                    <br>
                    <div class="info">

                        <table>
                            <tr>
                                <td>Faculty &emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;: </td>
                                <td>${element.formFaculty}</td>
                            </tr>
                            <tr>
                                <td>Specialization &emsp;&nbsp;&nbsp;: </td>
                                <td>${element.formSpecialization}</td>
                            </tr>

                        </table>
                    </div>
                </div>
                <br></br>
                <a href="./index-registrationForm.html?userName=${element.userName}" style="text-decoration: none;"><h5>See more info...</h5></a>
                <br>
                <div class="buttons">
                <div class="update-btn">
                    <button id="acceptButton" onclick="handleAcceptFormClick(this)">Accept Form</button>
                </div>
                <div class="delete-btn">
                    <button id="rejectButton" onclick="handleRejectFormClick(this)">Reject Form</button>
                </div>
            </div>
            
            </div>
            
            </div>
        </div>
        `;
    });

    studentCard.innerHTML = studentDiv;


        });
});

function handleAcceptFormClick(button) {
    // Hide the clicked "Accept Form" button
    button.style.display = "none";

    // Find the corresponding "Reject Form" button and hide it too
    const container = button.closest(".container");
    const rejectButton = container.querySelector("#rejectButton");
    rejectButton.style.display = "none";

    // Display a success message
    const messageElement = document.createElement("p");
    messageElement.textContent = "Registration Accepted ";
    messageElement.style.color = "green";
    messageElement.style.fontWeight = "bold";
    messageElement.style.fontSize = "18px";
    container.appendChild(messageElement);
}

function handleRejectFormClick(button) {
    // Handle the "Reject Form" click event as needed
}
