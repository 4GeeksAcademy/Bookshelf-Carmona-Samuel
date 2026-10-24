# Objetivo

Generar un prototipo mock a partir de 'index.html' para la gestión de una biblioteca, incluyendo catálogo, préstamos y socios.

# Description

Prototipo de dashboar enfocado en Desktop/Portátil para la gestión de una biblioteca.
La navegacion principal de los elementos sera el sidebar, en el cual se encontraran enumeradas las vistas detalladas de Catálogo, Préstamos y Socios. Se debe destacar la vista activa actualmente. Al inicio del sidebar se debe mostrar el nombre de la biblioteca. "Bookshelf"

# Stack & Restrictions

Html Tailwind CSS via CDN por defecto, sin frameworks adicionales. JS simple si es necesario solo para los mocks.
Mantener un diseño limpio y minimalista, siguiendo un flat design system.

# Alcance

Generar una interfaz mock de la aplicación de gestión de biblioteca, incluyendo la gestión de catálogo, préstamos y socios.
Mockearemos las peticiones al backend con un archivo js simple y JSON. Con lo minimo esencial para probar la transicion de estados.
La idea es tener una interfaz limpia con la menor cantidad de elementos posibles, siguiendo un flat design system.

## Secciones

### Catalogo

## Descripción

Una tabla con todos los libros: título, autor, género y estado de disponibilidad (Disponible / En Préstamo / Vencido). Cada fila tiene un dropdown de acción ⋮ con dos opciones: "Ver detalle" (abre un modal con la información completa del libro) y "Eliminar".

### Estados

### Acciones

## Prestamos

Una tabla con los préstamos actuales: nombre del prestatario, título del libro, fecha de préstamo y fecha de devolución. Los préstamos vencidos se destacan con un badge de color. Cada fila tiene un dropdown ⋮ con "Ver detalle" y "Marcar como devuelto".

### Estados

### Acciones

## Socios

Una lista de los socios registrados: nombre, correo electrónico y número de préstamos activos. Cada socio tiene un dropdown ⋮ con "Ver detalle" (abre un modal con el registro completo del socio).

### Estados

### Acciones

## Components

- "DataTable component for displaying tabular data with actions and badges."
- "Dropdown component for displaying a list of actions for each row in the table."
- "Badge component for displaying status indicators such as availability or overdue status." (Disponible / En Préstamo / Vencido)
- "SideBar component for displaying the main navigation with the active view highlighted and the library name at the top."
- "Modal component for displaying detailed information about a book or a member."
- "Search component for filtering the data in the tables based on user input." (Opcional)
- "Pagination component for navigating through large sets of data in the tables."
- "ViewHandler component for managing the active view and updating the sidebar accordingly."
- "Pagination component for navigating through large sets of data in the tables."
- "ViewHandler component for managing the active view and updating the sidebar accordingly."

# Restricciones

# Criterios de Aceptacion
