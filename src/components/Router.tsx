import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import HomeContent from './sections/HomeContent';
import ConceptContent from './sections/ConceptContent';
import DetailContent from './sections/DetailContent';
import RegulationContent from './sections/RegulationContent';
import FlowContent from './sections/FlowContent';
import FAQContent from './sections/FAQContent';
import ContactContent from './sections/ContactContent';
import { menuItems } from '@/data/menuItems';

const Router = () => {
  const flattenedRoutes = (items: any[]) => {
    let routes: any[] = [];
    items.forEach(item => {
      if (item.children) {
        routes = routes.concat(flattenedRoutes(item.children));
      } else {
        routes.push(item);
      }
    });
    return routes;
  };

  const allRoutes = flattenedRoutes(menuItems);

  const getComponent = (id: string) => {
    switch (id) {
      case 'home':
        return <HomeContent />;
      case 'faq':
        return <FAQContent />;
      case 'kontak':
        return <ContactContent />;
      case 'pengertian-arsip':
      case 'jenis-arsip':
      case 'siklus-hidup':
      case 'nilai-guna':
      case 'instrumen-kearsipan':
      case 'organisasi-kearsipan':
        return <ConceptContent title={allRoutes.find(r => r.id === id)?.title} />;
      case 'uu-kearsipan':
      case 'pp-kearsipan':
      case 'perka-anri':
      case 'peraturan-bpip':
        return <RegulationContent title={allRoutes.find(r => r.id === id)?.title} />;
      case 'alur-masuk':
      case 'alur-keluar':
      case 'alur-dinamis':
      case 'alur-statis':
        return <FlowContent title={allRoutes.find(r => r.id === id)?.title} />;
      default:
        return <DetailContent title={allRoutes.find(r => r.id === id)?.title} />;
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeContent />} />
        <Route path="/home" element={<HomeContent />} />
        {allRoutes.map(route => (
          <Route key={route.id} path={`/${route.id}`} element={getComponent(route.id)} />
        ))}
      </Route>
    </Routes>
  );
};

export default Router;