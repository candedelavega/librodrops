# Libro DROPS

App web instalable de inspección DROPS (prevención de caída de objetos) para equipos de pulling y workover.

© 2026 Candela de la Vega. Todos los derechos reservados. Ver [LICENSE](LICENSE).

## Archivos

| Archivo | Para qué sirve |
| --- | --- |
| `index.html` | La app |
| `equipo_drops.json` | Datos del equipo y puntos DROPS |
| `pwa.js` | La hace instalable (ícono, pantalla completa) |
| `manifest.webmanifest` | Nombre, colores e íconos de la app |
| `sw.js` | Permite abrirla sin conexión |
| `icons/` | Íconos |

## Instalar

- **iPhone (Safari):** abrir el link → Compartir → "Agregar a pantalla de inicio".
- **Android / PC (Chrome o Edge):** abrir el link → ícono de instalar en la barra, o Menú → "Instalar app".

## Actualizar

1. Cambiar los archivos y hacer commit.
2. En `sw.js`, subir la versión (`libro-drops-v1` → `libro-drops-v2`).
3. Cerrar y volver a abrir la app.

Los datos de las inspecciones quedan guardados en cada dispositivo.
