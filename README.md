# Sistem Pembelian Tiket Bioskop

Proyek UAS Pemrograman Dasar, T1-C Kelompok 5

## Proposal Singkat

Pencatatan pesanan bioskop secara manual rawan salah harga, salah menghitung diskon member, melewatkan aturan umur, dan menyulitkan pencarian data. Aplikasi console TypeScript ini membantu petugas kasir/admin loket mencatat pesanan tiket, makanan, minuman, dan fasilitas dengan lebih cepat dan akurat.

**Entitas Data: Pesanan**

| Tipe | Properti |
|---|---|
| string | id, namaPemesan, layanan, pesanan |
| number | umur, harga, jumlah, subtotal, diskon, totalBayar |
| boolean | member |

**Fitur**

| Fitur | Keterangan |
|---|---|
| Create | Menambah pesanan dengan validasi input dan ID unik |
| Read | Menampilkan semua pesanan dan detail berdasarkan ID |
| Update | Mengubah pesanan berdasarkan ID |
| Delete | Menghapus pesanan dengan konfirmasi Y/N |
| Search | Mencari berdasarkan nama pemesan atau nama pesanan, dengan filter layanan dan status member |

**Decomposition Awal:** inisialisasi data, menu utama, input dan validasi, pemilihan layanan, perhitungan harga dan diskon, Create, Read, Update, Delete, dan Search.

## Kontribusi Anggota

| Nama & NIM | Akun GitHub | Fitur / Bagian yang Dikerjakan | Link Pull Request Utama |
|---|---|---|---|
| Muhammad Kurnia Sandy (263140701111025) | @kurniasandy-11 | Setup repo, struktur data, data awal, menu utama, Create, Delete, merge akhir ke main. Laporan: sampul, 1.5 dan screenshot (menu, tambah, hapus), 3.1 | Menyusul |
| Mufida Nurlita Aulia (263140701111009) | @mufida-dev | Validasi input, Read, Update, konfirmasi Y/N. Laporan: proposal, 1.1, 1.3, 1.4, flowchart, 1.5 dan screenshot (tampil dan ubah data) | https://github.com/kurniasandy-11/pembelian-tiket-bioskop/tree/Mufida-Nurlita-Aulia |
| Fitroatul Qomariah (263140701111010) | @fifi-prog | Hitung subtotal, diskon, total bayar, ID unik, Search. Laporan: 1.2, tabel 3.2, README final, 1.5 dan screenshot pencarian, bukti kontribusi GitHub | https://github.com/kurniasandy-11/pembelian-tiket-bioskop/tree/Fitroatul-Qomariah |
