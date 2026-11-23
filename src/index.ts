console.log("halo console"); 
interface Item {
  nama: string;
  harga: number;
  jumlah: number;
}

function hitungTotal(daftarBelanja: Item[]): number {
  return daftarBelanja.reduce((total, item) => total + item.harga * item.jumlah, 0);
}

const keranjang: Item[] = [
  { nama: "Kopi", harga: 15000, jumlah: 2 },
  { nama: "Roti", harga: 10000, jumlah: 1 },
];

console.log(`Total belanja: Rp${hitungTotal(keranjang).toLocaleString("id-ID")}`);