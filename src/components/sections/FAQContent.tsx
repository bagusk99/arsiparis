import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Download, FileText, HelpCircle, Mail, Phone } from 'lucide-react';

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

export default FAQContent;