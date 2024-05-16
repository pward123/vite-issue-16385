# vite-issue-16385

This is a minimal reproduction of vite issue 16385

1. Clone this repo
2. Run `npm i && npm run dev`
3. Browse to the app

You should see the standard vite+react page for new projects

4. Kill the dev server
5. Run `npm run prod`
6. Browse to the app
7. View the JS Console

I see the following error:
```
Uncaught TypeError: e._reverse is not a function
    at index.e4f79b4f.js:57:13218
    at index.e4f79b4f.js:57:13616
    at index.e4f79b4f.js:1:23
    at index.e4f79b4f.js:60:733
```
