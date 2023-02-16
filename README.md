# Personal Site Build with Next.js 13 and Sanity.io v3

## Dependencies
- TailwindCSS - We'll use the TailwindCSS Next.js template to get started. Find the installation guide [here](https://v2.tailwindcss.com/docs/guides/nextjs).   Run: 

  ```
  npx create-next-app -e with-tailwindcss next-sanity-portfolio-2023
  ```

- Next-Sanity - This brings in a whole bunch of handy tools for use with a Next/Sanity project. See *Set up Sanity Studio* section below for installation instructions. 

## Set Up Next

You can start your Next project in whatever way you like. For this project, I'm using TailwindCSS so have a look above in the Dependcies section for the TailwindCSS & Next.js template - Running that command will spin up a Next.js project with tailwind already installed. 

**Note** - This guide is being written while Next.js 13 has been released, however their new `app` folder structure has not yet been implemented. Depending on when you read this you may be required to set this up manually. If you don't see a folder called `app`, fret not and follow the next few steps. If you have the `app` folder, skip the next few steps.

1. Open your project in your code editor and navigate to the `pages` folder. 
2. Delete the `index.tsx` file
3. Delete the `_app.tsx` file 
4. Create a new folder at the root (same folder tree level as the `next.config.js` file) level of your project called `app`. 
5. Inside the newly created `app` folder, create a new file called `page.tsx`. 
6. Open the `next.config.js` file and add the experimental flag so we can use the new `app` folder structure
    ```
    /** @type {import('next').NextConfig} */
    module.exports = {
      reactStrictMode: true,
      experimental: {
        appDir: true,
        },
      };
    ```
7. In the `app/page.tsx` file, we will build a functional component. Add the following: 
    ```
    import React from 'react'

    function Page() {
      return (
        <div>
          <h1 className='text-4xl'> You Page Name</h1>
        </div>
          )
        }

    export default Pages
    ```
8. Because we changed our `next.config.js` file, we need to cut the server and restart it. IF you haven't run the server yet, do so now - `npm run dev`
9. Navigate to your page at `localhost:3000`. You may first see a 404 error from having deleted the `index.tsx` file earlier, but some magic happens when we refresh. You'll see your new Page component rendered but Next.js does a bit of magic for us and creates two root componenents for us: a `head.tsx` and `layout.tsx` 

### If you had an `App` folder all along, hop in here: 

Get the rest of your page and stylings set up: 

In the `layout.txt` we need to import our styles so that TailwindCSS takes effect. Add the following at the top: 
    ```
    import '../styles/globals.css'
    ```


## Set up Sanity Studio

1. Spin up your sanity project now by running the following: 

    ```
    npm create sanity@latest
    ```
2. Run through the prompts, naming your project whatever you like and saying 'yes' to the default dataset. 
3. Select your output path - I'll just hit enter to select the defualt path
4. Choose your schema type - I'll use the "blog" template 
5. Select your preferred langugage - I'll use Typescript
6. Choose your package manager. I'm using NPM
7. Install the `next-sanity` dependency:
    ```
    npm install next-sanity @portabletext/react @sanity/image-url
    ```

## Connecting Sanity Studio to the Next.js App via a Merge

This part is important and looking throug the current available literature you will find that this process is a bit ... muddy. There are 3 basic methods found in the wild at this time of writing, and none are fun: 

- The official Sanity guide has you walking through a codesanbox scenario and / or pulling down a git repo. The result is a disjointed flow and you're left with no real understanding of what the heck was happening to get the front-end working with the Sanity studio backend. Not only this, but you get a shit ton of extra doodads and files and if you are just getting started with Sanity ... well, it's insanity. Good luck understanding what's what. 
- There are guides to help hook up your app to Sanity out there for Sanity v2, but that is so 2022 - It's 2023 now and we are all about v3. 
- There are a few templates out there labelled "clean" and things like that but, resulting in less bloat than the official guide, but I learned that the strucutre of your Next app and Sanity are also reconfigured and getting a handle on where things live also is not for those just getting started with Sanity. 

Enter the method of choice, harvested from Youtbue sensation PapaReact, aka [Sonny Sangha's own guide](https://www.youtube.com/live/x3fCEPFgUSM?feature=share). This is a slightly hacky way to get this done, but it's a) understandable and b) does not pollute your project with thousands of features you'll not be using. Yay for clarity!

### Merge Steps:

With our project set up the way it is, we essentially hace two platforms in one, each with their own `node_modules` and each with their own dependencies, and therefore their own `package.json`. We will need to lift some dependencies from our Sanity project and place them in the Next.js project to get thigns connected. Here is how. 

1. Open the `package.json` for your Next project. 
2. Navigate into the Sanity project, locate it's own `package.json` and open this up - I open both in side-by-side windows to get a good view of both at once.
3. Locate the following lines in the dependencies in the Sanity `package.json` and cut them and paste into the `package.json` for the Next.js project:
    - `"@sanity/vision": "^3.0.0"`
    - `"sanity": "^3.0.0"`
    - `"styled-components": "^5.2.0"`
4. We also need to grab (this time copying instead of cutting) the following from the `devDependencies` section of the Sanity `package.json`:
    - `"styled-components": "^5.2.0"`
5. Once these files are in your Next.js json file, head to the terminal and run: `npm install`
6. With our Sanity depencies transferred over, we will be able to completely delete the Sanity folder structure / project that was created - however, we need to copy over a few things first. Grab the `schemas` folder, and drag it to the top level of the Next.js project (root level where the Next.js `package.json` lives).
7. Next, grab these 2 files from the Sanity folder and drag them to the top level of the Next.js project:
    - `sanity.cli.ts`
    - `sanity.config.tx`
8. Remove / Delete / Destroy the Sanity folder from wich you dragged out the above folders and files. 

### Connection Steps: 

1. Create, in the root level of your now singular merged project, a `.env` file. 
2. Inside the `.env` file, add the following where you'll replace the `your-value-here` with ... well, your values, which we will do in the next few steps
    ```
    NEXT_PUBLIC_SANITY_PROJECT_ID=your-value-here
    NEXT_PUBLIC_SANITY_DATASET=your-value-here
    NEXT_PUBLIC_SANITY_API_VERSION=your-value-here
    ```
3. For the API, enter `2022-11-15`
4. For the Dataset, enter `production`
5. Now, for ProjectId, navigate to your `sanity.config.ts` and copy the ProjectId provided there to the `.env` file. Bingo Bango. You did it. 
6. Now lets clean up the `sanity.config.js` and make it more secure by using our environment variables. Add the following to the file just below the imports:
    ```
    NEXT_PUBLIC_SANITY_PROJECT_ID
    NEXT_PUBLIC_SANITY_DATASET
    ```
7. To the same file, we'll alos add a basePath to render the Sanity Studio. We also need to get rid of the projectId and dataset lines that expose our project details and are now in our `.env` file: Change the `defineConfig` function to look like this: 
    ```
    export default defineConfig({
      basePath: '/studio',
      name: 'default',
      title: 'Portfolio 2023 Studio',

      projectId,
      dataset,

      plugins: [deskTool(), visionTool()],

      schema: {
        types: schemaTypes,
      },
    })
    ```
8. In the `sanity.cli.ts` file, we will swith to use our environment variables as well: 
    ```
    import { defineCliConfig } from 'sanity/cli'

    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

    export default defineCliConfig({
      api: {
        projectId,
        dataset,
      }
    })
    ```
9. Restart you server

### Embed the Sanaity Studio in the Next.js Project

The following steps are pulled from the next-sanity dependencies documentation [found here](https://www.npmjs.com/package/next-sanity)

1. Inside the `app` folder, create a new folder called `studio` and in that folder create a folder called `[[...index]] with a file in there called `page.tsx` - fancy. This is Next.js 13's new routing structure. I still like the old way, but I guess there are some advantages to this new method? We'll see. 
2. In this file add the following code from the `next-sanity` help docs: 
    ```
      'use client'

      import { NextStudio } from 'next-sanity/studio'

      import config from '../../../sanity.config'

      export default function StudioPage() {

        return <NextStudio config={config} />
      
      }

    ```
3. In the `[[...index]]` folder, create another file - `head.tsx` with the following code: 
   ```
    // Re-export `NextStudioHead` as default if you're happy with the default behavior
    export {NextStudioHead as default} from 'next-sanity/studio/head'

    // To customize it, use it as a children component:
    import {NextStudioHead} from 'next-sanity/studio/head'

    export default function CustomStudioHead() {
      return (
        <>
          <NextStudioHead favicons={false} />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="https://www.sanity.io/static/images/favicons/favicon-32x32.png"
          />
        </>
      )
    }
    ```
4. Add in the `loading.tsx` file in the `[[...index]]` folder. Because the studio is comprised of componenents on the server side we want to render this on the client side to ensure the studio loading experience does not suck. Add this to the file: 
    ```
    'use client'

    import config from '../../../sanity.config'
    import {NextStudioLoading} from 'next-sanity/studio/loading'

    export default function Loading() {
      return <NextStudioLoading config={config} />
    }
    ```
5. Now navigate in your browser to `localhost:3000/studio` and you'll be notified that you need to add the URL as a CORS origin. Oh, and did you notice that sweet loading page to ensure you the studio was in fact summoned? Click through the prompts and login to your Sanity account to add it and you'll soon be bathing in the glory that is your Sanity studio. 

You now have the main structure of your merged Sanity-Next.js app set up. Now let's work on creating a bit of structure to our project and get some content rendered to our Next.js app. 

### Next.js Structuring With Group Routing

Inside our `app` folder we will create two further folders. 

1. Click on `app` and inside create `(user)` and `(admin)` folder. Having the parenthesis keeps the folders from affecting our routes. 
2. Take the `pages.tsx` and drag it into the `(user)` folder. 
3. Grab the `studio` folder, and drag it into the `(admin)` folder. 

Next.js makes routing super easy and these folder in parens add to this goodness where we can now create a folder structure without messing with the routing structure that is created via the Next.js folder / routing correlation. 

Ok, a lot of files have been moved. Let's have a look at what the file structure should be now: 

```
├── app
│   ├── (admin)/studio/[[...index]] //Remember VS code shows folders without files in a single line
│   │   ├── head.tsx                // This file is technically inside [[...index]]
│   │   ├── layout.tsx
│   │   ├── loading.tsx
│   ├── (user)
│   │   ├── head.tsx
│   │   ├── layout.tsx
│   │   ├── page.tsx
.... 
├── styles
│   ├── globals.css
```

Alright. I've left out the usual suspects in the above tree and focused on the main files in play in the structure changes we've made. 

One thing to note, and this really messed me up -- the style sheet is called "globals.css" globalSSSSSSS with an `s` so be sure you are naming your imports correctly. There ... I just saved you 25-40 minutes. 


---
## Part II

## Building Headers & Pages with Styling

### Create the Headers

1. In the `app` folder, create a new folder for our components called .... `components` 