function customAlert(bgcolor, text){
  if(bgcolor=="green"){
      document.getElementById("alert").style = "background-color: #27ae60";
  }else if(bgcolor=="red"){
      document.getElementById("alert").style = "background-color: #c0392b";
  }
  document.getElementById("alert").innerHTML = text;
}


// Retourne true si le navigateur est internet explorer et false si ce n'est pas le cas
function isIE() {
    ua = navigator.userAgent;
    /* MSIE used to detect old browsers and Trident used to newer ones*/
    var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
    
    return is_ie; 
  }
  if (isIE()){
      console.log('It is InternetExplorer');
      document.location.href="fuck-you-ie.html";
  }else{
    //   Merci mon Dieu
      console.log('It is NOT InternetExplorer');
  }
  isIE();
  