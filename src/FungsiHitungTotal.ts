// Menghitung subtotal, diskon, dan total bayar.
// Member mendapat diskon 10% jika subtotal minimal Rp50.000.
function hitungTotalBayar(
    harga: number,
    jumlah: number,
    member: boolean
): { subtotal: number; diskon: number; totalBayar: number } {
    // Memastikan harga dan jumlah valid.
    if (harga < 0 || !Number.isInteger(jumlah) || jumlah <= 0) {
        throw new Error("Harga atau jumlah tidak valid.");
    }

    // Menghitung subtotal dengan operator perkalian.
    const subtotal = harga * jumlah;

    // Menghitung diskon jika memenuhi syarat.
    let diskon = 0;
    if (member && subtotal >= 50000) {
        diskon = subtotal * 0.10;
    }

    // Menghitung total bayar dengan operator pengurangan.
    const totalBayar = subtotal - diskon;

    return { subtotal, diskon, totalBayar };
}