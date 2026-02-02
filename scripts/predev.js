#!/usr/bin/env node
/**
 * Script para ejecutar los scripts de limpieza y verificación antes de dev
 * Compatible con Windows y Unix
 */

import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

const cleanCacheScript = join(projectRoot, 'scripts', 'clean-cache.js');
const verifyStructureScript = join(projectRoot, 'scripts', 'verify-structure.js');

try {
  // Ejecutar limpieza de caché
  console.log('Ejecutando limpieza de caché...\n');
  execSync(`node "${cleanCacheScript}"`, { 
    stdio: 'inherit',
    cwd: projectRoot 
  });
  
  // Ejecutar verificación de estructura
  console.log('\nEjecutando verificación de estructura...\n');
  execSync(`node "${verifyStructureScript}"`, { 
    stdio: 'inherit',
    cwd: projectRoot 
  });
  
  console.log('\n✅ Predev completado exitosamente.\n');
  process.exit(0);
} catch (error) {
  console.warn('\n⚠️  Error en predev, pero continuando...\n');
  // No salir con error para permitir que dev continúe
  process.exit(0);
}
