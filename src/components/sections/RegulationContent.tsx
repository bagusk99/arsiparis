import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Download, Eye, FileText, Shield, Award, HelpCircle, Phone, Archive } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

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

export default RegulationContent;