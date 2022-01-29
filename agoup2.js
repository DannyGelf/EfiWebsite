
function textToCopy (textToCopy) {
   
    var TempText = document.createElement("input");
    TempText.value = textToCopy;
    document.body.appendChild(TempText);
    TempText.select();
    
    document.execCommand("copy");
    document.body.removeChild(TempText);
    var copiedAlert = "Copied!"
    document.getElementById('copied-text').innerHTML = copiedAlert;
  }
  
  document.getElementById("email-div-id").addEventListener('mouseout',function(){ 
      console.log("copied-text-id elemnt: " ,document.getElementById('copied-text').innerHTML)
      document.getElementById('copied-text').innerHTML = 'Click to Copy Address';
  }); 