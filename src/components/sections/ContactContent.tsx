import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Mail, MapPin, Phone, Users, Building2, Award, Monitor, FileText } from 'lucide-react';
import { Input } from '@/components/ui/input';

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

export default ContactContent;