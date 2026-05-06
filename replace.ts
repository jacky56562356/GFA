import fs from 'fs';
import path from 'path';

const pagesDir = path.join(process.cwd(), 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  content = content.replace(/space-y-24/g, 'space-y-16');
  content = content.replace(/py-32/g, 'py-20');
  content = content.replace(/mb-20/g, 'mb-12');
  content = content.replace(/py-24/g, 'py-16');
  content = content.replace(/pt-\[100px\]/g, 'pt-[80px]');
  
  fs.writeFileSync(filePath, content);
  console.log(`Updated ${file}`);
}
