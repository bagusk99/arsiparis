import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Archive, 
  BookOpen, 
  Download, 
  FileText, 
  GitBranch, 
  Database, 
  Users, 
  Monitor, 
  Shield, 
  Eye, 
  Target, 
  Heart, 
  Phone, 
  HelpCircle 
} from 'lucide-react';

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

export default HomeContent;