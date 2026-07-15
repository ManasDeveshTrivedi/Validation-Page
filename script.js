class User{ 
    validate(username,password){
        if(username==="Manas" && password==="123"){
            return "Login Successful";
        }
        return "No Access";
    }
}
function login(){
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    let savedUsername=localStorage.getItem("username");
    let savedPassword=localStorage.getItem("password");
    if(username===savedUsername && password===savedPassword){
        alert("Log In Successful!");
    }else{
        alert("Enter correct details");
    }
}

// NOTE Class is an BLUEPRINT
// NOTE new User is an new object
 