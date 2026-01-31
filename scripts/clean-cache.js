#!/usr/bin/env node
/**
 * Script para limpiar el caché de Astro antes de iniciar el servidor
 * Esto previene errores 404 causados por caché corrupto
 */

import { rmSync, existsSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

const pathsToClean = [
  join(projectRoot, '.astro'),
  join(projectRoot, 'node_modules', '.vite'),
  join(projectRoot, 'dist', '.vite')
];

console.log('🧹 Limpiando caché de Astro...\n');

let cleaned = 0;
pathsToClean.forEach(path => {
  if (existsSync(path)) {
    try {
      rmSync(path, { recursive: true, force: true });
      console.log(`✅ Eliminado: ${path.replace(projectRoot, '.')}`);
      cleaned++;
    } catch (error) {
      console.warn(`⚠️  No se pudo eliminar: ${path.replace(projectRoot, '.')} - ${error.message}`);
    }
  }
});

if (cleaned === 0) {
  console.log('✨ El caché ya está limpio.\n');
} else {
  console.log(`\n✨ Caché limpiado exitosamente (${cleaned} directorio(s)).\n`);
}
