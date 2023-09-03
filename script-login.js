function retrieveStudentData(){
    var userName = document.getElementById("userName").value;
    var password = document.getElementById("password").value;
    localStorage.setItem("userName", userName);
    localStorage.setItem("password", password);
    var url=`http://localhost:8080/StudentPortal/${userName}`;

    

    fetch(url)
        .then(response => response.json())
        .then(data =>{
            if(data.length===0){
                alert("No data found")
            }
            else{
                var matchingStudent = data.find(student => student.password === password);

                if (matchingStudent) {
                    var alertText = `Hi ${matchingStudent.name}\n`;
                    alert(alertText);
                    setTimeout(function() {
                        window.location.href = "http://127.0.0.1:5500/index-studentInterface.html";
                    }, 2000);
                    localStorage.setItem("id", matchingStudent.id);
                    localStorage.setItem("email", matchingStudent.email);   
 
   
                } else {
                    alert("Password not match");
                } 
            }
        })
        .catch(error => console.log('error', error))
}
