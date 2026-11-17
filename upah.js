"use strict";
const inputPekerja = document.getElementById("pekerja");
const inputJamKerja = document.getElementById("jamKerja");
const inputUpahJam = document.getElementById("upahJam");
const btnSimpan = document.getElementById("btnSimpan");
const hasil = document.getElementById("hasil");
const daftarPekerja = [];
const daftarJam = [];
const daftarUpahJam = [];
const daftarUpah = [];
function hitungUpah(jam, upah) {
    return jam * upah;
}
function hitungTotalUpah() {
    let total = 0;
    for (let i = 0; i < daftarUpah.length; i++) {
        total = total + daftarUpah[i];
    }
    return total;
}
function tampilkanData() {
    hasil.innerHTML = "";
    for (let i = 0; i < daftarPekerja.length; i++) {
        hasil.innerHTML +=
            "Nama Pekerja: " + daftarPekerja[i] + "<br>" +
                "Jam Kerja: " + daftarJam[i] + "<br>" +
                "Upah per Jam: " + daftarUpahJam[i] + "<br>" +
                "Total Upah: " + daftarUpah[i] + "<br><br>";
    }
    hasil.innerHTML += "<b>Total Pengeluaran Upah: Rp" + hitungTotalUpah() + "</b>";
}
function resetInput() {
    inputPekerja.value = "";
    inputJamKerja.value = "";
    inputUpahJam.value = "";
}
function simpanData() {
    daftarPekerja.push(inputPekerja.value);
    daftarJam.push(Number(inputJamKerja.value));
    daftarUpahJam.push(Number(inputUpahJam.value));
    const indeks = daftarPekerja.length - 1;
    daftarUpah.push(hitungUpah(daftarJam[indeks], daftarUpahJam[indeks]));
    tampilkanData();
    resetInput();
}
btnSimpan.addEventListener("click", simpanData);
