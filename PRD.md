# PRD — Landing Page "Jajanan Bu Sum"

## 1. Overview

Landing page promosi untuk jualan Bu Sum.

Website ini **bukan e-commerce dan bukan sistem pemesanan online**. Website berfungsi sebagai etalase digital agar calon pembeli mengenal Bu Sum, melihat produk yang tersedia, membangun kepercayaan, lalu menghubungi Bu Sum melalui WhatsApp untuk melakukan pemesanan.

### Tujuan

- Meningkatkan awareness terhadap jualan Bu Sum.
- Membuat produk mudah ditemukan dan dipahami.
- Membangun kepercayaan terhadap kualitas jajanan rumahan Bu Sum.
- Mempermudah calon pembeli menghubungi Bu Sum.
- Mendorong konversi dari pengunjung website menjadi chat WhatsApp.

### Target Pengguna

- Ibu-ibu dan masyarakat umum.
- Individu yang ingin membeli jajanan.
- Organisasi, kelompok, atau panitia acara yang membutuhkan jajanan dalam jumlah banyak.
- Pengguna yang mayoritas mengakses website melalui HP.

### Asumsi Pengguna

- Tidak semua pengguna familiar dengan UI yang kompleks.
- Pengguna mungkin memiliki koneksi internet seluler dengan kecepatan standar.
- Pengguna harus dapat memahami isi website tanpa perlu membaca terlalu banyak teks.
- Informasi penting, terutama produk dan kontak WhatsApp, harus mudah ditemukan.

---

# 2. Tech Stack

| Layer           | Pilihan      |
| --------------- | ------------ |
| Framework       | React + Vite |
| Styling         | Tailwind CSS |
| Hosting         | Vercel       |
| Package Manager | npm          |
| Icons           | lucide-react |
| Fonts           | Google Fonts |
| Backend         | Tidak ada    |
| Database        | Tidak ada    |
| CMS             | Tidak ada    |

Website bersifat static dan tidak membutuhkan server-side application.

---

# 3. Struktur Halaman

Website menggunakan single page dengan beberapa section.

## 3.1 Navbar

Menampilkan:

- Logo/judul "Jajanan Bu Sum".
- Home.
- About.
- Produk.
- Kontak.

### Behavior

- Desktop: menu horizontal.
- Mobile: hamburger menu.
- Klik menu melakukan smooth scroll ke section terkait.
- Menu mobile tertutup setelah salah satu menu dipilih.
- Navbar tidak boleh mengambil terlalu banyak ruang pada layar mobile.

---

## 3.2 Hero / Home

Hero adalah area pertama yang dilihat pengguna.

### Konten

- Judul besar: "Jajanan Bu Sum".
- Tagline singkat.
- Foto produk asli atau foto Bu Sum saat menyiapkan produk.
- CTA utama: "Chat via WhatsApp".

Contoh tagline:

> "Jajanan rumahan, dibuat segar sesuai pesanan."

Tagline final dapat disesuaikan setelah konten asli tersedia.

### Tujuan

Pengguna harus dapat memahami dalam beberapa detik:

1. Ini adalah usaha jajanan rumahan.
2. Apa yang dijual.
3. Bagaimana cara menghubungi penjual.

CTA utama mengarah langsung ke WhatsApp.

---

## 3.3 About

Section untuk memperkenalkan Bu Sum dan usahanya.

### Konten

- Cerita singkat mengenai Bu Sum.
- Sejak kapan usaha berjalan, jika informasi tersedia.
- Ciri khas usaha.
- Cara pembuatan atau kualitas produk jika relevan.
- Poin kelebihan seperti:
  - bahan fresh,
  - dibuat dengan perhatian terhadap kebersihan,
  - dapat menyesuaikan jumlah pesanan,
  - cocok untuk kebutuhan pribadi maupun acara.

Jangan membuat klaim kualitas yang belum dikonfirmasi oleh pemilik usaha.

---

## 3.4 Produk

Menampilkan produk dalam bentuk grid.

Setiap produk memiliki:

- Foto.
- Nama produk.
- Deskripsi singkat.

### Harga

Harga per pcs **tidak ditampilkan**.

Tetap tampilkan informasi:

> "Harga & minimal order sesuai pesanan, hubungi via WhatsApp."

Harga dapat berbeda berdasarkan jumlah atau kebutuhan pesanan.

### CTA Produk

Setiap product card dapat memiliki tombol:

> "Pesan"

yang mengarah ke WhatsApp dengan pesan yang menyebutkan produk terkait.

Contoh:

> "Halo Bu Sum, saya mau tanya tentang [Nama Produk]."

CTA per-product bersifat opsional. CTA utama di section Contact tetap wajib tersedia.

---

## 3.5 Kontak

Section kontak harus menjadi salah satu bagian paling jelas di halaman.

### Informasi

Alamat:

> Ngampohan RT 002 / RW 001, Platarejo

Informasi berikut bersifat opsional dan hanya ditampilkan jika tersedia:

- Jam operasional.
- Area pengiriman.
- Area pengambilan.
- Informasi pemesanan minimal.
- Nomor telepon selain WhatsApp.

### CTA

Tampilkan tombol besar:

> "Chat via WhatsApp"

WhatsApp menggunakan format:

`https://wa.me/<nomor>?text=<pesan>`

Pesan default:

> "Halo Bu Sum, saya mau tanya jajanan."

---

## 3.6 Footer

Menampilkan:

- Nama usaha.
- Copyright.
- Social media jika tersedia.

Jangan menampilkan social media yang belum benar-benar dimiliki oleh usaha.

---

# 4. Functional Requirements

## F1 — Navigation

- Navbar desktop menampilkan Home, About, Produk, dan Kontak.
- Navbar mobile menggunakan hamburger menu.
- Menu melakukan smooth scroll ke section terkait.
- Menu mobile tertutup setelah item dipilih.
- Setiap section memiliki ID yang sesuai dengan navigasi.

## F2 — Product Display

- Produk ditampilkan dalam grid.
- Setiap card menampilkan foto, nama, dan deskripsi.
- Harga per pcs tidak ditampilkan.
- Tersedia informasi bahwa harga dan minimal order menyesuaikan pesanan.
- Data produk berasal dari data terstruktur, bukan hardcoded berulang di setiap component.

## F3 — WhatsApp CTA

- Semua CTA pemesanan mengarah ke WhatsApp.
- Link menggunakan format `wa.me`.
- Pesan WhatsApp dapat terisi otomatis.
- CTA dapat tersedia pada Hero, Product Card, dan Contact.
- Nomor WhatsApp harus didefinisikan di satu lokasi konfigurasi.

## F4 — Contact Information

- Section Contact menampilkan alamat:
  `Ngampohan RT 002 / RW 001, Platarejo`
- Informasi tambahan hanya ditampilkan jika datanya tersedia.

## F5 — Image Optimization

- Gunakan gambar dengan ukuran yang sesuai kebutuhan.
- Gunakan format modern seperti WebP/AVIF jika praktis.
- Hero image tidak menggunakan lazy loading karena berada di area above-the-fold.
- Gambar produk yang berada di bawah fold menggunakan lazy loading.
- Hindari mengirim file gambar berukuran sangat besar ke browser mobile.

## F6 — Basic SEO

- Page memiliki title yang relevan.
- Page memiliki meta description.
- Heading menggunakan hierarki yang semantik.
- Gambar memiliki alt text yang deskriptif.
- Open Graph metadata disediakan jika praktis.
- Tidak boleh ada default title seperti "Vite + React".

---

# 5. Non-Functional Requirements

## Responsive

Mobile-first.

Target utama:

- Mobile.
- Tablet.
- Desktop.

Gunakan breakpoint Tailwind yang sesuai kebutuhan, terutama `md` dan `lg`.

Tidak perlu membuat breakpoint khusus kecuali benar-benar diperlukan.

## Performance

Website harus terasa cepat pada koneksi seluler standar.

Prioritas:

1. Optimasi gambar.
2. Hindari dependency yang tidak diperlukan.
3. Hindari animasi berat.
4. Hindari JavaScript yang tidak diperlukan.
5. Jangan menggunakan library UI besar hanya untuk kebutuhan sederhana.

## Accessibility

- Tap target minimal sekitar 44px.
- Teks harus mudah dibaca di HP.
- Kontras teks dan background harus cukup.
- Jangan menggunakan warna sebagai satu-satunya indikator informasi.
- Semua gambar informatif memiliki alt text.
- Button dan link menggunakan label yang jelas.
- Navigasi dapat digunakan tanpa bergantung pada hover.

## Browser

Prioritas:

- Chrome mobile.
- Safari mobile.
- Chrome desktop.
- Browser modern lainnya.

---

# 6. Content & Photography Requirements

## Photography

- Prioritaskan foto produk asli.
- Hindari stock photo jika foto asli tersedia.
- Hindari AI-generated food imagery jika foto asli tersedia.
- Foto harus terlihat natural dan menggugah selera.
- Warna makanan harus tetap realistis.
- Foto tidak perlu terlihat seperti katalog restoran premium.
- Foto dapur atau proses pembuatan dapat digunakan jika relevan.
- Jangan mengubah foto produk secara berlebihan sampai produk terlihat tidak realistis.

## Content

- Gunakan bahasa Indonesia yang sederhana dan ramah.
- Hindari jargon marketing berlebihan.
- Hindari klaim yang tidak dapat dibuktikan.
- Jangan membuat informasi produk, harga, alamat, jam operasional, atau layanan yang belum dikonfirmasi.

---

# 7. Out of Scope — V1

Tidak termasuk:

- Sistem pemesanan online.
- Shopping cart.
- Checkout.
- Payment gateway.
- Database.
- Backend.
- Admin panel.
- CMS.
- Authentication.
- Dashboard.
- Multi-bahasa.
- Sistem tracking order.
- Sistem inventory.
- Sistem notifikasi internal.

Semua proses pemesanan dilakukan melalui WhatsApp.

---

# 8. Open Questions

Sebelum deployment final:

- Nomor WhatsApp Bu Sum?
- Daftar produk final?
- Foto produk sudah tersedia?
- Deskripsi setiap produk?
- Ada cerita usaha yang ingin ditampilkan?
- Ada warna atau elemen visual khas Bu Sum?
- Jam operasional?
- Area pengiriman/pengambilan?
- Social media jika ada?
- Domain custom atau menggunakan domain Vercel?

---

# 9. Acceptance Criteria

Website dianggap siap untuk V1 apabila:

- [ ] Website dapat dijalankan menggunakan `npm run dev`.
- [ ] Production build berhasil menggunakan `npm run build`.
- [ ] Semua section utama tersedia.
- [ ] Navbar bekerja di desktop dan mobile.
- [ ] Hamburger menu bekerja di mobile.
- [ ] Semua CTA WhatsApp membuka WhatsApp dengan nomor yang benar.
- [ ] Pesan WhatsApp otomatis terisi.
- [ ] Product cards menampilkan foto, nama, dan deskripsi.
- [ ] Tidak ada harga per pcs.
- [ ] Alamat tampil dengan benar.
- [ ] Layout nyaman digunakan pada mobile.
- [ ] Gambar sudah dioptimasi.
- [ ] Hero image tidak lazy-loaded.
- [ ] Product images menggunakan lazy loading jika berada di bawah fold.
- [ ] Tidak ada placeholder/default content yang tertinggal.
- [ ] Tidak ada informasi bisnis yang dibuat-buat.
- [ ] Basic SEO metadata tersedia.
- [ ] Production build dapat di-deploy ke Vercel.

---

# 10. Next Steps

1. Konfirmasi nomor WhatsApp.
2. Kumpulkan daftar produk.
3. Kumpulkan foto produk.
4. Kumpulkan informasi usaha.
5. Finalisasi copywriting.
6. Setup React + Vite + Tailwind.
7. Implementasi section satu per satu.
8. Test responsive mobile dan desktop.
9. Optimasi gambar.
10. Production build.
11. Deploy ke Vercel.
