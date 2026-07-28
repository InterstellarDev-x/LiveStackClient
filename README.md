# LiveStack Client

The React dashboard for [LiveStack](https://github.com/InterstellarDev-x/LiveStack),
a multi-region uptime monitor. This repo is the frontend shell; the actual
monitoring, auth, and AI-assistant logic live in the LiveStack Rust backend.

## What's here

- Routing (`react-router-dom`) between `/signup` and `/signin`, defaulting to `/signup`.
- Signup and signin pages styled with Tailwind + shadcn/ui components (card, input, label, button).
- A `Dashboard` page stubbed out but not yet built.

## Stack

React, Vite (via Bun's bundler), Tailwind, shadcn/ui, react-router-dom.

## Running it

```bash
bun install
bun dev
```

## Status

The UI shell and routing are in place; the forms are static markup with no
submit handler yet — signup/signin aren't wired to LiveStack's `POST
/signup` / `POST /signin` endpoints, and the dashboard itself is an empty
page. Next step is wiring auth to the real API and building the dashboard
against LiveStack's website/incident data.
