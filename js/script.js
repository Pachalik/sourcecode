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
  