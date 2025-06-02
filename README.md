## Plataforma de torneos (Tournament platform)

\[ES\] Una aplicación CRUD que provee la funcionalidad de ver, crear, editar y eliminar Torneos, Jugadores y Equipos. 

Hecha con:
 - React (React Router DOM, React Bootstrap, validación con Yup y Formik) 
 - Node.js
 - Express 
 - MongoDB (Mongoose). 

Containerizada con Docker.

\[EN\] A CRUD application that provides the functionality of viewing, creating, editing, and deleting Tournaments, Players, and Teams.

Built with: 
 - React (React Router DOM, React Bootstrap, Yup and Formik validation)
 - Node.js
 - Express
 - MongoDB (Mongoose). 

Containerized with Docker.

## Estado del proyecto (Project Status)

\[ES\] Este proyecto está completo.

\[EN\] This project is complete.

## Capturas de pantalla del proyecto (Project Screenshots)

![Listado de torneos](/assets/images/list-torneo.png "Listado de torneos")

![Creación de torneo](/assets/images/crear-torneo.png "Formulario de creación de torneo")

![Creación de equipo](/assets/images/crear-equipo.png "Formulario de creación de equipo")

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