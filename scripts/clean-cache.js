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
for (const path of pathsToClean) {
  if (existsSync(path)) {
    try {
      // En Windows, a veces necesitamos múltiples intentos para eliminar directorios bloqueados
      let attempts = 0;
      const maxAttempts = 3;
      let success = false;
      
      while (attempts < maxAttempts && !success) {
        try {
          rmSync(path, { recursive: true, force: true });
          console.log(`✅ Eliminado: ${path.replace(projectRoot, '.')}`);
          cleaned++;
          success = true;
        } catch (retryError) {
          attempts++;
          if (attempts >= maxAttempts) {
            throw retryError;
          }
          // Esperar un poco antes de reintentar (usando bloqueo síncrono simple)
          const start = Date.now();
          while (Date.now() - start < 200) {
            // Bloqueo simple para esperar 200ms
          }
        }
      }
    } catch (error) {
      // No es crítico si no se puede eliminar, solo advertir
      console.warn(`⚠️  No se pudo eliminar: ${path.replace(projectRoot, '.')} - ${error.message}`);
    }
  }
}

if (cleaned === 0) {
  console.log('✨ El caché ya está limpio.\n');
} else {
  console.log(`\n✨ Caché limpiado exitosamente (${cleaned} directorio(s)).\n`);
}
