# Taller 1 · Estructuras de Control y Lógica en JS/jQuery

Proyecto de ejemplo desarrollado como parte del **Taller Práctico 1**, cuyo objetivo es aplicar lógica de programación (condicionales, ciclos y funciones) en JavaScript/jQuery para dotar de interactividad básica a una interfaz web.

## Objetivo

Capturar eventos de usuario (clic, cambio de foco, scroll) y usar estructuras de control para modificar elementos visuales dinámicamente según la interacción realizada.

## Funcionalidades

El proyecto está dividido en 4 secciones, cada una demostrando un concepto distinto:

| # | Sección | Evento capturado | Concepto demostrado |
|---|---------|-------------------|----------------------|
| 1 | **Contador con condicionales** | `click` en los botones `+1` / `-1` | `if / else if / else` para decidir el estilo y mensaje según el valor del contador |
| 2 | **Validación con eventos de foco** | `focus` y `blur` en el campo de texto | Condicionales para validar la longitud del nombre ingresado |
| 3 | **Catálogo dinámico** | Se ejecuta al cargar la página | Ciclo `for` + función reutilizable (`renderProductos()`) que recorre un arreglo y genera las tarjetas de productos |
| 4 | **Navbar y botón flotante** | `scroll` en la ventana | Condicionales que cambian el estilo del encabezado y muestran/ocultan un botón "volver arriba" según la posición del scroll |

## Estructura del proyecto

```
ejemplo_jquery-PW/
├── index.html   # Estructura de la interfaz
├── style.css    # Estilos visuales, incluidas las clases que activa el JS
└── script.js    # Lógica: eventos, condicionales, ciclos y funciones
```

## Tecnologías utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (ES6)**
- **jQuery 3.7.1** (vía CDN)

## Cómo ejecutar el proyecto

No requiere instalación ni servidor:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/oamores28595/ejemplo_jquery-PW.git
   ```
2. Entra a la carpeta del proyecto:
   ```bash
   cd ejemplo_jquery-PW
   ```
3. Abre `index.html` directamente en tu navegador (doble clic o "Abrir con..." desde el explorador de archivos).

## Qué probar

- Haz clic varias veces en `+1` / `-1` y observa cómo cambia el color y el mensaje de estado.
- Escribe en el campo "Nombre de usuario" y saca el foco (clic fuera del campo) para ver la validación.
- Observa cómo se genera automáticamente la lista de productos al cargar la página.
- Baja el scroll de la página para ver el navbar oscurecerse y el botón "↑" aparecer en la esquina inferior.

## Autor

**oamores28595**

## Licencia

Proyecto de uso académico, creado con fines educativos para el taller de Estructuras de Control y Lógica en JS/jQuery.
