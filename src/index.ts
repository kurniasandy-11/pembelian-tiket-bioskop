// Mengimpor modul readline bawaan Node.js untuk membaca input terminal.
import * as readline from "readline";

// ---------------------------------------------------------------------
// BAGIAN 1: TIPE DATA & PENYIMPANAN
// ---------------------------------------------------------------------

// Bentuk data satu pemesanan (entitas utama).
interface Pemesanan {
    id: number;        // ID unik (number)
    nama: string;      // Nama pemesan (string)
    film: string;      // Judul film (string)
    studio: string;    // Reguler / Premium / VVIP (string)
    jumlah: number;    // Jumlah tiket (number)
    member: boolean;   // Status member (boolean)
    total: number;     // Total bayar hasil hitung (number)
}

// Array penyimpanan data di memori (const: referensi tetap, isi boleh berubah).
const daftarPemesanan: Pemesanan[] = [];

// Penghitung ID berikutnya (let: nilainya terus bertambah).
let idBerikutnya: number = 1;

// Konstanta aturan diskon (const: nilai tetap).
const MINIMAL_DISKON: number = 50000;   // subtotal minimal agar member dapat diskon
const DISKON_MEMBER: number = 0.1;      // diskon dasar member 10%
const TAMBAHAN_GRUP: number = 0.05;     // tambahan diskon 5% untuk pemesanan grup (4 tiket atau lebih)

// Membuat antarmuka baca input dari terminal.
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

// Membungkus rl.question agar bisa dipakai dengan await (program menunggu jawaban).
function tanya(pertanyaan: string): Promise<string> {
    return new Promise((resolve) => rl.question(pertanyaan, resolve));
}