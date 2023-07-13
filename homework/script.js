

function oranSec(yuzde) {
  let girilenTutar = prompt("Lütfen hesaplanacak tutarı girin:");
  if (girilenTutar !== null) {
    var hesaplananMiktar = (parseFloat(girilenTutar) * yuzde) / 100;
    console.log(hesaplananMiktar.toFixed(2)); // İşlem sonucunu 2 basamakla sınırlayarak konsola yazdırabilirsiniz
  }
}
function oranSec(yuzde) {
  var girilenTutar = prompt("Lütfen hesaplanacak tutarı girin:");
  if (girilenTutar !== null) {
    var hesaplananMiktar = (parseFloat(girilenTutar) * yuzde) / 100;
    console.log(hesaplananMiktar.toFixed(2));

    // Tıklanan bölmenin rengini değiştir
    var tıklananBolme = document.getElementById("bolme" + yuzde);
    tıklananBolme.classList.add("active");

    // Diğer bölme öğelerinden aktif sınıfını kaldır
    var digerBolmeler = document.querySelectorAll(".bolme:not(#bolme" + yuzde + ")");
    digerBolmeler.forEach(function(bolme) {
      bolme.classList.remove("active");
    });
  }
}

function yuzdeGir() {
  var girilenYuzde = prompt("Lütfen yüzde değerini girin:");
  if (girilenYuzde !== null) {
    console.log(girilenYuzde);

    // Tıklanan bölmenin rengini değiştir
    var tıklananBolme = document.getElementById("bolme4");
    tıklananBolme.classList.add("active");

    // Diğer bölme öğelerinden aktif sınıfını kaldır
    var digerBolmeler = document.querySelectorAll(".bolme:not(#bolme4)");
    digerBolmeler.forEach(function(bolme) {
      bolme.classList.remove("active");
    });
  }
}




