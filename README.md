# 🐉 DnDBestiary
 
> Bestiario web hecho para mi DM de confianza. Una entrada visual para consultar de un vistazo toda la información de las **bestias** y los **lugares** del mundo de la campaña.
 
![Estado](https://img.shields.io/badge/estado-en%20desarrollo-orange)
![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=white)
 
---
 
## 📖 Sobre el proyecto
 
Cuando se dirige una partida de Dungeons & Dragons, tener a mano la información de criaturas y localizaciones marca la diferencia. **DnDBestiary** nace para eso: una web sencilla y visual donde el DM puede consultar rápidamente cada elemento de su mundo sin tener que rebuscar entre apuntes.
 
El contenido se organiza en dos grandes categorías:
 
- 🐺 **Bestias**: criaturas y monstruos del mundo.
- 🏰 **Lugares**: localizaciones, ciudades, mazmorras y puntos de interés.
> ⚠️ **Proyecto en fase temprana.** Las funcionalidades listadas abajo irán creciendo con el tiempo (consulta el [Roadmap](#-roadmap)).
 
## ✨ Características
 
- Listado visual de todos los elementos del bestiario.
- Datos cargados dinámicamente desde un archivo `data.json`, por lo que añadir contenido no requiere tocar el código.
- Interfaz responsive apoyada en Bootstrap.
- Sin dependencias de instalación ni *build*: es HTML, CSS y JavaScript puro.
## 🛠️ Tecnologías
 
| Tecnología | Uso |
| --- | --- |
| HTML5 | Estructura de la página |
| CSS3 | Estilos propios (`style.css`) |
| JavaScript (vanilla) | Lógica y renderizado de la lista (`app.js`) |
| Bootstrap | Maquetación y componentes (vía CDN) |
| JSON | Almacén de datos de bestias y lugares (`data.json`) |
 
## 📁 Estructura del proyecto
 
```
DnDBestiary/
├── src/
│   └── img/          # Imágenes de bestias y lugares
├── app.js            # Lógica de la aplicación
├── data.json         # Datos del bestiario
├── index.html        # Página principal
├── style.css         # Estilos
└── README.md
```
 
## 🚀 Puesta en marcha
 
No hace falta instalar nada. Solo necesitas un navegador moderno.
 
1. **Clona el repositorio**
```bash
git clone https://github.com/2DAW-ccaraba2502/DnDBestiary.git
cd DnDBestiary
```
 
2. **Sírvelo en local.** Como la web lee `data.json` con `fetch`, los navegadores bloquean la carga si abres `index.html` directamente con doble clic (`file://`). Usa un servidor local sencillo:
```bash
# Con Python
python -m http.server 8000
 
# O con Node
npx serve
```
 
   También sirve la extensión **Live Server** de VS Code.
 
3. **Abre** `http://localhost:8000` en el navegador.
## ➕ Cómo añadir bestias y lugares
 
Todo el contenido vive en `data.json`. Para añadir un elemento nuevo:
 
1. Guarda su imagen en `src/img/`.
2. Añade una nueva entrada en `data.json`.
3. Recarga la página.
<!-- TODO: ajustar este ejemplo a la estructura real de data.json -->
Ejemplo orientativo de una entrada:
 
```json
{
  "nombre": "Lobo Huargo",
  "tipo": "bestia",
  "descripcion": "Lobo gigante de pelaje oscuro que acecha en los bosques del norte.",
  "imagen": "src/img/lobo-huargo.png"
}
```
 
## 🗺️ Roadmap
 
- [x] Estructura base y carga de datos desde JSON
- [x] Listado visual de elementos
- [ ] Separar vistas de **Bestias** y **Lugares**
- [ ] Ficha detallada de cada elemento (estadísticas, CR, descripción, lore)
- [ ] Buscador y filtros (por tipo, entorno, desafío...)
- [ ] Relacionar bestias con los lugares donde habitan
- [ ] Modo oscuro
- [ ] Panel para añadir y editar contenido desde la propia web
- [ ] Despliegue en GitHub Pages
## 🤝 Contribuir
 
Es un proyecto personal, pero las ideas son bienvenidas. Si tienes una sugerencia, abre un *issue* o propón un *pull request*.
 
## 📜 Licencia
 
Pendiente de definir.
 
## ✍️ Autor
 
Hecho con cariño para una buena mesa de rol por [@2DAW-ccaraba2502](https://github.com/2DAW-ccaraba2502).
 
