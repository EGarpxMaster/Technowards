# TechnoWards | Portafolio y Soluciones TI

Plataforma web de portafolio creada con la intención de exhibir de manera dinámica e interactiva los trabajos realizados, perfiles profesionales y trayectorias de **Emmanuel Garcia**, **Edwin Canché**, **Uziel Solis** y **Orbelin Jiménez**.

## 🚀 Tecnologías y Herramientas

Este proyecto está construido empleando tecnologías web modernas para asegurar el mejor rendimiento, diseño adaptable y una excelente experiencia de desarrollador (DX):

- **[Astro](https://astro.build/)**: Framework web principal, optimizado para máxima velocidad generando sitios estáticos por defecto (SSG).
- **TypeScript**: Superset de JavaScript que añade tipado estático, vital para un desarrollo más robusto, manejo estricto de interfaces de datos e inyección sin errores.
- **HTML5 & CSS3 (Vanilla)**: Estilización pura empleando Variables CSS, *Flexbox* y *CSS Grid* para componentes 100% responsivos y fluidos sin sobrecarga de dependencias externas.
- **FontAwesome**: Para toda la iconografía interactiva de la página.
- **AOS (Animate On Scroll)**: Biblioteca utilizada para implementar micro-animaciones dinámicas fluidas mientras el usuario se desplaza por el sitio web.

## 📂 Arquitectura del Proyecto

El proyecto sigue una arquitectura organizada y escalable basada en la recomendada por Astro:

```text
/
├── public/                 # Assets estáticos servidos de manera directa (imágenes, logos, archivos PDF)
├── src/
│   ├── components/         # Componentes UI reutilizables (Navbar, Footer, ProjectCard, TeamCard)
│   ├── data/               # Origen de datos simulando un headless CMS
│   │   ├── projects.ts     # Listado y configuración de todos los proyectos de la agencia
│   │   └── team.ts         # Base de datos local de perfiles, experiencia y currículums del equipo
│   ├── layouts/            # Componentes de envoltura base de diseño (Layout principal)
│   ├── pages/              # Enrutamiento automático de páginas y endpoints
│   │   ├── index.astro     # Landing page principal
│   │   ├── equipo/         # Generador de rutas dinámicas por integrante (/equipo/[slug])
│   │   └── proyectos/      # Generador de rutas dinámicas por proyecto (/proyectos/[slug])
│   └── styles/             # Hojas de estilo globales (global.css)
├── package.json            # Dependencias del ecosistema de NodeJS y scripts
└── astro.config.mjs        # Configuración raíz de Astro
```

## ⚙️ Renderizado de Páginas y Rutas Dinámicas (SSG)

La plataforma utiliza el motor de **Generación de Sitios Estáticos (Static Site Generation - SSG)** de Astro, lo que permite lograr el puntaje más alto en SEO y tiempos de carga casi instantáneos sin recargar el navegador.

Las páginas específicas tanto para los proyectos como para los miembros del equipo se generan dinámicamente inyectando la información en tiempo de compilación, utilizando la potente API estática de Astro: `getStaticPaths()`.

## 📝 Gestión de Datos (Data Management)

Bajo el concepto "Separation of Concerns" (Separación de intereses), la información estructural de las cartas, miembros y detalles de proyectos no se escribe de forma estática en los archivos visuales (HTML/Astro). Toda esta información se extrae de **estructuras de datos en TypeScript**, facilitando así la escalabilidad, la búsqueda, la adición y edición de datos sin alterar la interfaz gráfica.

### Actualizar el Equipo (`src/data/team.ts`)
Para añadir o modificar miembros, certificaciones o habilidades, simplemente se edita el arreglo `TEAM_MEMBERS`. El campo primario y crucial es el `slug`, que define la identidad única en el sistema de rutas (ej: `slug: "emmanuel-garcia"` genera `/equipo/emmanuel-garcia`).

### Actualizar Proyectos (`src/data/projects.ts`)
Los proyectos nuevos y sus evidencias se añaden a `PROJECTS`. 
**Sistema Relacional**: Para indicar quiénes trabajaron en un proyecto particular, no necesitas reescribir nombres ni adjuntar imágenes repetidas. Solo insertas un arreglo con los **slugs** de los miembros que participaron y la interfaz automáticamente relacionará la base de datos `team.ts` y generará listas con avatares dinámicos y enlaces a cada uno.
```ts
{
  slug: "nombre-del-proyecto",
  title: "Título de Ejemplo",
  // Relaciona automáticamente las fotos y enlaces desde team.ts 
  participants: ["emmanuel-garcia", "orbelin-jimenez"] 
}
```

## 💻 Instalación y Entorno Local

Este ecosistema ha sido configurado usando el gestor de paquetes de alto rendimiento **PNPM**. 

Sigue estos pasos para arrancar el entorno en tu máquina local:

1. **Clona el repositorio** en tu equipo local:
   ```bash
   git clone https://github.com/EGarpxMaster/Technowards.git
   cd Technowards
   ```

2. **Instala las dependencias necesarias** del proyecto:
   ```bash
   pnpm install
   ```

3. **Inicia el servidor de desarrollo** con recarga en vivo (HMR):
   ```bash
   pnpm run dev
   ```

4. Ingresa a `http://localhost:4321/` en tu navegador de preferencia.

## 🏗️ Comandos Útiles del CLI

Puedes correr los siguientes comandos dentro del directorio para gestionar el ciclo de vida del proyecto:

| Comando             | Función                                                                |
| :------------------ | :--------------------------------------------------------------------- |
| `pnpm run dev`      | Inicia el entorno local de desarrollo con HMR.                         |
| `pnpm run build`    | Compila y empaqueta el sitio final y optimizado dentro del directorio `dist/`. |
| `pnpm run preview`  | Levanta un servidor estático para previsualizar la compilación de `dist/`. |
