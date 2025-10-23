const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);


app.get('/', (req, res) => {
  res.json({ message: 'Selamat datang di API Cuci Sepatu!' });
});


app.get('/items', async (req, res) => {
  const { status } = req.query;

  try {
    let query = supabase.from('items').select('*').order('id', { ascending: true });

    if (status) {
      query = query.eq('status', status);
    }

    const { data, error } = await query;

    if (error) {
      throw error;
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


app.post('/items', async (req, res) => {
  const { nama, status, tanggalMasuk, tanggalSelesai } = req.body;

  if (!nama || !status || !tanggalMasuk) {
    return res.status(400).json({ message: 'Data nama, status, dan tanggalMasuk diperlukan.' });
  }

  try {
    const { data, error } = await supabase
      .from('items')
      .insert([
        {
          nama: nama,
          status: status,
          "tanggalMasuk": tanggalMasuk,
          "tanggalSelesai": tanggalSelesai
        }
      ])
      .select();

    if (error) {
      throw error;
    }

    res.status(201).json({ message: 'Data sepatu berhasil ditambahkan.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/items/:id', async (req, res) => {
  const { id } = req.params;
  const { status, tanggalSelesai } = req.body;

  if (!status || !tanggalSelesai) {
    return res.status(400).json({ message: "Data 'status' dan 'tanggalSelesai' diperlukan." });
  }

  try {
    const { data, error } = await supabase
      .from('items')
      .update({
        status: status,
        "tanggalSelesai": tanggalSelesai
      })
      .eq('id', id)
      .select();

    if (error) {
      throw error;
    }

    if (data.length === 0) {
      return res.status(404).json({ message: 'Data sepatu tidak ditemukan.' });
    }

    res.json({ message: 'Status sepatu berhasil diperbarui.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/items/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const { data, error } = await supabase
      .from('items')
      .delete()
      .eq('id', id)
      .select();

    if (error) {
      throw error;
    }
    
    if (data.length === 0) {
      return res.status(404).json({ message: 'Data sepatu tidak ditemukan.' });
    }

    res.json({ message: 'Data sepatu berhasil dihapus.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
  });
}

module.exports = app;