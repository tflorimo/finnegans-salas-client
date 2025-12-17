# Finnegans Salas Client

## 📋 Introducción

**Finnegans Salas Client** es una aplicación web de gestión de salas de conferencias desarrollada en **React** con TypeScript. El sistema permite visualizar disponibilidad de salas en tiempo real, gestionar reservas, registrar asistencia mediante códigos QR y proporciona un panel administrativo completo para auditoría y monitoreo de eventos.

### Objetivo Principal

Resolver la problemática de gestión centralizada de espacios de conferencias, permitiendo:
- Visualizar disponibilidad en tiempo real mediante mapas de calor
- Realizar check-in rápido mediante escaneo de QR
- Acceso administrativo para auditoría y gestión de eventos
- Interfaz responsive optimizada para web y mobile

### Público Objetivo

- **Empleados/Visitantes**: Para reservar salas y hacer check-in
- **Administradores**: Para supervisar auditoría y eventos
- **Managers**: Para análisis de disponibilidad de espacios

---
## Capturas de pantalla

<img width="1359" height="646" alt="Captura de pantalla 2025-11-29 134431" src="https://github.com/user-attachments/assets/b91487be-9123-433f-b3bf-8edb0f2b43cb" />
<img width="1346" height="646" alt="Captura de pantalla 2025-11-27 175839" src="https://github.com/user-attachments/assets/ca9c6b40-a638-43c2-9589-0fc2d4ff8322" />
<img width="1344" height="645" alt="Captura de pantalla 2025-11-27 181838" src="https://github.com/user-attachments/assets/3d5b3475-808e-4d42-833d-4429cc3bf926" />
<img width="1344" height="647" alt="Captura de pantalla 2025-11-26 223147" src="https://github.com/user-attachments/assets/0dc58046-ac0f-4ab0-af07-a8fc257cb388" />
<img width="1343" height="645" alt="Captura de pantalla 2025-11-27 194335" src="https://github.com/user-attachments/assets/bd09d825-7975-4e71-90a5-8030ebaeef6b" />

---

## 🛠 Tech Stack

| Categoría | Tecnología | Versión |
|-----------|-----------|---------|
| **Framework** | React | 18+ |
| **Lenguaje** | TypeScript | 5+ |
| **Build Tool** | Vite | 4+ |
| **Estilos** | Styled Components | 6+ |
| **Routing** | React Router | 6+ |
| **Estado Global** | React Context API | - |
| **Autenticación** | Google OAuth 2.0 | - |
| **HTTP Client** | Axios | 1.6+ |
| **Charts/Heatmap** | ECharts (echarts-for-react) | 5+ |
| **QR Codes** | react-qr-code | 1+ |
| **PDF Export** | jsPDF + html2canvas | - |
| **Iconos** | Lucide React | 0.3+ |
| **Debounce** | lodash.debounce | 4.17+ |
| **Linter** | ESLint | 8+ |
| **Formatter** | Prettier | 3+ |

---

## 🚀 Instrucciones para Levantar el Proyecto

### Requisitos Previos

- **Node.js**: v18.0.0 o superior
- **npm**: v9.0.0 o superior (o yarn/pnpm)
- Acceso a servidor backend en `http://localhost:3000/api`

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tflorimo/finnegans-salas-client.git
   cd finnegans-salas-client
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   - Copiar archivo de ejemplo: `.env.example` → `.env`
   - Ajustar valores según el ambiente

### Comandos Disponibles

```bash
# Desarrollo local
npm run dev              # Inicia servidor Vite en http://localhost:5173

# Build para producción
npm run build            # Genera optimizado para producción en /dist

# Preview del build
npm run preview          # Previsuraliza build localmente

# Lint y format
npm run lint             # Ejecuta ESLint
npm run format           # Formatea código con Prettier

# Type checking
npm run type-check       # Verifica tipos TypeScript
```

### Variables de Entorno

Crear archivo `.env` en la raíz del proyecto.

### Levantar el Proyecto Localmente

1. **Instala las dependencias**
   ```bash
   npm install
   ```

2. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   ```

3. **Abre tu navegador** y accede a la URL que aparece en la consola (por defecto, `http://localhost:5173`)

---

## 📁 Estructura del Proyecto

```
finnegans-salas-client/
├── src/
│   ├── assets/                    # Recursos estáticos
│   │   ├── colors/
│   │   │   └── global-colors.ts   # Paleta global de colores
│   │   └── images/
│   │
│   ├── components/                # Componentes reutilizables de UI
│   │   ├── Button/                # Botón genérico
│   │   ├── CardContainer/         # Contenedor de tarjetas
│   │   ├── GenericSelect/         # Select genérico tipado
│   │   ├── InputSearch/           # Input de búsqueda con debounce
│   │   └── Tag/                   # Componente Tag para estados
│   │
│   ├── context/                   # Context API para estado global
│   │   ├── auth/
│   │   │   ├── authContext.ts
│   │   │   ├── AuthProvider.tsx
│   │   │   ├── authReducer.ts
│   │   │   └── types.ts
│   │   └── theme/                 # Contexto de tema (light/dark)
│   │
│   ├── pages/                     # Páginas/vistas principales
│   │   ├── HomePage/              # Inicio - Visualización de salas
│   │   ├── RoomPage/              # Detalle de sala
│   │   ├── AdminEvents/           # Panel - Gestión de eventos
│   │   ├── AdminAudits/           # Panel - Auditoría del sistema
│   │   ├── AdminLogs/             # Panel - Logs de sistema
│   │   ├── HeatmapPage/           # Visualización de disponibilidad
│   │   ├── LoginPage/             # Autenticación
│   │   └── NotFoundPage/          # Página 404
│   │
│   ├── services/                  # Capa de comunicación con API
│   │   ├── axiosInstance.ts       # Configuración de Axios
│   │   ├── admin/
│   │   │   ├── admin.service.ts
│   │   │   ├── admin.types.ts
│   │   │   └── admin.utils.ts
│   │   ├── auth/
│   │   │   ├── auth.service.ts
│   │   │   ├── auth.utils.ts
│   │   │   └── index.ts
│   │   ├── rooms/
│   │   │   ├── room.service.ts
│   │   │   └── rooms.types.ts
│   │   └── heatmap/
│   │       └── heatmap.service.ts
│   │
│   ├── shared/                    # Componentes y utilidades compartidas
│   │   ├── components/
│   │   │   ├── BackButton/
│   │   │   ├── Header/
│   │   │   ├── SideBar/           # Navegación de admin
│   │   │   ├── Pagination/
│   │   │   ├── ExportButton/      # Exportar a CSV/PDF
│   │   │   └── FilterToolbar/
│   │   ├── types/
│   │   │   ├── event.types.ts
│   │   │   └── room.types.ts
│   │   ├── utils/
│   │   │   ├── format.utils.ts
│   │   │   ├── text.utils.ts
│   │   │   ├── roomURL.utils.ts
│   │   │   ├── axios.utils.ts
│   │   │   └── qrPdfExport.utils.ts
│   │   └── styles/
│   │       └── media.ts           # Media queries reutilizables
│   │
│   ├── constants/                 # Constantes de la aplicación
│   │   ├── admin.constants.ts
│   │   ├── auth.constants.ts
│   │   └── rooms.constants.ts
│   │
│   ├── router/                    # Configuración de rutas
│   │   ├── AppRouter.tsx
│   │   ├── PrivateRoute.tsx       # Rutas protegidas
│   │   └── PublicRoute.tsx
│   │
│   ├── routes/
│   │   └── FinnegansRoutes.tsx    # Definición de rutas
│   │
│   ├── theme/                     # Sistema de temas
│   │   ├── Theme.ts               # Temas light/dark
│   │   └── Types.ts
│   │
│   ├── App.tsx                    # Componente raíz
│   ├── main.tsx                   # Punto de entrada
│   └── index.css                  # Estilos globales
│
├── public/                        # Archivos estáticos
├── .env.example                   # Ejemplo de variables de entorno
├── tsconfig.json                  # Configuración TypeScript
├── vite.config.ts                 # Configuración Vite
├── eslint.config.js              # Configuración ESLint
├── package.json
└── README.md
```

### Módulos Principales

| Módulo | Responsabilidad |
|--------|-----------------|
| **auth** | Autenticación con Google OAuth, gestión de sesión |
| **rooms** | Visualización y detalles de salas disponibles |
| **admin** | Panel administrativo con auditoría, eventos y logs |
| **heatmap** | Mapa de calor de disponibilidad semanal por hora |
| **services** | Capas de comunicación con backend (Axios) |

---

## 🏗 Enfoque Técnico y Buenas Prácticas

### Componentización

- **Componentes Reutilizables**: `Button`, `Card`, `Tag`, `Select` - siguiendo principios de Atomic Design
- **Componentes Especializados**: Cada página contiene sub-componentes específicos en carpetas dedicadas
- **Props Tipadas**: Interfaces TypeScript para todas las props de componentes

Ejemplo:
```typescript
interface ButtonProps {
  text?: string;
  icon?: ReactNode;
  variant: ButtonVariant;
  onClick: () => void;
  disabled?: boolean;
  customStyle?: CSSProp;
}

export const Button: React.FC<ButtonProps> = ({ text, icon, variant, onClick, disabled, customStyle }) => {
  // Implementación
};
```

### Custom Hooks

Encapsulación de lógica reutilizable:
- `useGetRooms()` - Fetch de salas con caché
- `useGetAdminEvents()` - Paginación y filtrado de eventos
- `useAuditsFetch()` - Fetch con búsqueda debounced
- `useHourlyForecastHeatmap()` - Datos de disponibilidad

### Separación de Responsabilidades

```
Presentación (Components)
        ↓
Lógica de UI (Custom Hooks)
        ↓
Lógica de Negocio (Services + Adapters)
        ↓
API Backend (Axios Instance)
```

**Ejemplo**:
- `AdminEventsPage.tsx` → renderiza UI
- `useGetAdminEvents.tsx` → maneja paginación, búsqueda
- `admin.service.ts` → llamadas a API
- `adminService.getEvents()` → HTTP request

### Manejo de Estado

- **Global**: `React Context API` para auth y tema
- **Local**: `useState` para estado de componente
- **Server State**: Caching con variables de estado en custom hooks

### TypeScript Strict Mode

- `noImplicitAny: true`
- `strictNullChecks: true`
- `noUnusedLocals: true`
- Interfaces/DTOs para todas las entidades de datos

**Ejemplo de DTO**:
```typescript
export interface EventListItemDTO {
  id: string;
  title: string;
  roomName: string;
  startTime: Date;
  endTime: Date;
  checkInStatus: CheckInStatus;
  attendees: AttendeeDTO[];
  createdAt: Date;
  updatedAt: Date;
}
```

### Nomenclatura Consistente

- Componentes: PascalCase (`HomePage.tsx`, `AdminEventsPage.tsx`)
- Hooks: camelCase con prefijo `use` (`useGetRooms`, `useAuditsFetch`)
- Servicios: `*.service.ts` (`admin.service.ts`, `room.service.ts`)
- Tipos: `*.types.ts` con interfaces sin prefijo (`EventListItemDTO`, `RoomResponseDTO`)
- Constantes: `UPPER_SNAKE_CASE` (`ADMIN_ENDPOINTS`, `AUDIT_ACTION_LABELS`)

### Optimizaciones de Performance

1. **Memoización**:
   - `React.memo()` en componentes que reciben props complejas
   - `useMemo()` para cálculos costosos
   - `useCallback()` para callbacks estables

2. **Code Splitting**:
   - Rutas lazy-loaded con `React.lazy()`
   - Importaciones dinámicas en utilidades pesadas (jsPDF, html2canvas)

3. **Debounce en Búsquedas**:
   - `lodash.debounce` en inputs de búsqueda (timeout configurable)
   - Evita múltiples requests innecesarios

4. **Paginación**:
   - Carga por página (default 10 items)
   - Botones de navegación para control manual

5. **Render Eficiente**:
   - Evitar re-renders con validaciones en dependencias
   - Destructuring de props para optimizar comparaciones

---

## ⚡ Performance y Optimizaciones Actuales

### Estrategias de Carga

- **Lazy Loading de Rutas**: Páginas se cargan bajo demanda
- **Caché en Custom Hooks**: Resultados de API cacheados temporalmente
- **Paginación Inteligente**: Solo se cargan los datos necesarios por página

### Manejo de Peticiones a APIs

```typescript
// Debounce en búsquedas
const debouncedSearch = useMemo(
  () => debounce((value: string) => setSearch(value), 500),
  []
);

// Reintentos automáticos en Axios
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    // Lógica de reintento
  }
);

// Paginación lazy
const handlePageChange = (newPage: number) => {
  setCurrentPage(newPage);
  // API call solo para nueva página
};
```

### Exportación de Datos

- **CSV**: Generación client-side sin servidor adicional
- **PDF con QRs**: Renderización de alta resolución (4x scale) en pdf

### Assets

- Imágenes: Optimizadas con `vite-plugin-images`
- Fuentes: Google Fonts cargadas de forma asíncrona
- Iconos: Lucide React (SVG, sin bitmap)

---

### Consideraciones de Producción

- **Environment Variables**: Diferentes por stage (dev, staging, prod)
- **Build Size**: Monitorear bundle size con `webpack-bundle-analyzer`
- **SEO**: Meta tags dinámicas, og:image para sharing
- **CSP Headers**: Content Security Policy configurado en servidor
- **CORS**: Backend debe permitir origen del frontend

### CI/CD Pipeline (GitHub Actions)

```yaml
name: Deploy
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm install
      - run: npm run lint
      - run: npm run build
      - uses: vercel/action@master
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
```

---

## 🤝 Contribución

### Flujo de Contribución

1. **Crear rama** desde `dev`:
   ```bash
   git checkout -b feat/descripcion-corta
   # Ramas: feat/*, fix/*, refactor/*, docs/*
   ```

2. **Desarrollo local**:
   ```bash
   npm run dev
   npm run lint --fix
   ```

3. **Commit** con mensaje descriptivo:
   ```bash
   git commit -m "feat: agregar exportación de QRs en PDF"
   # Formato: [tipo]: descripción corta
   ```

4. **Push y Pull Request**:
   ```bash
   git push origin feat/descripcion-corta
   ```
   - Descripción clara del cambio
   - Referencia a issues si aplica
   - Tests incluidos

### Estándares de Código

- **TypeScript**: Strict mode, sin `any`
- **Componentes**: Typed props, JSDoc en funciones complejas
- **Naming**: Consistente con convenciones del proyecto
- **Imports**: Organizados alfabéticamente, locales al final
- **Comentarios**: Solo para lógica no obvia

### Revisión de Código

- Mínimo 1 reviewer antes de merge
- Tests deben pasar (CI/CD)
- Lint y type-check sin errores

---

## 📝 Licencia

Este proyecto está bajo licencia **MIT**. Ver archivo `LICENSE` para detalles.

---

## 📋 Changelog

### v1.0.0 (Enero 2025)
- ✅ Autenticación con Google OAuth
- ✅ Visualización de salas con disponibilidad
- ✅ Check-in mediante QR
- ✅ Panel administrativo con auditoría
- ✅ Exportación de datos (CSV/PDF)
- ✅ Mapa de calor de disponibilidad semanal
- ✅ Tema light/dark

---

## ❓ FAQ

### ¿Cómo agregar una nueva página?

1. Crear carpeta en `src/pages/NuevaPage`
2. Crear `NuevaPage.tsx` y `index.ts`
3. Agregar ruta en `src/routes/FinnegansRoutes.tsx`
4. Si es protegida, envolver con `<PrivateRoute>`

### ¿Cómo crear un custom hook?

Crear archivo `useNombreHook.ts` en la carpeta de la página/componente:
```typescript
export const useNombreHook = () => {
  const [state, setState] = useState();
  // Lógica
  return { state, setState };
};
```

### ¿Cómo extender estilos globales?

Editar `src/theme/Theme.ts` para agregar colores/sizes globales.

### ¿El backend está dockerizado?

Consultar repositorio backend: [finnegans-backend](https://github.com/tflorimo/finnegans-backend)

---

## 📚 Recursos Útiles

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/)
- [Styled Components](https://styled-components.com/)
- [React Router](https://reactrouter.com/)

---

**Última actualización**: Diciembre 2025  
**Estado**: Listo para producción
