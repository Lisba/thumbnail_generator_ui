import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import { App } from '@screens';
import './index.css';
import '@config/i18n';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-j3lp0xc2ymufpwck.us.auth0.com'
      clientId='cCHdartF34rWD5vJ83dNIqIUi0cU1sFD'
      redirectUri={`${window.location.origin}/home`}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
