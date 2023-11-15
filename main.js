const prompt = require("prompt-sync")();

let score = 0;
let jawaban_benar = 0;
let jawaban_salah = 0;
let point_per_soal = 1;

let soal = [
  {
    q: "Yang merupakan member JKT 48?",
    o: ["Jokowi", "Freya", "Nadin Amizah", "Igun Mama Takut"],
    a: "B",
  },
  {
    q: "Nama kakak Upin dan Ipin adalah...",
    o: ["Kak Rose", "Kak Jeane", "Monkey D. Luffy", "Igun Mama Takut"],
    a: "A",
  },
  {
    q: "Nama ayah luffy adalah...",
    o: ["Monky D. Dragon", "Monky D. Grap", "Ivan Gunawan", "Crocodile"],
    a: "A",
  },
  {
    q: "Nasi Padang berasal dari...",
    o: ["Bali", "Maluku", "Padang", "Sulawesi"],
    a: "C",
  },
  {
    q: "Siapa nama Navigator di Mugiwara Crew...",
    o: ["Nami", "Robin", "Zoro", "Chopper"],
    a: "A",
  },
  // Tambahkan 3 soal lainnya
];

let nama = prompt("Input nama: ");

// Loop untuk setiap soal
for (let i = 0; i < soal.length; i++) {
  console.log("\nSoal " + (i + 1) + ": " + soal[i].q);

  // Menampilkan pilihan jawaban
  for (let j = 0; j < soal[i].o.length; j++) {
    console.log(String.fromCharCode(65 + j) + ". " + soal[i].o[j]);
  }

  // Menerima jawaban dari pengguna
  let jawaban = prompt("Masukkan pilihan jawaban yang benar : ").toUpperCase();

  // Memeriksa jawaban
  if (jawaban === soal[i].a) {
    console.log("Jawaban Anda benar!");
    score += point_per_soal;
    jawaban_benar++;
  } else {
    console.log("Jawaban Anda salah. Jawaban yang benar adalah: " + soal[i].a);
    jawaban_salah++;
  }
}

console.log("Kuis selesai");
console.log("\n");
console.log("Statistic Kuis");
console.log("Nama\t\t:", nama);
console.log("Score\t\t:", score);
console.log("Jawaban benar\t:", jawaban_benar);
console.log("Jawaban salah\t:", jawaban_salah);
