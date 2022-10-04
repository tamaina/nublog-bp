# NuBlog Boilerplate v4
Build Git-based ~~static~~ blog with Nuxt 3!

Based on [Nuxt Content (document driven)](https://content.nuxtjs.org/) and [Nuxt Image](https://v1.image.nuxtjs.org/)

## Installation
1. Install Node.js
2. Fork this repository
3. `npm install`

## Edit content
You should put Markdowns and images under `docs/` directory.  
`content` directory is generated automatically as intermediate files.

This boilerplate sets `docs` directory to the [public directory](https://v3.nuxtjs.org/guide/directory-structure/public/).  
So static files like `robots.txt` and `favicon.ico` should be placed under `docs` directory.

## ~~Publish~~
~~I recommend to use the static site hosting service like Netlify or Cloudflare Pages.~~

~~Build Command: `npm run generate`~~ 　
~~Public Path: `.output/public`~~

The static site currently do not work because Nuxt Image does not yet support `nuxt generate`.  
https://v1.image.nuxtjs.org/advanced/static-images

## Server
1. `npm run build` to build
2. `PORT=3000 node .output/server/index.mjs` to run server

## Development and Preview
Development: `npm run dev`  
Static Site Preview: `npm run generate && npm run preview`  
Server Preview: `npm run build && npm run preview`
