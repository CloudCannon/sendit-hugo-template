# Sendit

Sendit is a polished, marketing website template for Hugo. Browse through a [live demo](https://jovial-pipe.cloudvent.net/). 

![Sendit template screenshot](static/images/_screenshot.png)


[![Deploy to CloudCannon](https://buttons.cloudcannon.com/deploy.svg)](https://app.cloudcannon.com/register#sites/connect/github/CloudCannon/sendit-hugo-template)

## Features

* Pre-built pages
* Pre-styled components
* Blog with pagination and category pages
* Configurable navigation and footer
* Multiple hero options 
* Optimised for editing in [CloudCannon](https://cloudcannon.com/)

## Setup

Get a workflow going to see your site's output (with [CloudCannon](https://app.cloudcannon.com/) or Hugo locally).

## Develop

Sendit was built with [Hugo](https://gohugo.io/) version `0.128.1`, but should support newer versions as well.
### Prerequisites
* Hugo [install](https://gohugo.io/getting-started/installing/). `brew install hugo`
* Go [install](https://go.dev/learn/). `brew install go`

### Quickstart
1. In the terminal at the root dir, run: `npm i`
2. Start site and bookshop: `npm run dev` OR site alone: `npm run start`
* By default bookshop live browser will be at : [http://localhost:30775/](http://localhost:30775/)
* By default the site will be at : [http://localhost:1313/](http://localhost:1313/)

### Editing Locally with CloudCannon

Run CloudCannon against your local files with the [CloudCannon CLI](https://cloudcannon.com/documentation/developer-reference/cli/)
dev server. This is the fastest way to iterate on `cloudcannon.config.yaml`, inputs, and structures —
you see the editing experience without committing and pushing first.

1. Install the CLI and log in (requires Node.js 24+):

   ```bash
   npm install --global @cloudcannon/cli
   cloudcannon login
   ```

2. Build the site, so the dev server has output to serve:

   ```bash
   npm run build
   npx @bookshop/generate
   ```

3. Start CloudCannon locally, pointing it at the build output:

   ```bash
   cloudcannon dev public
   ```

The dev server runs on port `10101` by default and opens CloudCannon in your browser, pointed at the
files in this repo. Content edits sync to disk as you make them; re-run the build after changing
components or templates to refresh the preview.

`@bookshop/generate` is what `.cloudcannon/postbuild` runs after the Hugo build. It writes the
Bookshop live-editing bundle into the output, and it isn't committed — so skip it and components
won't be editable on the preview.

Before you commit configuration changes, validate them:

```bash
cloudcannon validate
```

The dev server is a development tool only — editors never access it. See
[Build your editing experience locally](https://cloudcannon.com/blog/build-your-editing-experience-locally-with-the-cloudcannon-dev-server/)
for the full workflow.

## Editing

Sendit is set up for adding, updating and removing pages, components, posts, portfolio items, company details and footer elements in [CloudCannon](https://app.cloudcannon.com/).

### Company details

* Reused around the site to save multiple editing locations.
* Set in the *Data* / *Company* section.

### Nav/footer details

* Reused around the site to save multiple editing locations.
* Set in the *Data* section with respective names
