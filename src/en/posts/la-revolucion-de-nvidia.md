---
view: post
layout: post                    # Only in unique we use the "layout: post"
lang: en                        # Lang is required
author: David-López
title: The NVIDIA Revolution
description: Introducing New Technologies and NVIDIA RTX 30 Series GPUs
excerpt: Introducing New Technologies and NVIDIA RTX 30 Series GPUs
cover: true                    # Leave false if the post does not have cover image, if there is set to true
coverExt: jpg
coverAlt: 
demo:
categories:
  - nvidia
tags: 
  - technology
  - video games
created_at: 2020-09-01 14:00
updated_at: 2020-09-01 14:00
meta:                                 # If you have cover image
  - property: og:image
    content: https://lh3.googleusercontent.com/9VOd2sHdCr4pdqt__cAqMJoCaiK80iTzbKbUo2SFndkuUgWhKQZ75MVfbUaJWxcygPpPTQ=s170        # For locale /es/, add  "/images/es/posts/"
  - name: twitter:image
    content: https://lh3.googleusercontent.com/9VOd2sHdCr4pdqt__cAqMJoCaiK80iTzbKbUo2SFndkuUgWhKQZ75MVfbUaJWxcygPpPTQ=s170
---

## Introduction

After the 21-day countdown showing 21 years of evolution in the world of video games until today, September 1, 2020, NVIDIA presents the largest generational leap in history. Achieving double the performance of the first generation of RTX series GPUs, when the usual thing was to have an improvement of approximately 20% to 30% over the previous generation, all this in only two years.
In this post, I will summarize the news presented today. Each one of them being a revolution that greatly impacts not only the world of video games, which is the market that generates the most money in the world, but also the world of content creation.

## RTX and DLSS in the big ones

The presentation begins presuming that the first most played video game in the world has NVIDIA RTX (Ray Tracing) and NVIDIA DLSS (deep learning super sampling), which is Minecraft and now Fortnite is added, a video game that offered a Travis Scott concert with 28 million people and the second most played. First news of great impact, it is no longer only games like Control or Battlefield V that have this technology, now this experience will be massing in the most relevant games of recent years.

<lazy-load tag="img" :data="{ src: 'https://s.zst.com.br/cms-assets/2020/09/fortnite.jpg', alt: 'Fortnite RTX and DLSS' }" />

## NVIDIA REFLEX

We continue with the presentation of NVIDIA REFLEX, a technology that promises to reduce the latency of milliseconds required in games of the e-sports category, of which 75% of users who have an NVIDIA card are regulars.

We are presented with an example in the game VALORANT, where a character moving at 1,500 pixels per second is visible after opening a door for only 180 milliseconds. Taking into account that a common gamer has a reaction capacity after viewing the image of 150 milliseconds, he could only impact his opponent if his PC adds less than 30 milliseconds of delay (between the time it takes for the image to reach the monitor) , but the reality is that most gamers have latencies greater than 30 milliseconds, even reaching up to 100 milliseconds.

<lazy-load tag="img" :data="{ src: 'https://pbs.twimg.com/media/Eg3VxcaU8AAxFiY?format=jpg&name=small', alt: 'VALORANT millisecond example' }" />

NVIDIA with REFLEX optimizes the rendering pipeline between the CPU and GPU, reducing latency by up to 50%; promising the launch this September through its "Game Ready Drivers", adding this improvement initially to VALORANT, Fortnite, Apex Legends, Call of Duty: War Zone and Destiny 2.

<lazy-load tag="img" :data="{ src: 'https://pbs.twimg.com/media/Eg3V1RCUcAEUKDK?format=jpg&name=small', alt:'NVIDIA REFLEX performance' }" />

But this news does not stop here, with this they also announce new monitors with IPS panels that integrate their G-SYNC technology with a refresh rate of 360 Hz, focused on the market of enthusiastic gamers of e-sports.

<lazy-load tag="img" :data="{ src: 'https://amanz.my/wp-content/uploads/2020/09/NVIDIA-Esports-Display.png', alt:'new G-SYNC monitors at 360Hz' }" />

## NVIDIA BROADCAST

They immediately jump to showcase their next technology supported by deep learning-trained artificial intelligence algorithms on their supercomputer, the NVIDIA DGX, focusing on content creators. NVIDIA BROADCAST will make it possible to turn any room into a broadcast studio with effects such as background noise suppression, something we have already seen with NVIDIA RTX VOICE, virtual background effects without the need for a green screen and automatic webcam framing, simulating the natural tracking that a cameraman does. All this in a single application available for download this month and used on the RTX range of GPUs.

<lazy-load tag="img" :data="{ src: 'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/news/geforce-rtx-30-series/geforce-rtx-30-series-nvidia-broadcast-app.jpg', alt:'NVIDIA BROADCAST technologies' }" />

## NVIDIA OMNIVERSE

We now jump into the world of machinimas, which is the creation of cinematics using real-time graphics from graphics engines. They present us with NVIDIA OMNIVERSE MACHINIMA, a platform for resource management (3D models, textures, VFX) based on photorealism through path tracing, this integrated through their collaborative platform Omniverse 3D, compatible with the most relevant software on the market. Among its possibilities, we have animate 3D models using the poses collected by a webcam, animate facial expressions using your voice and realistic physics in fluids and particles, of course, each of them supported by artificial intelligence. Available in October by pre-registration to the beta.

<lazy-load tag="img" :data="{ src: 'https://www.tabletowo.pl/wp-content/uploads/2020/09/nvidia-ampere-13.jpg', alt:'NVIDIA OMNIVERSE technologies' }" />

## New Ampere architecture

With this, they jump to the announcement that we were all waiting for, their new Ampere architecture, where they focus on showing the improvement received by their artificial intelligence processing modules called Tensor Core, optimized for linear algebra operations used in processing of deep neural networks, creating possibilities that as humans we are not able to recreate without representing a greater effort; such as the creation of photorealistic characters, the aforementioned facial animation through audio, complete locomotion of characters that react to obstacles, generation of 3D models using 2D video, simulation of physics close to reality, reduction of noise generated by ray tracing and, of course, its recent implementation of DLSS 2.0, which even manages to exceed the details of native 4K when applied in games like Death Stranding and increasing the frames per second. Here the importance of implementing cores dedicated to ray tracing and artificial intelligence, which considerably reduces the processing time of traditional architecture while doubling the performance, this is ampere, the second generation of RTX.

<lazy-load tag="img" :data="{ src: 'https://pbs.twimg.com/media/Eg3WLChVgAAO3cY?format=jpg&name=small', alt:'The magic of deep learning' }" />

<lazy-load tag="img" :data="{ src: 'https://www.breakflip.com/uploads/5f4e771bd62e2-nvidia-dlss-4k-fortnite.jpeg', alt:'NVIDIA DLSS comparison' }" />

## NVIDIA RTX IO

Here they pause to show how the new architecture runs the path tracing, for moments later to say "not everything" and present their response to the decompression system that Play Station boasted so much in its new PS5 and that in EPIC Games they came to say that there was nothing like it on PC, until now. This is how NVIDIA shows us how the traditional data decompression system will change with the arrival of NVIDIA RTX IO and its three improvements: new APIs for fast loading and direct distribution from the SSD to the GPU memory, lossless decompression from the GPU and collaboration with Microsoft DirectStorage for Windows, which streamlines the transfer of data from storage to GPU memory.
This will allow us to load the massive open world games instantly and yes, this will be implemented in Cyberpunk 2077, the same game that will feature RTX and DLSS.

<lazy-load tag="img" :data="{ src: 'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/news/rtx-io-gpu-accelerated-storage-technology/geforce-rtx-30-series-rtx-io-announcing-rtx-io.jpg', alt:'NVIDIA RTX IO' }" />

## RTX 30 Series

Just when we had all lost our minds, they show us the evolution of their graphics cards to the new RTX 3080, confirming its PCB design reduced by 50% compared to the previous design, together with its revolutionary independent cooling system that allows a more natural flow of air within the cabinet; being 3 times quieter and with temperatures 20 degrees cooler than the design used in Turing, the first generation of RTX. This GPU will have a starting price of $ 699 usd., Available on September 17.

<lazy-load tag="img" :data="{ src: 'https://blog.kakaocdn.net/dn/byZTTJ/btqHNxIRMD0/EZgl6h7UH4I8IlQzLTXYS0/img.jpg', alt:'new cooling system on NVIDIA RTX 3000' }" />

The new architecture presents a GPU to a custom manufacturing process for NVIDIA of 8 nanometers by Samsung and, if you were wondering how the decompression they presented was possible, they show us its implementation in collaboration with Micron of G6X memory, which happens to handle pulse width modulation of two to four voltage levels, encoding two data bits each (00, 01, 10, 11) with jumps of only 250 millivolts, support of PCIe 4.0 and HDMI 2.1.

<lazy-load tag="img" :data="{ src: 'https://pbs.twimg.com/media/Eg3ZM6mVkAIvKcp?format=jpg&name=4096x4096', alt:'G6X memory' }" />

Still dissatisfied with what was previously shown, they show us the RTX 3070, which boasts a higher performance than the RTX 2080 TI, which was the most powerful of the first generation and with a price less than half ($ 499 usd vs $ 1200 usd) , available in October but with G6 memory and thus presenting a more striking proposal to us casual consumers, because for the enthusiastic consumer they closed with the presentation of their new “Big Ferocious GPU” (BFGPU) the RTX 3090, capable of running games at 60 frames per second in 8K, simply impressive in terms of detail and that will be available on September 24.

<lazy-load tag="img" :data="{ src: 'https://stargamers.com.pe/index/wp-content/uploads/2020/09/geforce-rtx-30-series-1024x576.png', alt:'GPUs RTX 30 series' }" />

## Power of the new GPUs

For those more meticulous who fell into the marketing of tera-FLOPS (TFLOPS), which is nothing more than a theoretical unit that measures the performance of floating point operations per second, of the new generation of consoles, these are the numbers of the new RTX series. The RTX 280 TI which, as I mentioned earlier, was the most powerful of the first generation, has 14.2 TFLOPS vs. 20.3 TFLOPS of an RTX 3070 vs. 29.7 TFLOPS of the RTX 3080 vs. 35.6 TFLOPS of the RTX 3090, but remember, this It is a theoretical maximum frequency and GPUs of different architectures should not be compared with these numbers.

<lazy-load tag="img" :data="{ src: 'https://pbs.twimg.com/media/Eg3ZSFKU4AEPmIX?format=png&name=900x900', alt:'NVIDIA 3000 series comparison' }" />

## Conclusions

Finally, this is how NVIDIA seeks to return to ray tracing the new standard, massify its second generation of RTX and offer infinite possibilities to play and create content. If you made it this far, I would like to know your opinion, what surprised you the most and if you plan to purchase an NVIDIA 30 series GPU.

> Article translated into English using Google Translate.