# Script de PowerShell para ejecutar el servidor de desarrollo
# Limpia el caché antes de iniciar para prevenir errores 404
Set-Location $PSScriptRoot

Write-Host "🧹 Limpiando caché de Astro..." -ForegroundColor Cyan

# Limpiar caché de Astro
if (Test-Path ".astro") {
    Remove-Item -Recurse -Force ".astro"
    Write-Host "✅ Caché .astro eliminado" -ForegroundColor Green
}

# Limpiar caché de Vite
if (Test-Path "node_modules\.vite") {
    Remove-Item -Recurse -Force "node_modules\.vite"
    Write-Host "✅ Caché Vite eliminado" -ForegroundColor Green
}

Write-Host "`n🚀 Iniciando servidor de desarrollo...`n" -ForegroundColor Cyan
npm run dev
