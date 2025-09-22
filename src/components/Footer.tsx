import { Link } from 'react-router-dom';
import { Book, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { sitemap, NavItem } from '@/data/sitemap';

const Footer = () => {
  const mainNavItems = sitemap[0]?.children || [];

  return (
    <footer className="border-t bg-background py-12">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1">
          <Link to="/" className="flex items-center space-x-2 mb-4">
            <Book className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl text-primary">BPIP Kearsipan</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Digitalisasi Informasi Regulasi dan Alur Kearsipan di Lingkungan BPIP.
            Menyediakan akses mudah ke informasi kearsipan yang akurat dan terpercaya.
          </p>
          <div className="flex space-x-4 mt-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="col-span-1">
          <h3 className="text-lg font-semibold mb-4">Navigasi Cepat</h3>
          <ul className="space-y-2">
            {mainNavItems.slice(0, 5).map((item, index) => (
              <li key={index}>
                <Link to={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-1">
          <h3 className="text-lg font-semibold mb-4">Sumber Daya</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/regulasi-kearsipan" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Regulasi Kearsipan
              </Link>
            </li>
            <li>
              <Link to="/alur-kearsipan-bpip" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Alur Kearsipan BPIP
              </Link>
            </li>
            <li>
              <Link to="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/kontak" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Kontak
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-1">
          <h3 className="text-lg font-semibold mb-4">Hubungi Kami</h3>
          <p className="text-sm text-muted-foreground">
            Jl. Veteran III No.2, RT.2/RW.3, Gambir, Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10110
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Email: info@bpip.go.id
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Telepon: (021) 3456789
          </p>
        </div>
      </div>
      <div className="container text-center text-sm text-muted-foreground mt-12 pt-8 border-t border-border">
        &copy; {new Date().getFullYear()} BPIP. Hak Cipta Dilindungi.
      </div>
    </footer>
  );
};

export default Footer;
