/*--------------------Belajar Alert, Confirm, dan Prompt------------------*/
// alert("hello word");
// var ulang = true;

// while (ulang === true) {
//   var nama = prompt("nama :");
//   alert("Nama anda adalah " + nama);

//   ulang = confirm("Ingin mengulang kembali??");
// }

// if (berapa === true) {
//   alert('Kamu menekan "OK"');
// } else {
//   alert('Kamu menekan "CANCEL"');
// }

/*-------------------Belajar If Else-------------------*/
// var angkot = 10;

// for (var noAngkot = 1; noAngkot <= angkot; noAngkot++) {
//   if (noAngkot <= 6 && noAngkot !== 5) {
//     console.log("angkot no. " + noAngkot + " beroperasi dengan baik");
//   } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
//     console.log("angkot no. " + noAngkot + " sedang lembur");
//   } else {
//     console.log("angkot no. " + noAngkot + " sedang tidak beroperasi");
//   }
// }

/*-------------------Belajar IF dalam IF-------------------*/
// var angka = prompt("Masukan angka:");

// if (angka % 2 === 0) {
//   alert(angka + " adalah bilangan genap");
// } else if (angka % 2 === 1) {
//   alert(angka + " adalah bilangan ganjil");
// } else {
//   alert("yang anda masukan bukan angka");
// }

/*-------------------Belajar Perulangan While-------------------*/
// var tanya = true;
// while (tanya) {
//   //menampilkan pilihan orang
//   var p = prompt("Pilih : gajah, semut, orang");
//   //menampilkan pilihan computer
//   var comp = Math.random();
//   //math.random digunakan untuk mengambil angka secara acak
//   if (comp < 0.34) {
//     comp = "gajah";
//   } else if (comp >= 0.34 && comp < 0.67) {
//     comp = "orang";
//   } else {
//     comp = "semut";
//   }
//   //rules
//   var hasil = "";

//   if (p == comp) {
//     hasil = "SERI!";
//   } else if (p == "gajah") {
//     hasil = comp == "orang" ? "MENANG!" : "KALAH!"; //ternary
//   } else if (p == "orang") {
//     hasil = comp == "gajah" ? "KALAH!" : "MENANG!"; //ternary
//   } else if (p == "semut") {
//     hasil = comp == "orang" ? "KALAH!" : "MENANG!"; //ternary
//   } else {
//     hasil = "Tidak ada dalam pilihan!!";
//   }
//   //menampilkan hasilnya
//   alert(
//     "Kamu memilih : " + p + "\nKoputer memilih : " + comp + "\nKamu " + hasil
//   );
//   tanya = confirm("Apakah kamu mau main lagi?");
// }
/*--------------------Belajar Function------------------*/
// function tambah(a, b) {
//   return a + b;
// }
// var a = parseInt(prompt("Masukan nilai ke 1"));
// var b = parseInt(prompt("Masukan nilai ke 2"));
// var total = tambah(a, b);
// console.log(total);
/*--------------------------------------*/
// function tambah() {
//   var hasil = 0;
//   for (var i = 0; i < arguments.length; i++) {
//     hasil += arguments[i];
//   }
//   return hasil;
// }
// var coba = tambah(1, 2, 3);
// console.log(coba);
/*--------------------Belajar Array----------------------*/
//Menambah array
// var arr = [];
// arr [0] = "Rifki";
// arr [1] = "Hikmali";
// arr [2] = "Yusup";
// arr [4] = "Jaja";

//Menghapus array
// var arr = ["Rifki", "Hikmali", "Yusup"];
// arr [1] = undefined;

//Menampilkan isi array
// var arr = ["Rifki", "Hikmali", "Yusup"];

// for (var i = 0; i < arr.length; i++) {
//   console.log("Mahasiswa Ke-" + (i + 1) + " : " + arr[i]);
// }

//Method pada join
// var arr = ["Rifki", "Hikmali", "Yusup"];
// console.log(arr.join(" - "));

//Method Push (Menambahkan array di terakhir)
// var arr = ["Rifki", "Hikmali", "Yusup"];
// arr.push("Jaja");
// console.log(arr.join(" - "));

//Pop(Menghapus array di terakhir)
// var arr = ["Rifki", "Hikmali", "Yusup"];
// arr.pop();
// console.log(arr.join(" - "));

//Unshift (Menambahkan array di pertama)
// var arr = ["Rifki", "Hikmali", "Yusup"];
// arr.unshift("Jaja");
// console.log(arr.join(" - "));

//shift (Menghapus array di pertama)
// var arr = ["Rifki", "Hikmali", "Yusup"];
// arr.shift();
// console.log(arr.join(" - "));

//Splice (Menyisipkan array di tengah-tengah)
//Rumus Splice (indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, .....)
// var arr = ["Rifki", "Hikmali", "Yusup"];
// arr.splice(2, 0, "Jaja");
// console.log(arr.join(" - "));

//Slice (Mengiris array menjadi array baru)
// rumus Slice (indexBerapaAwal, indexberapaAkhir)
// var arr = ["Rifki", "Hikmali", "Yusup", "Jaja"];
// var arr2 = arr.slice(1, 3);
// console.log(arr2.join(" - "));

//Foreach
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// var nama = ["Rifki", "Hikmali", "Yusup", "Jaja"];
// nama.forEach(function (e, i) {
//   console.log("Mahasiswa ke-" + (i + 1) + " adalah : " + e);
// });

//Map (Mengembalikan nilaio array)
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// var angka2 = angka.map(function (e) {
//   return e * 2;
// });
// console.log(angka2);

//sort
// var angka = [1, 2, 10, 7, 16, 8, 5, 6, 3, 4];
// angka.sort(function (a, b) {
//   return a - b;
// });
// console.log(angka.join(" - "));

//Filter
// var angka = [1, 2, 10, 7, 16, 8, 5, 6, 3, 4];
// var angka2 = angka.filter(function (x) {
//   return x > 5;
// });
// console.log(angka2.join(" - "));

//Find
// var angka = [1, 2, 10, 7, 16, 8, 5, 6, 3, 4];
// var angka2 = angka.find(function (x) {
//   return x > 5;
// });
// console.log(angka2);

/*--------------------Belajar Object----------------------*/
//Object Literal
// var mhs = {
//   nama: "Rifki",
//   umur: 21,
//   ipk: [2.98, 3.1, 3.3],
// };

//Function Declaration
// function ObjectMahasiswa(nama, nim, email, jurusan) {
//   var mhs = {};
//   mhs.nama = nama;
//   mhs.nim = nim;
//   mhs.email = email;
//   mhs.jurusan = jurusan;

//   return mhs;
// }
// var mhs2 = ObjectMahasiswa(
//   "Rifki",
//   22110380,
//   "hikmaly123@gmail.com",
//   "sistem informasi"
// );

//Constructor
function Mahasiswa(nama, nim, email, jurusan) {
  this.nama = nama;
  this.nim = nim;
  this.email = email;
  this.jurusan = jurusan;
}

var mhs3 = new Mahasiswa(
  "Rifki",
  "22110380",
  "hikmaly123@gmail.com",
  "Sistem Informasi"
);
