import * as readline from "readline";

// =====================================================================
// BLOK 1: TIPE DATA & KONSTANTA
// =====================================================================

// Tipe gabungan (union) untuk jenis studio yang tersedia.
type JenisStudio = "Reguler" | "Premium" | "VVIP";

// Tipe gabungan untuk jenis hari tayang yang memengaruhi harga tiket.
type JenisHari = "Weekday" | "Weekend" | "Hari Libur";

// Tipe gabungan untuk status pembayaran pemesanan (dipakai sebagai filter Search).
type StatusPemesanan = "Lunas" | "Belum Lunas";

// Entitas utama aplikasi: satu baris data pemesanan tiket.
interface Pemesanan {
    id: number;                 // ID unik (number) yang dibuat otomatis
    namaPemesan: string;        // Nama pemesan (string)
    umur: number;               // Umur pemesan (number)
    member: boolean;            // Status member (boolean)
    film: string;               // Judul film yang dipesan
    studio: JenisStudio;        // Jenis studio
    hari: JenisHari;            // Jenis hari tayang
    jumlahTiket: number;        // Banyaknya tiket yang dipesan
    hargaSatuan: number;        // Harga satu tiket (hasil hitung)
    subtotal: number;           // harga satuan x jumlah (hasil hitung)
    diskon: number;             // Potongan harga member (hasil hitung)
    totalBayar: number;         // subtotal - diskon (hasil hitung)
    poin: number;               // Poin member (hasil hitung)
    status: StatusPemesanan;    // Status pembayaran
}

// Data masukan pengguna: field hasil hitung & id belum ada, dibuat oleh program.
interface InputPemesanan {
    namaPemesan: string;
    umur: number;
    member: boolean;
    film: string;
    studio: JenisStudio;
    hari: JenisHari;
    jumlahTiket: number;
    status: StatusPemesanan;
}
console.log("hallo console");
console.log("hallo console");
console.log("haiii dunia");
console.log("idgzudufu");
console.log("halo console");
