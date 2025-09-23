import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { menuItems } from '@/data/menuItems';

import {
  Search,
  ChevronDown,
  Mail,
  MapPin,
  Clock,
  ExternalLink,
  Phone,
  Building2,
} from 'lucide-react';

const Layout = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const currentPage = location.pathname;

  const generateBreadcrumb = (pathname: string): string[] => {
    const findPath = (items: any[], targetPath: string, path: string[] = []): string[] | null => {
      for (const item of items) {
        const currentPath = [...path, item.title];
        const itemPath = `/${item.id}`;
        if (itemPath === targetPath) {
          return currentPath;
        }
        if (item.children) {
          const found = findPath(item.children, targetPath, currentPath);
          if (found) return found;
        }
      }
      return null;
    };

    const pathSegments = pathname.split('/').filter(p => p);
    const breadcrumbPath = `/${pathSegments[pathSegments.length - 1] || 'home'}`;
    
    return findPath(menuItems, breadcrumbPath) || ['Beranda'];
  };

  const breadcrumb = generateBreadcrumb(location.pathname);

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
                  <Link
                    to={`/${item.id}`}
                    className={`
                      flex items-center px-4 py-4 text-sm font-medium transition-colors hover:bg-blue-700
                      ${currentPage === `/${item.id}` ? 'bg-blue-700 border-b-2 border-yellow-400' : ''}
                    `}
                    onMouseEnter={() => {
                      if (item.children) {
                        setActiveDropdown(item.id);
                      }
                    }}
                    onClick={() => {
                        if (!item.children) {
                            setActiveDropdown(null)
                        }
                    }}
                  >
                    {item.icon && <span className="mr-2">{item.icon}</span>}
                    {item.title}
                    {item.children && <ChevronDown className="ml-2 w-4 h-4" />}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.children && activeDropdown === item.id && (
                    <div 
                      className="absolute top-full left-0 bg-white text-slate-900 shadow-xl border border-slate-200 rounded-b-lg min-w-80 z-50"
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="py-2">
                        {item.children.map((child) => (
                          <div key={child.id}>
                            <Link
                              to={`/${child.id}`}
                              className="w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors border-b border-slate-100 last:border-b-0 block"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <div className="font-medium text-slate-900">{child.title}</div>
                              {child.children && (
                                <div className="text-xs text-slate-500 mt-1">
                                  {child.children.length} sub-bagian
                                </div>
                              )}
                            </Link>
                            {/* Show nested children */}
                            {child.children && (
                              <div className="bg-slate-50 border-t border-slate-200">
                                {child.children.map((grandchild) => (
                                  <Link
                                    key={grandchild.id}
                                    to={`/${grandchild.id}`}
                                    className="w-full text-left px-8 py-2 text-sm hover:bg-blue-50 transition-colors border-b border-slate-100 last:border-b-0 block"
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    {grandchild.title}
                                  </Link>
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
        {currentPage !== '/home' && currentPage !== '/' && (
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
            <Outlet />
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
};

export default Layout;