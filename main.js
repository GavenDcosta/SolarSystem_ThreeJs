
//imports
import * as THREE from 'three'                                               //import everything from three
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'  //OrbitControls enables you to orbit, pan, and zoom the camera using mouse or touch inputs.


// assets 
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


//renderer helps to render all objects on the HTML page
const renderer = new THREE.WebGL1Renderer()                 // WebGL is a JavaScript API for rendering interactive 2D and 3D graphics in web browsers
renderer.setSize(window.innerWidth,window.innerHeight)     // This line sets the size of the renderer's output to match the dimensions of the browser window. 
document.body.appendChild(renderer.domElement)             // The domElement is a canvas element that the renderer uses to draw the 3D scene. By appending it to the <body>, you make it visible and render the 3D content to the webpage.   


//Scene
const scene = new THREE.Scene()                  //A scene is used to represent and manage all the objects, lights, cameras, and other elements that make up a 3D scene. It serves as a container where you can place and arrange 3D objects, set up lighting, and define the environment for your 3D world.


//Camera
const camera = new THREE.PerspectiveCamera(      //used to define a perspective camera for rendering 3D scenes 
    65,                                          //Field of View in degrees. A smaller FOV will result in a zoomed-in view, while a larger FOV will result in a wider view.
    window.innerWidth / window.innerHeight,      //Aspect ratio of the camera. The aspect ratio helps maintain the correct proportions when rendering.
    0.1,                                         //Near clipping plane. Objects closer to the camera than this value will be clipped or not rendered. It represents the minimum distance from the camera at which objects are visible.             
    1000                                         //Far clipping plane. Objects farther away from the camera than this value will also be clipped or not rendered. It represents the maximum distance from the camera at which objects are visible.        
)

camera.position.set(128, 120, 0)                 //These values represent the camera's initial position along the X, Y, and Z axes.



//orbit controls
const orbit = new OrbitControls(camera, renderer.domElement)      //OrbitControls enables you to orbit, pan, and zoom the camera using mouse or touch inputs.                             
orbit.update()                                                    //orbit.update() to ensure that the camera controls are properly initialized and updated.               




//Lights
const ambientLight = new THREE.AmbientLight(0x333333)                  //Ambient light is a uniform, low-intensity light that affects all objects in the scene equally. The 0x333333 parameter represents the color of the ambient light in hexadecimal format (dark gray).
scene.add(ambientLight)                                                //will contribute lighting to all objects in the scene

const pointLight = new THREE.PointLight(0x545454,15000)               //(color, intensity, max distance it can reach)
scene.add(pointLight)




//textures
const cubeTextureLoader = new THREE.CubeTextureLoader()           //This loader is used to load cube textures, which are often used for environment maps or skyboxes.
scene.background = cubeTextureLoader.load([                       //same starTexture for all six faces of the cube
    starTexture, 
    starTexture,
    starTexture,
    starTexture,
    starTexture,
    starTexture
])

const textureLoader = new THREE.TextureLoader()                   //This loader is used to load regular 2D textures that can be applied to 3D objects within your scene


//Helpers
// const axesHelper = new THREE.AxesHelper(3);   
// scene.add(axesHelper);



//Objects

const sunGeo = new THREE.SphereGeometry(16, 30, 30)                //will create a sphere
const sunMat = new THREE.MeshBasicMaterial({                       //will wrap sun texture image around the sphere
    map: textureLoader.load(sunTexture)
})
const sun = new THREE.Mesh(sunGeo, sunMat)                         //will return the sphere
scene.add(sun)                                                     //will add the sphere to the scene



//===================================================================================================================================

        //DIRECTLY ADDING TO SUN


// const mercuryGeo = new THREE.SphereGeometry(3.2, 30, 30)           //here we create mercury 
// const mercuryMat = new THREE.MeshStandardMaterial({                   //here we want mercury to be rotating around the sun  
//     map: textureLoader.load(mercuryTexture)                        //so instead of adding it to the scene we add it to the sun
// })
// const mercury = new THREE.Mesh(mercuryGeo, mercuryMat)
// sun.add(mercury)                                                   //we have added mercury to the sun , but for now it will be at the center of the sun 
// mercury.position.x = 28                                            //so inorder to move it out of the sun , we shift its position
//                                                                    //but due to this mercury will be moving along the sun itself at the same speed, but we want different speed so we make a seperate object, add it to the sun and then add mercury to that object 




//========================================================================================================================================

         //ADDING AN OBJECT TO SUN AND THEN ADDING TO THAT OBJECT





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


window.addEventListener('resize',function(){                       //will  change the camera size as per screen
    camera.aspect = window.innerWidth / this.window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
})





