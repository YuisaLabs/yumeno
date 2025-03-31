import { createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';

export const AppRouter = createBrowserRouter([
  {
    path: '/',
    errorElement: <div>Not Found</div>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/diagram-editor',
        element: <div>Diagram Editor</div>,
      },
    ],
  },
]);
