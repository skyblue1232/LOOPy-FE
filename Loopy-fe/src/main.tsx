import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

if (import.meta.env.DEV && 'serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    for (const registration of registrations) {
      registration.unregister();
    }
    console.warn('[dev] Service worker unregistered to prevent Workbox warnings.');
  });
}

createRoot(document.getElementById('root')!).render(
  <App />
);
