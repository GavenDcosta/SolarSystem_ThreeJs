# SolarSystem_ThreeJs

[Check Deployment Here](https://gaven-solar-system.netlify.app/)


# Step 1 : Make a new Folder

![image](https://github.com/GavenDcosta/SolarSystem_ThreeJs/assets/112816730/d1c78935-8c4f-4714-b385-cd702aaff7a7)



# Step 2 : Open it in VS code

![image](https://github.com/GavenDcosta/SolarSystem_ThreeJs/assets/112816730/70b48d32-4943-409f-b58e-21a7fea79b73)



# Step 3 : Open VS code Terminal

![image](https://github.com/GavenDcosta/SolarSystem_ThreeJs/assets/112816730/cb75789b-077c-4738-b295-4f1ccf7c4b4f)


# Step 4 : Type " npm install --save three "

![image](https://github.com/GavenDcosta/SolarSystem_ThreeJs/assets/112816730/bb33cb85-e031-4a9d-94f8-265f68ecad72)



# Step 5 : Type " npm install --save-dev vite "

![image](https://github.com/GavenDcosta/SolarSystem_ThreeJs/assets/112816730/1200f0d9-69f6-4d75-afdf-b893e70e3ee5)


# Step 6 : Create an "index.html" and "main.js" inside the same folder

![image](https://github.com/GavenDcosta/SolarSystem_ThreeJs/assets/112816730/b384731d-6a77-4e05-bb3b-7fbc22381db3)


# Step 7 : Copy the below code inside "index.html"

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Solar System</title>
    <style>
        body{
           margin: 0;
        }
    </style>
</head>
<body style="display: flex;justify-content:center">
    <h1 style="top:0; position:absolute; z-index:999; color:white">Solar System by Gaven Dcosta</h1>
    
    <!-- When writing html elemnets in three js give it a display:absolute and z-index:999 -->

    <script type="module" src="main.js"></script>

</body>
</html>

```

# Step 8 : Download the below zip file , extract it and then add it to the same folder


[Download assets.zip](https://github.com/GavenDcosta/SolarSystem_ThreeJs/files/12565348/assets.zip)



# Step 9 : open "package.json" and write the  "scripts" part of the below code in it 

```

{
  "dependencies": {
    "three": "^0.156.1"
  },
  "devDependencies": {
    "vite": "^4.4.9"
  },
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite"
  }
}

```


![image](https://github.com/GavenDcosta/SolarSystem_ThreeJs/assets/112816730/027d96ea-3865-4ef0-849f-7ec47e0e4145)




# Step 10 : Now your folder structure should look something like this


![image](https://github.com/GavenDcosta/SolarSystem_ThreeJs/assets/112816730/b56bdcf6-2e6b-4dc3-85c6-55027af15067)




# Step 11 : Open "main.js" and get ready to build this project

also refer to the main.js file for better understanding


# Code Snippets :

```
import * as THREE from 'three'                                              
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js' 

```


```

import sunTexture from './assets/sun.jpg'
import starTexture from './assets/stars.jpg'
import earthTexture from './assets/earth.jpg'
import jupiterTexture from './assets/jupiter.jpg'
import marsTexture from './assets/mars.jpg'
import mercuryTexture from './assets/mercury.jpg'
import neptuneTexture from './assets/neptune.jpg'
import plutoTexture from './assets/pluto.jpg'
import saturnTexture from './assets/saturn.jpg'
import saturnRingTexture from './assets/saturn ring.png'
import uranusTexture from './assets/uranus.jpg'
import uranusRingTexture from './assets/uranus ring.png'
import venusTexture from './assets/venus.jpg'

```


```

const renderer = new THREE.WebGL1Renderer()                 
renderer.setSize(window.innerWidth,window.innerHeight)    
document.body.appendChild(renderer.domElement) 

```


```
const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(      
    65,                                          
    window.innerWidth / window.innerHeight,     
    0.1,                                        
    1000                                        
)

camera.position.set(128, 120, 0) 

const orbit = new OrbitControls(camera, renderer.domElement)                               
orbit.update() 


```


```

const ambientLight = new THREE.AmbientLight(0x333333)                 
scene.add(ambientLight)                                                

const pointLight = new THREE.PointLight(0x545454,15000)               
scene.add(pointLight)


```



```

const cubeTextureLoader = new THREE.CubeTextureLoader()          
scene.background = cubeTextureLoader.load([                     
    starTexture, 
    starTexture,
    starTexture,
    starTexture,
    starTexture,
    starTexture
])

const textureLoader = new THREE.TextureLoader()                   

```


```

function animate(){                     
    renderer.render(scene,camera) 
}

renderer.setAnimationLoop(animate)                                 


window.addEventListener('resize',function(){                       
    camera.aspect = window.innerWidth / this.window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
})



```




# Object snippets




```

const sunGeo = new THREE.SphereGeometry(16, 30, 30)                
const sunMat = new THREE.MeshBasicMaterial({                       
    map: textureLoader.load(sunTexture)
})
const sun = new THREE.Mesh(sunGeo, sunMat)                         
scene.add(sun)

```


# Non-ring Planets

```

const mercuryGeo = new THREE.SphereGeometry(3.2, 30, 30)             //Mercury 
const mercuryMat = new THREE.MeshStandardMaterial({                  
        map: textureLoader.load(mercuryTexture)                        
    })
const mercury = new THREE.Mesh(mercuryGeo, mercuryMat)
const mercuryObj = new THREE.Object3D()                            
mercuryObj.add(mercury)                                               //adding an object to the scene and adding mercury to that object 
scene.add(mercuryObj)                                               
mercury.position.x = 28


const venusGeo = new THREE.SphereGeometry(5.8, 30, 30)            //Venus
const venusMat = new THREE.MeshStandardMaterial({                  
        map: textureLoader.load(venusTexture)                        
    })
const venus = new THREE.Mesh(venusGeo, venusMat)
const venusObj = new THREE.Object3D()                            
venusObj.add(venus)                                               
scene.add(venusObj)                                               
venus.position.x = 44      
    




const earthGeo = new THREE.SphereGeometry(6, 30, 30)            //Earth
const earthMat = new THREE.MeshStandardMaterial({                  
        map: textureLoader.load(earthTexture)                        
    })
const earth = new THREE.Mesh(earthGeo, earthMat)
const earthObj = new THREE.Object3D()                            
earthObj.add(earth)                                               
scene.add(earthObj)                                               
earth.position.x = 62  





const marsGeo = new THREE.SphereGeometry(4, 30, 30)            //Mars
const marsMat = new THREE.MeshStandardMaterial({                  
        map: textureLoader.load(marsTexture)                        
    })
const mars = new THREE.Mesh(marsGeo, marsMat)
const marsObj = new THREE.Object3D()                            
marsObj.add(mars)                                               
scene.add(marsObj)                                               
mars.position.x = 78  





const jupiterGeo = new THREE.SphereGeometry(12, 30, 30)            //Jupiter
const jupiterMat = new THREE.MeshStandardMaterial({                  
        map: textureLoader.load(jupiterTexture)                        
    })
const jupiter = new THREE.Mesh(jupiterGeo, jupiterMat)
const jupiterObj = new THREE.Object3D()                            
jupiterObj.add(jupiter)                                               
scene.add(jupiterObj)                                               
jupiter.position.x = 100 



const neptuneGeo = new THREE.SphereGeometry(7, 30, 30)          //Neptune
const neptuneMat = new THREE.MeshStandardMaterial({            
            map: textureLoader.load(neptuneTexture)   
        })
const neptune = new THREE.Mesh(neptuneGeo, neptuneMat)
const neptuneObj = new THREE.Object3D()                           
neptuneObj.add(neptune)
scene.add(neptuneObj)                                                 
neptune.position.x = 200               





const plutoGeo = new THREE.SphereGeometry(2.8, 30, 30)          //Pluto
const plutoMat = new THREE.MeshStandardMaterial({            
            map: textureLoader.load(neptuneTexture)   
        })
const pluto = new THREE.Mesh(plutoGeo, plutoMat)
const plutoObj = new THREE.Object3D()                           
plutoObj.add(pluto)
scene.add(plutoObj)                                                 
pluto.position.x = 216 


```


# Ring-Planets

```

const saturnGeo = new THREE.SphereGeometry(10, 30, 30)          //Saturn
const saturnMat = new THREE.MeshStandardMaterial({            
            map: textureLoader.load(saturnTexture)   
        })
const saturn = new THREE.Mesh(saturnGeo, saturnMat)
const saturnObj = new THREE.Object3D()                           
saturnObj.add(saturn)
scene.add(saturnObj)                                               
saturn.position.x = 138               


const saturnRingGeo = new THREE.RingGeometry(10, 20,32)       //Saturn Ring  (inner radius, outer radius)
const saturnRingMat = new THREE.MeshBasicMaterial({            
        map: textureLoader.load(saturnRingTexture),   
        side: THREE.DoubleSide                        
    })
const saturnRing = new THREE.Mesh(saturnRingGeo, saturnRingMat)                  
saturnObj.add(saturnRing)                                                
saturnRing.position.x = 138   
saturnRing.rotateX(-0.5*Math.PI)
    
    


    

const uranusGeo = new THREE.SphereGeometry(7, 30, 30)          //Uranus
const uranusMat = new THREE.MeshStandardMaterial({            
            map: textureLoader.load(uranusTexture)   
        })
const uranus = new THREE.Mesh(uranusGeo, uranusMat)
const uranusObj = new THREE.Object3D()                           
uranusObj.add(uranus)
scene.add(uranusObj)                                                 
uranus.position.x = 176               


const uranusRingGeo = new THREE.RingGeometry(7, 12)       //Uranus Ring  (inner radius, outer radius)
const uranusRingMat = new THREE.MeshBasicMaterial({            
        map: textureLoader.load(uranusRingTexture),   
        side: THREE.DoubleSide                        
    })
const uranusRing = new THREE.Mesh(uranusRingGeo, uranusRingMat)                  
uranusObj.add(uranusRing)                                                
uranusRing.position.x = 176   
uranusRing.rotateX(-0.5*Math.PI)


```

# Final Function

```

function animate(){                       //all the rotation animation will come in this
    
    
    sun.rotateY(0.004)    

    mercury.rotateY(0.004)  
    mercuryObj.rotateY(0.04)  

    saturn.rotateY(0.038)
    saturnObj.rotateY(0.0009) 

    venus.rotateY(0.002)
    venusObj.rotateY(0.015)

    earth.rotateY(0.02)
    earthObj.rotateY(0.01)

    mars.rotateY(0.018)
    marsObj.rotateY(0.008)

    jupiter.rotateY(0.04)
    jupiterObj.rotateY(0.002)

    uranus.rotateY(0.03)
    uranusObj.rotateY(0.0004)

    neptune.rotateY(0.032)
    neptuneObj.rotateY(0.0001)

    pluto.rotateY(0.008)
    plutoObj.rotateY(0.00007)


 
    renderer.render(scene,camera) 
}



renderer.setAnimationLoop(animate)                                 //will run this animation in a loop


```

# Step 12 : Importing External Model

Comment out all the planets and rotation code inside of function and do this 

```
import {GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader' 
const asset = new URL('./assets/cyberpunk.glb',import.meta.url)

const loader = new GLTFLoader()

// lambo
loader.load(asset.href,gltf=>{
    const model = gltf.scene
    model.position.set(2.1,1.21,0)
    scene.add(model)
},undefined,e=>{
    console.error(e);
})
```

