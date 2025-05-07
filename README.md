# 🔍 Superhero Search App

Una aplicación web que permite buscar héroes de Marvel o DC mediante una barra de búsqueda. Al encontrar un héroe, se muestra una carta con información relevante utilizando **Web Components**, HTML, CSS y JavaScript puro.

## ✨ Características

- Búsqueda en tiempo real por nombre del héroe.
- Uso de **Web Components** para encapsular la tarjeta de información.
- Datos mostrados:
  - Nombre real
  - Nombre clave (alias)
  - Casa editorial (Marvel o DC)
  - Año de aparición
  - Descripción corta
  - Descripción completa(ver mas)

## 📦 Tecnologías usadas

- HTML5
- CSS
- JavaScript (Vanilla)
- Web Components (Custom Elements, Shadow DOM)

## 📁 Estructura del proyecto

superhero-search/
│
├── index.html
├── style.css
├── main.js
├── data/
│ └── heroes.js # Contiene la base de datos local de héroes
└── components/
└── hero-card.js # Web Component de la tarjeta del héroe


## 🧠 Cómo funciona

1. El usuario escribe el nombre de un héroe en la barra de búsqueda.
2. Se filtra el héroe desde un archivo de datos (`heroes.js`).
3. Si se encuentra, se crea un componente `<hero-card>` con su información.
4. El componente se inserta dinámicamente en el DOM.
5. Al darle en el boton ver mas se desplega una ventana con informacion mas detallada

## 🚀 Cómo usar

1. Clona el repositorio:
   