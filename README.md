# PodcastsViewer
PodcastViewer es una aplicación que permite visualizar y escuchar podcasts de iTunes. Muestra un listado de podcast y permite explorar y escuchar cada uno de sus episodios.

# Ejecución de la aplicación
Para ejecutar esta aplicación debes teclear:

npm install

Una vez instaladas todos los módulos, para ejecutar en modo desarrollo debes teclear el comando:
npm start

Para ejecutar el modo de producción:
npm run build
En este caso, el código de la distribución se generará en el directorio /build.

# Detalles de desarrollo de la aplicación
Podcast Viewer ha sido creada utilizando la librería javascript React. El gestor de recursos utilizado es Webpack.
El routing de la aplicación se ha desarrollado utilizando el React Router v4.1.2.
Las llamadas a la api son generadas utilizando la librería Fetch v2.0.3.
Los estilos han sido generados con sass, añadiendo un archivo a cada componente para sus estilos propios y generando una pequeña librería de estilos globales compartidos a lo largo de toda la aplicación bajo el directorio styles.
El contenido de los directorios pricipales de la capeta src es el siguiente:
- components: contiene componentes que se utilizan a lo largo de las vistas de la aplicación.
- parsers: contiene parsers para bloques de texto o código html.
- services: contiene los servicios.
- styles: contiene una librería sass de estilos compartidos a lo largo del proyecto.
- views: contiene los componentes principales de las distintas vistas de la aplicación.
