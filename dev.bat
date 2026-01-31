@echo off
REM Script batch para ejecutar el servidor de desarrollo
REM Limpia el caché antes de iniciar para prevenir errores 404
cd /d "%~dp0"

echo 🧹 Limpiando cache de Astro...

REM Limpiar caché de Astro
if exist ".astro" (
    rmdir /s /q ".astro"
    echo ✅ Cache .astro eliminado
)

REM Limpiar caché de Vite
if exist "node_modules\.vite" (
    rmdir /s /q "node_modules\.vite"
    echo ✅ Cache Vite eliminado
)

echo.
echo 🚀 Iniciando servidor de desarrollo...
echo.
npm run dev
