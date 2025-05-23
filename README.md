# \[ES\] Cómo probar la aplicación

Para probar la aplicación, necesita una carpeta vacía en su dispositivo y tener instalado Docker. 

Allí va a descargar el documento [docker-compose.yml](https://github.com/GuatilaM/plataforma-de-torneos/blob/main/docker-compose.yml) para utilizar el container Docker de esta aplicación.

En una terminal, deberá correr el siguiente comando con derechos de super usuario:

`docker compose up -d`

De este modo, Docker descargará las imágenes de los servicios necesarios, construirá la aplicación y la correrá. 

Al correr, tomará un tiempo inicializando, pero al cabo de unos 20 segundos, puede probar la aplicación abriendo [http://localhost:3000](http://localhost:3000) en un navegador.

#### Terminar la aplicación

Para dar término a la aplicación, deberá correr el siguiente comando:

`docker compose down`

# \[EN\] How to test the app

To test the app, you need an empty folder on your device as well as Docker installed.

There, you'll download the document [docker-compose.yml](https://github.com/GuatilaM/plataforma-de-torneos/blob/main/docker-compose.yml) to be able to use this app's Docker container. 

In a terminal, you'll need to run the following command with super user rights:

`docker compose up -d`

This way, Docker will download all the necessary services' images, build the app, and run it.

On runtime, it'll take some time initializing. But after about 20 seconds, you can test the app opening [http://localhost:3000](http://localhost:3000) in a web browser.

### Terminate the app

To terminate the app, you'll need to run the following command:

`docker compose down`

<!-- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->
