import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Search, 
  ChevronDown, 
  Home, 
  FileText, 
  Archive, 
  Database, 
  Monitor, 
  BookOpen, 
  GitBranch, 
  HelpCircle, 
  Phone,
  Building2,
  Users,
  Shield,
  Settings,
  Mail,
  MapPin,
  Clock,
  Download,
  ExternalLink,
  Award,
  Target,
  Eye,
  Heart
} from 'lucide-react';

interface MenuItem {
  id: string;
  title: string;
  icon?: React.ReactNode;
  children?: MenuItem[];
  content?: React.ReactNode;
}

const menuItems: MenuItem[] = [
  {
    id: 'home',
    title: 'Beranda',
    icon: <Home className="w-4 h-4" />,
    content: <HomeContent />
  },
  {
    id: 'konsep-dasar',
    title: 'Konsep Dasar Kearsipan',
    icon: <BookOpen className="w-4 h-4" />,
    children: [
      { id: 'pengertian-arsip', title: 'Pengertian Arsip', content: <ConceptContent title="Pengertian Arsip" /> },
      { id: 'jenis-arsip', title: 'Jenis-jenis Arsip', content: <ConceptContent title="Jenis-jenis Arsip" /> },
      { id: 'siklus-hidup', title: 'Siklus Hidup Arsip', content: <ConceptContent title="Siklus Hidup Arsip" /> },
      { id: 'nilai-guna', title: 'Nilai Guna Arsip', content: <ConceptContent title="Nilai Guna Arsip" /> },
      { id: 'instrumen-kearsipan', title: 'Instrumen Kearsipan', content: <ConceptContent title="Instrumen Kearsipan" /> },
      { id: 'organisasi-kearsipan', title: 'Organisasi Kearsipan', content: <ConceptContent title="Organisasi Kearsipan" /> }
    ]
  },
  {
    id: 'manajemen-dinamis',
    title: 'Manajemen Arsip Dinamis',
    icon: <Archive className="w-4 h-4" />,
    children: [
      {
        id: 'penciptaan-arsip',
        title: 'Penciptaan Arsip',
        children: [
          { id: 'pembuatan-arsip', title: 'Pembuatan Arsip', content: <DetailContent title="Pembuatan Arsip" /> },
          { id: 'penerimaan-arsip', title: 'Penerimaan Arsip', content: <DetailContent title="Penerimaan Arsip" /> },
          { id: 'registrasi-distribusi', title: 'Registrasi dan Distribusi', content: <DetailContent title="Registrasi dan Distribusi" /> },
          { id: 'autentisitas-arsip', title: 'Autentisitas Arsip', content: <DetailContent title="Autentisitas Arsip" /> }
        ]
      },
      {
        id: 'penggunaan-arsip',
        title: 'Penggunaan Arsip',
        children: [
          { id: 'hak-akses', title: 'Hak Akses Arsip', content: <DetailContent title="Hak Akses Arsip" /> },
          { id: 'pengguna-internal', title: 'Pengguna Internal', content: <DetailContent title="Pengguna Internal" /> },
          { id: 'pengguna-eksternal', title: 'Pengguna Eksternal', content: <DetailContent title="Pengguna Eksternal" /> },
          { id: 'sikn-jikn', title: 'SIKN-JIKN', content: <DetailContent title="SIKN-JIKN" /> }
        ]
      },
      {
        id: 'pemeliharaan-arsip',
        title: 'Pemeliharaan Arsip',
        children: [
          {
            id: 'pemberkasan-aktif',
            title: 'Pemberkasan Arsip Aktif',
            children: [
              {
                id: 'penentuan-indeks',
                title: 'Penentuan Indeks',
                children: [
                  { id: 'pemeriksaan', title: 'Pemeriksaan', content: <DetailContent title="Pemeriksaan" /> },
                  { id: 'kode-klasifikasi', title: 'Penentuan Kode Klasifikasi', content: <DetailContent title="Penentuan Kode Klasifikasi" /> },
                  { id: 'tunjuk-silang', title: 'Tunjuk Silang', content: <DetailContent title="Tunjuk Silang" /> },
                  { id: 'pelabelan', title: 'Pelabelan', content: <DetailContent title="Pelabelan" /> },
                  { id: 'daftar-aktif', title: 'Penyusunan Daftar Arsip Aktif', content: <DetailContent title="Penyusunan Daftar Arsip Aktif" /> },
                  { id: 'pelaporan-aktif', title: 'Pelaporan Daftar Arsip Aktif', content: <DetailContent title="Pelaporan Daftar Arsip Aktif" /> }
                ]
              }
            ]
          },
          {
            id: 'penataan-inaktif',
            title: 'Penataan Arsip Inaktif',
            children: [
              { id: 'pengaturan-fisik', title: 'Pengaturan Fisik Arsip', content: <DetailContent title="Pengaturan Fisik Arsip" /> },
              { id: 'pengolahan-informasi', title: 'Pengolahan Informasi Arsip', content: <DetailContent title="Pengolahan Informasi Arsip" /> },
              { id: 'daftar-inaktif', title: 'Penyusunan Daftar Arsip Inaktif', content: <DetailContent title="Penyusunan Daftar Arsip Inaktif" /> }
            ]
          },
          {
            id: 'penyimpanan-arsip',
            title: 'Penyimpanan Arsip',
            children: [
              { id: 'arsip-aktif', title: 'Arsip Aktif', content: <DetailContent title="Arsip Aktif" /> },
              { id: 'arsip-inaktif', title: 'Arsip Inaktif', content: <DetailContent title="Arsip Inaktif" /> }
            ]
          },
          { id: 'alih-media', title: 'Alih Media Arsip', content: <DetailContent title="Alih Media Arsip" /> }
        ]
      },
      {
        id: 'penyusutan-arsip',
        title: 'Penyusutan Arsip',
        children: [
          { id: 'pemindahan-inaktif', title: 'Pemindahan Arsip Inaktif', content: <DetailContent title="Pemindahan Arsip Inaktif" /> },
          { id: 'pemusnahan-arsip', title: 'Pemusnahan Arsip', content: <DetailContent title="Pemusnahan Arsip" /> },
          { id: 'penyerahan-statis', title: 'Penyerahan Arsip Statis', content: <DetailContent title="Penyerahan Arsip Statis" /> }
        ]
      }
    ]
  },
  {
    id: 'manajemen-statis',
    title: 'Manajemen Arsip Statis',
    icon: <Database className="w-4 h-4" />,
    children: [
      { id: 'akuisisi-statis', title: 'Akuisisi Arsip Statis', content: <DetailContent title="Akuisisi Arsip Statis" /> },
      { id: 'pengolahan-statis', title: 'Pengolahan Arsip Statis', content: <DetailContent title="Pengolahan Arsip Statis" /> },
      { id: 'preservasi-statis', title: 'Preservasi Arsip Statis', content: <DetailContent title="Preservasi Arsip Statis" /> },
      { id: 'akses-layanan-statis', title: 'Akses dan Layanan Arsip Statis', content: <DetailContent title="Akses dan Layanan Arsip Statis" /> }
    ]
  },
  {
    id: 'arsip-elektronik',
    title: 'Arsip Elektronik',
    icon: <Monitor className="w-4 h-4" />,
    children: [
      { id: 'konsep-elektronik', title: 'Konsep Arsip Elektronik', content: <DetailContent title="Konsep Arsip Elektronik" /> },
      { id: 'manajemen-elektronik', title: 'Manajemen Arsip Elektronik', content: <DetailContent title="Manajemen Arsip Elektronik" /> },
      { id: 'srikandi', title: 'Sistem Informasi Kearsipan Dinamis Terintegrasi (SRIKANDI)', content: <DetailContent title="SRIKANDI" /> }
    ]
  },
  {
    id: 'regulasi',
    title: 'Regulasi Kearsipan',
    icon: <Shield className="w-4 h-4" />,
    children: [
      { id: 'uu-kearsipan', title: 'Undang-Undang Kearsipan', content: <RegulationContent title="Undang-Undang Kearsipan" /> },
      { id: 'pp-kearsipan', title: 'Peraturan Pemerintah', content: <RegulationContent title="Peraturan Pemerintah" /> },
      { id: 'perka-anri', title: 'Peraturan Kepala ANRI', content: <RegulationContent title="Peraturan Kepala ANRI" /> },
      { id: 'peraturan-bpip', title: 'Peraturan BPIP', content: <RegulationContent title="Peraturan BPIP" /> }
    ]
  },
  {
    id: 'alur-kearsipan',
    title: 'Alur Kearsipan BPIP',
    icon: <GitBranch className="w-4 h-4" />,
    children: [
      { id: 'alur-masuk', title: 'Alur Surat Masuk', content: <FlowContent title="Alur Surat Masuk" /> },
      { id: 'alur-keluar', title: 'Alur Surat Keluar', content: <FlowContent title="Alur Surat Keluar" /> },
      { id: 'alur-dinamis', title: 'Alur Pengelolaan Arsip Dinamis', content: <FlowContent title="Alur Pengelolaan Arsip Dinamis" /> },
      { id: 'alur-statis', title: 'Alur Pengelolaan Arsip Statis', content: <FlowContent title="Alur Pengelolaan Arsip Statis" /> }
    ]
  },
  {
    id: 'faq',
    title: 'FAQ',
    icon: <HelpCircle className="w-4 h-4" />,
    content: <FAQContent />
  },
  {
    id: 'kontak',
    title: 'Kontak',
    icon: <Phone className="w-4 h-4" />,
    content: <ContactContent />
  }
];

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [breadcrumb, setBreadcrumb] = useState<string[]>(['Beranda']);

  const generateBreadcrumb = (itemId: string): string[] => {
    const findPath = (items: MenuItem[], targetId: string, path: string[] = []): string[] | null => {
      for (const item of items) {
        const currentPath = [...path, item.title];
        if (item.id === targetId) {
          return currentPath;
        }
        if (item.children) {
          const found = findPath(item.children, targetId, currentPath);
          if (found) return found;
        }
      }
      return null;
    };

    return findPath(menuItems, itemId) || ['Beranda'];
  };

  const findCurrentContent = (itemId: string): React.ReactNode => {
    const findContent = (items: MenuItem[]): React.ReactNode => {
      for (const item of items) {
        if (item.id === itemId) {
          return item.content || <div>Konten tidak ditemukan</div>;
        }
        if (item.children) {
          const found = findContent(item.children);
          if (found) return found;
        }
      }
      return null;
    };

    return findContent(menuItems) || <div>Konten tidak ditemukan</div>;
  };

  const handlePageChange = (pageId: string) => {
    setCurrentPage(pageId);
    setBreadcrumb(generateBreadcrumb(pageId));
    setActiveDropdown(null);
  };

  const currentContent = findCurrentContent(currentPage);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Top Header Bar */}
      <div className="bg-blue-900 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <span className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              info@bpip.go.id
            </span>
            <span className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              (021) 3441031
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-white hover:bg-blue-800">
              <ExternalLink className="w-4 h-4 mr-2" />
              Portal Utama BPIP
            </Button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg border-b-4 border-red-600">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-lg">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-blue-900">BPIP</h1>
                  <p className="text-sm text-slate-600 font-medium">Badan Pembinaan Ideologi Pancasila</p>
                  <p className="text-xs text-slate-500">Republik Indonesia</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input 
                  placeholder="Cari informasi kearsipan..." 
                  className="pl-10 w-80 border-slate-300 focus:border-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="bg-blue-800 text-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-1">
              {menuItems.map((item) => (
                <div key={item.id} className="relative">
                  <button
                    className={`
                      flex items-center px-4 py-4 text-sm font-medium transition-colors hover:bg-blue-700
                      ${currentPage === item.id ? 'bg-blue-700 border-b-2 border-yellow-400' : ''}
                    `}
                    onClick={() => {
                      if (item.children) {
                        setActiveDropdown(activeDropdown === item.id ? null : item.id);
                      } else {
                        handlePageChange(item.id);
                      }
                    }}
                    onMouseEnter={() => {
                      if (item.children) {
                        setActiveDropdown(item.id);
                      }
                    }}
                  >
                    {item.icon && <span className="mr-2">{item.icon}</span>}
                    {item.title}
                    {item.children && <ChevronDown className="ml-2 w-4 h-4" />}
                  </button>

                  {/* Dropdown Menu */}
                  {item.children && activeDropdown === item.id && (
                    <div 
                      className="absolute top-full left-0 bg-white text-slate-900 shadow-xl border border-slate-200 rounded-b-lg min-w-80 z-50"
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="py-2">
                        {item.children.map((child) => (
                          <div key={child.id}>
                            <button
                              className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors border-b border-slate-100 last:border-b-0"
                              onClick={() => {
                                if (child.children) {
                                  // Handle nested children if needed
                                } else {
                                  handlePageChange(child.id);
                                }
                              }}
                            >
                              <div className="font-medium text-slate-900">{child.title}</div>
                              {child.children && (
                                <div className="text-xs text-slate-500 mt-1">
                                  {child.children.length} sub-bagian
                                </div>
                              )}
                            </button>
                            {/* Show nested children */}
                            {child.children && (
                              <div className="bg-slate-50 border-t border-slate-200">
                                {child.children.map((grandchild) => (
                                  <button
                                    key={grandchild.id}
                                    className="w-full text-left px-8 py-2 text-sm hover:bg-blue-50 transition-colors border-b border-slate-100 last:border-b-0"
                                    onClick={() => handlePageChange(grandchild.id)}
                                  >
                                    {grandchild.title}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        {currentPage !== 'home' && (
          <div className="mb-8">
            <nav className="text-sm text-slate-600 bg-white rounded-lg px-4 py-3 shadow-sm border border-slate-200">
              {breadcrumb.map((item, index) => (
                <span key={index}>
                  {index > 0 && <span className="mx-2 text-slate-400">/</span>}
                  <span className={index === breadcrumb.length - 1 ? 'text-blue-900 font-semibold' : 'hover:text-blue-600 cursor-pointer'}>
                    {item}
                  </span>
                </span>
              ))}
            </nav>
          </div>
        )}

        {/* Content */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
          <div className="p-8 lg:p-12">
            {currentContent}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">BPIP</h3>
                  <p className="text-slate-300">Badan Pembinaan Ideologi Pancasila</p>
                </div>
              </div>
              <p className="text-slate-300 mb-4 leading-relaxed">
                Portal Digitalisasi Informasi Regulasi dan Alur Kearsipan di Lingkungan 
                Badan Pembinaan Ideologi Pancasila Republik Indonesia.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="bg-transparent border-slate-600 text-white hover:bg-slate-800">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Website Utama
                </Button>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Kontak</h4>
              <div className="space-y-3 text-slate-300">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-3 text-slate-400" />
                  <span className="text-sm">Jl. Medan Merdeka Timur No. 3-5, Jakarta Pusat</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-3 text-slate-400" />
                  <span className="text-sm">(021) 3441031</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-3 text-slate-400" />
                  <span className="text-sm">info@bpip.go.id</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Jam Layanan</h4>
              <div className="space-y-2 text-slate-300 text-sm">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-3 text-slate-400" />
                  <div>
                    <div>Senin - Kamis: 08:00 - 16:00</div>
                    <div>Jumat: 08:00 - 16:30</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-slate-700" />
          
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
            <p>&copy; 2024 Badan Pembinaan Ideologi Pancasila. Seluruh hak cipta dilindungi.</p>
            <p>Dibuat dengan teknologi modern untuk pelayanan terbaik</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Content Components
function HomeContent() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full mb-6 shadow-lg">
          <Archive className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
          Digitalisasi Informasi Regulasi dan Alur Kearsipan
        </h1>
        <h2 className="text-xl lg:text-2xl text-blue-700 font-semibold mb-6">
          di Lingkungan BPIP
        </h2>
        <p className="text-lg text-slate-700 max-w-4xl mx-auto leading-relaxed mb-8">
          Selamat datang di portal resmi informasi kearsipan Badan Pembinaan Ideologi Pancasila. 
          Portal ini menyediakan informasi lengkap mengenai regulasi, prosedur, dan alur kearsipan 
          yang berlaku di lingkungan BPIP sesuai dengan standar nasional kearsipan Indonesia.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <BookOpen className="w-5 h-5 mr-2" />
            Mulai Eksplorasi
          </Button>
          <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
            <Download className="w-5 h-5 mr-2" />
            Unduh Panduan
          </Button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-8">
        <Card className="text-center border-blue-200 hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">50+</h3>
            <p className="text-slate-600">Regulasi Kearsipan</p>
          </CardContent>
        </Card>
        
        <Card className="text-center border-green-200 hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <GitBranch className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">15+</h3>
            <p className="text-slate-600">Alur Prosedur</p>
          </CardContent>
        </Card>
        
        <Card className="text-center border-purple-200 hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Database className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">100%</h3>
            <p className="text-slate-600">Digital</p>
          </CardContent>
        </Card>
        
        <Card className="text-center border-orange-200 hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">24/7</h3>
            <p className="text-slate-600">Akses Online</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <CardHeader className="pb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            <CardTitle className="text-xl text-slate-900">Konsep Dasar Kearsipan</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 mb-4">
              Pelajari pengertian, jenis, siklus hidup, dan konsep fundamental dalam pengelolaan arsip sesuai standar nasional.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">6 Topik</Badge>
              <Badge variant="outline">Dasar</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <CardHeader className="pb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Archive className="w-6 h-6 text-green-600" />
            </div>
            <CardTitle className="text-xl text-slate-900">Manajemen Arsip Dinamis</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 mb-4">
              Panduan lengkap mengenai penciptaan, penggunaan, pemeliharaan, dan penyusutan arsip dinamis.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">4 Kategori</Badge>
              <Badge variant="outline">Lanjutan</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <CardHeader className="pb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Database className="w-6 h-6 text-purple-600" />
            </div>
            <CardTitle className="text-xl text-slate-900">Manajemen Arsip Statis</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 mb-4">
              Informasi tentang akuisisi, pengolahan, preservasi, dan layanan arsip statis bernilai permanen.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">4 Proses</Badge>
              <Badge variant="outline">Khusus</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <CardHeader className="pb-4">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <Monitor className="w-6 h-6 text-orange-600" />
            </div>
            <CardTitle className="text-xl text-slate-900">Arsip Elektronik</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 mb-4">
              Konsep dan manajemen arsip elektronik serta sistem SRIKANDI untuk digitalisasi kearsipan.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Digital</Badge>
              <Badge variant="outline">Modern</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <CardHeader className="pb-4">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-red-600" />
            </div>
            <CardTitle className="text-xl text-slate-900">Regulasi Kearsipan</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 mb-4">
              Kumpulan lengkap peraturan perundang-undangan yang mengatur kearsipan di Indonesia.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Legal</Badge>
              <Badge variant="outline">Resmi</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <CardHeader className="pb-4">
            <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
              <GitBranch className="w-6 h-6 text-teal-600" />
            </div>
            <CardTitle className="text-xl text-slate-900">Alur Kearsipan BPIP</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 mb-4">
              Diagram alur dan prosedur operasional standar pengelolaan kearsipan yang berlaku di BPIP.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">SOP</Badge>
              <Badge variant="outline">Praktis</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Vision Mission Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-12">
        <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-white">
          <CardHeader>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <CardTitle className="text-xl text-blue-900">Visi</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 leading-relaxed">
              Menjadi pusat informasi kearsipan yang terdepan dalam mendukung tata kelola 
              pemerintahan yang baik melalui pengelolaan arsip yang profesional, transparan, 
              dan akuntabel di lingkungan BPIP.
            </p>
          </CardContent>
        </Card>

        <Card className="border-green-200 bg-gradient-to-br from-green-50 to-white">
          <CardHeader>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                <Target className="w-5 h-5 text-white" />
              </div>
              <CardTitle className="text-xl text-green-900">Misi</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="text-slate-700 space-y-2">
              <li>• Menyediakan informasi kearsipan yang akurat dan terkini</li>
              <li>• Meningkatkan kualitas pengelolaan arsip di BPIP</li>
              <li>• Mendukung digitalisasi sistem kearsipan</li>
              <li>• Memastikan kepatuhan terhadap regulasi kearsipan</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 lg:p-12 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Bergabunglah dalam Transformasi Digital Kearsipan
          </h3>
          <p className="text-blue-100 text-lg mb-8 leading-relaxed">
            Mari bersama-sama membangun sistem kearsipan yang modern, efisien, dan sesuai 
            dengan perkembangan teknologi informasi untuk mendukung tata kelola pemerintahan yang baik.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
              <Phone className="w-5 h-5 mr-2" />
              Hubungi Kami
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <HelpCircle className="w-5 h-5 mr-2" />
              Pelajari Lebih Lanjut
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ConceptContent({ title }: { title: string }) {
  return (
    <div className="space-y-8">
      <div className="text-center pb-8 border-b border-slate-200">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
          <BookOpen className="w-8 h-8 text-blue-600" />
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">{title}</h1>
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">Konsep Dasar</Badge>
          <Badge variant="outline">Kearsipan</Badge>
          <Badge variant="outline">BPIP</Badge>
        </div>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Memahami {title.toLowerCase()} sebagai fondasi dalam pengelolaan kearsipan yang efektif dan efisien
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 flex items-center">
                <FileText className="w-5 h-5 mr-3 text-blue-600" />
                Definisi dan Pengertian
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="text-slate-700 leading-relaxed">
                {title} merupakan salah satu konsep fundamental dalam sistem kearsipan yang harus dipahami 
                oleh setiap pengelola arsip di lingkungan BPIP. Pemahaman yang mendalam tentang konsep ini 
                akan membantu dalam implementasi sistem kearsipan yang efektif.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Dalam konteks pengelolaan arsip di BPIP, {title.toLowerCase()} memiliki peran strategis 
                dalam mendukung tata kelola pemerintahan yang baik dan transparansi informasi publik.
              </p>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 flex items-center">
                <Settings className="w-5 h-5 mr-3 text-green-600" />
                Implementasi di BPIP
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 text-sm font-semibold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Tahap Persiapan</h4>
                    <p className="text-slate-600 text-sm">Identifikasi kebutuhan dan penyiapan infrastruktur</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 text-sm font-semibold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Tahap Implementasi</h4>
                    <p className="text-slate-600 text-sm">Penerapan sistem dan prosedur yang telah ditetapkan</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 text-sm font-semibold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Tahap Evaluasi</h4>
                    <p className="text-slate-600 text-sm">Monitoring dan evaluasi efektivitas implementasi</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-lg text-blue-900 flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Dasar Hukum
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-blue-900">UU No. 43 Tahun 2009</p>
                  <p className="text-blue-700">Tentang Kearsipan</p>
                </div>
                <div>
                  <p className="font-semibold text-blue-900">PP No. 28 Tahun 2012</p>
                  <p className="text-blue-700">Pelaksanaan UU Kearsipan</p>
                </div>
                <div>
                  <p className="font-semibold text-blue-900">Perka ANRI</p>
                  <p className="text-blue-700">Pedoman teknis kearsipan</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-lg text-orange-900 flex items-center">
                <Award className="w-5 h-5 mr-2" />
                Manfaat
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-orange-800">
                <li>• Meningkatkan efisiensi kerja</li>
                <li>• Menjamin keamanan informasi</li>
                <li>• Mendukung transparansi</li>
                <li>• Memudahkan akses informasi</li>
                <li>• Menjaga kelestarian arsip</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-lg text-green-900 flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Penanggung Jawab
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm text-green-800">
                <p><strong>Unit Kearsipan BPIP</strong></p>
                <p>Koordinator dan pelaksana utama</p>
                <p><strong>Seluruh Unit Kerja</strong></p>
                <p>Pelaksana di tingkat unit masing-masing</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function DetailContent({ title }: { title: string }) {
  return (
    <div className="space-y-8">
      <div className="text-center pb-8 border-b border-slate-200">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
          <Settings className="w-8 h-8 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">{title}</h1>
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          <Badge variant="secondary" className="bg-green-100 text-green-800">Prosedur</Badge>
          <Badge variant="outline">Manajemen Arsip</Badge>
          <Badge variant="outline">SOP</Badge>
        </div>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Panduan lengkap prosedur {title.toLowerCase()} dalam sistem manajemen kearsipan BPIP
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-6">
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 flex items-center">
                <FileText className="w-5 h-5 mr-3 text-blue-600" />
                Deskripsi Prosedur
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 leading-relaxed mb-4">
                {title} merupakan salah satu tahapan penting dalam manajemen arsip dinamis yang harus 
                dilaksanakan sesuai dengan standar operasional prosedur yang telah ditetapkan di BPIP.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Prosedur ini dirancang untuk memastikan bahwa setiap tahapan pengelolaan arsip 
                dilakukan secara sistematis, terukur, dan dapat dipertanggungjawabkan.
              </p>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 flex items-center">
                <GitBranch className="w-5 h-5 mr-3 text-purple-600" />
                Tahapan Pelaksanaan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  { step: 1, title: "Persiapan", desc: "Menyiapkan dokumen dan peralatan yang diperlukan", time: "30 menit" },
                  { step: 2, title: "Verifikasi", desc: "Melakukan pemeriksaan kelengkapan dan keabsahan", time: "45 menit" },
                  { step: 3, title: "Pelaksanaan", desc: "Menjalankan prosedur sesuai dengan SOP yang berlaku", time: "2 jam" },
                  { step: 4, title: "Dokumentasi", desc: "Mencatat dan mendokumentasikan hasil pelaksanaan", time: "30 menit" },
                  { step: 5, title: "Pelaporan", desc: "Menyusun laporan dan melakukan evaluasi", time: "1 jam" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-600 font-semibold">{item.step}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-slate-900">{item.title}</h4>
                        <Badge variant="outline" className="text-xs">{item.time}</Badge>
                      </div>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-xl text-amber-900 flex items-center">
                <HelpCircle className="w-5 h-5 mr-3" />
                Catatan Penting
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-amber-800">
                <li>• Pastikan semua dokumen telah diverifikasi sebelum diproses</li>
                <li>• Gunakan sistem pencatatan yang telah ditetapkan</li>
                <li>• Lakukan backup data secara berkala</li>
                <li>• Koordinasikan dengan unit terkait jika diperlukan</li>
                <li>• Simpan dokumentasi dengan baik untuk audit</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-lg text-blue-900 flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Penanggung Jawab
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-blue-900">Koordinator</p>
                  <p className="text-blue-700">Kepala Unit Kearsipan</p>
                </div>
                <div>
                  <p className="font-semibold text-blue-900">Pelaksana</p>
                  <p className="text-blue-700">Staf Kearsipan</p>
                </div>
                <div>
                  <p className="font-semibold text-blue-900">Pengawas</p>
                  <p className="text-blue-700">Pimpinan Unit</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-lg text-green-900 flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Waktu Pemrosesan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm text-green-800">
                <div className="flex justify-between">
                  <span>Normal:</span>
                  <span className="font-semibold">1-3 hari kerja</span>
                </div>
                <div className="flex justify-between">
                  <span>Prioritas:</span>
                  <span className="font-semibold">1 hari kerja</span>
                </div>
                <div className="flex justify-between">
                  <span>Segera:</span>
                  <span className="font-semibold">2-4 jam</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-lg text-purple-900 flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                Dokumen Terkait
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <Button variant="ghost" size="sm" className="w-full justify-start p-2 h-auto">
                  <Download className="w-4 h-4 mr-2" />
                  <div className="text-left">
                    <p className="font-medium">Formulir {title}</p>
                    <p className="text-xs text-slate-500">PDF, 245 KB</p>
                  </div>
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start p-2 h-auto">
                  <Download className="w-4 h-4 mr-2" />
                  <div className="text-left">
                    <p className="font-medium">Panduan SOP</p>
                    <p className="text-xs text-slate-500">PDF, 1.2 MB</p>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function RegulationContent({ title }: { title: string }) {
  return (
    <div className="space-y-8">
      <div className="text-center pb-8 border-b border-slate-200">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
          <Shield className="w-8 h-8 text-red-600" />
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">{title}</h1>
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          <Badge variant="secondary" className="bg-red-100 text-red-800">Regulasi</Badge>
          <Badge variant="outline">Hukum</Badge>
          <Badge variant="outline">Resmi</Badge>
        </div>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Kumpulan lengkap regulasi dan peraturan perundang-undangan kategori {title.toLowerCase()}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-6">
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-xl text-green-900 flex items-center">
                <FileText className="w-5 h-5 mr-3" />
                Tentang {title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-800 leading-relaxed">
                Bagian ini menyajikan kumpulan lengkap regulasi dan peraturan perundang-undangan 
                yang mengatur kearsipan sesuai dengan kategori <strong>{title.toLowerCase()}</strong>. 
                Semua dokumen yang tersedia merupakan sumber hukum resmi yang dapat digunakan 
                sebagai dasar dalam pengelolaan kearsipan di lingkungan BPIP.
              </p>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 flex items-center">
                <Archive className="w-5 h-5 mr-3 text-blue-600" />
                Daftar Regulasi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: `${title} No. 43 Tahun 2009`,
                    subtitle: "Tentang Kearsipan",
                    date: "15 Oktober 2009",
                    status: "Berlaku",
                    type: "Utama",
                    size: "2.1 MB"
                  },
                  {
                    title: `${title} No. 28 Tahun 2012`,
                    subtitle: "Tentang Pelaksanaan Undang-Undang Kearsipan",
                    date: "28 Juni 2012",
                    status: "Berlaku",
                    type: "Pelaksana",
                    size: "1.8 MB"
                  },
                  {
                    title: `${title} No. 15 Tahun 2018`,
                    subtitle: "Tentang Pengelolaan Arsip Elektronik",
                    date: "12 September 2018",
                    status: "Berlaku",
                    type: "Teknis",
                    size: "1.5 MB"
                  },
                  {
                    title: `${title} No. 8 Tahun 2021`,
                    subtitle: "Tentang Sistem Informasi Kearsipan Nasional",
                    date: "25 Maret 2021",
                    status: "Berlaku",
                    type: "Sistem",
                    size: "2.3 MB"
                  }
                ].map((regulation, index) => (
                  <Card key={index} className="border-slate-200 hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h4 className="font-bold text-slate-900 text-lg">{regulation.title}</h4>
                            <Badge 
                              variant={regulation.status === 'Berlaku' ? 'default' : 'secondary'}
                              className={regulation.status === 'Berlaku' ? 'bg-green-100 text-green-800' : ''}
                            >
                              {regulation.status}
                            </Badge>
                          </div>
                          <p className="text-slate-700 font-medium mb-3">{regulation.subtitle}</p>
                          <div className="flex items-center space-x-6 text-sm text-slate-500">
                            <span className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {regulation.date}
                            </span>
                            <span className="flex items-center">
                              <FileText className="w-4 h-4 mr-1" />
                              {regulation.type}
                            </span>
                            <span>{regulation.size}</span>
                          </div>
                        </div>
                        <div className="flex space-x-2 ml-4">
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4 mr-2" />
                            Lihat
                          </Button>
                          <Button variant="default" size="sm" className="bg-blue-600 hover:bg-blue-700">
                            <Download className="w-4 h-4 mr-2" />
                            Unduh
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-lg text-blue-900 flex items-center">
                <Award className="w-5 h-5 mr-2" />
                Kategori Regulasi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-blue-800">Undang-Undang</span>
                  <Badge variant="outline" className="text-xs">3</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-800">Peraturan Pemerintah</span>
                  <Badge variant="outline" className="text-xs">8</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-800">Peraturan Menteri</span>
                  <Badge variant="outline" className="text-xs">12</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-800">Peraturan Kepala</span>
                  <Badge variant="outline" className="text-xs">25</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-lg text-orange-900 flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Update Terbaru
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm text-orange-800">
                <div>
                  <p className="font-semibold">Januari 2024</p>
                  <p>Peraturan BPIP No. 1/2024</p>
                </div>
                <div>
                  <p className="font-semibold">Desember 2023</p>
                  <p>Revisi SOP Kearsipan</p>
                </div>
                <div>
                  <p className="font-semibold">November 2023</p>
                  <p>Panduan Arsip Digital</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-lg text-slate-900 flex items-center">
                <HelpCircle className="w-5 h-5 mr-2" />
                Bantuan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 mb-4">
                Butuh bantuan memahami regulasi kearsipan?
              </p>
              <Button variant="outline" size="sm" className="w-full">
                <Phone className="w-4 h-4 mr-2" />
                Hubungi Unit Hukum
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function FlowContent({ title }: { title: string }) {
  return (
    <div className="space-y-8">
      <div className="text-center pb-8 border-b border-slate-200">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-6">
          <GitBranch className="w-8 h-8 text-teal-600" />
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">{title}</h1>
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          <Badge variant="secondary" className="bg-teal-100 text-teal-800">Alur Kerja</Badge>
          <Badge variant="outline">Prosedur</Badge>
          <Badge variant="outline">BPIP</Badge>
        </div>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Diagram alur dan prosedur operasional standar untuk {title.toLowerCase()} di lingkungan BPIP
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-6">
          <Card className="border-teal-200 bg-teal-50">
            <CardHeader>
              <CardTitle className="text-xl text-teal-900 flex items-center">
                <GitBranch className="w-5 h-5 mr-3" />
                Diagram Alur Kerja
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-teal-800 leading-relaxed mb-6">
                Berikut adalah alur kerja lengkap untuk <strong>{title.toLowerCase()}</strong> 
                di lingkungan BPIP sesuai dengan SOP yang berlaku dan telah disesuaikan 
                dengan kebutuhan organisasi.
              </p>
              
              {/* Flow Diagram Placeholder */}
              <div className="bg-white rounded-lg border-2 border-dashed border-teal-300 p-12 text-center">
                <GitBranch className="w-20 h-20 text-teal-400 mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-teal-700 mb-3">Diagram Alur Visual</h3>
                <p className="text-teal-600 mb-6">
                  Diagram alur interaktif untuk {title.toLowerCase()} akan ditampilkan di sini
                </p>
                <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
                  <Download className="w-4 h-4 mr-2" />
                  Unduh Diagram PDF
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 flex items-center">
                <Settings className="w-5 h-5 mr-3 text-purple-600" />
                Langkah-langkah Detail
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: "Penerimaan/Inisiasi",
                    description: "Dokumen diterima atau proses dimulai oleh unit terkait",
                    responsible: "Unit Pengirim/Penerima",
                    time: "15 menit",
                    documents: ["Surat/Dokumen", "Form Registrasi"]
                  },
                  {
                    step: 2,
                    title: "Verifikasi dan Validasi",
                    description: "Pemeriksaan kelengkapan dan keabsahan dokumen",
                    responsible: "Petugas Verifikasi",
                    time: "30 menit",
                    documents: ["Checklist Verifikasi", "Berita Acara"]
                  },
                  {
                    step: 3,
                    title: "Pemrosesan",
                    description: "Pelaksanaan proses sesuai dengan jenis dan kategori",
                    responsible: "Unit Kearsipan",
                    time: "2-4 jam",
                    documents: ["Form Pemrosesan", "Log Aktivitas"]
                  },
                  {
                    step: 4,
                    title: "Dokumentasi",
                    description: "Pencatatan dan pendokumentasian hasil pemrosesan",
                    responsible: "Petugas Dokumentasi",
                    time: "45 menit",
                    documents: ["Kartu Kendali", "Database Entry"]
                  },
                  {
                    step: 5,
                    title: "Penyimpanan/Distribusi",
                    description: "Penyimpanan arsip atau distribusi ke unit tujuan",
                    responsible: "Unit Kearsipan",
                    time: "30 menit",
                    documents: ["Tanda Terima", "Laporan Distribusi"]
                  }
                ].map((step, index) => (
                  <div key={index} className="border border-slate-200 rounded-lg p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-purple-600 font-bold text-lg">{step.step}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-lg font-semibold text-slate-900">{step.title}</h4>
                          <Badge variant="outline" className="bg-blue-50 text-blue-700">
                            <Clock className="w-3 h-3 mr-1" />
                            {step.time}
                          </Badge>
                        </div>
                        <p className="text-slate-700 mb-4">{step.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm font-semibold text-slate-900 mb-2">Penanggung Jawab:</p>
                            <p className="text-sm text-slate-600">{step.responsible}</p>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-slate-900 mb-2">Dokumen Terkait:</p>
                            <div className="flex flex-wrap gap-1">
                              {step.documents.map((doc, docIndex) => (
                                <Badge key={docIndex} variant="secondary" className="text-xs">
                                  {doc}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-lg text-blue-900 flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Waktu Pemrosesan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm text-blue-800">
                <div className="flex justify-between items-center">
                  <span>Normal:</span>
                  <Badge variant="outline" className="bg-green-100 text-green-800">1-3 hari</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Prioritas:</span>
                  <Badge variant="outline" className="bg-yellow-100 text-yellow-800">1 hari</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Segera:</span>
                  <Badge variant="outline" className="bg-red-100 text-red-800">2-4 jam</Badge>
                </div>
                <Separator className="my-3" />
                <div className="text-xs text-blue-700">
                  *Waktu dapat bervariasi tergantung kompleksitas dan kelengkapan dokumen
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-lg text-green-900 flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Unit Terlibat
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <span className="text-green-800 font-medium">Unit Kearsipan</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-green-800 font-medium">Unit Pengirim</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                  <span className="text-green-800 font-medium">Unit Penerima</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                  <span className="text-green-800 font-medium">Unit Pengawas</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-lg text-orange-900 flex items-center">
                <HelpCircle className="w-5 h-5 mr-2" />
                Catatan Penting
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-orange-800">
                <li>• Pastikan dokumen lengkap sebelum memulai proses</li>
                <li>• Koordinasi antar unit harus dilakukan dengan baik</li>
                <li>• Dokumentasi setiap tahap wajib dilakukan</li>
                <li>• Backup data secara berkala</li>
                <li>• Laporkan kendala kepada supervisor</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-lg text-slate-900 flex items-center">
                <Download className="w-5 h-5 mr-2" />
                Unduhan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button variant="ghost" size="sm" className="w-full justify-start p-2 h-auto">
                  <FileText className="w-4 h-4 mr-2" />
                  <div className="text-left">
                    <p className="font-medium text-sm">SOP {title}</p>
                    <p className="text-xs text-slate-500">PDF, 1.2 MB</p>
                  </div>
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start p-2 h-auto">
                  <FileText className="w-4 h-4 mr-2" />
                  <div className="text-left">
                    <p className="font-medium text-sm">Form Template</p>
                    <p className="text-xs text-slate-500">DOC, 245 KB</p>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function FAQContent() {
  const faqs = [
    {
      category: "Umum",
      questions: [
        {
          question: "Apa itu sistem kearsipan?",
          answer: "Sistem kearsipan adalah susunan yang teratur dari berbagai komponen kearsipan yang saling berkaitan untuk mencapai tujuan pengelolaan arsip yang efektif dan efisien sesuai dengan peraturan perundang-undangan yang berlaku."
        },
        {
          question: "Mengapa kearsipan penting bagi BPIP?",
          answer: "Kearsipan sangat penting bagi BPIP karena mendukung tata kelola pemerintahan yang baik, menjamin transparansi informasi publik, dan melestarikan memori kolektif bangsa terkait ideologi Pancasila."
        }
      ]
    },
    {
      category: "Akses Arsip",
      questions: [
        {
          question: "Bagaimana cara mengakses arsip di BPIP?",
          answer: "Akses arsip di BPIP dapat dilakukan melalui prosedur yang telah ditetapkan dengan mengajukan permohonan kepada unit kearsipan, melampirkan identitas dan tujuan penggunaan, serta mengikuti ketentuan yang berlaku."
        },
        {
          question: "Siapa saja yang dapat mengakses arsip BPIP?",
          answer: "Akses arsip BPIP terbuka untuk pegawai internal, peneliti, mahasiswa, dan masyarakat umum sesuai dengan tingkat kerahasiaan dan ketentuan yang berlaku."
        }
      ]
    },
    {
      category: "Retensi Arsip",
      questions: [
        {
          question: "Berapa lama masa retensi arsip?",
          answer: "Masa retensi arsip berbeda-beda tergantung jenis dan nilai guna arsip. Informasi detail dapat dilihat dalam Jadwal Retensi Arsip (JRA) yang berlaku di BPIP."
        },
        {
          question: "Apa yang dimaksud dengan arsip vital?",
          answer: "Arsip vital adalah arsip yang keberadaannya merupakan persyaratan dasar bagi kelangsungan operasional pencipta arsip, tidak dapat diperbarui, dan tidak tergantikan apabila rusak atau hilang."
        }
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center pb-8 border-b border-slate-200">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
          <HelpCircle className="w-8 h-8 text-blue-600" />
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Kumpulan pertanyaan yang sering diajukan terkait kearsipan di lingkungan BPIP beserta jawabannya
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-8">
          {faqs.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-xl text-slate-900 flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-bold text-sm">{categoryIndex + 1}</span>
                  </div>
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {category.questions.map((faq, faqIndex) => (
                    <div key={faqIndex} className="border-b border-slate-100 last:border-b-0 pb-6 last:pb-0">
                      <h4 className="text-lg font-semibold text-slate-900 mb-3">{faq.question}</h4>
                      <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-6">
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-lg text-blue-900 flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Butuh Bantuan?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-800 text-sm mb-4">
                Tidak menemukan jawaban yang Anda cari? Hubungi unit kearsipan BPIP.
              </p>
              <div className="space-y-2">
                <Button variant="outline" size="sm" className="w-full bg-white">
                  <Phone className="w-4 h-4 mr-2" />
                  (021) 3441031
                </Button>
                <Button variant="outline" size="sm" className="w-full bg-white">
                  <Mail className="w-4 h-4 mr-2" />
                  kearsipan@bpip.go.id
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-lg text-green-900 flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Jam Layanan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm text-green-800">
                <div className="flex justify-between">
                  <span>Senin - Kamis:</span>
                  <span className="font-semibold">08:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Jumat:</span>
                  <span className="font-semibold">08:00 - 16:30</span>
                </div>
                <div className="flex justify-between">
                  <span>Sabtu - Minggu:</span>
                  <span className="font-semibold">Tutup</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-lg text-orange-900 flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                Panduan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button variant="ghost" size="sm" className="w-full justify-start p-2 h-auto">
                  <Download className="w-4 h-4 mr-2" />
                  <div className="text-left">
                    <p className="font-medium text-sm">Panduan Pengguna</p>
                    <p className="text-xs text-slate-500">PDF, 2.1 MB</p>
                  </div>
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start p-2 h-auto">
                  <Download className="w-4 h-4 mr-2" />
                  <div className="text-left">
                    <p className="font-medium text-sm">Video Tutorial</p>
                    <p className="text-xs text-slate-500">MP4, 15.3 MB</p>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function ContactContent() {
  return (
    <div className="space-y-8">
      <div className="text-center pb-8 border-b border-slate-200">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
          <Phone className="w-8 h-8 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Kontak Kami</h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Hubungi unit kearsipan BPIP untuk bantuan, konsultasi, dan informasi lebih lanjut
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 flex items-center">
                <Building2 className="w-6 h-6 mr-3 text-blue-600" />
                Unit Kearsipan BPIP
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-1">Telepon</p>
                  <p className="text-slate-600">(021) 3441031</p>
                  <p className="text-slate-500 text-sm">Senin - Jumat, 08:00 - 16:30 WIB</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-1">Email</p>
                  <p className="text-slate-600">kearsipan@bpip.go.id</p>
                  <p className="text-slate-500 text-sm">Respon dalam 1x24 jam</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-1">Alamat</p>
                  <p className="text-slate-600 leading-relaxed">
                    Jl. Medan Merdeka Timur No. 3-5<br />
                    Jakarta Pusat 10110<br />
                    Indonesia
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-xl text-green-900 flex items-center">
                <Award className="w-6 h-6 mr-3" />
                Layanan Konsultasi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-800 mb-4 leading-relaxed">
                Unit kearsipan BPIP menyediakan layanan konsultasi profesional untuk membantu 
                dalam pengelolaan arsip dan implementasi sistem kearsipan yang efektif.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 bg-white rounded-lg border border-green-200">
                  <Users className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-green-900">Konsultasi Gratis</p>
                </div>
                <div className="text-center p-3 bg-white rounded-lg border border-green-200">
                  <Clock className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-green-900">Jadwal Fleksibel</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 flex items-center">
                <Clock className="w-6 h-6 mr-3 text-purple-600" />
                Jam Operasional
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                  <span className="font-semibold text-slate-900">Senin - Kamis</span>
                  <span className="text-slate-600">08:00 - 16:00 WIB</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                  <span className="font-semibold text-slate-900">Jumat</span>
                  <span className="text-slate-600">08:00 - 16:30 WIB</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg border border-red-200">
                  <span className="font-semibold text-red-900">Sabtu - Minggu</span>
                  <span className="text-red-600">Tutup</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-blue-800 text-sm">
                  <strong>Catatan:</strong> Untuk layanan darurat atau konsultasi di luar jam kerja, 
                  silakan hubungi melalui email atau buat janji terlebih dahulu.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-xl text-slate-900 flex items-center">
                <Users className="w-6 h-6 mr-3 text-indigo-600" />
                Tim Kearsipan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Kepala Unit Kearsipan</p>
                    <p className="text-slate-600 text-sm">Koordinator dan pengawas</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <FileText className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Staf Kearsipan</p>
                    <p className="text-slate-600 text-sm">Pelaksana operasional</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <Monitor className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">IT Support</p>
                    <p className="text-slate-600 text-sm">Dukungan teknis sistem</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Contact Form */}
      <Card className="border-slate-200">
        <CardHeader>
          <CardTitle className="text-xl text-slate-900 flex items-center">
            <Mail className="w-6 h-6 mr-3 text-blue-600" />
            Kirim Pesan
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Nama Lengkap</label>
                <Input placeholder="Masukkan nama lengkap Anda" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Email</label>
                <Input type="email" placeholder="nama@email.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Instansi/Organisasi</label>
                <Input placeholder="Nama instansi atau organisasi" />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Subjek</label>
                <Input placeholder="Subjek pesan" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Pesan</label>
                <textarea 
                  className="w-full h-24 px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Tulis pesan Anda di sini..."
                ></textarea>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                <Mail className="w-4 h-4 mr-2" />
                Kirim Pesan
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;