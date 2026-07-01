# 📚 Dokumentasi BioLink Template

Selamat datang di repositori **BioLink Template**! Project ini adalah alternatif *link-in-bio* (seperti Linktree) yang 100% gratis, super cepat, *open-source*, dan sangat mudah dikustomisasi.

Dokumentasi ini dibuat untuk membantu Anda (baik developer maupun non-developer) dalam memahami, mengubah, dan mempublikasikan halaman bio Anda sendiri.

---

## 🛠️ Spesifikasi Teknis (Tech Stack)

Project ini dibangun menggunakan teknologi web modern untuk memastikan performa yang cepat dan animasi yang mulus:
- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animasi**: [Framer Motion](https://motion.dev/)
- **Ikon**: [Lucide React](https://lucide.dev/)

---

## 📂 Struktur Folder Utama

Berikut adalah file-file penting yang perlu Anda ketahui:

```text
/src
 ├── App.tsx       # 🎨 Komponen utama UI (Anda jarang perlu mengubah ini kecuali ingin merombak desain)
 ├── config.ts     # ⚙️ PUSAT DATA: Di sinilah Anda mengubah Nama, Link, dan Foto Profil!
 ├── index.css     # 💅 Styling global, font, dan kustomisasi animasi CSS
 └── main.tsx      # 🚀 Entry point aplikasi React
```

---

## ✍️ Cara Mengubah Data (Kustomisasi)

Kelebihan utama template ini adalah **Anda tidak perlu paham coding UI** untuk menggunakannya. Semua data diatur terpusat di dalam file `src/config.ts`.

Buka file `src/config.ts` dan ubah bagian-bagian berikut sesuai kebutuhan Anda:

### 1. Mengubah Profil
Di bagian `profile`, Anda bisa mengubah nama, bio, dan link foto profil (Avatar).
```typescript
profile: {
  name: 'Nama Anda / Brand',
  verified: true, // Ubah ke false jika tidak ingin ada centang biru
  bio: 'Deskripsi singkat tentang Anda.',
  avatarUrl: 'https://link-foto-anda.com/foto.jpg',
},
```

### 2. Mengubah & Menambahkan Link
Link dikelompokkan berdasarkan kategori (Link Groups). Anda bisa membuat link biasa, atau link berupa **Folder (Accordion)** yang berisi sub-link.

**Contoh Link Biasa:**
```typescript
{
  title: 'My Portfolio',
  url: 'https://example.com',
  icon: Globe, // Pastikan icon sudah di-import dari 'lucide-react' di atas file
}
```

**Contoh Link Folder (Accordion):**
Folder tidak memiliki `url`, tetapi memiliki `subLinks`.
```typescript
{
  title: 'Project Tersimpan',
  icon: Folder,
  subLinks: [
    {
      title: 'Project Alpha',
      url: 'https://example.com/alpha',
      icon: Briefcase
    },
    // Tambahkan sub-link lain di sini...
  ]
}
```

### 3. Mengubah Ikon Sosial Media (Bawah Layar)
Bagian `socials` mengatur deretan ikon kecil di bagian paling bawah halaman.
```typescript
socials: [
  {
    platform: 'Instagram',
    url: 'https://instagram.com/username',
    icon: Instagram,
  },
  // Tambahkan sosial media lain...
]
```
> **Catatan Ikon**: Jika Anda butuh ikon baru (misal: `Tiktok`, `Facebook`), pastikan Anda menambahkannya di baris paling atas pada bagian `import { ... } from 'lucide-react';` di file `config.ts`.

---

## 🚀 Cara Menjalankan Secara Lokal (Development)

Jika Anda ingin menjalankan project ini di komputer Anda sendiri:

1. Pastikan Anda sudah menginstal **Node.js**.
2. Buka terminal di dalam folder project ini.
3. Instal dependencies dengan menjalankan:
   ```bash
   npm install
   ```
4. Jalankan *development server*:
   ```bash
   npm run dev
   ```
5. Buka link yang muncul di terminal (biasanya `http://localhost:5173` atau `http://localhost:3000`) di browser Anda.

---

## 🌐 Cara Publikasi (Deployment)

Karena project ini adalah aplikasi React statis, Anda bisa meng-hosting-nya secara gratis di berbagai platform dalam hitungan menit!

### Opsi 1: Menggunakan Vercel (Paling Direkomendasikan)
1. Buat akun di [Vercel](https://vercel.com/).
2. Upload *source code* ini ke akun GitHub Anda.
3. Di dashboard Vercel, klik **Add New...** > **Project**.
4. Import repository GitHub Anda.
5. Biarkan semua pengaturan *default* (Vercel otomatis mendeteksi Vite).
6. Klik **Deploy** dan tunggu 1 menit. Website Anda online!

### Opsi 2: Menggunakan Netlify
1. Buat akun di [Netlify](https://netlify.com/).
2. Pergi ke bagian "Sites" lalu "Add new site" > "Import an existing project".
3. Hubungkan dengan GitHub Anda dan pilih repository project ini.
4. Klik **Deploy site**.

---

## 🎨 Kustomisasi Lanjutan (Bagi Developer)

- **Mengubah Tema Warna**: Buka `src/App.tsx`, cari class `bg-blue-500/20` atau efek *gradient* lainnya dan sesuaikan dengan warna *brand* Anda menggunakan utilitas Tailwind.
- **Mengganti Font**: Buka `src/index.css`. Saat ini template menggunakan **Inter** untuk teks biasa dan **Plus Jakarta Sans** untuk *Heading* (font premium yang elegan). Anda bisa mengubah URL import Google Fonts di baris paling atas.

---
*Dibuat dengan ❤️ untuk komunitas Open Source.*
