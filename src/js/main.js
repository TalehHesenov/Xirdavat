let dark = document.getElementById("dark");
document.addEventListener("DOMContentLoaded", function() {
  var dark = document.getElementById("dark");
  var MainImg = document.getElementById("MainImg");
  var smallimg = document.querySelectorAll(".small-img");

  // Küçük resimlerin tıklama olaylarına dinleyiciler ekleyin
  smallimg.forEach(function(img, index) {
      img.onclick = function() {
          MainImg.src = img.src;
      }
  });
});





dark.addEventListener("click", function () {
    document.body.classList.toggle("dark_theme");
  });



  document.addEventListener('DOMContentLoaded', function () {
    // Menü simgesini seçin
    const barsButton = document.querySelector('.bars_button');
    const close_button = document.querySelector('.close_button');
    // Menü listesini seçin
    const menu = document.querySelector('nav ul');



    // Menü simgesine tıklama olayı ekleyin
    barsButton.addEventListener('click', function () {
        // Menü açık mı kapalı mı kontrol edin
        if (menu.style.right === '0px') {
            // Menü açık ise kapat
            menu.style.right = '-300px';
        } else {
            // Menü kapalı ise aç
            menu.style.right = '0px';
        }
    });


    close_button.addEventListener('click', function () {
      // Menü açık mı kapalı mı kontrol edin
      if (menu.style.right === '0px') {
          // Menü açık ise kapat
          menu.style.right = '-300px';
      } else {
          // Menü kapalı ise aç
          menu.style.right = '0px';
      }
  });
});