// //DOM Selection
// //document.getElementById -> Mengembalikan element
// const judul = document.getElementById("judul");
// judul.style.color = "red";
// judul.style.backgroundColor = "#ccc";
// judul.innerHTML = "Belajar JavaScript DOM";

// //document.getElementsByTagName -> Mengembalikan tag HTMLCollection
// const p = document.getElementsByTagName("p");

// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = "lightblue";
// }

// const h1 = document.getElementsByTagName("h1")[0];
// h1.style.fontSize = "30px";

// //document.getElementByClassName -> Mengembalikan tag HTMLCollection
// const p1 = document.getElementsByClassName("p1")[0];
// p1.innerHTML = "Hallo Saya Rifki Hikmali Yusup";

//document.querySelctor() -> Menghasilkan element
// const p4 = document.querySelector("#b  p");
// p4.style.color = "green";  //Manupulation menggunakan style
// p4.style.fontSize = "20px";

// const li2 = document.querySelector("section#b ul li:nth-child(2)");
// li2.style.backgroundColor = "orange";

// //document.querySelectorAll() -> Memilih semua element menghasilkan nodelist
// const p = document.querySelectorAll("p");
// for (var i = 0; i < p.length; i++) {
//   p[i].innerHTML = "Saya ubah melalui javascript"; // //Manipulation menggunakan innerHTML
// }

// //Megubah nood root
// const sectionb = document.getElementById("b");
// const p4 = sectionb.querySelector("p");
// p4.style.backgroundColor = "orange";

// //Manipulation
// const judul = document.getElementsByTagName("h1")[0];
// judul.setAttribute("name", "Rifki");
// judul.getAttribute("id");
// judul.removeAttribute("id");

// const p2 = document.querySelector(".p2");
// p2.classList.add("label");
// p2.classList.remove("label");
// p2.classList.toggle("label"); // //mengecek apakah di dalam element itu terdapat class label atau tidak, jika tidak ada maka tambahkan jika sudah ada maka hapus
// p2.classList.toggle("label");
// p2.classList.item(2);
// p2.classList.contains("dua");
// p2.classList.replace("p2", "pedua");

// //Membuat element baru
// const pBaru = document.createElement("p");
// const textPBaru = document.createTextNode("Paragraf Baru");
// //simpan tulisan kedalam paragraf
// pBaru.appendChild(textPBaru);
// //simpan pbaru di akhir section a
// const sectionA = document.getElementById("a");
// sectionA.appendChild(pBaru);

// const liBaru = document.createElement("li");
// const textliBaru = document.createTextNode("item baru");

// liBaru.appendChild(textliBaru);
// const ul = document.querySelector("section#b ul");
// const li2 = ul.querySelector("li:nth-child(2)");
// ul.insertBefore(liBaru, li2);

// const link = document.getElementsByTagName("a")[0];
// sectionA.removeChild(link);

// const sectionB = document.getElementById("b");
// const p4 = sectionB.querySelector("p");
// const h2baru = document.createElement("h2");
// const texth2Baru = document.createTextNode("h2 baru");
// h2baru.appendChild(texth2Baru);
// sectionB.replaceChild(h2baru, p4);

// //Events
// //link tentang Event list
// // https://developer.mozilla.org/en-US/docs/Web/API/Document#transition_events

// //onclick
// const p3 = document.querySelector(".p3");
// function ubahWarna() {
//   p2.style.backgroundColor = "lightblue";
// }

// const p2 = document.querySelector(".p2");
// p2.onclick = ubahWarna;

// //addEventListener
const p4 = document.querySelector("section#b p");
p4.addEventListener("click", function () {
  alert("ok");
  const ul = document.querySelector("section#b ul");
  const li = document.createElement("li");
  const textli = document.createTextNode("item 4");
  li.appendChild(textli);
  ul.appendChild(li);
});
