import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BookOpen, Archive, FileText, Search } from 'lucide-react';
import { sitemap } from '@/data/sitemap';

const Home = () => {
  const mainSections = sitemap[0]?.children || [];

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 bg-gradient-to-r from-blue-600 to-purple-700 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 drop-shadow-lg">
            Digitalisasi Informasi Regulasi dan Alur Kearsipan BPIP
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90">
            Memudahkan akses dan pengelolaan informasi regulasi serta alur kearsipan
            untuk transparansi dan efisiensi di lingkungan Badan Pembinaan Ideologi Pancasila.
          </p>
          <Button asChild className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            <Link to="/konsep-dasar-kearsipan">
              Jelajahi Sekarang <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
            Fitur Unggulan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-500">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-2xl font-semibold">Informasi Regulasi</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  Akses cepat ke berbagai peraturan dan undang-undang terkait kearsipan.
                </CardDescription>
                <Button variant="link" asChild className="mt-4 text-blue-600 hover:text-blue-800">
                  <Link to="/regulasi-kearsipan">
                    Lihat Regulasi <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-green-500">
              <CardHeader>
                <Archive className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-2xl font-semibold">Alur Kearsipan</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  Panduan lengkap mengenai prosedur dan alur kerja kearsipan di BPIP.
                </CardDescription>
                <Button variant="link" asChild className="mt-4 text-green-600 hover:text-green-800">
                  <Link to="/alur-kearsipan-bpip">
                    Pelajari Alur <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-purple-500">
              <CardHeader>
                <FileText className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-2xl font-semibold">Manajemen Arsip</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  Informasi mendalam tentang manajemen arsip dinamis dan statis.
                </CardDescription>
                <Button variant="link" asChild className="mt-4 text-purple-600 hover:text-purple-800">
                  <Link to="/manajemen-arsip-dinamis">
                    Detail Manajemen <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-16 md:py-24 bg-blue-700 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">
            Temukan Informasi yang Anda Butuhkan
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Jelajahi seluruh kategori kearsipan atau gunakan fitur pencarian untuk menemukan dokumen dan regulasi spesifik.
          </p>
          <div className="flex justify-center space-x-4">
            <Button asChild className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              <Link to="/konsep-dasar-kearsipan">
                Semua Kategori <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" asChild className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              <Link to="/search"> {/* Assuming a search page will be created */}
                <Search className="mr-2 h-5 w-5" /> Cari Dokumen
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
