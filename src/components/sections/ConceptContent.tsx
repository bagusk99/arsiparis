import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, FileText, Settings, Shield, Award, Users } from 'lucide-react';

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

export default ConceptContent;