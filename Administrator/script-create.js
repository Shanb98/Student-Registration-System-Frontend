function AdminPortal(adminName, adminUserName,adminDesignation,adminEmployeeId, adminEmail, adminFaculty, adminPassword){
    this.adminName = adminName;
    this.adminUserName = adminUserName;
    this.adminDesignation = adminDesignation;
    this.adminEmployeeId = adminEmployeeId;
    this.adminEmail = adminEmail;
    this.adminFaculty = adminFaculty;
    this.adminPassword = adminPassword ;
}
function submitForm(){
    event.preventDefault();

    var adminName = document.getElementById("name").value;
    var adminUserName = document.getElementById("username").value;
    var adminDesignation = document.getElementById("Designation").value;
    var adminEmployeeId = document.getElementById("EmployeeID").value;
    var adminEmail = document.getElementById("email").value;
    var adminFaculty = document.getElementById("faculty").value;
    var adminPassword = document.getElementById("password").value;
    var adminRePassword = document.getElementById("rePassword").value;

    let emailPatttern;
    emailPatttern = /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-_]+\.[a-zA-Z]{2,4}$/;
     if(adminName===""){
        alert("Full name cannot be empty. Please enter your full name correctly");
        return false;
    }
    if(adminUserName===""){
        alert("Username cannot be empty. Please enter a valid Username");
        return false
    }
    if(adminEmployeeId===""){
        alert("Id cannot be empty. Please enter a valid Id");
        return false
    }
    if (!emailPatttern.test(adminEmail)){
        alert("Invalid email address please enter a valid email address");
        return false;
    }
    if (adminDesignation==="Select Your Designation"){
        alert("Please select your Designation");
        return false;
    }
    if (adminFaculty==="Select Faculty"){
        alert("Please select your Faculty");
        return false;
    }
    if (faculty==="Select Faculty"){
        alert("Please select your Faculty");
        return false;
    }
    if (adminPassword===""){
        alert("Password cannot be empty. Please enter a valid Password");
        return false;
    }

    if (adminPassword!== adminRePassword){
        alert("Passwords do not match.");
        return false
    }
    const everythingIsFine = true;
    if (everythingIsFine===true) {
        //alert("Registration Success! 😀");
        document.getElementById("successModal").style.display = "flex";
        document.getElementById("box").style.display = "none";

    }

    var  adminPortal = new AdminPortal(adminName, adminUserName,adminDesignation,adminEmployeeId, adminEmail, adminFaculty, adminPassword);
    var adminPortalJson = JSON.stringify(adminPortal);
    console.log(adminPortalJson);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: adminPortalJson,
        redirect: 'follow'
    };

    fetch("http://localhost:8080/StudentPortal/admin", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

}
