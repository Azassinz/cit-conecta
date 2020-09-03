---
view: post
layout: post                    # Only in unique we use the "layout: post"
lang: es                        # Lang is required
author: David-López
title: La revolución de NVIDIA
description: Presentación de nuevas tecnologías y GPUs de la serie RTX 30 de NVIDIA
excerpt: Presentación de nuevas tecnologías y GPUs de la serie RTX 30 de NVIDIA
cover: true                    # Leave false if the post does not have cover image, if there is set to true
coverExt: jpg
coverAlt: 
demo:
categories:
  - nvidia
tags: 
  - tecnología
  - videojuegos
created_at: 2020-09-01 14:00
updated_at: 2020-09-01 14:00
meta:                                 # If you have cover image
  - property: og:image
    content: https://lh3.googleusercontent.com/9VOd2sHdCr4pdqt__cAqMJoCaiK80iTzbKbUo2SFndkuUgWhKQZ75MVfbUaJWxcygPpPTQ=s170        # For locale /es/, add  "/images/es/posts/"
  - name: twitter:image
    content: https://lh3.googleusercontent.com/9VOd2sHdCr4pdqt__cAqMJoCaiK80iTzbKbUo2SFndkuUgWhKQZ75MVfbUaJWxcygPpPTQ=s170
---

## Introducción

Luego de la cuenta regresiva de 21 días mostrando 21 años de evolución en el mundo de los videojuegos hasta el día de hoy, 1 de septiembre del 2020, NVIDIA nos presenta el salto generacional más grande grande de la historia. Logrando duplicar el rendimiento de la primera generación de GPUs de la serie RTX, cuando lo usual era tener una mejora aproximadamente del 20% al 30% con respecto a la generación anterior, todo esto en solamente dos años.
En este post, resumiré las novedades presentadas el día de hoy. Siendo cada una de ellas una revolución que impacta de gran manera no solo al mundo de los videojuegos, que es el mercado que más genera dinero en el mundo, si no también al mundo de la creación de contenido.

## RTX y DLSS en los más jugados

Se inicia la presentación presumiendo que el primer videojuego más jugado en el mundo cuenta con NVIDIA RTX (Ray Tracing) y con NVIDIA DLSS (deep learning super sampling), que es Minecraft y ahora se añade Fortnite, videojuego que ofreció un concierto de Travis Scott con 28 millones de personas y el segundo más jugado. Primera noticia de gran impacto, ya no son solo juegos como Control o Battlefield V los que cuentan con está tecnología, ahora se estará masificando esta experiencia en los juegos más relevantes de los últimos años.

<lazy-load tag="img" :data="{ src: 'https://s.zst.com.br/cms-assets/2020/09/fortnite.jpg', alt: 'Fortnite RTX y DLSS' }" />

## NVIDIA REFLEX

Continuamos con la presentación de NVIDIA REFLEX, una tecnología que promete reducir la latencia de milisegundos que se requiere en juegos de la categoría de "e-sports", de los cuales, el 75% de los usuarios que tienen una tarjeta NVIDIA son asiduos.

Nos presentan un ejemplo en el juego VALORANT, donde un personaje que se mueve a 1,500 píxeles por segundo es visible tras la abertura de una puerta por sólo 180 milisegundos. Tomando en cuenta que un gamer común tiene una capacidad de reacción luego de ver la imagen de 150 milisegundos, sólo podría impactar a su oponente si su PC agrega menos de 30 milisegundos de retraso (entre el tiempo que tarda la imagen en llegar al monitor), pero la realidad es que la mayoría de los gamers tienen latencias mayores a los 30 milisegundos, incluso llegando hasta los 100 milisegundos.

<lazy-load tag="img" :data="{ src: 'https://pbs.twimg.com/media/Eg3VxcaU8AAxFiY?format=jpg&name=small', alt: 'VALORANT ejemplo de milisegundos' }" />

NVIDIA con REFLEX optimiza la tubería de renderizado entre el CPU y GPU, reduciendo la latencia hasta en un 50%; prometiendo el lanzamiento este mes de septiembre mediante sus "Game Ready Drivers", añadiendo esta mejora inicialmente a VALORANT, Fortnite, Apex Legends, Call of Duty: War Zone y Destiny 2.

<lazy-load tag="img" :data="{ src: 'https://pbs.twimg.com/media/Eg3V1RCUcAEUKDK?format=jpg&name=small', alt:'rendimiento de NVIDIA REFLEX' }" />

Pero esta noticia no queda aquí, con esto anuncian también nuevos monitores con paneles IPS que integran su tecnología G-SYNC con una frecuencia de refrescamiento de 360 Hz, enfocados al mercado de gamers entusiastas de los "e-sports".

<lazy-load tag="img" :data="{ src: 'https://amanz.my/wp-content/uploads/2020/09/NVIDIA-Esports-Display.png', alt:'nuevos monitores G-SYNC 360Hz' }" />

## NVIDIA BROADCAST

Inmediatamente saltan a mostrar su siguiente tecnología apoyada en algoritmos de inteligencia artificial entrenados por deep learning en su supercomputadora, la NVIDIA DGX, enfocándose en los creadores de contenido. NVIDIA BROADCAST permitirá convertir cualquier habitación en un estudio de transmisión con efectos como supresión de ruido de fondo, algo que ya hemos visto con NVIDIA RTX VOICE, efectos de fondos virtuales sin necesidad de una pantalla verde y encuadre automático de la cámara web, simulando el seguimiento natural que hace un camarógrafo. Todo esto en una sola aplicación disponible para descargar este mes y usarse en la gama de GPUs RTX.

<lazy-load tag="img" :data="{ src: 'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/news/geforce-rtx-30-series/geforce-rtx-30-series-nvidia-broadcast-app.jpg', alt:'tecnologías de NVIDIA BROADCAST' }" />

## NVIDIA OMNIVERSE

Saltamos ahora al mundo de las machinimas, que es la creación de cinemáticas utilizando gráficos en tiempo real de motores gráficos. Nos presentan NVIDIA OMNIVERSE MACHINIMA, una plataforma para manejo de recursos (modelos 3D, texturas, VFX) basada en el fotorrealismo mediante path tracing, esto integrado mediante su plataforma colaborativa Omniverse 3D, compatible con los softwares más relevantes del mercado. Entre sus posibilidades, tenemos animar modelos 3D usando las poses recabadas por una cámara web, animar expresiones faciales utilizando tu voz y físicas realistas en fluidos y partículas, por supuesto, cada una de ellas apoyadas en la inteligencia artificial. Disponible en octubre mediante pre-registro a la beta.

<lazy-load tag="img" :data="{ src: 'https://www.tabletowo.pl/wp-content/uploads/2020/09/nvidia-ampere-13.jpg', alt:'tecnologías de NVIDIA OMNIVERSE' }" />

## Nueva arquitectura Ampere

Con esto dan el salto al anuncio que todos estábamos esperando, su nueva arquitectura Ampere, donde se enfocan en mostrar la mejora que reciben sus módulos de procesamiento de inteligencia artificial llamados Tensor Core, optimizados para las operaciones de álgebra lineal que se utilizan en el procesamiento de redes neuronales profundas, creando posibilidades que como humanos no somos capaces de recrear sin que represente un esfuerzo mayor; como la creación de personajes fotorrealistas, la ya mencionada animación facial mediante audio, locomoción completa de personajes que reaccionan a obstáculos, generación de modelos 3D usando vídeo 2D, simulación de físicas apegadas a la realidad, reducción del ruido generado por el ray tracing y, por supuesto, su reciente implementación del DLSS 2.0, el cual incluso logra superar los detalles del 4K nativo al aplicarse en juegos como Death Stranding e incrementando los cuadros por segundo. Aquí la importancia de implementación de núcleos dedicados al ray tracing y la inteligencia artificial, que reduce considerablemente el tiempo de procesamiento de la arquitectura tradicional a la vez que duplica el rendimiento, así es ampere, la segunda generación de RTX.

<lazy-load tag="img" :data="{ src: 'https://pbs.twimg.com/media/Eg3WLChVgAAO3cY?format=jpg&name=small', alt:'La magia del deep learning' }" />

<lazy-load tag="img" :data="{ src: 'https://www.breakflip.com/uploads/5f4e771bd62e2-nvidia-dlss-4k-fortnite.jpeg', alt:'comparación NVIDIA DLSS' }" />

## NVIDIA RTX IO

Aquí hacen una pausa para mostrar cómo la nueva arquitectura corre el path tracing, para momentos más tarde decir “no es todo” y presentarnos su respuesta al sistema de descompresión que tanto presumió Play Station en su nueva PS5 y que en EPIC Games llegaron a decir que no había nada igual en PC, hasta ahora. Es así como NVIDIA nos muestra cómo cambiará el sistema de descompresión de datos tradicional con la llegada de NVIDIA RTX IO y sus tres mejoras: nuevas APIs para carga y distribución rápida directo del SSD a la memoria de la GPU, descompresión sin pérdida desde la GPU y colaboración con Microsoft DirectStorage para Windows, que agiliza la transferencia de datos desde el almacenamiento a la memoria de la GPU.
Esto nos permitirá cargar los masivos juegos de mundo abierto de manera instantánea y sí, esto estará implementado en Cyberpunk 2077, mismo juego que contará con RTX y DLSS.

<lazy-load tag="img" :data="{ src: 'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/news/rtx-io-gpu-accelerated-storage-technology/geforce-rtx-30-series-rtx-io-announcing-rtx-io.jpg', alt:'NVIDIA RTX IO' }" />

## Serie RTX 30

Justo cuando ya todos habíamos perdido la cabeza, nos muestran la evolución de sus tarjetas gráficas hasta la nueva RTX 3080, confirmando su diseño de PCB reducido en un 50% con respecto al diseño anterior, junto a su revolucionario sistema de enfriamiento independiente que permite un flujo más natural de aire dentro del gabinete; siendo 3 veces más silencioso y con temperaturas 20 grados más frías que el diseño utilizado en Turing, la primera generación de RTX. Esta GPU tendrá un precio de salida de $699 usd., disponible el 17 de septiembre.

<lazy-load tag="img" :data="{ src: 'https://blog.kakaocdn.net/dn/byZTTJ/btqHNxIRMD0/EZgl6h7UH4I8IlQzLTXYS0/img.jpg', alt:'nuevo sistema de enfriamiento en NVIDIA RTX 3000' }" />

La nueva arquitectura nos presenta una GPU a un proceso de fabricación personalizado para NVIDIA de 8 nanómetros por parte de Samsung y, si te preguntabas cómo la descompresión que presentaban era posible, nos muestran su implementación en colaboración con Micron de memoria G6X, la cual pasa de manejar modulación de amplitud de pulso de dos a cuatro niveles de voltaje, codificando dos bits de datos cada uno (00, 01, 10, 11) con saltos de solo 250 milivoltios, soporte de PCIe 4.0 y HDMI 2.1.

<lazy-load tag="img" :data="{ src: 'https://pbs.twimg.com/media/Eg3ZM6mVkAIvKcp?format=jpg&name=4096x4096', alt:'memoria G6X' }" />

Insatisfechos aún por lo previamente mostrado, nos muestran la RTX 3070, la cual presume un rendimiento superior al de la RTX 2080 TI, que fuera la más potente de la primera generación y con un precio menor a la mitad ($499 usd vs $1200 usd), disponible en octubre pero con memoria G6 y presentando así una propuesta más llamativa nosotros los consumidores casuales, porque para el consumidor entusiasta cerraron con la presentación de su nueva “Big Ferocious GPU” (BFGPU) la RTX 3090, capaz de correr juegos a 60 cuadros por segundo en 8K, simplemente impresionante a nivel de detalles y que estará disponible el 24 de septiembre.

<lazy-load tag="img" :data="{ src: 'https://stargamers.com.pe/index/wp-content/uploads/2020/09/geforce-rtx-30-series-1024x576.png', alt:'GPUs serie RTX 30' }" />

## Potencia de las nuevas GPUs

Para los más meticulosos que cayeron en el marketing de los tera-FLOPS (TFLOPS), que no es más que una unidad teórica que mide el rendimiento operaciones de coma flotante por segundo, de la nueva generación de consolas, estos son los números de la nueva serie RTX. La RTX 280 TI que, como mencioné anteriormente, era la más potente de la primera generación, cuenta con 14.2 TFLOPS vs los 20.3 TFLOPS de una RTX 3070 vs 29.7 TFLOPS de la RTX 3080 vs 35.6 TFLOPS de la RTX 3090, pero recuerden, esto es una frecuencia teórica máxima y no deben de compararse GPUs de distintas arquitecturas con estos números.

<lazy-load tag="img" :data="{ src: 'https://pbs.twimg.com/media/Eg3ZSFKU4AEPmIX?format=png&name=900x900', alt:'comparación NVIDIA serie 3000' }" />

## Conclusiones

Finalmente, es así como NVIDIA busca volver al ray tracing el nuevo estándar, masificar su segunda generación de RTX y brindar infinitas posibilidades de jugar y crear contenido. Si llegaste hasta aquí, me gustaría saber tu opinión, qué te sorprendió más y si piensas adquirir una GPU de la serie 30 de NVIDIA.
