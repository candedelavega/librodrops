# Libro DROPS

App web instalable de gestión DROPS (prevención de caída de objetos) para equipos de pulling y workover. Sirve para cualquier empresa: los datos de la empresa se cargan en la app.

## Qué hace

- Libro del equipo por zonas, con fijación primaria, retención secundaria y aseguramiento de seguridad de cada componente.
- Inspección mensual, check list pre montaje, chequeo de colisión, amarre de herramientas e inspección post-evento.
- Hallazgos con plazo de cierre según el riesgo, foto y firma.
- Panel de indicadores con lo que hay que resolver primero.
- Etiquetas QR por componente.
- Registro de herramientas en altura, zonas rojas, equipos temporarios y caídas de objetos.
- Calculadora de consecuencia, animación de las 3 barreras y charla de 5 minutos sobre buenas prácticas DROPS, con firmas y registro.
- Exportación a PDF y Excel.

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
