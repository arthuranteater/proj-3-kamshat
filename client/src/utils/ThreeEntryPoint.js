import * as THREE from "three";

export default function ThreeEntryPoint(sceneRef) {
  let scene, camera, renderer, cone;

  const init = function() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color("red");

    camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.x = 5;
    camera.position.y = 6;
    camera.position.z = 5;
    camera.lookAt(scene.position);
    var light = new THREE.PointLight( 0xff0000, 1, 100 );
    light.position.set( 50, 50, 50 );
    scene.add( light );

    renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);

    sceneRef.appendChild(renderer.domElement);
    // let controls = new OrbitControls(camera, sceneRef);
    // controls.target.set(1, 2, 3);
    // controls.rotateSpeed = 0.9;
    // controls.update();

    const geometry = new THREE.ConeGeometry(1, 4);
    // const texture = loadTexture(require("../textures/cone.jpg"))
    // const material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    // function createConeMaterial() {
    //   const coneTexture = THREE.TextureLoader(
    //     url("../textures/waffle.jpg")
    //   );
    //     console.log(coneTexture)
    //   var coneMaterial = new THREE.MeshBasicMaterial();
    //   coneMaterial.map = coneTexture;
    //   return coneMaterial;
    // }

    const material = new THREE.MeshNormalMaterial();
    cone = new THREE.Mesh(geometry, material);
    cone.rotation.setFromVector3(new THREE.Vector3( 10, 10, 7));
    scene.add(cone);
  };

  const animate = function() {
    requestAnimationFrame(animate);
    cone.rotation.z += 0.01;
    renderer.render(scene, camera);
  };

  const onWindowResize = function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };

  window.addEventListener("resize", onWindowResize, false);
  init();
  animate();
}
