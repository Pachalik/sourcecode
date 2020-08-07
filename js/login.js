function tryLogin(){
    // ID
    var allIds = ['pachalik', 'pioupia', "bendchu"];
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
    var allPasswords = ['choucroute', "Du contrat social", "Bendchu54"];

    if(passwordTested==allPasswords[idNumber]){
        console.log("Mot de passe correct")
        customAlert('green', 'Mot de passe correct');
        loggedIn = true;
        var id = allIds[idNumber];
        sessionStorage.setItem("loggedIn", loggedIn);
        console.log('Vous êtes désormais connecté en tant que : ' + id);
        
    }else {
        console.log('Mot de passe incorrect');
        customAlert('red', 'Mot de passe incorrect');
    }

    // Permissions
    if(allIds[idNumber]=='pachalik'){
        
    }else if(allIds[idNumber]=='pioupia'){
        // Permissions Pioupia
    }else if (allIds[idNumber]=='bendchu'){
        document.location.href = "/sourcecode/guitar/methode.html";
    }
}