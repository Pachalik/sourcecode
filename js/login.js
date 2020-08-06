function customAlert(bgcolor, text){
    if(bgcolor=="green"){
        document.getElementById("alert").style = "background-color: #27ae60";
    }else if(bgcolor=="red"){
        document.getElementById("alert").style = "background-color: #c0392b";
    }
    document.getElementById("alert").innerHTML = text;
}

function tryLogin(){
    // ID
    var allIds = ['pachalik', 'pioupia'];
    var idTested = document.getElementById('id').value;
    var passwordTested = document.getElementById('password').value;
    var recognized = false;
    var idNumber;
    var loggedIn = false;

    for(let i = 0; i<allIds.length; i++){
        if(allIds[i] == idTested.toLowerCase()){
            recognized = true;
            idNumber = i;
        }
    }
    
    if(recognized==true){
        console.log("ID reconnu");
    } else if(recognized==false){
        console.log("ID non reconnu")
        customAlert('red', 'ID non reconnu');
    }
    
    // Password
    var allPasswords = ['Le chameau aboie la caravane passe', "Du contrat social"];

    if(passwordTested==allPasswords[idNumber]){
        console.log("Mot de passe correct")
        customAlert('green', 'Mot de passe correct');
        loggedIn = true;
        sessionStorage.setItem("loggedIn", loggedIn);
        console.log('Vous êtes désormais connecté');
        document.location.href='testter.html';
    }else {
        console.log('Mot de passe incorrect');
        customAlert('red', 'Mot de passe incorrect');
    }

    // Permissions
    if(allIds[idNumber]=='pachalik'){
        // Permissions Pachalik
    }
}