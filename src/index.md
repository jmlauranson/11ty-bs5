---
meta:
  lang: en
  title: "Digital solutions to solve problems"
  image: "/content/images/hero-img.png"
  description: Template for static site generator Eleventy with Boostrap 5 and SCSS/JS compilation via laravel-mix.
layout: base
title: "Digital solutions to solve problems"
image: "/content/images/avatar.png"
eleventyNavigation:
  key: Home
  order: 1
heroDescription: "I'm Jean-Marie, an IT consultant based in Vienna, Austria."
callToButton: "LinkedIn"
callToButton2: "Contact Me"
callToUrl: "https://linkedin.com/jmlauranson"

serviceTitle1: Technology Consulting
serviceDescription1: Audit, Identification of your needs, time and budget
serviceTitle2: Solution Development
serviceDescription2: Integrating the most efficient solution
serviceTitle3: Training and support
serviceDescription3: Assisting you and solving issues in timely manners
---

{% include "templates/partials/services.njk" %}

{% include "templates/partials/projects.njk" %}

{% include "templates/partials/contact.njk" %}

{% image "./src/content/images/bergsee.jpeg", "View from top of a mountain onto a sea and another mountain in austria." %}

<!-- for debug: {{ site | dump }} {{page | dump }} {{meta | dump}} -->
