import {createRoot} from 'react-dom/client';
import App from './App';
import './index.css';

window.addEventListener('error', (event) => {
  console.error('GLOBAL ERROR:', event.error);
  const errorDiv = document.createElement('div');
  errorDiv.style.cssText = 'position:fixed;top:0;left:0;background:red;color:white;z-index:99999;padding:10px;';
  errorDiv.innerText = 'CRASH: ' + event.error?.message;
  document.body.appendChild(errorDiv);
});

console.log("main.tsx loaded successfully");

createRoot(document.getElementById('root')!).render(
  <App />
);
