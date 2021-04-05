-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 05 Apr 2021 pada 19.33
-- Versi server: 10.4.17-MariaDB
-- Versi PHP: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `telebot`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `account`
--

CREATE TABLE `account` (
  `id_account` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `account`
--

INSERT INTO `account` (`id_account`, `email`, `password`) VALUES
(1, 'admin@gmail.com', 'Standar123.'),
(2, 'example@gmail.com', 'example'),
(6, 'mus', 'mus');

-- --------------------------------------------------------

--
-- Struktur dari tabel `keyword`
--

CREATE TABLE `keyword` (
  `id_keyword` int(11) NOT NULL,
  `keyword` varchar(255) NOT NULL,
  `results` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `keyword`
--

INSERT INTO `keyword` (`id_keyword`, `keyword`, `results`) VALUES
(1, 'pengertian covid', 'COVID-19 adalah penyakit menular yang disebabkan oleh jenis coronavirus yang baru ditemukan. Virus baru dan penyakit yang disebabkannya ini tidak dikenal sebelum mulainya wabah di Wuhan, Tiongkok, bulan Desember 2019. COVID-19 ini sekarang menjadi sebuah pandemi yang terjadi di banyak negara di seluruh dunia.\n\nsumber: WHO'),
(9, 'keyword', 'list keyword : \n\n*Covid :\n1. Info Covid hari ini\n2. bla bla bla\n\n*Vaksinasi : \n1. vaksinasi covid adalah\n2. lorem ipsum'),
(10, 'gejala covid', 'Gejala-gejala COVID-19 yang paling umum adalah demam, batuk kering, dan rasa lelah. Gejala lainnya yang lebih jarang dan mungkin dialami beberapa pasien meliputi rasa nyeri dan sakit, hidung tersumbat, sakit kepala, konjungtivitis, sakit tenggorokan, diare, kehilangan indera rasa atau penciuman, ruam pada kulit, atau perubahan warna jari tangan atau kaki. Gejala-gejala yang dialami biasanya bersifat ringan dan muncul secara bertahap. Beberapa orang menjadi terinfeksi tetapi hanya memiliki gejala ringan.\n\nSebagian besar (sekitar 80%) orang yang terinfeksi berhasil pulih tanpa perlu perawatan khusus. Sekitar 1 dari 5 orang yang terinfeksi COVID-19 menderita sakit parah dan kesulitan bernapas. Orang-orang lanjut usia (lansia) dan orang-orang dengan kondisi medis penyerta seperti tekanan darah tinggi, gangguan jantung dan paru-paru, diabetes, atau kanker memiliki kemungkinan lebih besar mengalami sakit lebih serius.\n\nNamun, siapa pun dapat terinfeksi COVID-19 dan mengalami sakit yang serius. Orang dari segala usia yang mengalami demam dan/atau batuk disertai dengan kesulitan bernapas/sesak napas, nyeri/tekanan dada, atau kehilangan kemampuan berbicara atau bergerak harus segera mencari pertolongan medis. Jika memungkinkan, disarankan untuk menghubungi penyedia layanan kesehatan atau fasilitas kesehatan terlebih dahulu, sehingga pasien dapat diarahkan ke fasilitas kesehatan yang tepat.\n\nsumber: WHO'),
(11, 'penularan covid', 'Orang dapat tertular COVID-19 dari orang lain yang terinfeksi virus ini. COVID-19 dapat menyebar terutama dari orang ke orang melalui percikan-percikan dari hidung atau mulut yang keluar saat orang yang terinfeksi COVID-19 batuk, bersin atau berbicara. Percikan-percikan ini relatif berat, perjalanannya tidak jauh dan jatuh ke tanah dengan cepat. Orang dapat terinfeksi COVID-19 jika menghirup percikan orang yang terinfeksi virus ini. Oleh karena itu, penting bagi kita untuk menjaga jarak minimal 1 meter dari orang lain. Percikan-percikan ini dapat menempel di benda dan permukaan lainnya di sekitar orang seperti meja, gagang pintu, dan pegangan tangan. Orang dapat terinfeksi dengan menyentuh benda atau permukaan tersebut, kemudian menyentuh mata, hidung, atau mulut mereka. Inilah sebabnya penting untuk mencuci tangan secara teratur dengan sabun dan air bersih mengalir, atau membersihkannya dengan cairan antiseptik berbahan dasar alkohol. WHO terus mengkaji perkembangan penelitian tentang cara penyebaran COVID-19 dan akan menyampaikan temuan-temuan terbaru.'),
(12, 'isolasi mandiri', 'Isolasi mandiri adalah tindakan penting yang dilakukan oleh orang yang memiliki gejala COVID-19 untuk mencegah penularan ke orang lain di masyarakat, termasuk anggota keluarga.\n\nIsolasi mandiri adalah ketika seseorang yang mengalami demam, batuk, atau gejala COVID-19 lainnya tinggal di rumah dan tidak pergi bekerja, sekolah, atau ke tempat-tempat umum. Hal ini dilakukan secara sukarela atau berdasarkan rekomendasi dari penyedia layanan kesehatan. Namun, jika Anda tinggal di daerah dengan kasus malaria atau demam berdarah, Anda tidak boleh mengabaikan gejala demam. Segera cari pertolongan medis. Saat Anda pergi ke fasilitas kesehatan, kenakan masker jika memungkinkan, jaga jarak setidaknya 1 meter dari orang lain dan jangan menyentuh permukaan benda dengan tangan Anda. Jika yang sakit adalah anak, bantu anak mematuhi nasihat ini.\n\nJika Anda tidak tinggal di daerah dengan kasus malaria atau demam berdarah, lakukanlah hal-hal berikut:\n\n• Jika seseorang melakukan isolasi mandiri, artinya orang tersebut sedang sakit namun tidak parah (tidak memerlukan pertolongan medis) • Sediakan kamar sendiri yang besar dengan sirkulasi udara yang baik dan dilengkapi sarana mencuci tangan dan toilet.\n• Jika tidak memungkinkan, pisahkan tempat tidur dengan orang lain dengan jarak minimal 1 meter.\n• Tetap jaga jarak minimal 1 meter dengan orang lain, termasuk anggota keluarga.\n• Pantau gejala yang dialami setiap hari.\n• Lakukan isolasi mandiri selama 14 hari meskipun Anda merasa sehat.\n• Jika Anda mengalami kesulitan bernapas, segera hubungi penyedia layanan kesehatan Anda – hubungi terlebih dahulu jika memungkinkan.\n• Tetap positif dan semangat dengan cara tetap menjaga silahturahmi dengan orang-orang tercinta melalui telepon atau media online dan dengan berolahraga di rumah.'),
(13, 'perbedaan karantina mandiri', 'Karantina berarti membatasi kegiatan atau memisahkan orang yang tidak sakit tetapi mungkin terpajan COVID-19. Tujuannya adalah untuk mencegah penyebaran penyakit pada saat orang tersebut baru mulai mengalami gejala.\n\nIsolasi berarti memisahkan orang yang sakit dengan gejala COVID-19 dan mungkin menular guna mencegah penularan.\n\nMenjaga jarak fisik berarti terpisah secara fisik. WHO merekomendasikan untuk menjaga jarak setidaknya 1 meter dari orang lain. Jarak ini merupakan ukuran umum tentang seberapa jauh semua orang harus saling menjaga jarak walaupun mereka baik-baik saja tanpa diketahui terpajan COVID-19 atau tidak.'),
(14, 'karantina mandiri', 'Karantina berarti membatasi kegiatan atau memisahkan orang yang tidak sakit tetapi mungkin terpajan COVID-19. Tujuannya adalah untuk mencegah penyebaran penyakit pada saat orang tersebut baru mulai mengalami gejala.'),
(15, 'menjaga jarak', 'Menjaga jarak fisik berarti terpisah secara fisik. WHO merekomendasikan untuk menjaga jarak setidaknya 1 meter dari orang lain. Jarak ini merupakan ukuran umum tentang seberapa jauh semua orang harus saling menjaga jarak walaupun mereka baik-baik saja tanpa diketahui terpajan COVID-19 atau tidak.'),
(16, 'anak terinfeksi covid', 'Penelitian menunjukkan bahwa anak-anak dan remaja memiliki risiko terinfeksi dan menularkan ke orang lain yang sama seperti kelompok usia lainnya.\n\nSampai saat ini, bukti menunjukkan bahwa anak-anak dan remaja lebih kecil kemungkinannya terkena penyakit yang serius, meskipun penyakit yang serius masih dapat terjadi pada kelompok usia ini.\n\nAnak-anak dan orang dewasa harus mengikuti panduan yang sama tentang karantina dan isolasi mandiri jika ada kemungkinan bahwa mereka telah terpajan atau mulai menunjukkan gejala. Sangat penting bagi anak-anak untuk menghindari kontak dengan orang tua dan orang lain yang berisiko memiliki penyakit serius.'),
(17, 'melindungi diri', 'Cara efektif untuk melindungi Anda dan orang lain dari COVID-19 adalah:\n• Cuci tangan dengan teratur dan menyeluruh\n• Hindari menyentuh mata, hidung, dan mulut\n• Jalankan etika batuk dan bersin dengan cara menutup mulut dan hidung dengan siku terlipat atau tisu. Jika menggunakan tisu, segera buang setelah digunakan dan cuci tangan.\n• Jaga jarak fisik dengan orang lain setidaknya 1 meter'),
(18, 'cara pakai masker', 'Bagaimana cara menggunakan masker yang benar?\n\nJika Anda akan menggunakan masker:\n1. Sebelum menyentuh masker, cuci tangan menggunakan sabun dan air bersih mengalir, atau bersihkan tangan menggunakan cairan antiseptik berbahan dasar alkohol.\n2. Ambil masker dan periksa apakah ada sobekan atau lubang\n3. Tentukan sisi mana yang merupakan sisi atas (tempat pita logam berada)\n4. Pastikan sisi masker yang tepat menghadap ke luar (sisi berwarna).\n5. Tempatkan masker ke wajah Anda. Jepit pita logam atau bagian tepi masker yang kaku sehingga bentuknya sesuai hidung Anda.\n6. Tarik masker ke bawah sehingga menutupi mulut dan dagu Anda.\n7. Jangan menyentuh masker pada saat Anda memakainya sebagai perlindungan.\n8. Setelah digunakan, lepas masker dengan tangan bersih, lepaskan tali elastis dari belakang telinga sambil menjauhkan masker dari wajah dan pakaian Anda, untuk menghindari menyentuh permukaan masker yang mungkin terkontaminasi.\n9. Segera buang masker sekali-pakai di tempat sampah setelah digunakan. Jangan gunakan kembali masker tersebut.\n10. Jaga kebersihan tangan setelah menyentuh atau membuang masker – Gunakan cairan antiseptik berbahan dasar alkohol atau jika terlihat kotor, cuci tangan Anda dengan sabun dan air.\n\nPerlu dipahami bahwa terjadi kekurangan ketersediaan masker di seluruh dunia (baik masker medis maupun masker N95). Masker medis harus dialokasikan sebanyak mungkin untuk tenaga kesehatan.\n\nPerlu diingat bahwa penggunaan masker bukan pengganti bagi cara-cara lain yang lebih efektif untuk melindungi diri sendiri dan orang lain dari COVID-19 seperti sering mencuci tangan, menutup hidung dan mulut dengan lengan yang terlipat atau tisu ketika batuk, dan menjaga jarak setidaknya 1 meter dari orang lain. Lihat langkah-langkah perlindungan dasar terhadap coronavirus baru untuk informasi lebih lanjut.\nTetap ikuti saran dari kementerian kesehatan Anda tentang penggunaan masker.'),
(19, 'virus di permukaan benda', 'Berapa lama virus dapat bertahan di permukaan benda?\n\nHal yang paling penting untuk diketahui tentang coronavirus pada permukaan benda adalah bahwa coronavirus mudah dibersihkan menggunakan disinfektan rumah tangga biasa yang dapat membunuh virus tersebut. Penelitian telah menunjukkan bahwa virus COVID-19 dapat bertahan hingga 72 jam pada plastik dan stainless steel, kurang dari 4 jam pada tembaga, dan kurang dari 24 jam pada karton.\n\nPastikan Anda selalu menjaga kebersihan tangan dengan mencuci tangan menggunakan sabun dan air bersih mengalir, atau cairan antiseptik berbahan dasar alkohol. Hindari menyentuh mata, mulut, atau hidung Anda.'),
(20, 'berbelanja aman', 'Bagaimana cara berbelanja secara aman?\n\nSaat berbelanja bahan makanan, jaga jarak setidaknya 1 meter dari orang lain dan tidak menyentuh mata, mulut, dan hidung Anda. Jika memungkinkan, bersihkan pegangan kereta belanja atau keranjang sebelum berbelanja. Saat tiba di rumah, cuci tangan Anda sampai bersih dan juga setelah memegang dan menyimpan produk yang Anda beli.\n\nSaat ini tidak ada kasus konfirmasi COVID-19 yang ditularkan melalui makanan atau kemasan makanan.'),
(21, 'cuci buah dan sayur', 'Bagaimana cara mencuci buah dan sayuran?\n\nBuah dan sayuran adalah komponen penting dalam diet sehat. Cuci buah dan sayuran dengan cara yang sama ketika Anda mencucinya dalam keadaan lain: sebelum menyentuh buah dan sayuran, cuci tangan Anda dengan sabun dan air bersih mengalir. Kemudian, cuci buah dan sayuran secara menyeluruh dengan air bersih, terutama jika Anda memakannya dalam keadaan mentah.'),
(22, 'antibiotik', 'Apakah antibiotik efektif dalam mencegah atau mengobati COVID-19?\n\nTidak. Antibiotik tidak efektif melawan virus; antibiotik hanya efektif melawan infeksi bakteri. COVID-19 disebabkan oleh virus, sehingga antibiotik tidak efektif melawan COVID-19. Antibiotik tidak boleh digunakan sebagai upaya pencegahan atau pengobatan COVID-19. Di rumah sakit, dokter kadang-kadang akan menggunakan antibiotik untuk mencegah atau mengobati infeksi bakteri sekunder yang dapat menjadi komplikasi COVID-19 pada pasien yang sakit serius. Antibiotik hanya boleh digunakan sesuai dengan anjuran dokter untuk mengobati infeksi bakteri.'),
(23, 'kotoran menular', 'Apakah saya dapat tertular COVID-19 dari kotoran orang yang terinfeksi penyakit ini?\n\nSaat ini, penyelidikan awal menunjukkan bahwa virus dapat ada pada kotoran dalam beberapa kasus, tetapi belum ada laporan penularan COVID-19 melalui kotoran. Selain itu, sampai dengan saat ini tidak ada bukti tentang kelangsungan hidup virus COVID-19 di air atau selokan.\n\nWHO sedang mengkaji penelitian yang sedang berlangsung terkait cara penularan COVID-19 dan akan terus menyampaikan temuan baru dalam topik ini.');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`id_account`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indeks untuk tabel `keyword`
--
ALTER TABLE `keyword`
  ADD PRIMARY KEY (`id_keyword`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `account`
--
ALTER TABLE `account`
  MODIFY `id_account` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `keyword`
--
ALTER TABLE `keyword`
  MODIFY `id_keyword` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
