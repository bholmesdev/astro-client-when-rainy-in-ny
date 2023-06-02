# Astro - `client:rainy-in-ny` 🌧

Yes, this actually shows you how to hydrate components ONLY when it's raining in NYC. Take that React `"use client"`!

## 🚀 Project Structure

These are the files you probably want to reference:

```sh
/
├── src/
│   └── components/
│       └── Counter.jsx # what we're hydrating
│   └── pages/
│       └── index.astro # uses `client:rainy-in-ny`
├── .env.example # sets WEATHER_API_KEY
├── client-rainy-in-ny.mjs # implementation
└── astro.config.mjs # applies client directive
```

## ⚙️ Setup

This directive relies on the WeatherAPI.com for requesting the current forecast. To get an API key, you can [create a free account here](https://www.weatherapi.com/docs/).

Then, create a `.env` file at the base of the project mirroring the `.env.example` template.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [Astro's "custom client directives" documentation](https://docs.astro.build/en/reference/directives-reference/#custom-client-directives).
