import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { GitBranch, Download, Settings, Clock, Users, FileText, HelpCircle } from 'lucide-react';

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

export default FlowContent;