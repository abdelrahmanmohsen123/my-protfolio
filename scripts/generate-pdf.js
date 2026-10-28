import puppeteer from 'puppeteer-core';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const chromePath = fs.existsSync('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe')
  ? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  : 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

const cvFiles = [
  'Abdelrahman_Mohsen_CV_FullStack_English',
  'Abdelrahman_Mohsen_CV_FullStack_Arabic',
  'Abdelrahman_Mohsen_CV_Backend_English',
  'Abdelrahman_Mohsen_CV_Backend_Arabic',
];

async function generatePDFs() {
  console.log('Launching browser using:', chromePath);
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
  });

  const page = await browser.newPage();
  const cvDir = path.resolve(__dirname, '../public/cv');

  for (const name of cvFiles) {
    const htmlPath = path.join(cvDir, `${name}.html`);
    const pdfPath = path.join(cvDir, `${name}.pdf`);

    console.log(`Generating PDF for ${name}...`);
    await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '12mm',
        right: '12mm',
        bottom: '12mm',
        left: '12mm',
      },
    });
    console.log(`Saved: ${pdfPath}`);
  }

  await browser.close();
  console.log('All 4 PDFs generated successfully!');
}

generatePDFs().catch((err) => {
  console.error('Error generating PDFs:', err);
  process.exit(1);
});
