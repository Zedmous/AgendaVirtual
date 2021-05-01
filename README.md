# AgendaVirtual

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.11.

Esta aplicacion para usarla debes seguir 3 pasos.
## PASO 1 Instalando
Ejecutar el comando `npm install`

## PASO 2 Configurando el APIREST LOCAL
# INSTALAR JSON-SERVER GLOBAL
1. Para instalar de forma global ejecutas el comando 
`npm install -g json-server`
2. Luego creas un archivo de tipo json en cualquier parte de tu computadora con la siguiente estructura:
{
  "contactos": [
    {
      "nombre": "Eduardo",
      "apellido": "Nieves",
      "telefono": 8565203,
      "id": 1
    }
  ]
}
3. Seguido ejecutas el siguiente comando dentro del directorio donde se encuentra el archivo json acabas de  crear `json-server --watch nombrearchivo.json`, o usas el json que ya viene en la app guardado en el direcciorio assets/BD/ con el siguiente comando: `json-server --watch src/assets/BD/database.json`, debes abrir el bash o consola e ir a esa ruta antes de ejcutar.
# ACERCA DEL JSON-SERVE
Se encuentra disponible en el siguiente enlace 
https://www.npmjs.com/package/json-server
## PASO 3 EJECUTAR LA APP

Abres una consola o bash aparte y ejecutas el comando `ng serve --o`
