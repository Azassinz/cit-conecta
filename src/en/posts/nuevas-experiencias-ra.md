---
view: post
layout: post                    # Only in unique we use the "layout: post"
lang: en                        # Lang is required
author: David-López
title: New experiences in Augmented Reality
description: We talk about ARCore's persistent cloud anchors
excerpt: ARCore persistent cloud anchors for creating new experiences
cover: true                    # Leave false if the post does not have cover image, if there is set to true
coverExt: jpg
coverAlt: 
demo:
categories:
  - augmented-reality
tags: 
  - technology
  - arcore
created_at: 2020-10-11 20:00
updated_at: 2020-10-11 20:00
meta:                                 # If you have cover image
  - property: og:image
    content: https://lh3.googleusercontent.com/Qx9kioS1WjPLxIr6TFDrzbFnDl2h-o1uyRb5G-ZZ1aAr4g-Q9hNBvqDIPUsIyeg9P6-a=s159        # For locale /es/, add  "/images/es/posts/"
  - name: twitter:image
    content: https://lh3.googleusercontent.com/Qx9kioS1WjPLxIr6TFDrzbFnDl2h-o1uyRb5G-ZZ1aAr4g-Q9hNBvqDIPUsIyeg9P6-a=s159
---

## Introduction

It's been a long time since Google introduced us to anchors in the cloud with ARCore, its augmented reality (AR) SDK capable of running on both Android and iOS. After a test phase that began the previous year, we are finally presented with the evolution of this technology, the persistent cloud anchors.

## What are cloud anchors?

But what are cloud anchors? In AR experiences, virtual objects may seem to move away from where they were placed, breaking the realism of the experience. Anchors ensure that objects appear to stay in the same position and orientation in space, helping you maintain the illusion of virtual objects placed in the real world.

<lazy-load tag="img" :data="{ src: 'https://developers.google.com/ar/images/hello-ar.png', alt:'Ejemplo de anclajes' }" />

Each anchor is created by striking a pose based on a position and orientation relative to the environment in which it is created, referencing one or more objects. Consequently, said anchor updates the pose of said objects in relation to their position in each frame. Now, the magic comes when ARCore connects to the cloud service to host and resolve the anchors, thus allowing to create collaborative experiences using an internet connection.

## Persistent cloud anchors

In previous versions of ARCore, cloud anchors could only be resolved during the next 24 hours after being created, limiting the experiences. From version 1.20 onwards, they can be resolved for 365 days after their creation. This new update increases the possibilities offered by AR experiences, connecting real-world locations with digital content accessible by anyone with compatible devices.

<lazy-load tag="img" :data="{ src: 'https://developers.google.com/ar/develop/images/cloud-anchor-exchange.png', alt:'Anclajes en la nube' }" />

## Conclusions

There are already experiences that take advantage of this technology, from apps that help passengers find their way to Stockholm Central Station, guide apps in historical and cultural areas, to leaving messages in real locations for friends, family or the community to discover.

<lazy-load tag="img" :data="{ src: 'https://www.lighthome.in/wp-content/uploads/2020/10/1602092896_Google-Cloud-Anchor-brings-consistent-AR-experience-to-real-world-locations-1024x576.jpg', alt:'Guía mediante realidad aumentada' }" />

Without a doubt, it is increasingly common to live with AR experiences in our day-to-day lives. What experiences would you like to see implemented with AR?

> Article translated into English using Google Translate.