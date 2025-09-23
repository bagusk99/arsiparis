import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

import FAQContent from './components/sections/FAQContent';
import HomeContent from './components/sections/HomeContent';
import ConceptContent from './components/sections/ConceptContent';
import DetailContent from './components/sections/DetailContent';
import RegulationContent from './components/sections/RegulationContent';
import FlowContent from './components/sections/FlowContent';
import ContactContent from './components/sections/ContactContent';

import {
  Search,
  ChevronDown,
  Home,
  Archive,
  Database,
  Monitor,
  BookOpen,
  GitBranch,
  HelpCircle,
  Phone,
  Building2,
  Shield,
  Mail,
  MapPin,
  Clock,
  ExternalLink,
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


export default App;