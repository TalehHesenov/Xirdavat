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