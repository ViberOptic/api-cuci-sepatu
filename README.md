REST API Daftar Barang Cuci SepatuProyek ini merupakan tugas responsi untuk modul Pembuatan API dengan JavaScript. API ini dibuat menggunakan Node.js dan Express.js, berfungsi untuk mengelola data sepatu yang sedang dicuci pada sebuah layanan jasa cuci sepatu.Data disimpan dan dikelola menggunakan database Supabase dan di-deploy ke Vercel.API Base URL: https://cuci-sepatu-seven.vercel.app/TujuanMengimplementasikan konsep CRUD (Create, Read, Update, Delete) dalam REST API.Meningkatkan pemahaman penggunaan Express.js sebagai framework backend.Mengelola data menggunakan database (Supabase).Membangun sistem pencatatan yang relevan dengan kebutuhan bisnis nyata.Teknologi yang DigunakanNode.js: Runtime environment untuk menjalankan JavaScript di sisi server.Express.js: Framework untuk membangun REST API.Supabase: Digunakan sebagai Database PostgreSQL untuk menyimpan data.Vercel: Platform untuk deployment API.Struktur DataContoh struktur data sepatu yang dikelola oleh API:{
  "id": 1,
  "nama": "Nike Air Force 1",
  "status": "Sedang Dicuci",
  "tanggalMasuk": "2025-10-08",
  "tanggalSelesai": "-"
}
id → Nomor unik sepatu (dibuat otomatis oleh database).nama → Nama sepatu atau merek pelanggan.status → Status proses cuci (misal: "Sedang Dicuci", "Selesai").tanggalMasuk → Tanggal sepatu diterima untuk dicuci.tanggalSelesai → Tanggal sepatu selesai dicuci (diisi saat status di-update).Dokumentasi Endpoint APIBerikut adalah penjelasan rinci untuk setiap endpoint yang tersedia. Anda dapat mengujinya menggunakan Postman atau tools sejenis.1. GET /itemsMenampilkan seluruh daftar sepatu yang sedang dicuci.Metode: GETURL: https://cuci-sepatu-seven.vercel.app/itemsResponse (Success 200 OK):[
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
2. POST /itemsMenambahkan data sepatu baru ke dalam daftar.Metode: POSTURL: https://cuci-sepatu-seven.vercel.app/itemsRequest Body (JSON):{
  "nama": "Nike Air Max",
  "status": "Sedang Dicuci",
  "tanggalMasuk": "2025-10-08",
  "tanggalSelesai": "-"
}
Response (Success 201 Created):{
  "message": "Data sepatu berhasil ditambahkan."
}
3. PUT /items/:idMemperbarui status sepatu (misalnya dari "Sedang Dicuci" menjadi "Selesai").Metode: PUTURL: https://cuci-sepatu-seven.vercel.app/items/2 (Contoh update ID 2)Request Body (JSON):{
  "status": "Selesai",
  "tanggalSelesai": "2025-10-09"
}
Response (Success 200 OK):{
  "message": "Status sepatu berhasil diperbarui."
}
4. DELETE /items/:idMenghapus data sepatu yang sudah selesai dicuci atau diambil.Metode: DELETEURL: https://cuci-sepatu-seven.vercel.app/items/1 (Contoh hapus ID 1)Response (Success 200 OK):{
  "message": "Data sepatu berhasil dihapus."
}
5. (Bonus) GET /items?status=...Fitur filter untuk menampilkan sepatu berdasarkan status tertentu.Metode: GETContoh URL: https://cuci-sepatu-seven.vercel.app/items?status=SelesaiDeskripsi: Hanya akan menampilkan daftar sepatu yang memiliki status "Selesai".Response (Success 200 OK):[
  {
    "id": 1,
    "nama": "Converse Chuck Taylor",
    "status": "Selesai",
    "tanggalMasuk": "2025-10-01",
    "tanggalSelesai": "2025-10-03"
  }
]
