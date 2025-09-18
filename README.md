# Finnegans Salas Client

## Descripción del Proyecto

Este proyecto es una aplicación cliente desarrollada con React y Vite. Actualmente, el scaffolding inicial incluye una estructura básica de carpetas y archivos para organizar componentes, servicios, rutas, y otros elementos esenciales del proyecto.

## Estructura del Proyecto

```
finnegans-salas-client/
├── public/
│   └── vite.svg
├── src/
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── vite-env.d.ts
│   ├── assets/          # Archivos estáticos como imágenes, fuentes y estilos globales.
│   ├── components/      # Componentes reutilizables de la interfaz de usuario, como botones, inputs, etc.
│   ├── constants/       # Constantes globales del proyecto, como configuraciones o valores predefinidos.
│   ├── hooks/           # Custom hooks para encapsular y reutilizar lógica de negocio.
│   ├── interfaces/      # Definiciones de tipos e interfaces TypeScript para garantizar tipado estático.
│   ├── routes/          # Configuración y definición de las rutas de la aplicación.
│   ├── services/        # Lógica para interactuar con APIs externas, como configuraciones de Axios o Fetch.
│   ├── store/           # Gestión del estado global de la aplicación (por ejemplo, Redux o Context API).
│   └── utils/           # Funciones utilitarias y helpers para tareas comunes.
├── eslint.config.js     # Configuración de ESLint para mantener un código limpio y consistente.
├── index.html           # Archivo HTML principal que sirve como punto de entrada para la aplicación.
├── package.json         # Archivo de configuración de npm que incluye scripts y dependencias del proyecto.
├── README.md            # Documentación del proyecto.
├── tsconfig.app.json    # Configuración específica de TypeScript para la aplicación.
├── tsconfig.json        # Configuración principal de TypeScript.
├── tsconfig.node.json   # Configuración de TypeScript para entornos Node.js.
└── vite.config.ts       # Configuración de Vite para el bundling y desarrollo del proyecto.
```

## Requisitos Previos

Asegúrate de tener instalados los siguientes programas:

- [Node.js](https://nodejs.org/) (versión 16 o superior)
- Un gestor de paquetes como npm (incluido con Node.js) o yarn

## Instalación

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/tflorimo/finnegans-salas-client.git
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd finnegans-salas-client
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```

## Scripts Disponibles

En el archivo `package.json` se encuentran definidos los siguientes scripts:

- `dev`: Inicia el servidor de desarrollo.
  ```bash
  npm run dev
  ```
- `build`: Genera una versión optimizada para producción.
  ```bash
  npm run build
  ```
- `preview`: Previsualiza la versión de producción generada.
  ```bash
  npm run preview
  ```

## Levantar el Proyecto

1. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
2. Abre tu navegador y accede a la URL que aparece en la consola (por defecto, `http://localhost:5173`).

## Contribuciones

Si deseas contribuir a este proyecto, por favor crea un fork del repositorio, realiza tus cambios y envía un pull request para revisión.
