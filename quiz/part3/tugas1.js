// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

let i = 1;

console.log("LOOP PERTAMA");
while (i <= 10) {
    console.log(i);  
    i += 1;         
}

i = 10;  

console.log("LOOP KEDUA");
while (i >= 1) {
    console.log(i);  
    i -= 1;          
}
