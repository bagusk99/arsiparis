import { useParams } from 'react-router-dom';
import { getPageData, NavItem } from '@/data/sitemap';
import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Link } from 'react-router-dom';

const ContentPage = () => {
  const { '*': path } = useParams<{ '*': string }>();
  const currentPath = `/${path || ''}`;
  const [pageData, setPageData] = useState<NavItem | undefined>(undefined);

  useEffect(() => {
    setPageData(getPageData(currentPath));
  }, [currentPath]);

  if (!pageData) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-4xl font-bold text-destructive">404 - Halaman Tidak Ditemukan</h1>
        <p className="mt-4 text-lg text-muted-foreground">Maaf, halaman yang Anda cari tidak ada.</p>
        <Link to="/" className="mt-6 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
          Kembali ke Beranda
        </Link>
      </div>
    );
  }

  // Function to generate breadcrumbs
  const generateBreadcrumbs = (currentPath: string): NavItem[] => {
    const pathSegments = currentPath.split('/').filter(segment => segment !== '');
    let breadcrumbs: NavItem[] = [{ title: 'Beranda', href: '/' }];
    let currentHref = '';

    pathSegments.forEach(segment => {
      currentHref += `/${segment}`;
      const data = getPageData(currentHref);
      if (data) {
        breadcrumbs.push(data);
      }
    });
    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs(currentPath);

  return (
    <div className="container py-8">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                {index === breadcrumbs.length - 1 ? (
                  <BreadcrumbPage>{crumb.title}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link to={crumb.href}>{crumb.title}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-extrabold text-primary">{pageData.title}</CardTitle>
          {pageData.description && (
            <CardDescription className="mt-2 text-lg text-muted-foreground">
              {pageData.description}
            </CardDescription>
          )}
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <Separator className="my-6" />
          <p>
            Ini adalah konten placeholder untuk halaman "<b>{pageData.title}</b>".
            Di sini Anda dapat menambahkan informasi detail, artikel, atau dokumen terkait.
            Konten ini akan disesuaikan dengan topik spesifik dari halaman ini.
          </p>
          <p>
            Misalnya, untuk halaman ini, kita bisa membahas lebih lanjut tentang{' '}
            <span className="font-semibold text-primary">{pageData.description}</span>.
            Pastikan untuk menyajikan informasi secara jelas, terstruktur, dan mudah dipahami oleh pembaca.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4 text-secondary-foreground">Informasi Lebih Lanjut</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Detail spesifik mengenai {pageData.title.toLowerCase()}.</li>
            <li>Studi kasus atau contoh implementasi.</li>
            <li>Sumber daya eksternal atau referensi terkait.</li>
            <li>Bagian tanya jawab atau FAQ khusus untuk topik ini.</li>
          </ul>
          <p className="mt-6 text-muted-foreground italic">
            Untuk informasi lebih lanjut, silakan jelajahi menu navigasi atau gunakan fitur pencarian.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContentPage;
