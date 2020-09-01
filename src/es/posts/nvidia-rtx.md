---
view: post
layout: post                    # Only in unique we use the "layout: post"
lang: es                        # Lang is required
author: David-López
title: Ray Tracing en los videojuegos
description: Introducción al trazado de rayos en los vidoejuegos
excerpt:
cover: true                    # Leave false if the post does not have cover image, if there is set to true
coverExt: jpg
coverAlt: 
demo:
categories:
  - nvidia
tags: 
  - tecnología
  - videojuegos
  - algoritmos
created_at: 2020-08-31 18:00
updated_at: 2020-08-31 18:00
meta:                                 # If you have cover image
  - property: og:image
    content: https://www.awn.com/sites/default/files/styles/large_featured/public/image/featured/1047673-nvidias-new-rtx-real-time-ray-tracing-technology-really-game-changer.jpg?itok=2OoUXg2Y         # For locale /es/, add  "/images/es/posts/"
  - name: twitter:image
    content: https://www.awn.com/sites/default/files/styles/large_featured/public/image/featured/1047673-nvidias-new-rtx-real-time-ray-tracing-technology-really-game-changer.jpg?itok=2OoUXg2Y
---

## Introducción

Hoy hablaremos del ray tracing o trazado de rayos, algoritmo que no es para nada nuevo pero que ahora podemos disfrutarlo gracias a la reciente inclusión de hardware dedicado en las GPUs de Nvidia de la serie RTX lanzada hace ya dos años, lo que impulsó su uso en los videojuegos. En esta publicación conoceremos cómo funciona y sus ventajas frente a otras técnicas.

## Importancia

Cada vez son más los que utilizan esta técnica sobre las "tradicionales", brindando el mayor realismo posible ya que el algoritmo corre en tiempo real simulando el comportamiento real de la luz con todo lo que conlleva, como los rebotes según el material, su cambio de color y sus sombras generadas. El desarrollador tiene que implementar dicho algoritmo en su juego, pero del otro lado se ahorra el trabajo de realizar implementaciones que pueden requerir más trabajo como son las técnicas "tradicionales", ya que estas requieren de un proceso que podríamos llamar artesanal.

<lazy-load tag="img" :data="{ src: 'https://www.pchardwarepro.com/wp-content/uploads/2019/03/ray_tracing.jpg', alt: 'Comparación de técnica tradicional vs Ray Tracing' }" />

## Técnicas tradicionales

La diferencia es que los modelos tradicionales utilizan técnicas muy distintas para calcular la iluminación, pero solo la que reciben los objetos de manera directa, es decir, recrea los reflejos y las sombras con técnicas como el __*shadow mapping*__, que compara la vista del jugador con la perspectiva de la luz del objeto 3D y mediante dichas diferencias decide que parte del objeto se ilumina y cual llevará una sombra. Sin embargo, esto no es perfectamente realista, aunque es un buen acercamiento.

<lazy-load tag="img" :data="{ src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_ksO713aoRIX0Y5h3ys1c9OcZ2C2xt18PPxOpcv-RJQ&usqp=CAU&ec=45695923', alt: 'Demostración del shadow mapping' }" />

También se pueden utilizar __*light maps*__ que es similar a una textura aplicada al objeto 3D dedicada únicamente en mostrar sus luces y sombras, ahorrándose el costo computacional de calcular la interacción de la luz, así que esto se aplica a zonas del juego que no cambian.

La forma más realista de simular los reflejos es mediante la técnica __*screen space reflection*__, que utiliza una o más perspectivas extras del juego ya renderizadas para repetirlas donde se estima que la superficie debería estar reflejándose, pero es sencillo detectar sus fallas ya que solo funciona con objetos que se están viendo en pantalla, aunque en ocasiones se utiliza una segunda cámara para utilizar esta técnica.

<lazy-load tag="img" :data="{ src: 'https://docs.godotengine.org/ko/stable/_images/environment_ssr.png', alt: 'Demostración del funcionamiento de la técnica screen space reflection' }" />


Otra de las técnicas para reflejos pero que carece de realismo son los __*skybox*__, que es una imagen que contiene las 6 caras de un cubo que se utilizan también para repeesentar el cielo.
Todo esto representa limitaciones para los desarrolladores, por lo que es común combinar estás técnicas y muchísimas más que no mencionamos para rozar el realismo.

<lazy-load tag="img" :data="{ src: 'https://opengameart.org/sites/default/files/Daylight%20Box%20UV.png', alt: 'Ejemplo de skybox' }" />

 
## Funcionamiento

En los videojuegos tenemos un cámara principal que nos permite observar una escena, de dicha cámara se lanza un rayo por cada pixel, el cual impactará con la primera superficie visible, en el impacto buscaremos todas las zonas de donde se recibe luz. Esto genera dos tipos de luz, primero la iluminación directa, que proviene de fuentes de luz como un foco o el sol, luego la iluminación indirecta, que viene de objetos que reflejan la luz, como espejos o superficies brillantes. Esto simula el comportamiento de los rayos de luz, siendo mejor que las técnicas antes mencionadas, pero es bastante lento ya que se tiene que tomar en cuenta la interacción de todos los objetos o mejor dicho modelos 3D.

<lazy-load tag="img" :data="{ src: 'https://sites.google.com/site/btxprojectcomputergraphics/_/rsrc/1432229102868/ray-tracing/Ray_trace_diagram.png?height=279&width=400', alt: 'Demostración del funcionamiento del ray tracing' }" />

## La implementación de Nvidia

Debido al costo computacional de los cálculos que requiere el algoritmo Nvidia lo que hizo fue desarrollar la __*tree traversal unit*__ luego llamados __*RT Cores*__, que recorren el árbol (estructura de datos) de objetos del mundo de manera más eficiente que el recorrido tradicional, a este árbol se le conoce como __*bounding volume hierarchy*__. Estos núcleos se dedican únicamente a realizar estos recorridos y a realizar los cálculos del algoritmo ray tracing en tiempo real y en paralelo al resto de cálculos de la GPU.
Las tarjeta gráficas de Nvidia que cuentan con esta tecnología son las pertenecientes a la arquitectura Turing etiquetadas mediante la serie RTX.

<lazy-load tag="img" :data="{ src: 'https://i.imgur.com/kf6noSM.jpg', alt: 'Arquitectura Turing' }" />

## Aplicación en los videojuegos

Aunque el acercamiento de Nvidia es muy bueno, sigue siendo algo complicado de calcular, por lo que la mayoría de juegos que lo implementan no lo hacen del todo, algunos solo calculan las sombras, otros los reflejos sobre las superficies, otros se van por la oclusión ambiental y la iluminación global.
En la siguiente imagen podrás observar las distintas técnicas que se utilizan en algunos juegos, la cual se ha ido incrementando con el tiempo y se espera que crezca considerablemente con la llegada de la siguiente generación de consolas, que también contará con hardware dedicado para correr su versión del ray tracing.

<lazy-load tag="img" :data="{ src: 'https://cdn.wccftech.com/wp-content/uploads/2019/04/NVIDIA-GeForce-RTX-Update-GeForce-GTX-RTX-Driver_1-1.png', alt: 'Técnicas de ray tracing' }" />

## Conclusiones

El ray tracing es un algoritmo que simula de manera realista el comportamiento de la luz, el cual ya era utilizado en los videojuegos, pero no en tiempo real hasta la llegada de la serie RTX de Nvidia de la mano de sus *RT Cores*, brindando así una mejor experiencia de juego llena de inmersión que nos acerca al realismo.
En futuras publicaciones veremos a fondo el funcionamiento de los __*RT Cores*__ así como otras de las tecnologías impulsadas por Nvidia.