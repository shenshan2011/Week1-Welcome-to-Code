// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

let i = 2;

console.log("LOOP PERTAMA");
while (i <= 10) {
    console.log(i);  // Cetak nilai i dulu
    i += 2;          // Naikkan angka dengan 2
}

i = 10;  // Reset nilai i agar mulai dari 10

console.log("LOOP KEDUA");
while (i >= 2) {
    console.log(i);  // Cetak nilai i dulu
    i -= 2;          // Kurangi angka dengan 2
}
