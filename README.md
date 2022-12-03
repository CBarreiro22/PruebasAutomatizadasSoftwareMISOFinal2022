# PruebasEstrategias2022MISO

<a href="https://github.com/CBarreiro22/PruebasAutomatizadasSoftwareMISOFinal2022/wiki">Integrantes</a>

En este repositorio se encontrara pruebas realizadas con cyress de la aplicacion ghost de cada una de las funcionalidades que esta tiene usando las estrategias de generacion de datos aleatorios.(Si se quiere saber los integrantes que )

Si se quiere consultarlos escenarios realizados con cypress haz click aqui <a href="#"></a>

Adicional, si se quieren saber como se realizaron cada una de las estrategias de generacion de datos con cypress por favor <a href="https://github.com/CBarreiro22/pruebasEstrategias2022MISO/wiki/Generacion_de_datos">Haz click aqui</a>

## Ejecución Kraken

## prerequisitos 

npm 8.19.2
<br/> 
[Ghost CLI](https://ghost.org/docs/ghost-cli/)
<br/>
node 16.17.1

## Ejecución

Para la ejecucion primero se tiene que descargar el repositorio colocando en la terminal el siguiente comando:


Crear un directorio para instalar ghost 5.19.0
```shell
mkdir ghost5_19_0
```
```shell
cd ghost5_19_0
```

```shell
ghost install 5.19.0 --port 2368 local
```
```shell
ghost start
```

```shell
mkdir equipo18
```

```shell
cd equipo18
```

```shell
git clone https://github.com/ELISAANGULO/Kraken.git
```
Luego de haber descargado el repositorio procedera a ejecutar el siguiente comando dentro de la carpeta descargada

```shell
npm install kraken-node -g
```

Luego de haber ejecutado el comando anterior procede a ejecutar Kraken con el siguiente comando

configurar el usuario administrador con las credenciales email y password de este archivo.

[user data](/features/web/step_definitions/pages_object/userData.js)

Para ejecutar los escenarios se debe mover los archivos uno por uno y ejecutar del directorio PruebasGhost en features.

[PruebasGhost](/PruebasGhost)
</br>
[features](/features)


```shell
$ ./node_modules/kraken-node/bin/kraken-node run
```

## Ejecución Cypress
Para poder utilizar este repositorio procede en primera instancia clonando el repositorio con el siguiente comando:

```bash
git clone https://github.com/CBarreiro22/pruebasEstrategias2022MISO
```

Luego de haber clonado el repositorio localmente, dentro del directorio ```pruebasEstrategias2022MISO```  ejecutar el siguiente comando:

```
npm install
```

 Luego procede instalando cypress con el siguiente comando:

```
npm install --save-dev cypress
```

Luego de haber ejecutado el comando anterior abre el archvio cypress.config.js con tu editor favorito y modifica los valores ```baseUrl``` , ```email``` y ```password```
* ```baseUrl``` --> Url de la aplicacion ghost
* ```email``` ---> email registrada en el aplicativo ghost
* ```password``` --> contraseña registrada en el aplicativo ghost

Archvo ejemplo como deberia quedar

```javascript
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:2368/ghost/#/signin'
  },
  env: {
    email: 'c.barreiroh@uniandes.edu.co',
    password: 'Q123456789'
  }
})
```

Luego de realizar la configuración, verificar que se tenga arriba el aplicativo ghost localmente, en caso de no tenerlo, dirigirse a la carpeta donde se tiene instalado ghost y proceder a levantarlo con el siguiente comando:

```shell
ghost start
```

Dentro del proyecto ejecutar el siguinte comando para las instalacion de herramientas requeridas

```shell
npm install
```

Finalmente ya teniendo todo configurado ejecutar:
```
npx cypress open
```

Despues de eso les aparecera una ventana tal como se muestra a continuación, en la cual se selecciona las pruebas E2E:

![image](https://user-images.githubusercontent.com/111206402/201262734-c9471dee-94d6-46d2-8b24-5f52cb09c6b4.png)

Luego de ello, seleccionamos el navegador de su seleccion para visualizar las pruebas:

![image](https://user-images.githubusercontent.com/111206402/201262973-1d10e796-ec91-43d4-a139-892a5a396325.png)

Luego de ello puedes visualizar todos los escenarios de pruebas donde podra seleccionar cualquiera de los escenarios para su ejecución

![image](https://user-images.githubusercontent.com/111206402/201263210-1159d642-66b1-4d92-bfc6-27a09d30b958.png)

## Ejecución Backstop.

Se realizo pruebas de regresion visual con backstop, con las versiones de Ghost 3.42 - Ghost 5.19.0. Para la ejecucion de esta regresion visual se probaron en los siguientes escenarios <a href="https://github.com/CBarreiro22/PruebasAutomatizadasSoftwareMISOFinal2022/wiki/Escenarios-implementados-en-BackStop">Link</a>
 A continuacion se muestra los pasos a realizar:
 1. Instalar las dependencias

```shell
npm install -g backstopjs
```

2. Ejecutar Script

```shell
npm run script
```

3. Ejecutar comando

```shell
backstop reference
```

4. Ejecutar comando

```shell
backstop test
```

Si se quieres saber el listado de diferencias que se encontro de ghost entre las dos version selecciona el siguiente <a href="https://github.com/CBarreiro22/PruebasAutomatizadasSoftwareMISOFinal2022/wiki/Regression-Backstop-JS-listado-de-diferencias-encontradas-Ghost-3.42---Ghost-5.19.0">Link</a>


## Reporte

Para ver el reporte de click en este [link](https://github.com/david-lyon-uniandes/PRUEBAS_REGRESION_GHOST_KRAKEN/releases/tag/v.1.1.0) y descargue el release y una vez descomprimida la carpeta vaya al directorio.

```shell
./backstop_data/html_report/
```

Luego de estar dentro de la directorio html_report desplegue el archivo ```index.html``` en el navegador de preferencia.
