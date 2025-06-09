import './style.css'
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import gsap from 'gsap';
import {Text} from 'troika-three-text'
import { Reflector } from 'three/examples/jsm/objects/Reflector.js';





// Create a basic Three.js scene
const scene = new THREE.Scene();
const canvas = document.querySelector("canvas")
let camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);


const light1 = new THREE.PointLight(0xffffff, 1); // white light, half intensity
const light2 = new THREE.PointLight(0xffffff, 1); // white light, half intensity
const light3 = new THREE.AmbientLight(0xff00f0,.2); // white light, half intensity
scene.add(light1);
scene.add(light2);
scene.add(light3);
// Create a camera

// Create a renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  alpha:true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));




function createText(content,size){
  const text = new Text()
    
text.text = content
text.font = `/fonts/Anton.ttf`;
  text.anchorX = 'center';
  text.anchorY = 'middle';
  text.textAlign = 'center';
  
  text.color = 0xffffff;
  
  // if (index !== 0) myText.scale.set(0, 0, 0);
  text.letterSpacing = 0.01;
  text.fontSize = window.innerWidth / size;
  text.glyphGeometryDetail = 20;

  return text;
  }


const s1tText1 = createText("",30000);
  s1tText1.text = ` VKZ Studio \n  A studio where design, motion, and development meet.\n We craft digital products that don't just attract you, but\n pull you into an immersive experience.`;
  s1tText1.font = `/fonts/Satoshi.ttf`;
  s1tText1.letterSpacing = -0.01;
  s1tText1.sync();
  scene.add(s1tText1)





const Image1Text1 = createText('FESTKA',5600);
Image1Text1.sync()
scene.add(Image1Text1)

const Image1Text2 = createText(`Website Design & Development`, 80000)
Image1Text2.font = `/fonts/Satoshi.ttf`;
Image1Text2.letterSpacing = -0.02;
Image1Text2.sync();
scene.add(Image1Text2)
  

const Image2Text1 = createText('MUZA',5600);
Image2Text1.sync();
scene.add(Image2Text1)
  
const Image2Text2 = createText(`Brand Identity, Website Design & Development`, 80000)
Image2Text2.font = `/fonts/Satoshi.ttf`;
Image2Text2.letterSpacing = -0.02;
Image2Text2.sync();
scene.add(Image2Text2)

const Image3Text1 = createText('SEABROOK\nSTUDIO',8500);
Image3Text1.lineHeight = 0.95;
Image3Text1.sync()
scene.add(Image3Text1)

const Image3Text2 = createText(`Website Design & Development`, 80000)
Image3Text2.font = `/fonts/Satoshi.ttf`;
Image3Text2.letterSpacing = -0.02;
Image3Text2.sync();
scene.add(Image3Text2)
  

const Image4Text1 = createText('ELONGA',5600);
Image4Text1.sync();
scene.add(Image4Text1)
  
const Image4Text2 = createText(`Product Design`, 80000)
Image4Text2.font = `/fonts/Satoshi.ttf`;
Image4Text2.letterSpacing = -0.02;
Image4Text2.sync();
scene.add(Image4Text2)
  



const loader = new GLTFLoader();

loader.load('/models/STROM_6.glb', (gltf) => {
  gltf.scene.position.set(0,0,-95)
  const plane = new THREE.Mesh( new THREE.PlaneGeometry(2.55, 75) , new THREE.MeshBasicMaterial({color: 0x510173}))
  plane.position.y = 0.012;
  plane.position.z = gltf.scene.position.z - 15.0;
  plane.rotation.x = -Math.PI / 2;
  scene.add(plane)
  console.log(gltf.scene);
  
  gltf.scene.traverse((child) => {
    if (child.isMesh && child.material) {
      // Remove textures that override the base color
     
  
      // Apply your hex color properly
      child.material.color.set(0xF000F0);
      child.material.metalness = 0.9;
      child.material.roughness = 0.01;
      // console.log(child.material);
      
  

    }
  });
  
  scene.add(gltf.scene);
    
}, undefined, (error) => {
  console.error('Error loading STROM_6:', error);
});



  const reflector = new Reflector(new THREE.PlaneGeometry(2.55, 150), {
    clipBias: 0.00003,
    textureWidth: window.innerWidth * window.devicePixelRatio,
    textureHeight: window.innerHeight * window.devicePixelRatio,
    color: 0x222244, // dark tint
  });
  reflector.rotation.x = -Math.PI / 2;
  reflector.position.y = 0.01; // prevent z-fighting
  scene.add(reflector);

  const mat = reflector.material;
  mat.roughness = 0.85;     // very soft reflection
  mat.metalness = 0.05;     // minimal metallic sheen
  mat.opacity = 0.15;       // subtle presence
  mat.transparent = true;

  // Optional: add a dimming overlay plane
  const overlayGeom = new THREE.PlaneGeometry(2.55, 150);
  const overlayMat = new THREE.MeshBasicMaterial({
    color: 0x22004B, //before
    // color: 0x510173,///after , selectedd
    opacity: 0.95,
    // opacity: 0.99,
    transparent: true,
    depthWrite: false,
  });
  const overlay = new THREE.Mesh(overlayGeom, overlayMat);
  overlay.rotation.x = -Math.PI / 2;
  overlay.position.y = 0.015; // just above reflector
  scene.add(overlay);


  
  
  const JUMP_START = 2.24;
  const JUMP_END = 3.0;
  const tree = 6.0




let mixer;
let sideFloor;
let isEntered = false;
let isScrollStared = false;   
let animationDuration = 1
const scrollData = {
  isActive: false,
  target: 0,
  current: 0,
  lastTime: 0
};
let animationSpeed = 0.0007



///////////////////////////////////////////////////////////////////////
      // scene.background = new THREE.Color(0x04001D)

      const textureLoader = new THREE.TextureLoader();
      let backgroundTexture2 = textureLoader.load('/images/clouds2.webp')
      scene.background = new THREE.Color(0x04001D);
      scene.fog = new THREE.FogExp2(0x04001D,0.30)

let cubes= [];
      // / Create a cube
      const geometry = new THREE.PlaneGeometry(0.55, 0.32);
      for(let i=1 ; i<=4;i++){
        let texture = textureLoader.load(`/images/image${i}.avif`)
        texture.colorSpace = THREE.SRGBColorSpace;
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff , map:texture , toneMapped: false });

        const cube = new THREE.Mesh(geometry, material);
        cubes.push(cube)
        scene.add(cube)
      }
      
     
      // text at 3.7 in 2nd scale////////////////////////////////////////
      cubes[0].position.set(-0.35,0.38,-37.8)
      cubes[0].rotation.y = Math.PI / 180 * 45
      cubes[1].position.set(0.35,0.38,-44.865)
      cubes[1].rotation.y = -Math.PI / 180 * 45
      cubes[2].position.set(-0.35,0.38,-51.93)
      cubes[2].rotation.y = Math.PI / 180 * 45
      cubes[3].position.set(0.35,0.38,-59)
      cubes[3].rotation.y = -Math.PI / 180 * 45

      Image1Text1.position.set(
        -cubes[0].position.x - 0.1,
        cubes[0].position.y - 0.02,
        cubes[0].position.z - 0.02
      )
      Image1Text2.position.set(
        0.04,
        cubes[0].position.y -0.14,
        cubes[0].position.z +0.3
      ) 
      Image2Text1.position.set(
        -cubes[1].position.x + 0.152,
        cubes[1].position.y - 0.02,
        cubes[1].position.z - 0.02
      )  
      Image2Text2.position.set(
        -0.105,
        cubes[1].position.y -0.14,
        cubes[1].position.z +0.3
      ) 
      Image3Text1.position.set(
        -cubes[2].position.x - 0.1,
        cubes[2].position.y - 0.01,
        cubes[2].position.z - 0.1
      )
      Image3Text2.position.set(
        0.15,
        cubes[2].position.y -0.165,
        cubes[2].position.z +0.3
      ) 
      Image4Text1.position.set(
        -cubes[3].position.x + 0.08,
        cubes[3].position.y - 0.02,
        cubes[3].position.z - 0.02
      )  
      Image4Text2.position.set(
        0.03,
        cubes[3].position.y -0.145,
        cubes[3].position.z +0.3
      ) 

//////////////////////////////////////////////////////////////////////








//////////////////////////////////////////////
//////////////////////////////////////////////
loader.load('/models/VKZ_web_34.glb', (gltf) => {
      const model = gltf.scene;
      model.position.set(0,0,0)
       
        gltf.scene.traverse((obj) => {
          if (obj.isLight) {
            // obj.intensity = 5.1;
            obj.intensity = 50;
            // obj.intensity = 50;
          }
        });

        mixer = new THREE.AnimationMixer(model);
      
        
        gltf.animations.forEach((clip) => {
          mixer.clipAction(clip).play();
        });
        let modelCamera = null;

        gltf.scene.traverse((obj) => {
          if (obj.isCamera) {
            modelCamera = obj; // Store the camera reference
          }
        });
        // If the model has a camera, use it for rendering
        if (modelCamera) {
          // Ensure the camera is part of the scene
          camera = modelCamera 
          camera.position.z += 2.3 
          camera.updateProjectionMatrix(); // 🔴 Required after changes!
           // Render using the model's camera
        } 
       
        let positionofcube;
      
        model.traverse((obj) => {
          if(obj.name == "Empty_plane_Short_text"){
            s1tText1.position.x = obj.position.x
            s1tText1.position.y = obj.position.y -.20
            s1tText1.position.z = obj.position.z-1.5
            obj.visible = false
          }
          if(obj.name == "Columns_Visual_room001"){   
            // piller
            let position = obj.position
            const clone1 = obj.clone();
            clone1.position.set(position.x , position.y ,position.z)
            const clone2 = obj.clone();
            clone2.position.set(position.x , position.y ,position.z - 2)
            const clone3 = obj.clone();
            clone3.position.set(position.x , position.y ,position.z - 4)
            const clone4 = obj.clone();
            clone4.position.set(position.x , position.y ,position.z - 6)
            const clone5 = obj.clone();
            clone5.position.set(position.x , position.y ,position.z - 8)
            const clone6 = obj.clone();
            clone5.position.set(position.x , position.y ,position.z + 2)

            const clone12 = obj.clone();
            clone12.position.set(-position.x , position.y ,position.z)
            const clone22 = obj.clone();
            clone22.position.set(-position.x , position.y ,position.z - 2)
            const clone32 = obj.clone();
            clone32.position.set(-position.x , position.y ,position.z - 4)
            const clone42 = obj.clone();
            clone42.position.set(-position.x , position.y ,position.z - 6)
            const clone52 = obj.clone();
            clone52.position.set(-position.x , position.y ,position.z - 8)
            const clone62 = obj.clone();
            clone52.position.set(-position.x , position.y ,position.z + 2)

            scene.add(clone1)
            scene.add(clone2)
            scene.add(clone3)
            scene.add(clone4)
            scene.add(clone5)
            scene.add(clone6)
            scene.add(clone12)
            scene.add(clone22)
            scene.add(clone32)
            scene.add(clone42)
            scene.add(clone52)
            scene.add(clone62)
          }
          
          if(obj.name == "Floor_Object"){
            // floor
            obj.visible = false
          }
         
          if(obj.name == "Statues_Team"){
            positionofcube = obj.position
            console.log(obj.position);
            
            obj.position.x = 0.5
            obj.position.y -= 0.1
            const clone2 = obj.clone();
            clone2.position.set(-0.5 , positionofcube.y ,positionofcube.z)
            const clone3 = obj.clone();
            clone3.position.set(-0.4 , positionofcube.y ,positionofcube.z - 1.5)
            const clone4 = obj.clone();
            clone4.position.set(0.4 , positionofcube.y ,positionofcube.z - 1.5)
            scene.add(clone2)
            scene.add(clone3)
            scene.add(clone4)
          }
          
        });

        let statue1 = loader.load('/models/Statue_Lukas_2.glb', (gltf) => {
          gltf.scene.position.x = positionofcube.x
          gltf.scene.position.y = positionofcube.y - 0.11
          gltf.scene.position.z = positionofcube.z

          gltf.scene.rotation.y = -50*  Math.PI / 180
          
            scene.add(gltf.scene);    
        })
        let statue2 = loader.load('/models/Statue_Mira_2.glb', (gltf) => {
          gltf.scene.position.x = positionofcube.x - 1
          gltf.scene.position.y = positionofcube.y - 0.11
          gltf.scene.position.z = positionofcube.z

          // gltf.scene.rotation.y = 45*  Math.PI / 180
          
            scene.add(gltf.scene);    
        })
        let statue3 = loader.load('/models/Statue_Tyna_2.glb', (gltf) => {
          gltf.scene.position.x = positionofcube.x - 0.9
          gltf.scene.position.y = positionofcube.y - 0.11
          gltf.scene.position.z = positionofcube.z - 1.5
          
            scene.add(gltf.scene);    
        })
        let statue4 = loader.load('/models/Statue_Venca_2.glb', (gltf) => {
          gltf.scene.position.x = positionofcube.x - 0.1
          gltf.scene.position.y = positionofcube.y - 0.11
          gltf.scene.position.z = positionofcube.z - 1.5

          gltf.scene.rotation.y = -50*  Math.PI / 180
          
            scene.add(gltf.scene);    
        })
        

        light1.position.x = 0 
        light1.position.y = positionofcube.y + 0.2
        light1.position.z = positionofcube.z + 0.2
        light2.position.x = 0 
        light2.position.y = positionofcube.y + 0.2
        light2.position.z = positionofcube.z + 0.2 - 1.5

        light3.position.x = camera.position.x
        light3.position.y = camera.position.y + 2.50
        light3.position.z = camera.position.z - 4.0

        scene.add(model);

        ////////////////////////////////////////////
        window.addEventListener('wheel', (e) => {
          if(isEntered){
            gsap.to(".scrollAnime",{
              opacity:0,
              duration:0.8
            })
            isScrollStared = true
          }
          
          if(scrollData.current >= 6.0){
            gsap.to(".contact",{
              opacity:1,
              y:0,
              duration:1
            })
          }
          if(scrollData.current < 6.0){
            gsap.to(".contact",{
              opacity:0,
              y:50,
              duration:1
            })
          }


          scrollData.isActive = true;
          scrollData.lastTime = Date.now();

          scrollData.target = THREE.MathUtils.clamp(
            scrollData.target + e.deltaY * animationSpeed,
            0,
            6.18
          );


        });
        ////////////////////
        window.addEventListener("mousemove",(dets)=>{
          let x = (dets.x / window.innerWidth)*2 - 1
          let y = (dets.y / window.innerHeight)*2 - 1
          
          gsap.to(camera.position,{
            x : x/30,
            y : -y/30,
            duration:1,
          })
          
        })
        ////////////////////


      // Animation loop
function animate() {
  requestAnimationFrame(animate);
  

 
  if(!isScrollStared){
    renderer.render(scene, camera);
    return;
  }
  if (scrollData.isActive && Date.now() - scrollData.lastTime > 200) {
    scrollData.isActive = false;
  }

  
  
  if (scrollData.current > JUMP_START && scrollData.current < JUMP_END) {
    // Going forward (down scroll)
  scene.background = backgroundTexture2;
  scene.fog = new THREE.FogExp2(0xF1DAF3, 0.11);
  animationSpeed = 0.0003;
  
  overlayMat.color = new THREE.Color(0x510173)
  overlayMat.opacity = 0.98
  model.traverse((obj) => {
    if(obj.name == "Cube007_1"){
  
      obj.traverse((child) => {
        if (child.isMesh && child.material) {      
          child.material.color.set(0xFFFFFF);
        }
      });
    }
  })
  
  } 
  else if (scrollData.current <= JUMP_START) {
    // Reset to default visuals
    scene.background = new THREE.Color(0x04001D);
    scene.fog = new THREE.FogExp2(0x04001D, 0.14);
    overlayMat.color = new THREE.Color(0x22004B)
            overlayMat.opacity = 0.90
            model.traverse((obj) => {
              if(obj.name == "Cube007_1"){
                obj.material.color = new THREE.Color(0.27236685156822205, 0, 0.9112716317176819)
              }
            })
    animationSpeed = 0.0004;
  }
    // Normal smooth interpolation for other ranges
    scrollData.current = THREE.MathUtils.lerp(
      scrollData.current,
      scrollData.target,
      0.1
    );
  



  if(scrollData.current > tree ){
    scene.fog = new THREE.FogExp2(0xF1DAF3, 0.03+(6.18 - scrollData.current))
  }

  // Update animation
  if (mixer) {
    mixer.setTime(scrollData.current * animationDuration);
  }
  
  renderer.render(scene, camera);
}


animate()



})    

/////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////


const sound = document.querySelector("audio")
let isAudioPlaying = false;
sound.muted = true
sound.pause()


let EnterBtn =document.querySelector(".loadPage .enter")
EnterBtn.addEventListener("click",()=>{

  isEntered = true;
  sound.muted = false
  sound.play()
  isAudioPlaying = true

  gsap.to(".Homepage",{
    opacity:1,
    duration:1
  })
  gsap.to(".loadPage",{
    opacity:0,
    duration:0.7,   
  })
  gsap.to(canvas,{
    opacity:1,
    duration:1.5
  })
  gsap.to(scene.fog, {
    density: 0.15,  // Lower value = less intense fog
    duration: 1.2,   
    onComplete:()=>{ EnterBtn.style.display = "hidden"}
  });
  gsap.to(".scrollAnime",{
    opacity:1,
    delay:0.8,
    duration:1
  })
  
})




document.querySelector(".sound").addEventListener("click",()=>{
  if(isAudioPlaying){
    document.querySelector(".soundF").style.opacity = 1
    document.querySelector(".soundP").style.opacity = 0
    document.querySelector(".soundText").innerHTML = "SOUND OFF"
    isAudioPlaying = false
    sound.muted = true
    sound.pause()
  }
  else{
    document.querySelector(".soundP").style.opacity = 1
    document.querySelector(".soundF").style.opacity = 0
    document.querySelector(".soundText").innerHTML = "SOUND ON"
    isAudioPlaying = true
    sound.muted = false
    sound.play()
  }
})