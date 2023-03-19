
# ADVICE GENERATING APP

Created a fully responsive website which will give random advice fetched from 3rd party API.


## API Reference

#### Get all items

```http
  https://api.adviceslip.com/
```

HTTP Method	: GET

URL :	https://api.adviceslip.com/advice

Description	: Returns a random advice slip as a slip object.

Parameters : callback string To define your own callback function name and return the JSON in a function wrapper (as JSONP), add the parameter callback with your desired name as the value.

## Challenges

My first project with tailwind css framework , so took a bit long to understanding the classes and compenents . Fetching API's was a bit challenging .


## Authors

- [@mudit](https://github.com/Mudit-jain77)


## Demo

https://scintillating-flan-01b27d.netlify.app/


## Deployment
Install dependencies (Tailwind)
```bash
  npm install
```
Run the Tailwind CLI to compile the input.css during development. The output file is css/main.css
```bash
    npm run watch
```
To build once run...
```bash
    npm run build
```
You can edit the scripts in package.json and the tailwind.config.js file to change input/output locations
