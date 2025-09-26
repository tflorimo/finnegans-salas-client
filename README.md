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

### Input

- Descripción: Campo de entrada reutilizable con soporte para ícono opcional y estilos personalizables. Se usa como base de `InputSearch` e `InputFilter`.

- Props:
  - `placeholder?`: Texto del placeholder.
  - `value?`: Valor controlado del input.
  - `icon?`: Ícono opcional que se renderiza al extremo derecho y que dispara `onClick`.
  - `onChange? (e)`: Handler de cambio del input.
  - `onKeyDown? (e)`: Handler de teclado del input.
  - `onClick? ()`: Acción al hacer clic sobre el ícono o el input.
  - `customStyle?`: Estilos adicionales vía `styled-components`.
  - Además acepta todas las props nativas de `<input />`.

- Ejemplo de Uso:

  ```tsx
  import { Input } from "./components/Input/Input";
  import { Search } from "lucide-react";

  const Example = () => (
    <Input
      placeholder="Buscar..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      onClick={() => console.log("Click en input o ícono")}
      icon={<Search size={16} />}
    />
  );
  ```

- Notas de Accesibilidad:
  - Mantiene un foco claro con `:focus-within` y `aria-label` por defecto al `placeholder` (puedes definir `aria-label` manualmente cuando sea necesario).

### InputSearch

- Descripción: Variante de `Input` para búsquedas. Ejecuta `onSearch` al presionar Enter o al hacer clic en el ícono.

- Props:
  - Hereda todas las props de `Input`.
  - `onSearch? (term: string)`: Función llamada con el término actual al presionar Enter o al hacer clic en el ícono.

- Ejemplo de Uso:

  ```tsx
  import { InputSearch } from "./components/InputSearch/InputSearch";
  import { Search } from "lucide-react";

  const ExampleSearch = () => {
    const [term, setTerm] = useState("");

    return (
      <InputSearch
        placeholder="Buscar..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        onSearch={(q) => console.log("Buscar:", q)}
        icon={<Search size={16} />}
      />
    );
  };
  ```

### InputFilter

- Descripción: Campo de entrada de solo lectura que despliega un dropdown (listbox) con opciones filtrables y navegación por teclado. Ideal para seleccionar filtros rápidos.

- Props:
  - Hereda todas las props de `Input` y de `<input />` nativo (por ejemplo, `id`, `aria-*`).
  - `options?: Array<{ id: string | number; label: string; value: string }>`: Lista de opciones.
  - `onOptionSelect? (opt)`: Se ejecuta al seleccionar una opción del dropdown.
  - `onSearch? (term: string)`: Cuando el dropdown está cerrado y se presiona Enter, dispara búsqueda con el valor actual.

- Ejemplo de Uso:

  ```tsx
  import { InputFilter } from "./components/InputFilter/InputFilter";

  const opciones = [
    { id: 1, label: "Sala A", value: "A" },
    { id: 2, label: "Sala B", value: "B" },
    { id: 3, label: "Sala C", value: "C" },
  ];

  const ExampleFilter = () => {
    const [valor, setValor] = useState("");

    return (
      <InputFilter
        placeholder="Filtrar salas"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        options={opciones}
        onOptionSelect={(opt) => console.log("Seleccion:", opt)}
        onSearch={(term) => console.log("Buscar:", term)}
      />
    );
  };
  ```

- Interacción y Accesibilidad:
  - El input es `readOnly` y abre el dropdown al enfocar o hacer clic.
  - Navegación por teclado: `ArrowUp/ArrowDown`, `Home/End`, `Enter` para seleccionar, `Escape`/`Tab` para cerrar.
  - Usa `aria-haspopup="listbox"`, `aria-controls` y `aria-activedescendant` en el input, y `role="listbox"/"option"` en la lista.

## Contribuciones

Si deseas contribuir a este proyecto, por favor crea un fork del repositorio, realiza tus cambios y envía un pull request para revisión.
