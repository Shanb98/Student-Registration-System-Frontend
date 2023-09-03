function StudentPortal(name, userName, email, faculty, password) {
    this.name = name;
    this.userName = userName;
    this.email = email;
    this.faculty = faculty;
    this.password = password;
}
function submitFrom() {
    var name = document.getElementById("name").value;
    var userName = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var faculty = document.getElementById("faculty").value;
    var password = document.getElementById("password").value;
    var rePassword = document.getElementById("rePassword").value;

    let emailPatttern;
    emailPatttern = /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-_]+\.[a-zA-Z]{2,4}$/;
     if(name===""){
        alert("Full name cannot be empty. Please enter your full name correctly");
        return false;
    }
    if(userName===""){
        alert("Username cannot be empty. Please enter a valid Username");
        return false
    }
    if (!emailPatttern.test(email)){
        alert("Invalid email address please enter a valid email address");
        return false;
    }

    if (faculty==="Select Faculty"){
        alert("Please select your Faculty");
        return false;
    }
    if (password===""){
        alert("Password cannot be empty. Please enter a valid Password");
        return false;
    }

    if (password!== rePassword){
        alert("Passwords do not match.");
        return false
    }
    const everythingIsFine = true;
    if (everythingIsFine===true) {
        //alert("Registration Success! 😀");
        document.getElementById("successModal").style.display = "flex";
        document.getElementById("box").style.display = "none";
       // setTimeout(function() {
       //     window.location.href = "http://127.0.0.1:5500/index-login.html";
        //}, 2000);
    }


    var studentPortal = new StudentPortal(name, userName, email, faculty, password);


    var studentPortalJson = JSON.stringify(studentPortal);
    console.log(studentPortalJson);

//...........................................................

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: studentPortalJson,
        redirect: 'follow'
    };

    fetch("http://localhost:8080/StudentPortal", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

}