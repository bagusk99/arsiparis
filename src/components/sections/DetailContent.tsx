import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Settings, GitBranch, HelpCircle, Users, Clock, FileText, Download } from 'lucide-react';

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

export default DetailContent;