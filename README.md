# Phrase Manager App


Esta es una aplicación web adaptativa creada con React y TypeScript que te permite crear, administrar y buscar tu colección personal de frases o notas. La aplicación cuenta con una interfaz limpia y moderna con modos claro y oscuro, y almacena todos los datos en el almacenamiento local de tu navegador.

## Características

*   **Agregar frases**: Agregue rápidamente nuevas frases con un límite de caracteres.
*   **Búsqueda**: Filtra tus frases en tiempo real con una entrada de búsqueda sin rebote.
*   **Eliminar frases**: Elimina frases con una animación de salida suave.
*   **Almacenamiento persistente**: Tus frases y preferencias de tema se guardan en localStorage, por lo que tus datos persisten entre sesiones del navegador.
*   **Cambio de tema**: Cambia entre un tema claro y uno oscuro según tus preferencias.
*   **Diseño responsivo**: Un diseño pensado para dispositivos móviles que se adapta a tabletas y computadoras de escritorio.
*   **Estados vacíos**: Mensajes informativos cuando no hay frases o resultados de búsqueda.

## Tech Stack

*   **Framework**: React 19
*   **Language**: TypeScript
*   **Build Tool**: Vite
*   **State Management**: Zustand
*   **Styling**: CSS Modules
*   **Testing**: Vitest, React Testing Library, JSDOM
*   **Icons**: Custom SVG components

## Introducción

Para ejecutar este proyecto localmente, siga estos pasos.

### Requisitos previos

Asegúrese de tener Node.js y npm (o un administrador de paquetes similar) instalados en su máquina.

### Instalación

1. Clona el repositorio en tu máquina local:
    ```bash
    git clone https://github.com/emasar91/challenge-frases.git
    ```

2.  Navega hasta el directorio del proyecto:
    ```bash
    cd challenge-frases
    ```

3.  Instala las dependencias necesarias:
    ```bash
    npm install
    ```

### Ejecutar la aplicación

Para iniciar el servidor de desarrollo, ejecute el siguiente comando:

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173` (o el siguiente puerto disponible)

## Scripts disponibles

This project includes several scripts to help with development and testing:

*   `npm run dev`: Inicia el servidor de desarrollo con Hot Module Replacement (HMR).
*   `npm run build`: Compila y agrupa la aplicación para su producción.
*   `npm run lint`: Comprueba el código base utilizando ESLint para encontrar y solucionar problemas.
*   `npm run preview`: Sirve la compilación de producción localmente para obtener una vista previa de la aplicación final.
*   `npm run test`: Ejecuta el conjunto de pruebas en la consola.
*   `npm run test:ui`: Ejecuta el conjunto de pruebas con la interfaz de usuario interactiva Vitest.
