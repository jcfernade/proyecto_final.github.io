function movePlane() {
    var planeIcon = document.querySelector('.plane-icon');
    planeIcon.style.animation = 'movePlane 2s linear infinite';
}

function stopPlaneMovement() {
    var planeIcon = document.querySelector('.plane-icon');
    planeIcon.style.animation = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
  showSlides();
});

var slideIndex = 0;

function showSlides() {
  var slides = document.getElementsByClassName("mySlides");

  for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
      slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000);
}

function plusSlides(n) {
  showSlidesManually(slideIndex += n);
}

function showSlidesManually(n) {
  var slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {
      slideIndex = 1;
  }

  if (n < 1) {
      slideIndex = slides.length;
  }

  for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

var nombreUsuario = prompt('Ingresa tu nombre');
        document.getElementById('userGreeting').innerHTML = 'Elige tu proximo viaje ' + nombreUsuario;


        document.addEventListener('DOMContentLoaded', function () {
          const viajes = document.querySelectorAll('.viaje');
  
          viajes.forEach(function (viaje) {
              viaje.addEventListener('click', function () {
                  const titulo = viaje.dataset.titulo;
                  const imagen = viaje.dataset.imagen;
  
                  window.location.href = `viajes.html?titulo=${encodeURIComponent(titulo)}&imagen=${encodeURIComponent(imagen)}`;
              });
          });
      });