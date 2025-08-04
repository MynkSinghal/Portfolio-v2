const fs = require('fs');
const path = require('path');
const https = require('https');

const LOGOS = {
  html: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  css: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  react: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  nextjs: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  tailwind: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
  typescript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  fastapi: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/fastapi.svg',
  nodejs: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  mongodb: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  docker: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  aws: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
  tensorflow: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
  pytorch: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/pytorch.svg',
  langchain: 'https://raw.githubusercontent.com/langchain-ai/langchain/master/docs/static/img/langchain_icon.svg',
  opencv: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/opencv.svg',
  git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  github: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  vscode: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
  postman: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/postman.svg',
};

const LOGOS_DIR = path.join(__dirname, '../public/logos');

// Create logos directory if it doesn't exist
if (!fs.existsSync(LOGOS_DIR)) {
  fs.mkdirSync(LOGOS_DIR, { recursive: true });
}

// Download each logo
Object.entries(LOGOS).forEach(([name, url]) => {
  const filePath = path.join(LOGOS_DIR, `${name}.svg`);
  
  https.get(url, (response) => {
    const file = fs.createWriteStream(filePath);
    response.pipe(file);
    
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded: ${name}.svg`);
    });
  }).on('error', (err) => {
    console.error(`Error downloading ${name}: ${err.message}`);
  });
});