import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createRequire } from 'module';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const require = createRequire(import.meta.url);

// Add Git to PATH on Windows before requiring gh-pages
const isWindows = process.platform === 'win32';
if (isWindows) {
  const gitPath = 'C:\\Program Files\\Git\\cmd';
  process.env.PATH = `${process.env.PATH};${gitPath}`;
}

// Import and use gh-pages
const ghpages = require('gh-pages');
const distPath = join(__dirname, '..', 'dist');

ghpages.publish(distPath, (err) => {
  if (err) {
    console.error('Deployment failed:', err);
    process.exit(1);
  } else {
    console.log('Published');
  }
});
