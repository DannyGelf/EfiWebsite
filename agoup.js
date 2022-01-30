window.onscroll = function() {
    if (document.documentElement.scrollTop > 100) {
        document.querySelector('.go-top-container')
        .classList.add('show');
        
    }else {
        document.querySelector('.go-top-container')
        .classList.remove('show');
    }
    // if (document.documentElement.scrollTop > 120) {
    //     $('.myskills1').addClass('myskills-bounce');
    // }
    
}

document.querySelector('.go-top-container')
.addEventListener('click', () => {
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    });
});

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

