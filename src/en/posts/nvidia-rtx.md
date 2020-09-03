---
view: post
layout: post                    # Only in unique we use the "layout: post"
lang: en                     # Lang is required
author: David-López
title: Ray Tracing in video games
description: Introduction to ray tracing in video games
excerpt:
cover: true                    # Leave false if the post does not have cover image, if there is set to true
coverExt: jpg
coverAlt: 
demo:
categories:
  - nvidia
tags: 
  - technology
  - video games
  - algorithms
created_at: 2020-08-31 18:00
updated_at: 2020-08-31 18:00
meta:                                 # If you have cover image
  - property: og:image
    content: https://www.awn.com/sites/default/files/styles/large_featured/public/image/featured/1047673-nvidias-new-rtx-real-time-ray-tracing-technology-really-game-changer.jpg?itok=2OoUXg2Y         # For locale /es/, add  "/images/es/posts/"
  - name: twitter:image
    content: https://www.awn.com/sites/default/files/styles/large_featured/public/image/featured/1047673-nvidias-new-rtx-real-time-ray-tracing-technology-really-game-changer.jpg?itok=2OoUXg2Y
---

## Introduction

Today we will talk about ray tracing, an algorithm that is not new at all but we can now enjoy it thanks to the recent inclusion of dedicated hardware in Nvidia's RTX series GPUs launched two years ago, which prompted its use. in video games. In this publication we will know how it works and its advantages over other techniques.

## Importance

More and more people use this technique over the "traditional" ones, providing the greatest possible realism since the algorithm runs in real time simulating the real behavior of light with all that it entails, such as rebounds depending on the material, its change color and its generated shadows. The developer has to implement this algorithm in his game, but on the other hand he saves the work of making implementations that may require more work, such as "traditional" techniques, since these require a process that we could call artisanal.

<lazy-load tag="img" :data="{ src: 'https://www.pchardwarepro.com/wp-content/uploads/2019/03/ray_tracing.jpg', alt: 'Ray Tracing vs traditional techniques' }" />

## Traditional techniques

The difference is that traditional models use very different techniques to calculate lighting, but only what the objects receive directly, that is, it recreates reflections and shadows with techniques such as __*shadow mapping*__, which compares the player's view with the light perspective of the 3D object and through these differences decides which part of the object is illuminated and which will carry a shadow. However, this is not perfectly realistic, although it is a good approach.

<lazy-load tag="img" :data="{ src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_ksO713aoRIX0Y5h3ys1c9OcZ2C2xt18PPxOpcv-RJQ&usqp=CAU&ec=45695923', alt: 'Shadow mapping demonstration' }" />

They can also be used __*light maps*__ which is similar to a texture applied to the 3D object dedicated only to showing its lights and shadows, saving the computational cost of calculating the interaction of light, so this applies to areas of the game that do not change.

The most realistic way to simulate reflections is using the technique __*screen space reflection*__, that uses one or more extra perspectives of the game already rendered to repeat them where it is estimated that the surface should be reflecting, but it is easy to detect its flaws since it only works with objects that are being seen on the screen, although sometimes a second camera is used to use this technique.

<lazy-load tag="img" :data="{ src: 'https://docs.godotengine.org/ko/stable/_images/environment_ssr.png', alt: 'Demonstration of the operation of the screen space reflection technique' }" />


Another of the techniques for reflections but which lacks realism are the __*skybox*__, which is an image that contains the 6 faces of a cube that are also used to represent the sky.
All this represents limitations for developers, so it is common to combine these techniques and many more that we did not mention to border on realism.

<lazy-load tag="img" :data="{ src: 'https://opengameart.org/sites/default/files/Daylight%20Box%20UV.png', alt: 'Skybox example' }" />

 
## Behaviour

In video games we have a main camera that allows us to observe a scene, from this camera a ray is launched for each pixel, which will hit the first visible surface, on impact we will look for all the areas where light is received. This generates two types of light, first direct illumination, which comes from light sources such as a spotlight or the sun, then indirect illumination, which comes from objects that reflect light, such as mirrors or shiny surfaces. This simulates the behavior of light rays, being better than the aforementioned techniques, but it is quite slow since the interaction of all objects or rather 3D models has to be taken into account.

<lazy-load tag="img" :data="{ src: 'https://sites.google.com/site/btxprojectcomputergraphics/_/rsrc/1432229102868/ray-tracing/Ray_trace_diagram.png?height=279&width=400', alt: 'Demonstration of ray tracing operation' }" />

## The Nvidia implementation

Due to the computational cost of the calculations required by the Nvidia algorithm, what it did was develop the __*tree traversal unit*__ then called __*RT Cores*__, which traverse the tree (data structure) of objects in the world more efficient than traditional traversal, this tree is known as __*bounding volume hierarchy*__. These cores are dedicated solely to performing these tours and performing the ray tracing algorithm calculations in real time and in parallel to the rest of the GPU calculations.
The Nvidia graphics cards that have this technology are those belonging to the Turing architecture labeled by the RTX series.

<lazy-load tag="img" :data="{ src: 'https://i.imgur.com/kf6noSM.jpg', alt: 'Turing architecture' }" />

## Application in video games

Although the Nvidia approach is very good, it is still somewhat complicated to calculate, so most games that implement it do not do it at all, some only calculate the shadows, others the reflections on the surfaces, others go by the way. ambient occlusion and global illumination.
In the following image you can see the different techniques used in some games, which has been increasing over time and is expected to grow considerably with the arrival of the next generation of consoles, which will also have dedicated hardware to run its ray tracing version.

<lazy-load tag="img" :data="{ src: 'https://cdn.wccftech.com/wp-content/uploads/2019/04/NVIDIA-GeForce-RTX-Update-GeForce-GTX-RTX-Driver_1-1.png', alt: 'Ray tracing techniques' }" />

## Conclusions

Ray tracing is an algorithm that realistically simulates the behavior of light, which was already used in video games, but not in real time until the arrival of Nvidia's RTX series by the hand of their * RT Cores *, thus providing a better gaming experience full of immersion that brings us closer to realism.
In future publications we will see in depth the operation of the __*RT Cores*__ as well as other technologies powered by Nvidia.

> Article translated into English using Google Translate.