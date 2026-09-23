# AGENTS.md — Jajanan Bu Sum

## 1. Project

Landing page promosi untuk jualan Bu Sum.

Website:

- Single-page.
- Static.
- Tanpa backend.
- Tanpa database.
- Tanpa authentication.
- Tanpa CMS.

Tujuan utama:

> Showcase produk + membangun kepercayaan + mengarahkan calon pembeli ke WhatsApp.

Website bukan e-commerce.

Semua pemesanan dilakukan melalui WhatsApp.

---

# 2. Tech Stack

| Item            | Technology   |
| --------------- | ------------ |
| Framework       | React        |
| Build Tool      | Vite         |
| Styling         | Tailwind CSS |
| Package Manager | npm          |
| Hosting         | Vercel       |
| Icons           | lucide-react |
| Fonts           | Google Fonts |

---

# 3. Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

`npm run build` harus berhasil sebelum deployment.

---

# 4. Project Structure

Proposed structure:

```text
src/
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    ProductCard.jsx
    ProductGrid.jsx
    Contact.jsx
    Footer.jsx

  data/
    products.js
    contact.js

  App.jsx
  main.jsx

public/
  images/
    products/

index.html
```

Struktur boleh berkembang sedikit jika kebutuhan nyata muncul, tetapi jangan melakukan over-engineering.

---

# 5. Architecture Rules

- Gunakan functional components.
- Jangan menggunakan class components.
- Gunakan hooks hanya jika memang diperlukan.
- Jangan menambahkan state management library.
- Jangan menambahkan backend.
- Jangan menambahkan database.
- Jangan menambahkan API layer untuk static content.
- Jangan menambahkan CMS.
- Jangan membuat abstraction hanya untuk mengurangi beberapa baris kode.
- Jangan membuat component kecil jika component tersebut tidak memiliki reuse atau alasan yang jelas.
- Jangan membuat folder architecture yang kompleks untuk landing page sederhana.
- Prefer readable and straightforward React code.
- Hindari premature optimization.

Arsitektur harus proporsional terhadap ukuran project.

---

# 6. Component Responsibilities

## Navbar

Bertanggung jawab atas:

- Brand/title.
- Desktop navigation.
- Mobile navigation.
- Smooth scrolling.
- Mobile menu state.

## Hero

Bertanggung jawab atas:

- Hero heading.
- Tagline.
- Hero image.
- Primary WhatsApp CTA.

## About

Bertanggung jawab atas:

- Story/about content.
- Supporting image.
- Value points.

## ProductCard

Bertanggung jawab atas:

- Product image.
- Product name.
- Product description.
- Optional product-specific WhatsApp CTA.

ProductCard harus reusable dan menerima product data sebagai props.

## ProductGrid

Bertanggung jawab atas:

- Iterasi product data.
- Rendering ProductCard.
- Responsive grid layout.

## Contact

Bertanggung jawab atas:

- Address.
- WhatsApp CTA.
- Optional operating hours/location information.

## Footer

Bertanggung jawab atas:

- Business name.
- Copyright.
- Optional social media.

---

# 7. Product Data

Product data harus disimpan secara terstruktur.

Contoh:

```js
export const products = [
  {
    id: "product-slug",
    name: "Nama Produk",
    image: "/images/products/product-name.webp",
    description: "Deskripsi singkat produk.",
  },
];
```

Rules:

- `id` harus unik.
- `name` adalah nama yang ditampilkan.
- `image` adalah path gambar.
- `description` adalah deskripsi singkat.
- Jangan menyimpan harga per pcs.
- Jangan membuat data produk yang belum diberikan.
- Jangan menggunakan placeholder product data pada production build.

---

# 8. Contact Configuration

Informasi kontak harus berada di satu lokasi.

Contoh:

```js
export const contact = {
  whatsappNumber: "628XXXXXXXXXX",
  address: "Ngampohan RT 002 / RW 001, Platarejo",
};
```

Nomor WhatsApp tidak boleh di-hardcode berulang kali di setiap component.

---

# 9. WhatsApp

Gunakan format:

```text
https://wa.me/<number>?text=<encoded-message>
```

Pesan harus menggunakan `encodeURIComponent`.

Contoh helper:

```js
export const createWhatsAppUrl = (message) => `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
```

Default message:

```text
Halo Bu Sum, saya mau tanya jajanan.
```

Product-specific message dapat menggunakan:

```text
Halo Bu Sum, saya mau tanya tentang [Nama Produk].
```

Semua CTA pemesanan harus mengarah ke WhatsApp.

Jangan membuat internal order form.

---

# 10. Styling

Gunakan Tailwind utility classes langsung di JSX.

Prefer:

```jsx
className = "...";
```

daripada membuat custom CSS untuk kebutuhan sederhana.

Custom CSS hanya digunakan jika Tailwind tidak praktis atau memang diperlukan.

Gunakan mobile-first styling.

Contoh:

```text
default → mobile
md:     → tablet/desktop
lg:     → larger desktop
```

Jangan membuat breakpoint custom tanpa alasan yang jelas.

---

# 11. Design System

Ikuti `design.md`.

### Colors

```text
Arang          #2B2320
Sawo Matang    #6B3226
Gula Jawa      #C97B2E
Daun Pisang    #4C6444
Kertas Minyak  #F2E8D5
Putih Tulang   #FBF6EE
```

### Fonts

- Fraunces → heading/display.
- Karla → body/UI.

Jangan menambahkan font lain tanpa alasan dan tanpa mengubah design specification.

### Icons

Gunakan `lucide-react`.

Jangan menggunakan emoji sebagai UI icon.

---

# 12. Design Constraints

Website harus terasa:

- Rumahan.
- Hangat.
- Bersih.
- Familiar.
- Sederhana.
- Manusiawi.

Jangan mengubah desain menjadi:

- SaaS landing page.
- Corporate website.
- Startup landing page.
- Generic AI-generated landing page.

Hindari secara khusus:

- Excessive rounded cards.
- Generic gray shadows.
- Gradient decoration.
- Excessive glassmorphism.
- ALL CAPS eyebrow labels.
- Numbered `01 / 02 / 03` markers.
- Arrow `→` pada setiap CTA.
- Scroll-reveal animation pada setiap section.
- Decorative elements yang tidak memiliki fungsi.

Foto produk harus menjadi salah satu focal point utama.

---

# 13. Image Rules

Prioritaskan foto asli.

Gunakan foto asli jika tersedia.

Jangan:

- Menggunakan stock image jika foto asli tersedia.
- Membuat AI-generated food imagery jika foto asli tersedia.
- Mengubah warna makanan secara berlebihan.
- Menggunakan image yang tidak berhubungan dengan produk.

### Performance

- Gunakan WebP/AVIF jika praktis.
- Jangan mengirim image dengan resolusi jauh lebih besar dari kebutuhan.
- Hero image harus eager-loaded.
- Product images di bawah fold menggunakan lazy loading.
- Semua informative images memiliki alt text.

---

# 14. Accessibility

- Interactive elements memiliki tap target minimal sekitar 44×44px.
- Gunakan semantic HTML.
- Gunakan heading hierarchy yang benar.
- Semua informative image memiliki alt text.
- Decorative image menggunakan alt kosong jika diperlukan.
- Jangan menghilangkan focus state.
- Jangan mengandalkan hover untuk fungsi penting.
- Pastikan contrast cukup.
- Button dan link harus memiliki label yang jelas.

---

# 15. SEO

`index.html` harus memiliki:

- Meaningful `<title>`.
- Meta description.
- Viewport configuration.
- Basic Open Graph metadata jika praktis.

Jangan meninggalkan default Vite metadata.

Contoh title:

```text
Jajanan Bu Sum — Jajanan Rumahan
```

Gunakan heading semantik:

```text
h1 → nama/value proposition utama
h2 → section
h3 → product/card heading jika diperlukan
```

Jangan menggunakan heading hanya untuk mendapatkan ukuran font tertentu.

---

# 16. Content Rules

Gunakan bahasa Indonesia yang:

- Sederhana.
- Ramah.
- Natural.
- Mudah dipahami.

Jangan membuat klaim bisnis yang belum diberikan.

Jangan mengarang:

- Harga.
- Jam buka.
- Nomor WhatsApp.
- Social media.
- Area pengiriman.
- Review pelanggan.
- Jumlah pelanggan.
- Lama usaha.
- Sertifikasi.
- Klaim kualitas yang tidak dikonfirmasi.

Produk tidak menampilkan harga per pcs.

Informasi harga harus menggunakan konsep:

> "Harga & minimal order sesuai pesanan."

---

# 17. Responsive Rules

Mobile adalah prioritas utama.

Pastikan:

- Tidak ada horizontal overflow.
- Text tidak keluar dari container.
- Button nyaman ditap.
- Product grid tetap readable.
- Image tidak menyebabkan layout overflow.
- Navbar mobile berfungsi.
- CTA WhatsApp mudah ditemukan.

Test minimal:

```text
Mobile
Tablet
Desktop
```

---

# 18. Motion

Motion harus minimal.

Diperbolehkan:

- Smooth scroll.
- Mobile menu transition.
- Simple hover/focus states.
- Satu kali hero image entrance animation jika diperlukan.

Hindari:

- Scroll reveal di setiap section.
- Stagger animation pada semua cards.
- Parallax.
- Floating animation berlebihan.
- Animasi yang mengganggu CTA.

---

# 19. Git

Gunakan Conventional Commits.

Format:

```text
feat:
fix:
refactor:
style:
chore:
docs:
```

Contoh:

```text
feat: add product grid
feat: add WhatsApp CTA
fix: prevent mobile overflow
style: refine product card spacing
docs: update project requirements
```

Subject ringkas, idealnya ≤50 karakter.

Body hanya jika alasan perubahan tidak jelas dari subject.

---

# 20. Implementation Rules

Saat diminta mengubah satu function:

- Output hanya function tersebut jika konteks memungkinkan.
- Jangan mengubah file lain tanpa alasan.
- Jangan melakukan refactor besar yang tidak diminta.
- Jangan menghapus behavior yang sudah bekerja.
- Jangan mengganti dependency tanpa alasan.
- Jangan memperkenalkan architecture baru hanya untuk menyelesaikan masalah kecil.

Saat membuat fitur baru:

1. Periksa struktur existing.
2. Gunakan component/data yang sudah tersedia.
3. Reuse utility yang sudah ada.
4. Implementasikan solusi paling sederhana yang memenuhi requirement.
5. Hindari speculative features.

---

# 21. Validation

Sebelum menyatakan fitur selesai:

- Pastikan tidak ada syntax error.
- Pastikan React dapat compile.
- Pastikan `npm run build` berhasil jika perubahan signifikan.
- Pastikan layout mobile tidak overflow.
- Pastikan CTA WhatsApp menghasilkan URL yang benar.
- Pastikan tidak ada placeholder yang tertinggal.
- Pastikan informasi bisnis tidak dibuat-buat.

---

# 22. Out of Scope

Jangan implementasikan:

- Online ordering system.
- Shopping cart.
- Checkout.
- Payment gateway.
- Backend.
- Database.
- CMS.
- Admin panel.
- Authentication.
- Inventory system.
- Order tracking.
- Multi-language support.

Jika requirement baru membutuhkan salah satu hal di atas, jangan diam-diam mengimplementasikannya. Requirement harus diperbarui terlebih dahulu.

---

# 23. Source of Truth

Jika terjadi konflik:

1. Explicit user instruction.
2. `PRD.md` untuk product requirements.
3. `design.md` untuk visual/design requirements.
4. `AGENTS.md` untuk implementation conventions.

Jangan mengubah product scope hanya karena implementasi tertentu terasa lebih mudah.
