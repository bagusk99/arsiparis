export interface NavItem {
  title: string;
  href: string;
  description?: string;
  children?: NavItem[];
}

export const sitemap: NavItem[] = [
  {
    title: "Digitalisasi Informasi Regulasi dan Alur Kearsipan di Lingkungan BPIP",
    href: "/",
    description: "Halaman utama untuk informasi regulasi dan alur kearsipan di BPIP.",
    children: [
      {
        title: "Konsep Dasar Kearsipan",
        href: "/konsep-dasar-kearsipan",
        description: "Memahami dasar-dasar kearsipan.",
        children: [
          { title: "Pengertian Arsip", href: "/konsep-dasar-kearsipan/pengertian-arsip", description: "Definisi dan ruang lingkup arsip." },
          { title: "Jenis-jenis Arsip", href: "/konsep-dasar-kearsipan/jenis-jenis-arsip", description: "Berbagai kategori arsip berdasarkan sifat dan fungsinya." },
          { title: "Siklus Hidup Arsip", href: "/konsep-dasar-kearsipan/siklus-hidup-arsip", description: "Tahapan pengelolaan arsip dari penciptaan hingga penyusutan." },
          { title: "Nilai Guna Arsip", href: "/konsep-dasar-kearsipan/nilai-guna-arsip", description: "Pentingnya arsip bagi organisasi dan masyarakat." },
          { title: "Instrumen Kearsipan", href: "/konsep-dasar-kearsipan/instrumen-kearsipan", description: "Alat dan pedoman dalam pengelolaan arsip." },
          { title: "Organisasi Kearsipan", href: "/konsep-dasar-kearsipan/organisasi-kearsipan", description: "Struktur dan peran lembaga kearsipan." },
        ],
      },
      {
        title: "Manajemen Arsip Dinamis",
        href: "/manajemen-arsip-dinamis",
        description: "Pengelolaan arsip yang masih aktif digunakan.",
        children: [
          {
            title: "Penciptaan Arsip",
            href: "/manajemen-arsip-dinamis/penciptaan-arsip",
            description: "Proses awal terbentuknya arsip.",
            children: [
              { title: "Pembuatan Arsip", href: "/manajemen-arsip-dinamis/penciptaan-arsip/pembuatan", description: "Langkah-langkah pembuatan arsip yang sah." },
              { title: "Penerimaan Arsip", href: "/manajemen-arsip-dinamis/penciptaan-arsip/penerimaan", description: "Prosedur penerimaan arsip dari berbagai sumber." },
              { title: "Registrasi dan Distribusi", href: "/manajemen-arsip-dinamis/penciptaan-arsip/registrasi-distribusi", description: "Pencatatan dan penyebaran arsip." },
              { title: "Autentisitas Arsip", href: "/manajemen-arsip-dinamis/penciptaan-arsip/autentisitas", description: "Memastikan keaslian dan keabsahan arsip." },
            ],
          },
          {
            title: "Penggunaan Arsip",
            href: "/manajemen-arsip-dinamis/penggunaan-arsip",
            description: "Akses dan pemanfaatan arsip.",
            children: [
              { title: "Hak Akses Arsip", href: "/manajemen-arsip-dinamis/penggunaan-arsip/hak-akses", description: "Ketentuan mengenai siapa yang berhak mengakses arsip." },
              { title: "Pengguna Internal", href: "/manajemen-arsip-dinamis/penggunaan-arsip/internal", description: "Pemanfaatan arsip oleh pihak internal organisasi." },
              { title: "Pengguna Eksternal", href: "/manajemen-arsip-dinamis/penggunaan-arsip/eksternal", description: "Pemanfaatan arsip oleh pihak di luar organisasi." },
              { title: "SIKN-JIKN", href: "/manajemen-arsip-dinamis/penggunaan-arsip/sikn-jikn", description: "Sistem Informasi Kearsipan Nasional dan Jaringan Informasi Kearsipan Nasional." },
            ],
          },
          {
            title: "Pemeliharaan Arsip",
            href: "/manajemen-arsip-dinamis/pemeliharaan-arsip",
            description: "Upaya menjaga kondisi dan informasi arsip.",
            children: [
              {
                title: "Pemberkasan Arsip Aktif",
                href: "/manajemen-arsip-dinamis/pemeliharaan-arsip/pemberkasan-aktif",
                description: "Pengaturan arsip yang masih sering digunakan.",
                children: [
                  {
                    title: "Penentuan Indeks",
                    href: "/manajemen-arsip-dinamis/pemeliharaan-arsip/pemberkasan-aktif/penentuan-indeks",
                    description: "Metode pengindeksan arsip untuk memudahkan pencarian.",
                    children: [
                      { title: "Pemeriksaan", href: "/manajemen-arsip-dinamis/pemeliharaan-arsip/pemberkasan-aktif/penentuan-indeks/pemeriksaan", description: "Verifikasi kelengkapan dan kebenaran arsip." },
                      { title: "Penentuan Kode Klasifikasi", href: "/manajemen-arsip-dinamis/pemeliharaan-arsip/pemberkasan-aktif/penentuan-indeks/kode-klasifikasi", description: "Pemberian kode berdasarkan sistem klasifikasi." },
                      { title: "Tunjuk Silang", href: "/manajemen-arsip-dinamis/pemeliharaan-arsip/pemberkasan-aktif/penentuan-indeks/tunjuk-silang", description: "Referensi silang antar arsip terkait." },
                      { title: "Pelabelan", href: "/manajemen-arsip-dinamis/pemeliharaan-arsip/pemberkasan-aktif/penentuan-indeks/pelabelan", description: "Pemberian label pada berkas arsip." },
                      { title: "Penyusunan Daftar Arsip Aktif", href: "/manajemen-arsip-dinamis/pemeliharaan-arsip/pemberkasan-aktif/penentuan-indeks/daftar-aktif", description: "Pembuatan daftar arsip yang masih aktif." },
                      { title: "Pelaporan Daftar Arsip Aktif", href: "/manajemen-arsip-dinamis/pemeliharaan-arsip/pemberkasan-aktif/penentuan-indeks/pelaporan-daftar-aktif", description: "Pelaporan berkala daftar arsip aktif." },
                    ],
                  },
                ],
              },
              {
                title: "Penataan Arsip Inaktif",
                href: "/manajemen-arsip-dinamis/pemeliharaan-arsip/penataan-inaktif",
                description: "Pengaturan arsip yang jarang digunakan.",
                children: [
                  { title: "Pengaturan Fisik Arsip", href: "/manajemen-arsip-dinamis/pemeliharaan-arsip/penataan-inaktif/pengaturan-fisik", description: "Penataan fisik arsip inaktif di ruang penyimpanan." },
                  { title: "Pengolahan Informasi Arsip", href: "/manajemen-arsip-dinamis/pemeliharaan-arsip/penataan-inaktif/pengolahan-informasi", description: "Pengolahan data dan informasi arsip inaktif." },
                  { title: "Penyusunan Daftar Arsip Inaktif", href: "/manajemen-arsip-dinamis/pemeliharaan-arsip/penataan-inaktif/daftar-inaktif", description: "Pembuatan daftar arsip inaktif." },
                ],
              },
              {
                title: "Penyimpanan Arsip",
                href: "/manajemen-arsip-dinamis/pemeliharaan-arsip/penyimpanan-arsip",
                description: "Tempat dan metode penyimpanan arsip.",
                children: [
                  { title: "Arsip Aktif", href: "/manajemen-arsip-dinamis/pemeliharaan-arsip/penyimpanan-arsip/aktif", description: "Penyimpanan arsip yang sering diakses." },
                  { title: "Arsip Inaktif", href: "/manajemen-arsip-dinamis/pemeliharaan-arsip/penyimpanan-arsip/inaktif", description: "Penyimpanan arsip yang jarang diakses." },
                ],
              },
              { title: "Alih Media Arsip", href: "/manajemen-arsip-dinamis/pemeliharaan-arsip/alih-media", description: "Konversi arsip ke format digital atau media lain." },
            ],
          },
          {
            title: "Penyusutan Arsip",
            href: "/manajemen-arsip-dinamis/penyusutan-arsip",
            description: "Pengurangan jumlah arsip sesuai ketentuan.",
            children: [
              { title: "Pemindahan Arsip Inaktif", href: "/manajemen-arsip-dinamis/penyusutan-arsip/pemindahan-inaktif", description: "Proses pemindahan arsip inaktif ke tempat penyimpanan arsip statis." },
              { title: "Pemusnahan Arsip", href: "/manajemen-arsip-dinamis/penyusutan-arsip/pemusnahan", description: "Prosedur penghancuran arsip yang tidak memiliki nilai guna." },
              { title: "Penyerahan Arsip Statis", href: "/manajemen-arsip-dinamis/penyusutan-arsip/penyerahan-statis", description: "Penyerahan arsip statis ke lembaga kearsipan." },
            ],
          },
        ],
      },
      {
        title: "Manajemen Arsip Statis",
        href: "/manajemen-arsip-statis",
        description: "Pengelolaan arsip yang memiliki nilai sejarah dan permanen.",
        children: [
          { title: "Akuisisi Arsip Statis", href: "/manajemen-arsip-statis/akuisisi", description: "Proses perolehan arsip statis." },
          { title: "Pengolahan Arsip Statis", href: "/manajemen-arsip-statis/pengolahan", description: "Penataan dan deskripsi arsip statis." },
          { title: "Preservasi Arsip Statis", href: "/manajemen-arsip-statis/preservasi", description: "Upaya pelestarian arsip statis." },
          { title: "Akses dan Layanan Arsip Statis", href: "/manajemen-arsip-statis/akses-layanan", description: "Penyediaan akses dan layanan untuk arsip statis." },
        ],
      },
      {
        title: "Arsip Elektronik",
        href: "/arsip-elektronik",
        description: "Pengelolaan arsip dalam format digital.",
        children: [
          { title: "Konsep Arsip Elektronik", href: "/arsip-elektronik/konsep", description: "Dasar-dasar arsip digital." },
          { title: "Manajemen Arsip Elektronik", href: "/arsip-elektronik/manajemen", description: "Pengelolaan arsip digital." },
          { title: "Sistem Informasi Kearsipan Dinamis Terintegrasi (SRIKANDI)", href: "/arsip-elektronik/srikandi", description: "Sistem kearsipan digital terintegrasi." },
        ],
      },
      {
        title: "Regulasi Kearsipan",
        href: "/regulasi-kearsipan",
        description: "Peraturan dan undang-undang terkait kearsipan.",
        children: [
          { title: "Undang-Undang Kearsipan", href: "/regulasi-kearsipan/undang-undang", description: "Undang-undang yang mengatur kearsipan." },
          { title: "Peraturan Pemerintah", href: "/regulasi-kearsipan/peraturan-pemerintah", description: "Peraturan pemerintah terkait kearsipan." },
          { title: "Peraturan Kepala ANRI", href: "/regulasi-kearsipan/peraturan-anri", description: "Peraturan dari Arsip Nasional Republik Indonesia." },
          { title: "Peraturan BPIP", href: "/regulasi-kearsipan/peraturan-bpip", description: "Peraturan internal BPIP terkait kearsipan." },
        ],
      },
      {
        title: "Alur Kearsipan BPIP",
        href: "/alur-kearsipan-bpip",
        description: "Prosedur dan alur kerja kearsipan di lingkungan BPIP.",
        children: [
          { title: "Alur Surat Masuk", href: "/alur-kearsipan-bpip/surat-masuk", description: "Proses penanganan surat masuk." },
          { title: "Alur Surat Keluar", href: "/alur-kearsipan-bpip/surat-keluar", description: "Proses penanganan surat keluar." },
          { title: "Alur Pengelolaan Arsip Dinamis", href: "/alur-kearsipan-bpip/pengelolaan-arsip-dinamis", description: "Prosedur pengelolaan arsip aktif dan inaktif." },
          { title: "Alur Pengelolaan Arsip Statis", href: "/alur-kearsipan-bpip/pengelolaan-arsip-statis", description: "Prosedur pengelolaan arsip statis." },
        ],
      },
      {
        title: "FAQ",
        href: "/faq",
        description: "Pertanyaan yang sering diajukan mengenai kearsipan.",
      },
      {
        title: "Kontak",
        href: "/kontak",
        description: "Informasi kontak BPIP.",
      },
    ],
  },
];

export const flattenSitemap = (sitemap: NavItem[]): NavItem[] => {
  let flattened: NavItem[] = [];
  sitemap.forEach(item => {
    flattened.push({ title: item.title, href: item.href, description: item.description });
    if (item.children) {
      flattened = flattened.concat(flattenSitemap(item.children));
    }
  });
  return flattened;
};

export const getPageData = (href: string): NavItem | undefined => {
  const allPages = flattenSitemap(sitemap);
  return allPages.find(page => page.href === href);
};
