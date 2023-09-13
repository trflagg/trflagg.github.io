---
title: "Deploy Next.js on Google Cloud Run"
author: "Taylor Flagg"
category: "Infrastructure"
date: "Wed Feb 22 14:44:56 CST 2023"
excerpt: "Learn how to build & deploy to Google Cloud Run directly from Github"
imageUrl: "/post-images/containers.jpg"
---

Next.js is a pretty good framework for getting a React site up and running. It gives you layout, routing, image optimization, a nice dev server, an optimized build process, and server-side rendering all out of the box.

But that sweet setup can come at a cost. Okay, maybe not a _big_ cost, but if you're working on a startup and you w, well then you no longer fall under "Personal or non-commercial" and that means a forking out a flat rate for something that will might a few clicks a month.

So instead, what if we used Google Cloud's pay-by-the-second container hosting service, Cloud Run?

Well that would be great, but will we lose Vercel's automated build tools? Naw... we can use Google's Cloud Build to automate our process.

Here, I'll show you...

## Before we begin

Here are the pieces you're going to need to make this work:

- A Google cloud account and project.
- A Next.js repo (public or private) in Github using **Next.js v12 or above**.

## Gimme the steps

Here is what we'll be doing:

1.  Make sure we are producing the minimal output
1.  Add a Dockerfile
1.  Run a test build
1.  Add a GCP build trigger
1.  Test deploy
1.  Add a deploy trigger
1.  Connect your domain

## Make sure we are producing the minimal output

Next.js will trace the files you use and can produce [a minimal output folder](https://nextjs.org/docs/advanced-features/output-file-tracing#automatically-copying-traced-files) which contains _only_ the files used by your site. Using this folder instead of the project's folder can reduce drastically reduce deploy size.

The steps to enable it depend on [which version of Next.js you are using](https://stackoverflow.com/a/73306694).

For 12.1.x or earlier _add_ this to your `next.config.js`:

```
module.exports = {
  ...
  experimental: {
    outputStandalone: true,
  },
  ...
}
```

For 12.2.x or later:

```
module.exports = {
  ...
  output: 'standalone'
  ...
}
```

## Add a Dockerfile

Our first step is to get a Dockerfile into our repo which will set up our environment and define how to run our server.

[Grab this file](https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile) and add it to the root of your repo.

## Run a test build

It would be a good idea to test building locally and fix any issues that come up before proceeding:

```
docker build .
```

::: error
**failed to compute cache key: "/app/.next/standalone" not found: not found**

This error means that you haven't configured your next project to output the [standalone file](https://nextjs.org/docs/advanced-features/output-file-tracing#automatically-copying-traced-files).

Follow the step above so that you produce the file and make the error go away.
:::

## Add a GCP build trigger

## Step 4: Deploy
