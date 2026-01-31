#!/usr/bin/env node
/**
 * Script para verificar que la estructura del proyecto esté correcta
 */

import { existsSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

const requiredPaths = [
  { path: join(projectRoot, 'src', 'pages', 'index.astro'), name: 'Página principal (index.astro)' },
  { path: join(projectRoot, 'src', 'layouts', 'Layout.astro'), name: 'Layout principal' },
  { path: join(projectRoot, 'astro.config.mjs'), name: 'Configuración de Astro' },
  { path: join(projectRoot, 'package.json'), name: 'package.json' }
];

console.log('🔍 Verificando estructura del proyecto...\n');

let allOk = true;
requiredPaths.forEach(({ path, name }) => {
  if (existsSync(path)) {
    console.log(`✅ ${name}`);
  } else {
    console.error(`❌ ${name} - NO ENCONTRADO`);
    allOk = false;
  }
});

if (allOk) {
  console.log('\n✨ Estructura del proyecto correcta.\n');
  process.exit(0);
} else {
  console.log('\n⚠️  Hay problemas con la estructura del proyecto.\n');
  process.exit(1);
}
