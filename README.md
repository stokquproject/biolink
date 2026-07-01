<div align="center">
  <br />
  <h1>✨ BioLink Template ✨</h1>
  <p>
    <strong>Alternatif Link-in-Bio 100% Gratis, Super Cepat, dan Elegan.</strong>
  </p>
  <p>
    Bebaskan diri Anda dari batasan platform berbayar. Bangun halaman profil profesional Anda sendiri dalam hitungan menit.
  </p>
  <br />
</div>

## 💡 Mengapa Project Ini Ada? (The Problem)

Platform *link-in-bio* gratisan (seperti Linktree, dkk) memang praktis, **TETAPI**:
- ❌ Desain kaku dan pasaran (template gratisan sangat terbatas).
- ❌ Ada *watermark* atau logo platform yang mengganggu *branding* Anda.
- ❌ Fitur esensial (seperti kustomisasi warna, font premium, atau folder link) seringkali dikunci di balik **paket berbayar (Premium/Pro)**.
- ❌ Anda tidak benar-benar memiliki data atau *source code* halaman Anda sendiri.

## 🚀 Solusinya (The Solution)

**BioLink Template** hadir sebagai solusi *open-source* bagi Kreator, UMKM, dan Developer pemula. Sebuah template web *mobile-first* bergaya *glassmorphism* elegan yang siap pakai.

### ✨ Keuntungan Menggunakan Template Ini:
- ✅ **100% Gratis Selamanya**: Tidak ada biaya bulanan, tidak ada fitur yang dikunci.
- ✅ **Tanpa Watermark**: Halaman ini murni milik Anda. *Branding* Anda yang utama.
- ✅ **Desain Premium & Eye-Catching**: UI modern, efek *glassmorphism*, animasi *smooth*, dan *Dark Mode* terintegrasi.
- ✅ **Fitur Folder & Pencarian (Search)**: Mendukung pengelompokan link tanpa batas dan fitur pencarian langsung di halaman untuk pengunjung.
- ✅ **Data Terpusat (No-Code Friendly)**: Sangat mudah diatur! Cukup ubah 1 file konfigurasi tanpa perlu mengerti struktur kode React yang rumit.

---

## 🛠️ Fitur Utama (Core Features)
- 🌓 **Dark / Light Mode**: Perpindahan tema dengan animasi *smooth*.
- 📂 **Accordion / Folder Links**: Kelompokkan link Anda ke dalam folder *dropdown* yang rapi.
- 🔍 **Live Search Box**: Pengunjung bisa mencari spesifik link Anda dengan cepat (sangat berguna jika link Anda banyak).
- 💎 **Premium UI**: Efek *shimmer* pada tombol, *ambient background*, dan tipografi elegan (*Plus Jakarta Sans*).
- 📱 **Mobile-First Responsive**: Tampil sempurna di layar HP pengunjung dari Instagram/TikTok.

---

## 💻 Teknologi yang Digunakan
- **React 19 + Vite**: Cepat saat *development* dan sangat ringan saat diakses.
- **Tailwind CSS v4**: Styling yang fleksibel dan mudah diubah.
- **Framer Motion**: Untuk animasi masuk (fade-in) dan efek transisi UI yang mahal.
- **Lucide React**: Ratusan ikon premium yang siap digunakan secara gratis.

---

## ⚡ Cara Instalasi (Quick Start)

### Syarat:
Pastikan Anda sudah menginstal [Node.js](https://nodejs.org/) (untuk *development* lokal) atau [Docker](https://www.docker.com/) (untuk *containerized deployment*).

1. **Clone repository ini**
   ```bash
   git clone https://github.com/username-anda/biolink-template.git
   cd biolink-template
   ```

### Opsi A: Instalasi Lokal (Standard)
2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Jalankan Secara Lokal**
   ```bash
   npm run dev
   ```
   *Buka `http://localhost:5173` di browser Anda.*

### Opsi B: Menggunakan Docker 🐳
Anda juga bisa menjalankan project ini di dalam kontainer Docker menggunakan Nginx agar lingkungan *deployment* lebih bersih, ringan, dan konsisten.

1. **Siapkan File Konfigurasi Docker**
   Ubah ekstensi file `Dockerfile.md` menjadi `Dockerfile`, dan `docker-compose.md` menjadi `docker-compose.yml`.
   
2. **Build dan Jalankan Container**
   ```bash
   docker-compose up -d --build
   ```
3. *Voila!* Aplikasi Anda sekarang *live* dan bisa diakses di `http://localhost:8080`.

---

## ⚙️ Cara Konfigurasi (Sangat Mudah!)

Anda **TIDAK PERLU** mengedit file desain `App.tsx` jika hanya ingin mengganti konten. Semua pengaturan dipusatkan di **satu tempat**.

Buka file `src/config.ts` dan mulailah berkreasi:

```typescript
export const config = {
  // 1. Ubah Data Diri Anda
  profile: {
    name: 'Nama Anda / Brand',
    verified: true,
    bio: 'Deskripsi singkat yang menarik.',
    avatarUrl: 'URL_FOTO_ANDA', 
  },
  
  // 2. Tambahkan Link / Folder Anda di sini
  linkGroups: [ ... ],
  
  // 3. Ubah Ikon Sosial Media
  socials: [ ... ]
}
```

> 📖 **Butuh panduan lebih detail?** 
> Baca panduan lengkapnya di [Dokumentasi Lengkap (docs/dokumentasi.md)](./docs/dokumentasi.md).

---

## 🚀 Publikasi (Deployment)

Template ini bisa di-hosting **GRATIS** dan sangat mudah menggunakan platform seperti **Vercel** atau **Netlify**.

**Cara Instan via Vercel:**
1. Upload kode Anda ke GitHub.
2. Login ke [Vercel](https://vercel.com).
3. Klik *Add New Project*, import dari repository GitHub Anda.
4. Klik **Deploy**! Halaman bio Anda sudah *live* di internet.

---

## 🤝 Berkontribusi (Contributing)
Punya ide fitur baru? Menemukan *bug*? Silakan buat *Issues* atau kirimkan *Pull Request*. Mari bersama-sama membuat template ini menjadi lebih baik!

<br />

<div align="center">
  <i>Dibuat dengan ❤️ untuk Kreator dan UMKM.</i>
</div>
