# Boilerplate web-client

This app is build using [Next.js](https://nextjs.org) framework. For more details use [Docs](https://nextjs.org).

## How to run

- Create `.env` file (see `EXAMPLE.env` as example)
- Create [cloudinary account](https://cloudinary.com/)
- Fill `.env` file with your credentials
- run `npm run dev`

## Scripts

### `npm run dev`

This will start dev server. By default app will run on port 3000 [http://localhost:3000](http://localhost:3000)<br>
To use another port, you can run `npm run dev -- -p <your port here>`.

### `npm run build`

Builds the app for production to the `.next` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

## How to solve problems

### VS Code linter dont lint `*.ts` files

- Open VS config `Ctrl + Shift + P` and type `>Preferences: Open Settings (JSON)`
- Add next configs:

```json
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ]
```
