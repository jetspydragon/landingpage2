---
project: "survival-cactus"
title: "Fase 2: Motor Isométrico y Movimiento del Personaje"
title_en: "Phase 2: Isometric Engine and Character Movement"
date: "2026-06-12"
summary: "Implementación de la física de movimiento en 8 direcciones y proyección de coordenadas cartesianas a isométricas. Primeros sprites funcionales."
summary_en: "Implementation of 8-way movement physics and Cartesian-to-isometric coordinate projection. First functional sprites."
image: "/images/logo.png"
---

¡El personaje ya se mueve! En esta fase, pasé el diseño del papel al motor de juego.

Los retos superados esta semana:
1.  **Matemática Isométrica:** Configuré la conversión de movimiento en 2D a la perspectiva isométrica. El movimiento se siente fluido y respeta las diagonales.
2.  **Renderizado por capas (Depth Sorting):** Escribí un script sencillo para ordenar dinámicamente los sprites según su posición Y, de modo que el personaje pase correctamente por delante o por detrás de los cactus y rocas del escenario.
3.  **Sprites Básicos:** Importé los primeros sprites animados del protagonista (un colono con traje de protección autónomo) caminando en cuatro direcciones.

---

The character is moving! In this phase, I moved the design from paper to the game engine.

The challenges overcome this week:
1.  **Isometric Math:** Configured the 2D movement conversion to the isometric perspective. Movement feels smooth and aligns with the diagonals.
2.  **Depth Sorting:** Wrote a simple script to dynamically sort sprites based on their Y position, so the character correctly renders in front of or behind stage obstacles (cactus and rocks).
3.  **Basic Sprites:** Imported the first walking animated sprites of the main character (a settler in a protective suit) walking in four directions.
