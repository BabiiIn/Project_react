import { createRoot } from 'react-dom/client';
import { App } from './components/app/app';

const root = document.getElementById('root');

const reactRoot = createRoot(root);

reactRoot.render(<App title="Restaurants" debugScroll={true} style={{}} isVisible />);

console.log(reactRoot);
