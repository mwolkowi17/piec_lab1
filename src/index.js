import * as THREE from 'three';
//import * as OrbitControls from 'three-orbitcontrols';
import { light2, light3, light4 } from './directlights.js';
//import { mixer, action, gltfLoader2 } from './loader';

export const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

scene.background = new THREE.Color( 0xFFFFFF );

scene.add(light2);
scene.add(light2.target);
scene.add(light3);
scene.add(light3.target);
scene.add(light4);
scene.add(light4.target);

camera.position.z = 8;
camera.position.y = 1.5;

const controls = new OrbitControls( camera, renderer.domElement );

//controls.update() must be called after any manual changes to the camera's transform
//camera.position.set( 0, 20, 100 );
controls.update();
controls.autoRotate=false;

const clock= new THREE.Clock();

const animate = function () {
    requestAnimationFrame(animate);

    //cube.rotation.x += 0.02;
    //cube.rotation.y += 0.01;
   
    var delta = clock.getDelta(); // clock is an instance of THREE.Clock

    renderer.render(scene, camera);
    controls.update()
}

animate();