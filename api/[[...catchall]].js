import { readFileSync } from 'fs';
import { resolve } from 'path';

export default function handler(req, res) {
  const html = readFileSync(resolve(process.cwd(), 'dist/index.html'), 'utf8');
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(html);
}
