import type { RouteObject } from 'react-router-dom';
import HomePage from '../pages/home/page';
import NotFound from '../pages/NotFound';
import NidalPage from '../pages/team/nidal/page';
import IKStartPage from '../pages/projects/ikstart/page';
import KartverketPage from '../pages/projects/kartverket/page';
import FinnPage from '../pages/projects/finn/page';
import KristianPage from '../pages/team/kristian/page';
import JonasPage from '../pages/team/jonas/page';
import PheeraphanPage from '../pages/team/pheeraphan/page';
import ProsjektstatusPage from '../pages/prosjektstatus/page';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/team/nidal',
    element: <NidalPage />,
  },
  {
    path: '/projects/ikstart',
    element: <IKStartPage />,
  },
  {
    path: '/projects/kartverket',
    element: <KartverketPage />,
  },
  {
    path: '/projects/finn',
    element: <FinnPage />,
  },
  {
    path: '/team/kristian',
    element: <KristianPage />,
  },
  {
    path: '/team/jonas',
    element: <JonasPage />,
  },
  {
    path: '/team/pheeraphan',
    element: <PheeraphanPage />,
  },
  {
    path: '/prosjektstatus',
    element: <ProsjektstatusPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;