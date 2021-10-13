import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import 'bulma/css/bulma.min.css';

import { mainBody } from "../editable/config";
import { useEffect } from 'react';

import * as THREE from 'three';

export default function Home() {
  useEffect(() => {
    // Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const ambientLight = new THREE.AmbientLight(0xffffff);
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector('#bg'),
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(30);
    camera.position.setX(-3);

    renderer.render(scene, camera);

    // Torus
    const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
    const material = new THREE.MeshStandardMaterial({ color: 0x3b49df });
    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus);

    // Name
    const loader = new THREE.FontLoader();
    let textMyName;
    loader.load('./gentilis_regular.typeface.json', (font) => {
      const textGeometry = new THREE.TextGeometry("Dermot O'Brien", {
        font: font,
        size: 5,
        height: 1,
        color: '#ffbbff'
      })
      var textMaterial = new THREE.MeshPhongMaterial(
        { color: 0xff0000, specular: 0xffffff }
      );

      textMyName = new THREE.Mesh(textGeometry, textMaterial);

      scene.add(textMyName, ambientLight);
      textMyName.position.x -= 10;
      textMyName.position.y -= 3;
      textMyName.position.z -= 30;
    });

    // Lights
    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(5, 5, 5);

    scene.add(pointLight, ambientLight);

    function addStar() {
      const geometry = new THREE.SphereGeometry(0.25, 24, 24);
      const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
      const star = new THREE.Mesh(geometry, material);

      const [x, y, z] = Array(3)
        .fill(undefined)
        .map(() => THREE.MathUtils.randFloatSpread(100));

      star.position.set(x, y, z);
      scene.add(star);
    }

    Array(200).fill(undefined).forEach(addStar);


    // Avatar    
    let texture = new THREE.TextureLoader().load('./me.png');
    let myPhoto = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 2), new THREE.MeshBasicMaterial({ map: texture }));
    scene.add(myPhoto);

    myPhoto.position.z = -5;
    myPhoto.position.x = 2;

    // Scroll Animation
    function moveCamera() {
      const t = document.body.getBoundingClientRect().top;

      if (textMyName) {
        textMyName.rotation.x += 0.05;
        textMyName.rotation.y += 0.075;
        textMyName.rotation.z += 0.001;
      }

      myPhoto.rotation.y += 0.01;
      myPhoto.rotation.z += 0.01;

      camera.position.z = t * -0.01;
      camera.position.x = t * -0.0002;
      camera.rotation.y = t * -0.0002;
    }

    document.body.onscroll = moveCamera;
    moveCamera();

    // Animation Loop
    function animate() {
      requestAnimationFrame(animate);

      torus.rotation.x += 0.01;
      torus.rotation.y += 0.005;
      torus.rotation.z += 0.01;


      if (textMyName) {
        textMyName.rotation.x += 0.03;
        textMyName.rotation.y += 0.005;
        textMyName.rotation.z += 0.005;
      }
      renderer.render(scene, camera);
    }
    animate();

  })
  return (

    <div className={styles.container}>
      <Head>
        <title>Welcome | DERMOT OBRIEN</title>
        <meta name="description" content="Hello, I'm Dermot O'Brien. I'm a fullstack developer with particular interests in security and startups." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <canvas className="threeD" id="bg">

      </canvas>

      <main className={styles.main}>

        <div>
          <section>
            <h1 className="is-size-1 is-uppercase has-text-weight-bold">
              <a>{mainBody.firstName} {mainBody.lastName}</a>. <br />

            </h1>
            <div className="is-size-5">
              I'm an entrepreneur and fullstack developer.
            </div>

            <Resume />

            <Contact />

          </section>


        </div>
      </main>

    </div>
  )
}

