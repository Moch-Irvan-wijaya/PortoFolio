# Portofolio Mochammad Irvan Wijaya

Website portofolio pribadi dengan tema **modern gelap (dark glassmorphism)** yang dibangun dari HTML, CSS, dan JavaScript murni, tanpa framework dan tanpa proses build.

**Demo:** https://moch-irvan-wijaya.github.io/PortoFolio/

![Foto profil](assets/foto.jpg)

## Tentang

Saya Irvan, mahasiswa semester 5 Sistem Informasi di STT Terpadu Nurul Fikri, Depok. Saat ini saya mengikuti program MBKM SIB NFA (Fullstack Web Development) dan belajar membangun aplikasi web dari antarmuka sampai basis data.

## Fitur

- Tema gelap dan terang dengan tombol ganti tema (pilihan tersimpan di browser)
- Efek mengetik di bagian hero
- Partikel latar dan sorotan cahaya yang mengikuti kursor
- Hitungan statistik animasi
- Filter proyek berdasarkan kategori (Fullstack, Frontend, Backend)
- Timeline perjalanan belajar
- Responsif untuk HP dan desktop
- Mendukung `prefers-reduced-motion` untuk pengguna yang mengurangi animasi

## Teknologi

| Bagian | Yang dipakai |
| --- | --- |
| Struktur | HTML5 |
| Gaya | CSS3 (variabel CSS, grid, flexbox, `backdrop-filter`) |
| Interaksi | JavaScript (ES6), Canvas API, IntersectionObserver |
| Font | Bricolage Grotesque dan DM Sans (Google Fonts) |
| Hosting | GitHub Pages |

## Struktur folder

```
├── index.html
├── style.css
├── script.js
└── assets/
    ├── foto.jpg
    └── projects/
        └── bookstore.png
```

## Menjalankan di komputer sendiri

1. Clone repositori ini:
   ```bash
   git clone https://github.com/Moch-Irvan-wijaya/PortoFolio.git
   ```
2. Masuk ke folder proyek, lalu buka `index.html` di browser.
   Atau gunakan ekstensi **Live Server** di VS Code agar halaman otomatis refresh saat file diubah.

## Cara mengubah isi

- **Teks dan proyek:** edit `index.html`.
- **Warna dan tampilan:** edit variabel di bagian `:root` pada `style.css`.
- **Kalimat efek mengetik:** edit daftar `words` di `script.js`.
- **Foto profil:** ganti `assets/foto.jpg` (disarankan persegi dan di bawah 300 KB).

## Deploy ke GitHub Pages

1. Buka **Settings → Pages** di repositori ini.
2. Pada **Source**, pilih **Deploy from a branch**.
3. Pilih branch `main` dan folder `/(root)`, lalu klik **Save**.
4. Tunggu 1-3 menit, lalu buka link demo di atas.

## Kontak

- Email: mirvanwijaya14@gmail.com
- LinkedIn: [mochammad-irvan-wijaya](https://www.linkedin.com/in/mochammad-irvan-wijaya-77851433b/)
- GitHub: [Moch-Irvan-wijaya](https://github.com/Moch-Irvan-wijaya)
- Instagram: [@mochirwi](https://instagram.com/mochirwi)

---

Dibuat oleh Irvan, Depok.
