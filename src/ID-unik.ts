// Menyimpan nomor urut terakhir untuk setiap kode layanan.
const nomorTerakhir: { [kode: string]: number } = {};

// Memetakan nama layanan ke kode singkat.
function kodeLayanan(layanan: string): string {
    switch (layanan) {
        case "Tiket Bioskop": return "TKT";
        case "Makanan": return "MKN";
        case "Minuman": return "MNM";
        case "Fasilitas Bioskop": return "FSL";
        default: return "TRX";
    }
}

// Membuat ID berurutan per layanan, contoh: TKT-001, TKT-002, MKN-001, dst.
function buatIdPemesanan(layanan: string): string {
    const kode = kodeLayanan(layanan);

    // Menaikkan nomor urut layanan ini (mulai dari 1 jika belum ada).
    nomorTerakhir[kode] = (nomorTerakhir[kode] ?? 0) + 1;

    // Mengubah nomor menjadi tiga digit, misalnya 1 menjadi "001".
    const nomor = String(nomorTerakhir[kode]).padStart(3, "0");

    return `${kode}-${nomor}`;
}