console.log("halo console");

interface Film {
  judul: string;
  jam: string;
  harga: number;
}

const film1: Film = {
  judul: "Petualangan Senja",
  jam: "14:00",
  harga: 45000,
};

const jumlahTiket: number = 2;
const total: number = film1.harga * jumlahTiket;

console.log(`Film   : ${film1.judul} (${film1.jam})`);
console.log(`Jumlah : ${jumlahTiket} tiket`);
console.log(`Total  : Rp${total}`);