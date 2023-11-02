import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import { Dues } from './pages/Dues';
import { DueEdit, loader as dueEditLoader } from './pages/DueEdit';
import { Root } from './pages/Root';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root/>,
      children: [
        {
          path: 'dues',
          element: <Dues/>,
        },
        {
          path: 'dues/:dueId',
          element: <DueEdit/>,
          loader: dueEditLoader,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router}/>
  );
}
