function retrieveStudentData(){
    var adminUserName = document.getElementById("userName").value;
    var adminPassword = document.getElementById("password").value;
    localStorage.setItem("Admin UserName ", adminUserName);
    localStorage.setItem("Admin Password ", adminPassword);
    var url=`http://localhost:8080/StudentPortal/admin/${adminUserName}`;

    fetch(url)
        .then(response => response.json())
        .then(data =>{
            if(data.length===0){
                alert("No data found")
            }
            else{
                var matchingStudent = data.find(student => student.adminPassword === adminPassword);

                if (matchingStudent) {
                    var alertText = `Hi ${matchingStudent.adminName}\n`;
                    alert(alertText);
                    setTimeout(function() {
                        window.location.href = "index-adminInterface.html";
                    }, 2000);
                    localStorage.setItem("id", matchingStudent.id);
                    localStorage.setItem("email", matchingStudent.adminEmail);   
 
   
                } else {
                    alert("Password not match");
                } 
            }
        })
        .catch(error => console.log('error', error))
}