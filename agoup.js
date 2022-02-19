window.onscroll = function() {
    if (document.documentElement.scrollTop > 100) {
        document.querySelector('.go-top-container')
        .classList.add('show');
        
    }else {
        document.querySelector('.go-top-container')
        .classList.remove('show');
    }
}

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -140px 0px"

};

const faders = document.querySelectorAll('.before-scroll');
const titleFaders = (document.querySelectorAll('.before-scroll-heading'));
const appearOnScroll = new IntersectionObserver(function(entries,appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        else {
            entry.target.classList.add('fade-in');
            appearOnScroll.unobserve(entry.target);
        }
    })
},
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
titleFaders.forEach(titleFader => {
    appearOnScroll.observe(titleFader);
});

// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if(entry.isIntersecting) {
//             document.querySelector('.before-scroll').classList.add('fade-in')
//         }   
//     })
     
// })

// observer.observe(document.querySelector('#skills-container'));

//     const scroller = document.querySelector("#skills-row1");
//     scroller.addEventListener("scroll", event => {
//         if (scroller > 10) {
//             $('#skills-row1').addClass('fade-in');
//         }; 
// });


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



document.getElementById("first-project-img").addEventListener('mouseout',function(){ 
    document.getElementById('first-project-img').classList.add("opacity-back")
    console.log("mouseout event - opacity-back added")
}); 