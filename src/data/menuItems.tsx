import React from 'react';
import {
  Home,
  Archive,
  Database,
  Monitor,
  BookOpen,
  GitBranch,
  HelpCircle,
  Phone,
  Shield,
} from 'lucide-react';
import HomeContent from '@/components/sections/HomeContent';
import ConceptContent from '@/components/sections/ConceptContent';
import DetailContent from '@/components/sections/DetailContent';
import RegulationContent from '@/components/sections/RegulationContent';
import FlowContent from '@/components/sections/FlowContent';
import FAQContent from '@/components/sections/FAQContent';
import ContactContent from '@/components/sections/ContactContent';

export interface MenuItem {
  id: string;
  title: string;
  icon?: React.ReactNode;
  children?: MenuItem[];
  content?: React.ReactNode;
}

export const menuItems: MenuItem[] = [
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