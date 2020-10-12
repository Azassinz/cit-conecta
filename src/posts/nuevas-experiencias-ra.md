---
view: post
layout: post                    # Only in unique we use the "layout: post"
lang: es                        # Lang is required
author: David-López
title: Nuevas experiencias en la Realidad Aumentada
description: Hablamos sobre las anclas en la nube persistentes de ARCore
excerpt: Anclas en la nube persistentes de ARCore para crear nuevas experiencias
cover: true                    # Leave false if the post does not have cover image, if there is set to true
coverExt: jpg
coverAlt: 
demo:
categories:
  - realidad-aumentada
tags: 
  - tecnología
  - arcore
created_at: 2020-10-11 20:00
updated_at: 2020-10-11 20:00
meta:                                 # If you have cover image
  - property: og:image
    content: https://www.planetegeek.fr/wp-content/uploads/PLANETE_GEEK/Actualites/LES_SOFTS/Google-Arcore-planetegeek.fr_.png        # For locale /es/, add  "/images/es/posts/"
  - name: twitter:image
    content: https://www.planetegeek.fr/wp-content/uploads/PLANETE_GEEK/Actualites/LES_SOFTS/Google-Arcore-planetegeek.fr_.png
---

## Introducción

Ha pasado un largo tiempo ya desde que Google nos presentó las anclas en la nube con ARCore, su SDK de realidad aumentada (RA) capaz de correr tanto en Android como en iOS. Luego de una fase prueba que comenzó el año anterior, por fin nos presentan la evolución de esta tecnología, las anclas en la nube persistentes (Persistent Cloud Anchors).

## ¿Qué son las anclas en la nube?

Pero, ¿Qué son las anclas en la nube? En experiencias de RA, pudiera parecer que los objetos virtuales se alejan de donde fueron colocados, rompiendo el realismo de la experiencia. Los anclajes aseguran que los objetos parezcan permanecer en la misma posición y orientación en el espacio, ayudándole a mantener la ilusión de objetos virtuales colocados en el mundo real.

<lazy-load tag="img" :data="{ src: 'https://developers.google.com/ar/images/hello-ar.png', alt:'Ejemplo de anclajes' }" />

Cada ancla se crea al tomar una pose basada en una posición y orientación relativa al entorno en que se crea, haciendo referencia a uno o más objetos. Consecuentemente, dicha ancla actualiza la pose de dichos objetos en relación a su posición en cada fotograma. Ahora, la magia viene cuando ARCore se conecta al servicio en la nube para alojar y obtener las anclas, permitiendo así crear experiencias colaborativas utilizando una conexión a internet.


## Anclas en la nube persistentes

En versiones anteriores de ARCore, estas anclas en la nube sólo podían ser obtenidas durante las siguientes 24 horas luego de ser creadas, limitando las experiencias. De la versión 1.20 en adelante, podrán ser obtenidas por 365 días después de su creación. Esta nueva actualización nos aumenta las posibilidades que nos ofrecen las experiencias de RA, conectando ubicaciones del mundo real con contenido digital accesible por cualquier persona con dispositivos compatibles.

<lazy-load tag="img" :data="{ src: 'https://developers.google.com/ar/develop/images/cloud-anchor-exchange.png', alt:'Anclajes en la nube' }" />

## Conclusiones

Ya hay experiencias que aprovechan esta tecnología, desde aplicaciones que ayudan a los pasajeros a encontrar su camino hacia la estación central de Estocolmo, aplicaciones guía en zonas históricas y culturales, hasta dejar mensajes en ubicaciones reales para que amigos, familia o la comunidad los descubra.

<lazy-load tag="img" :data="{ src: 'https://www.lighthome.in/wp-content/uploads/2020/10/1602092896_Google-Cloud-Anchor-brings-consistent-AR-experience-to-real-world-locations-1024x576.jpg', alt:'Guía mediante realidad aumentada' }" />

Sin duda cada vez es más habitual convivir en nuestro día a día con experiencias de RA. ¿Qué experiencias te gustaría ver implementadas con RA?