Prueba Técnica - Blog
Esta prueba técnica consiste en el desarrollo de un blog. A continuación, se detallan los pasos necesarios para poner en marcha el backend y frontend de la aplicación.

Backend
Accede a la carpeta "backend" dentro del proyecto y abre una terminal.

Ejecuta el siguiente comando para instalar las dependencias:


composer install

Crea un archivo .env en la raíz de la carpeta "backend". Edita el archivo .env y configura las credenciales de tu base de datos. Busca y ajusta los siguientes valores según tus preferencias:

env
Copy code
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=
Recuerda cambiar laravel en DB_DATABASE por el nombre de tu base de datos.

Con el archivo .env configurado, ejecuta el siguiente comando para migrar las tablas de la base de datos:

Copy code
php artisan migrate
Con estos pasos, el backend estará listo y las tablas de la base de datos se crearán automáticamente.

Frontend
Dirígete a la carpeta raíz de "frontend" y abre una terminal.

Ejecuta el siguiente comando para instalar las librerías y dependencias locales:

Copy code
npm install
Después de la instalación, ejecuta el siguiente comando para visualizar el proyecto localmente:

arduino
Copy code
npm run dev
Por defecto, el proyecto se levantará en el puerto 5173 de localhost. En caso contrario, la terminal te indicará cómo acceder.

![image](https://github.com/albertogmonroy/prueba-tecnica/assets/47957374/d8a74764-fdf4-4749-974e-b8acac38c641)


¡Listo! Ahora puedes visualizar el proyecto localmente.

Además, se proporciona un archivo apis.json para probar las APIs generadas desde el backend. Importa este archivo en Insomnia para ver y probar las APIs.

Espero que esta versión mejorada sea de ayuda. ¡Déjame saber si necesitas más ajustes!
