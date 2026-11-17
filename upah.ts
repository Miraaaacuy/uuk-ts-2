const inputPekerja = document.getElementById("pekerja") as HTMLInputElement;
const inputJamKerja = document.getElementById("jamKerja") as HTMLInputElement;
const inputUpahJam = document.getElementById("upahJam") as HTMLInputElement;
const btnSimpan = document.getElementById("btnSimpan") as HTMLButtonElement;
const hasil = document.getElementById("hasil") as HTMLParagraphElement;

const daftarPekerja: string[] = [];
const daftarJam: number[] = [];
const daftarUpahJam: number[] = [];
const daftarUpah: number[] = [];

function hitungUpah(jam: number, upah: number): number {
    return jam * upah;
}

function hitungTotalUpah(): number {
    let total: number = 0;
    for (let i: number = 0; i < daftarUpah.length; i++) {
        total = total + daftarUpah[i];
    }
    return total;
}

function tampilkanData(): void {
    hasil.innerHTML = "";

    for (let i: number = 0; i < daftarPekerja.length; i++) {
        hasil.innerHTML +=
            "Nama Pekerja: " + daftarPekerja[i] + "<br>" +
            "Jam Kerja: " + daftarJam[i] + "<br>" +
            "Upah per Jam: " + daftarUpahJam[i] + "<br>" +
            "Total Upah: " + daftarUpah[i] + "<br><br>";
    }

    hasil.innerHTML += "<b>Total Pengeluaran Upah: Rp" + hitungTotalUpah() + "</b>";
}

function resetInput(): void {
    inputPekerja.value = "";
    inputJamKerja.value = "";
    inputUpahJam.value = "";
}

function simpanData(): void {
    daftarPekerja.push(inputPekerja.value);
    daftarJam.push(Number(inputJamKerja.value));
    daftarUpahJam.push(Number(inputUpahJam.value));

    const indeks: number = daftarPekerja.length - 1;

    daftarUpah.push(hitungUpah(daftarJam[indeks], daftarUpahJam[indeks]));

    tampilkanData();
    resetInput();
}

btnSimpan.addEventListener("click", simpanData);
