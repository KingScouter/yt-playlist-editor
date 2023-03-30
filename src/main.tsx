import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './app/app';
import Login, { action as loginAction } from './routes/login';
import LoginSuccessfull, { loader as codeLoader } from './routes/loginSuccessfull';
import MainMenu from './routes/main-menu/mainMenu';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <MainMenu />,
      },
      {
        path: 'login',
        element: <Login />,
        action: loginAction,
        children: [
          {
            path: 'success',
            element: <LoginSuccessfull />,
            loader: codeLoader,
          }
        ]
      },
      {
        path: 'loginSuccess',
        element: <LoginSuccessfull />,
        loader: codeLoader,
      }
    ]
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
