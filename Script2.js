const btn = document.getElementById("btn-ubahWarna");
btn.onclick = function () {
  //   document.body.style.backgroundColor = "lightblue";
  //   document.body.setAttribute("class", "biru-muda");
  document.body.classList.toggle("biru-muda");
  d;
};

// Acak warna
const btn2 = document.createElement("button");
const textbtn = document.createTextNode("Acak Warna");
btn2.appendChild(textbtn);
btn2.setAttribute("type", "button");
btn.after(btn2);
btn2.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1); // Menghasilkan nilai 255
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + " ," + b + ")";
});

// Slide ubah warna
const sMerah = document.querySelector("input[name=Slide-Merah");
const sHijau = document.querySelector("input[name=Slide-Hijau");
const sBiru = document.querySelector("input[name=Slide-Biru");

sMerah.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sHijau.value;
  document.body.style.backgroundColor =
    " rgb(" + r + ", " + g + " , " + b + ")";
});

sHijau.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sHijau.value;
  document.body.style.backgroundColor =
    " rgb(" + r + ", " + g + " , " + b + ")";
});

sBiru.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor =
    " rgb(" + r + ", " + g + " , " + b + ")";
});
