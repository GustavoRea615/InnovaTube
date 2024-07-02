# Proyecto MEAN: InnovaTube

Este proyecto es una aplicación de gestión de videos favoritos utilizando el stack MEAN (MongoDB, Express.js, Angular, Node.js) y la API de YouTube Data V3.

# Autor y medio de contacto

Gustavo Rea
GRea615@gmail.com
4181144618

## URL de despliegue
En estos momentos tendré desplegado el sistema en la url: `https://j29d1ghs-4200.usw3.devtunnels.ms/` en caso de que el tunel este cerrado, favor de contactarme por whatsapp o llamada al número `4181144618`, por ahora lo mantendre abierto en horario de 10:00 A.M. a 6:00 P.M. de Lunes a Viernes hasta que se me indique que ya fue revisada la prueba tecnica.

## Dificultades
La documentacion de Youtube Data API v3 esta algo compleja de entender desde la documentacion propia de Google pero la comunidad Norte Americana tiene mejores ejemplos de uso al igual que la comunidad de la India

## Estructura del Proyecto

### Backend (Node.js - InnovaTube)

backend-node-innovatube  
├─ src                               
│  ├─ config                         
│  │  └─ connectToDB.js              
│  ├─ controllers                    
│  │  ├─ favoriteVideoController.js  
│  │  ├─ usersController.js          
│  │  └─ youtubeVideosController.js  
│  ├─ models                         
│  │  ├─ favoriteVideo.js            
│  │  └─ user.js                     
│  └─ router.js                      
├─ package-lock.json                 
├─ package.json                      
└─ server.js   

### Frontend (Angular - InnovaTube)

frontend-angular-innovatube                                
├─ src                                                     
│  ├─ app                                                  
│  │  ├─ modules                                           
│  │  │  ├─ @core                                          
│  │  │  │  ├─ components                                  
│  │  │  │  │  ├─ footer                                   
│  │  │  │  │  │  ├─ footer.component.css                  
│  │  │  │  │  │  ├─ footer.component.html                 
│  │  │  │  │  │  ├─ footer.component.spec.ts              
│  │  │  │  │  │  └─ footer.component.ts                   
│  │  │  │  │  └─ header                                   
│  │  │  │  │     ├─ header.component.css                  
│  │  │  │  │     ├─ header.component.html                 
│  │  │  │  │     ├─ header.component.spec.ts              
│  │  │  │  │     └─ header.component.ts                   
│  │  │  │  └─ global-utils.ts                             
│  │  │  ├─ @security                                      
│  │  │  │  └─ components                                  
│  │  │  │     ├─ login                                    
│  │  │  │     │  ├─ login.component.css                   
│  │  │  │     │  ├─ login.component.html                  
│  │  │  │     │  ├─ login.component.spec.ts               
│  │  │  │     │  └─ login.component.ts                    
│  │  │  │     ├─ register                                 
│  │  │  │     │  ├─ register.component.css                
│  │  │  │     │  ├─ register.component.html               
│  │  │  │     │  ├─ register.component.spec.ts            
│  │  │  │     │  └─ register.component.ts                 
│  │  │  │     ├─ auth-guard.guard.spec.ts                 
│  │  │  │     ├─ auth-guard.guard.ts                      
│  │  │  │     ├─ security.service.spec.ts                 
│  │  │  │     └─ security.service.ts                      
│  │  │  └─ innovatube                                     
│  │  │     ├─ components                                  
│  │  │     │  ├─ favorite                                 
│  │  │     │  │  └─ favorite                              
│  │  │     │  │     ├─ favorite.component.css             
│  │  │     │  │     ├─ favorite.component.html            
│  │  │     │  │     ├─ favorite.component.spec.ts         
│  │  │     │  │     └─ favorite.component.ts              
│  │  │     │  └─ search                                   
│  │  │     │     ├─ component                             
│  │  │     │     │  └─ video-player                       
│  │  │     │     │     ├─ video-player.component.css      
│  │  │     │     │     ├─ video-player.component.html     
│  │  │     │     │     ├─ video-player.component.spec.ts  
│  │  │     │     │     └─ video-player.component.ts       
│  │  │     │     ├─ search.component.css                  
│  │  │     │     ├─ search.component.html                 
│  │  │     │     ├─ search.component.spec.ts              
│  │  │     │     └─ search.component.ts                   
│  │  │     ├─ favorite-video.service.spec.ts              
│  │  │     ├─ favorite-video.service.ts                   
│  │  │     ├─ innovatube.service.spec.ts                  
│  │  │     └─ innovatube.service.ts                       
│  │  ├─ app-routing.module.ts                             
│  │  ├─ app.component.css                                 
│  │  ├─ app.component.html                                
│  │  ├─ app.component.spec.ts                             
│  │  ├─ app.component.ts                                  
│  │  └─ app.module.ts                                     
│  ├─ assets                                               
│  │  └─ img                                               
│  │     └─ logo.png                                       
│  ├─ environments                                         
│  │  ├─ environment.prod.ts                               
│  │  └─ environment.ts                                    
│  ├─ favicon.ico                                          
│  ├─ index.html                                           
│  ├─ main.ts                                              
│  ├─ polyfills.ts                                         
│  ├─ styles.css                                           
│  └─ test.ts                                              
├─ angular.json                                            
├─ karma.conf.js                                           
├─ package-lock.json                                       
├─ package.json                                            
├─ README.md                                               
├─ tsconfig.app.json                                       
├─ tsconfig.json                                           
└─ tsconfig.spec.json        


## Instalación y Ejecución

### Backend

1. Clona el repositorio del backend.
2. Instala las dependencias con `npm install`.
3. Configura las variables de entorno para la conexión a la base de datos (se esta usando mongodb cloud) y la API de YouTube.
4. Inicia el servidor con `npm run dev`.

#### Las credenciales en caso de que se pierdan son: 
MONGODB_URL=mongodb+srv://grea615:TQQkKmToOfl2X6Qm@innovatube.pz728um.mongodb.net/innovatube?retryWrites=true&w=majority
MONGODB_URL_LOCAL=mongodb://localhost:27017/innovatube

### Frontend

1. Clona el repositorio del frontend.
2. Instala las dependencias con `npm install`.
3. Configura el archivo `environment.ts` con la URL del backend.
4. Inicia la aplicación con `ng serve` o `npm start`.

## Uso

1. Regístrate e inicia sesión en la aplicación.
2. Busca videos en YouTube (la pantalla `search`).
3. Añade videos a tus favoritos.
4. Visualiza y gestiona tus videos favoritos (en la pantalla `favorite-videos`).

## Contribución

1. Haz un fork del proyecto.
2. Crea una nueva rama (`git checkout -b feature/nueva-característica`).
3. Realiza tus cambios y haz commit (`git commit -am 'ABC(Tus iniciales) Añadir nueva característica'`).
4. Sube tus cambios (`git push origin feature/nueva-característica`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Puedes consultar el archivo LICENSE para más detalles.

## dependencias y versiones usadas

### Backend

"dependencies": {
    "axios": "^1.7.2",
    "bcryptjs": "^2.4.3",
    "body-parser": "^1.20.2",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "jsonwebtoken": "^9.0.2",
    "mongodb": "^6.8.0",
    "mongoose": "^8.3.2",
    "nodemon": "
}

### Frontend

"dependencies": {
    "@angular/animations": "^14.2.0",
    "@angular/cdk": "^13.0.0",
    "@angular/common": "^14.2.0",
    "@angular/compiler": "^14.2.0",
    "@angular/core": "^14.2.0",
    "@angular/forms": "^14.2.0",
    "@angular/material": "^13.0.0",
    "@angular/platform-browser": "^14.2.0",
    "@angular/platform-browser-dynamic": "^14.2.0",
    "@angular/router": "^14.2.0",
    "rxjs": "~7.5.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.11.4"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "^14.2.13",
    "@angular/cli": "~14.2.13",
    "@angular/compiler-cli": "^14.2.0",
    "@types/jasmine": "~4.0.0",
    "jasmine-core": "~4.3.0",
    "karma": "~6.4.0",
    "karma-chrome-launcher": "~3.1.0",
    "karma-coverage": "~2.2.0",
    "karma-jasmine": "~5.1.0",
    "karma-jasmine-html-reporter": "~2.0.0",
    "typescript": "~4.7.2"
  }
