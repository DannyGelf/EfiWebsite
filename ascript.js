const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

let window_weight = $(window).width();
    if (window_weight <= 768) {
        $('#icons-top').removeClass('justify-content-left');
        $('#icons-top').addClass('justify-content-center');
        $('#label-next').text($("#label-next").text().replace("Next Project →", "→"))
        $('#label-previous').text($("#label-previous").text().replace("← Previous Project", "←"))
    }
    else { 
      $('#icons-top').addClass('justify-content-left');
    }

    if (window_weight >= 769) {
      $('#second-project-image-div').addClass('order-12');
    }

