# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321` (auto-cleans cache) |
| `npm run dev:clean`       | Cleans cache and starts dev server               |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

### 🔧 Prevención de Errores 404

Este proyecto incluye **limpieza automática de caché** para prevenir errores 404:
- El script `predev` se ejecuta automáticamente antes de `npm run dev`
- Todos los scripts de desarrollo (`dev.ps1`, `dev.bat`, `run-dev.ps1`, `run-dev.bat`) limpian el caché automáticamente
- Si experimentas un 404, usa `npm run dev:clean` para forzar una limpieza completa

### 🪟 Windows Users

**Important:** PowerShell doesn't support `&&` operator. Use one of these methods:

**Option 1:** Navigate to the `y` directory first, then run:
```powershell
cd y
npm run dev
```

**Option 2:** Use the provided scripts from the project root:
```powershell
# PowerShell script
.\run-dev.ps1

# Or batch script
.\run-dev.bat
```

**Option 3:** Use the script inside the `y` directory:
```powershell
cd y
.\dev.ps1
# Or
.\dev.bat
```

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
