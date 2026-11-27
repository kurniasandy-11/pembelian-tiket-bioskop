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
// ---------------------------------------------------------------------
// BAGIAN 2: FUNGSI BERTIPE
// ---------------------------------------------------------------------

// Menentukan harga satu tiket dengan switch (3 case + default).
function hitungHarga(studio: string): number {
    let harga: number = 0;
    switch (studio) {
        case "Reguler": harga = 35000; break;
        case "Premium": harga = 50000; break;
        case "VVIP": harga = 65000; break;
        default: harga = 0;   // studio tidak dikenal
    }
    return harga;
}

// Menghitung total bayar dengan if bersarang 3 tingkat dan operator compound.
function hitungTotal(harga: number, jumlah: number, member: boolean): number {
    let total: number = harga;   // mulai dari harga satuan
    total *= jumlah;             // compound *= : kalikan jumlah tiket
    if (member) {                                    // tingkat 1: hanya member
        if (total >= MINIMAL_DISKON) {               // tingkat 2: subtotal cukup
            if (jumlah >= 4 && harga > 0) {          // tingkat 3: grup (kondisi majemuk &&)
                total -= total * (DISKON_MEMBER + TAMBAHAN_GRUP);   // compound -= ; operator + : diskon 15%
            } else {
                total -= total * DISKON_MEMBER;      // diskon 10%
            }
        }
    }
    return Math.round(total);                        // dibulatkan ke rupiah terdekat
}

// Menghitung poin member: tiap Rp10.000 = 1 poin (operator % dan /).
function hitungPoin(total: number, member: boolean): number {
    if (!member || total < 10000) {                  // operator ! , || , dan <
        return 0;
    }
    const sisa: number = total % 10000;              // modulus
    let poin: number = total - sisa;                 // pengurangan
    poin /= 10000;                                   // compound /= : jadikan jumlah poin
    return poin;
}

// Membuat ID baru yang unik (fungsi tanpa parameter).
function buatIdBaru(): number {
    const idBaru: number = idBerikutnya;
    idBerikutnya += 1;                               // compound +=
    return idBaru;
}

// Menampilkan menu utama (fungsi void tanpa parameter).
function tampilkanMenu(): void {
    console.log("\n========== PEMESANAN TIKET BIOSKOP ==========");
    // Jika sudah ada data tampilkan jumlahnya, jika belum beri tahu pengguna.
    if (daftarPemesanan.length === 0) {
        console.log("Belum ada data pemesanan.");
    } else {
        console.log("Jumlah data pemesanan: " + daftarPemesanan.length);
    }
    console.log("1. Tambah Pemesanan   (Create)");
    console.log("2. Lihat Semua Data   (Read)");
    console.log("3. Detail per ID      (Read)");
    console.log("4. Ubah Pemesanan     (Update)");
    console.log("5. Hapus Pemesanan    (Delete)");
    console.log("6. Cari Pemesanan     (Search)");
    console.log("0. Keluar");
}

// Pesan sementara untuk fitur yang belum dibuat (fungsi void dengan parameter).
function belumTersedia(fitur: string, progress: number): void {
    console.log("[INFO] Fitur " + fitur + " akan dibuat pada Progress " + progress + ".");
}

// Mengisi data awal (seed) memakai loop for...of dan push.
function isiDataAwal(): void {
    const contoh = [
        { nama: "Budi", film: "Petualangan Langit", studio: "Reguler", jumlah: 2, member: false },
        { nama: "Siti", film: "Misteri Rumah Tua", studio: "Premium", jumlah: 3, member: true },
        { nama: "Rani", film: "Cinta di Kota Malang", studio: "VVIP", jumlah: 4, member: true },
        { nama: "Andi", film: "Aksi Terakhir", studio: "Premium", jumlah: 1, member: false },
        { nama: "Dewi", film: "Petualangan Langit", studio: "Reguler", jumlah: 1, member: true }
    ];
    for (const c of contoh) {                        // loop for...of
        // Hanya data yang masuk akal yang disimpan (>, <=, !==, &&).
        if (c.jumlah > 0 && c.jumlah <= 10 && c.studio !== "") {
            const harga = hitungHarga(c.studio);
            daftarPemesanan.push({ id: buatIdBaru(), ...c, total: hitungTotal(harga, c.jumlah, c.member) });
        }
    }
}