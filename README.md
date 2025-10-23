# REST API Daftar Barang Cuci Sepatu

## Identitas

Nama     : Muhammad Azka Wijasenna
NIM      : 21120123140125
Kelompok : 11

## Deskripsi Umum

Proyek ini adalah REST API fungsional yang dibuat menggunakan Node.js dan Express.js. API ini berfungsi untuk mengelola data sepatu yang sedang dicuci pada sebuah layanan jasa cuci sepatu.

Tujuan utama proyek ini adalah untuk mempermudah proses pencatatan, pemantauan, dan pembaruan status cucian sepatu secara digital melalui REST API sederhana.

API Base URL: https://cuci-sepatu-seven.vercel.app/

## Tujuan

1. Mengimplementasikan konsep CRUD (Create, Read, Update, Delete) dalam REST API.
2. Meningkatkan pemahaman penggunaan Express.js sebagai framework backend.
3. Mengelola data menggunakan database (Supabase).
4. Membangun sistem pencatatan yang relevan dengan kebutuhan bisnis nyata.

## Teknologi yang Digunakan

1. Node.js: Runtime environment untuk menjalankan JavaScript di sisi server.
2. Express.js: Framework untuk membangun REST API.
3. Supabase: Digunakan sebagai Database PostgreSQL untuk menyimpan data.
4. Vercel: Platform untuk deployment API.
5. Postman: Tools untuk pengujian API.

## Fitur Utama API

| Metode | Endpoint   | Deskripsi                                                                |
| ------ | ---------- | ------------------------------------------------------------------------ |
| GET    | /items     | Menampilkan seluruh daftar sepatu yang sedang dicuci.                    |
| POST   | /items     | Menambahkan data sepatu baru ke dalam daftar.                            |
| PUT    | /items/:id | Memperbarui status sepatu (misalnya dari Sedang Dicuci menjadi Selesai). |
| DELETE | /items/:id | Menghapus data sepatu yang sudah selesai dicuci.                         |

## Alur Kerja API

1. Pengguna mengirimkan permintaan HTTP (GET, POST, PUT, DELETE) ke server.
2. Server memproses permintaan menggunakan Express.js.
3. Data sepatu disimpan atau diambil dari database Supabase.
4. Server mengembalikan respons dalam format JSON.

## Struktur Data

Contoh struktur data sepatu yang dikelola oleh API:

```
{
  "id": 1,
  "nama": "Nike Air Force 1",
  "status": "Sedang Dicuci",
  "tanggalMasuk": "2025-10-08",
  "tanggalSelesai": "-"
}
```

Keterangan:

- id → Nomor unik sepatu (dibuat otomatis oleh database).
- nama → Nama sepatu atau merek pelanggan.
- status → Status proses cuci (misal: "Sedang Dicuci", "Selesai").
- tanggalMasuk → Tanggal sepatu diterima untuk dicuci.
- tanggalSelesai → Tanggal sepatu selesai dicuci (diisi saat status di-update).

## Dokumentasi Endpoint API

Berikut adalah penjelasan rinci untuk setiap endpoint yang tersedia. Anda dapat mengujinya menggunakan Postman atau tools sejenis.

### 1. GET /items

Menampilkan seluruh daftar sepatu yang sedang dicuci.

- Metode: GET
- URL: https://cuci-sepatu-seven.vercel.app/items
- Response (Success 200 OK):

```
[
  {
    "id": 1,
    "nama": "Converse Chuck Taylor",
    "status": "Selesai",
    "tanggalMasuk": "2025-10-01",
    "tanggalSelesai": "2025-10-03"
  },
  {
    "id": 2,
    "nama": "Nike Air Max",
    "status": "Sedang Dicuci",
    "tanggalMasuk": "2025-10-08",
    "tanggalSelesai": "-"
  }
]
```

### 2. POST /items

Menambahkan data sepatu baru ke dalam daftar.

- Metode: POST
- URL: https://cuci-sepatu-seven.vercel.app/items
- Request Body (JSON):

```
{
  "nama": "Nike Air Max",
  "status": "Sedang Dicuci",
  "tanggalMasuk": "2025-10-08",
  "tanggalSelesai": "-"
}
```

- Response (Success 201 Created):

```
{
  "message": "Data sepatu berhasil ditambahkan."
}
```

### 3. PUT /items/:id

Memperbarui status sepatu (misalnya dari "Sedang Dicuci" menjadi "Selesai").

- Metode: PUT
- URL: https://cuci-sepatu-seven.vercel.app/items/2
- Request Body (JSON):

```
{
  "status": "Selesai",
  "tanggalSelesai": "2025-10-09"
}
```

- Response (Success 200 OK):

```
{
  "message": "Status sepatu berhasil diperbarui."
}
```

## 4. DELETE /items/:id

Menghapus data sepatu yang sudah selesai dicuci atau diambil.

- Metode: DELETE
- URL: https://cuci-sepatu-seven.vercel.app/items/1
- Response (Success 200 OK):

```
{
  "message": "Data sepatu berhasil dihapus."
}
```

### 5. (Bonus) GET /items?status=...

Fitur filter untuk menampilkan sepatu berdasarkan status tertentu.

- Metode: GET
- URL: https://cuci-sepatu-seven.vercel.app/items?status=Selesai
- Deskripsi: Hanya akan menampilkan daftar sepatu yang memiliki status "Selesai".
- Response (Success 200 OK):

```
[
  {
    "id": 1,
    "nama": "Converse Chuck Taylor",
    "status": "Selesai",
    "tanggalMasuk": "2025-10-01",
    "tanggalSelesai": "2025-10-03"
  }
]
```
