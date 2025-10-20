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
│   │   ├── Button/        # Botón reutilizable.
│   │   ├── CardContainer/ # Contenedor tipo tarjeta.
│   │   ├── Input/         # Campo de entrada base.
│   │   ├── InputFilter/   # Input con dropdown de opciones (listbox).
│   │   ├── InputSearch/   # Input de búsqueda (Enter/icono ejecuta onSearch).
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

## Librerías Utilizadas

### lucide-react

- **Descripción**: Una librería de íconos basada en React que proporciona íconos personalizables y ligeros.
- **Uso**: Se utiliza para renderizar íconos en componentes como el `IconButton`.
- **Instalación**: Ya incluida en el proyecto. Para más información, visita [lucide-react](https://lucide.dev/).

### styled-components

- **Descripción**: Una librería para escribir estilos CSS en JavaScript, permitiendo crear componentes estilizados reutilizables.
- **Uso**: Se utiliza para estilizar componentes como el `IconButton`.
- **Instalación**: Ya incluida en el proyecto. Para más información, visita [styled-components](https://styled-components.com/).

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

## Documentación de Componentes

### Button

- **Descripción**: Componente reutilizable que puede mostrar un ícono y/o texto, con estilos y variantes personalizables.

- **Props**:
  - `icon`: Ícono opcional que se muestra dentro del botón.
  - `text`: Texto opcional que se muestra dentro del botón.
  - `customStyle`: Estilo personalizado para el botón.
  - `variant`: Variante del botón (por ejemplo, `primary`, `secondary`).
  - `onClick`: Función que se ejecuta al hacer clic en el botón.
- **Ejemplo de Uso**:

  ```tsx
  import { Button } from "./components/Button";
  import { LucideIcon } from "lucide-react";

  const Example = () => (
    <Button
      variant="secondary"
      onClick={() => alert("Clicked!")}
      text="Click Me"
      icon={<LucideIcon />}
    />
  );
  ```

- **Ejemplo con customStyle**:

  ```tsx
  import { LucideIcon } from "lucide-react";
  import styled, { css } from "styled-components";
  import { Button } from "./components/Button";

  const ExampleWithStyle = () => (
    <Button
      text="Styled Button"
      icon={<LucideIcon name="star" />}
      onClick={() => alert("Styled Click!")}
      customStyle={css`{ backgroundColor: "blue", color: "white", padding: "10px" }`}
    />
  );
  ```

### CardContainer

- **Descripción**: Componente contenedor reutilizable que permite mostrar contenido dentro de un diseño estilizado. Ideal para mostrar tarjetas informativas o secciones destacadas en la interfaz de usuario.

- **Props**:

  - `children`: Contenido que se renderiza dentro del contenedor.
  - `customStyle`: Estilo personalizado para el contenedor, utilizando `styled-components`.

- **Ejemplo de Uso**:

  ```tsx
  import { CardContainer } from "./components/CardContainer/CardContainer";

  const Example = () => (
    <CardContainer>
      <h1>Hola Mundo!!</h1>
    </CardContainer>
  );
  ```

- **Ejemplo con colores personalizados y onClick**:

  ```tsx
  import { CardContainer } from "./components/CardContainer/CardContainer";
  import { css } from "styled-components";
  import { SUCCESS_COLOR } from "./assets/colors/global-colors";

  const ExampleWithColors = () => (
    <CardContainer
      onClick={() => alert("Salas Libres")}
      customStyle={css`
        width: 400px;
        height: 80px;
        h1 {
          color: ${SUCCESS_COLOR};
          margin: 0;
        }
        h4 {
          color: ${"#8a96a8"};
          margin: 0;
        }
      `}
    >
      <h1>4</h1>
      <h4>Salas Libres</h4>
    </CardContainer>
  );
  ```

### GenericSelect

- **Descripción**: Componente de selección genérico y reutilizable que permite trabajar con diferentes tipos de datos. Incluye un ícono de flecha desplegable y soporta tanto valores simples como objetos complejos.

- **Props**:

  - `values`: Array de valores a mostrar en el select. Pueden ser strings o objetos con un campo `id`.
  - `onChange`: Función que se ejecuta cuando se selecciona un nuevo valor.
  - `formatLabel`: Función que determina cómo se muestra cada opción.
  - `selected`: Valor seleccionado inicialmente (opcional).

- **Ejemplo de Uso con strings**:

  ```tsx
  import { GenericSelect } from "./components/GenericSelect/GenericSelect";

  const Example = () => {
    const options = ["Sala A", "Sala B", "Sala C"];

    return (
      <GenericSelect
        values={options}
        onChange={(value) => console.log(`Selected: ${value}`)}
        formatLabel={(value) => value}
      />
    );
  };
  ```

- **Ejemplo con objetos**:

  ```tsx
  import { GenericSelect } from "./components/GenericSelect/GenericSelect";

  interface Room {
    id: string;
    name: string;
    capacity: number;
  }

  const Example = () => {
    const rooms: Room[] = [
      { id: "1", name: "Sala Principal", capacity: 10 },
      { id: "2", name: "Sala Pequeña", capacity: 4 },
      { id: "3", name: "Sala de Reuniones", capacity: 8 },
    ];

    return (
      <GenericSelect<Room>
        values={rooms}
        onChange={(room) => console.log(`Selected room: ${room.name}`)}
        formatLabel={(room) => `${room.name} (Cap: ${room.capacity})`}
        selected={rooms[0]}
      />
    );
  };
  ```

## Contribuciones

Si deseas contribuir a este proyecto, por favor crea un fork del repositorio, realiza tus cambios y envía un pull request para revisión.
