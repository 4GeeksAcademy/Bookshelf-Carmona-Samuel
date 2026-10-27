# Especificaciones: Bookshelf

## Objetivo

Crear un prototipo de panel de administración para una biblioteca comunitaria. Está dirigido al personal de la biblioteca y permite consultar el catálogo, los préstamos activos y los socios. El diseño prioriza su uso en computadoras de escritorio y portátiles.

## Stack y restricciones

- HTML5 semántico, con `index.html` como página principal.
- Tailwind CSS mediante CDN; sin archivos CSS personalizados ni atributos `style` en línea.
- JavaScript vanilla para la navegación, las interacciones y los datos simulados; sin frameworks, bibliotecas adicionales ni herramientas de build.
- Datos de ejemplo locales en JavaScript y JSON. Las operaciones simulan peticiones al backend; no se requiere un servidor ni persistencia real.
- Diseño limpio y minimalista, siguiendo un sistema visual plano (*flat design*).

## Navegación y comportamiento global

- Una barra lateral izquierda persistente muestra el nombre **Bookshelf** y los enlaces a Catálogo, Préstamos y Socios.
- Al seleccionar un enlace, se muestra la sección correspondiente y se destaca el enlace activo.
- Una barra superior incluye un control de modo claro/oscuro que cambia la apariencia de todo el panel mediante las utilidades `dark:` de Tailwind.
- Los menús de acciones se cierran al hacer clic fuera de ellos.
- Los modales se cierran con su botón de cierre y al hacer clic en el fondo que los rodea.

## Secciones

### Catálogo

- **Tabla de libros:** muestra al menos cinco libros de ejemplo con título, autor, género y un indicador de estado: Disponible, En préstamo o Vencido.
- **Menú de acciones:** cada fila incluye un botón `⋮` con las opciones «Ver detalle» y «Eliminar». «Ver detalle» abre un modal con la información completa del libro. «Eliminar» puede quedar como acción simulada sin efecto.
- **Estados:** los indicadores permiten distinguir visualmente la disponibilidad y los préstamos vencidos.

### Préstamos

- **Tabla de préstamos activos:** muestra al menos cuatro registros de ejemplo con prestatario, título del libro, fecha de préstamo y fecha de devolución.
- **Indicador de vencimiento:** los préstamos vencidos se distinguen con un badge rojo.
- **Menú de acciones:** cada fila incluye un botón `⋮` con «Ver detalle» y «Marcar como devuelto». «Ver detalle» muestra la información del préstamo en un modal.
- **Transición simulada:** al marcar un préstamo como devuelto, deja de aparecer entre los préstamos activos y se actualizan el estado del libro y el número de préstamos activos del socio. Los cambios solo se mantienen durante la sesión del prototipo.

### Socios

- **Lista de socios:** muestra al menos tres socios de ejemplo con nombre, correo electrónico y número de préstamos activos.
- **Menú de acciones:** cada socio tiene un botón `⋮` con «Ver detalle», que abre un modal con su registro completo.
- **Estados:** el contador de préstamos activos refleja las devoluciones simuladas.

## Inventario de componentes

| Componente | Función |
| --- | --- |
| Barra lateral | Navegar entre secciones y destacar la vista activa. |
| Tabla y fila de datos | Presentar registros y sus acciones. |
| Menú desplegable | Mostrar las acciones disponibles para cada registro. |
| Modal | Mostrar detalles de libros, préstamos y socios. |
| Badge | Identificar estados de disponibilidad o vencimiento. |
| Control de tema | Alternar entre los modos claro y oscuro. |
| Gestor de vistas | Mostrar la sección seleccionada y sincronizar la barra lateral. |
| Búsqueda (opcional) | Filtrar los datos a partir del texto introducido. |
| Paginación | Navegar entre páginas cuando haya más registros de los que caben en una página. |

## Criterios de aceptación

1. Las tres secciones se abren desde la barra lateral y la sección activa queda resaltada.
2. El catálogo muestra al menos cinco libros, préstamos muestra al menos cuatro registros y socios muestra al menos tres.
3. Las filas muestran los campos y las acciones definidos para su sección; los préstamos vencidos se identifican con un badge rojo.
4. «Ver detalle» abre un modal con la información del registro seleccionado en cada sección.
5. Todos los modales se cierran tanto con el botón de cierre como al hacer clic en el fondo.
6. Todos los menús de acciones se cierran al hacer clic fuera de ellos.
7. El control de tema alterna entre modo claro y oscuro en todo el panel.
8. Al marcar un préstamo como devuelto, se actualizan la lista de préstamos activos, la disponibilidad del libro y el contador del socio sin llamar a un backend real.
9. La paginación permite recorrer todos los registros cuando ocupan más de una página.

## Referencia

Especificaciones adaptadas del [ejemplo de panel de administración de biblioteca de 4Geeks Academy](https://github.com/4GeeksAcademy/ai-engineering-syllabus/blob/HEAD/content/projects/agent-hub-ui-specs-and-prompts/.learn/example/README.es.md).
