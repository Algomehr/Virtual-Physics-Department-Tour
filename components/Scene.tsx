import React, { useRef, useEffect, forwardRef } from 'react';
import { useFirstPersonControls } from '../hooks/useFirstPersonControls';

// Since three.js is from a CDN, we declare it globally for TypeScript
declare const THREE: any;

export const Scene = forwardRef<HTMLCanvasElement>((props, ref) => {
  // FIX: Pass the forwarded ref to the useFirstPersonControls hook. The error "Expected 1 arguments, but got 0" indicates it was called without arguments.
  const { camera, updateControls } = useFirstPersonControls(ref);
  const modelRef = useRef<any>();

  useEffect(() => {
    if (!ref || typeof ref === 'function' || !ref.current) return;
    
    const canvas = ref.current;
    
    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87ceeb);
    scene.fog = new THREE.Fog(0x87ceeb, 50, 200);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(50, 100, 25);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 4096;
    directionalLight.shadow.mapSize.height = 4096;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 500;
    directionalLight.shadow.camera.left = -150;
    directionalLight.shadow.camera.right = 150;
    directionalLight.shadow.camera.top = 150;
    directionalLight.shadow.camera.bottom = -150;
    scene.add(directionalLight);

    // Vast Ground Plane
    const groundGeometry = new THREE.PlaneGeometry(500, 500);
    const groundMaterial = new THREE.MeshStandardMaterial({ color: 0x228b22, side: THREE.DoubleSide });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);
    
    const modelPath = '/public/Model.glb'; 
    const loader = new THREE.GLTFLoader();
    
    loader.load(
      modelPath,
      (gltf: any) => {
        console.log("Model loaded successfully!");
        const model = gltf.scene;

        model.position.y = -0.35;
        model.position.x = -150;
        model.position.z = 1;
        model.scale.set(0.1, 0.1, 0.1); 

        model.traverse((child: any) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            child.material.side = THREE.DoubleSide;
          }
        });

        scene.add(model);
        modelRef.current = model;

        // ======================= شروع تغییرات =======================

        // مرحله ۱: محاسبه محدوده مدل (Bounding Box)
        // یک کادر در بر گیرنده (Bounding Box) برای مدل ایجاد می‌کنیم تا ابعاد آن را بدانیم.
        const modelBoundingBox = new THREE.Box3().setFromObject(model);
        const padding = 10; // یک فاصله اضافی دور مدل برای اینکه درخت‌ها خیلی نزدیک ساخته نشوند

        // محدوده ممنوعه را بر اساس ابعاد مدل و فاصله اضافی تعریف می‌کنیم
        const exclusionZone = {
          minX: modelBoundingBox.min.x - padding,
          maxX: modelBoundingBox.max.x + padding,
          minZ: modelBoundingBox.min.z - padding,
          maxZ: modelBoundingBox.max.z + padding,
        };
        
        // مرحله ۲: منطق ساخت درخت‌ها به اینجا منتقل شده است
        const trees = new THREE.Group();
        const treeTrunkGeometry = new THREE.CylinderGeometry(0.2, 0.3, 2, 8);
        const treeTrunkMaterial = new THREE.MeshStandardMaterial({ color: 0x8B4513 });
        const treeFoliageGeometry = new THREE.ConeGeometry(1.5, 4, 8);
        const treeFoliageMaterial = new THREE.MeshStandardMaterial({ color: 0x006400 });

        // مرحله ۳: اصلاح حلقه ساخت درخت‌ها
        for (let i = 0; i < 200; i++) {
            const trunk = new THREE.Mesh(treeTrunkGeometry, treeTrunkMaterial);
            trunk.position.y = 1;
            trunk.castShadow = true;
            const foliage = new THREE.Mesh(treeFoliageGeometry, treeFoliageMaterial);
            foliage.position.y = 3;
            foliage.castShadow = true;
            const tree = new THREE.Group();
            tree.add(trunk);
            tree.add(foliage);

            let x, z, isInsideExclusionZone;
            
            // یک حلقه while ایجاد می‌کنیم تا زمانی که یک موقعیت مناسب (خارج از محدوده مدل) پیدا شود
            do {
                x = (Math.random() - 0.5) * 480;
                z = (Math.random() - 0.5) * 480;

                // چک می‌کنیم که آیا موقعیت تولید شده داخل محدوده ممنوعه است یا نه
                isInsideExclusionZone = 
                    x > exclusionZone.minX && x < exclusionZone.maxX &&
                    z > exclusionZone.minZ && z < exclusionZone.maxZ;

            } while (isInsideExclusionZone || (Math.abs(x) < 10 && Math.abs(z) < 10)); // موقعیت‌های خیلی نزدیک به مرکز را هم حذف می‌کنیم

            tree.position.set(x, 0, z); // موقعیت معتبر را تنظیم می‌کنیم
            
            const scale = Math.random() * 0.5 + 0.75;
            tree.scale.set(scale, scale, scale);
            trees.add(tree);
        }
        scene.add(trees);

        // ======================= پایان تغییرات =======================
      },
      (xhr: any) => {
        if (xhr.total > 0) {
          const percentLoaded = (xhr.loaded / xhr.total) * 100;
          console.log(`Model loading progress: ${percentLoaded.toFixed(2)}%`);
        }
      },
      (error: any) => {
        console.error(`Error loading model from ${modelPath}:`, error);
        // Fallback cube logic remains the same
        const fallbackGeometry = new THREE.BoxGeometry(2, 2, 2);
        const fallbackMaterial = new THREE.MeshStandardMaterial({ color: 0xffa500 });
        const fallbackCube = new THREE.Mesh(fallbackGeometry, fallbackMaterial);
        fallbackCube.position.y = 1;
        fallbackCube.castShadow = true;
        fallbackCube.receiveShadow = true;
        scene.add(fallbackCube);
        modelRef.current = fallbackCube;
      }
    );

    //Lights
    // یک لامپ در طبقه اول
    const pointLight_1 = new THREE.PointLight('white', 2, 25); // رنگ گرم، شدت ۱، برد ۱۰۰ واحد
    pointLight_1.position.set(1, 5, -10); // موقعیت لامپ در داخل ساختمان
    scene.add(pointLight_1);

    const pointLight_2 = new THREE.PointLight('white', 2, 25); // رنگ گرم، شدت ۱، برد ۱۰۰ واحد
    pointLight_2.position.set(20, 5, -30); // موقعیت لامپ در داخل ساختمان
    scene.add(pointLight_2);

    const pointLight_3 = new THREE.PointLight('white', 2, 25); // رنگ گرم، شدت ۱، برد ۱۰۰ واحد
    pointLight_3.position.set(-20, 5, -30); // موقعیت لامپ در داخل ساختمان
    scene.add(pointLight_3);

    const pointLight_4 = new THREE.PointLight('white', 2, 25); // رنگ گرم، شدت ۱، برد ۱۰۰ واحد
    pointLight_4.position.set(1, 35, -10); // موقعیت لامپ در داخل ساختمان
    scene.add(pointLight_4);

    const pointLight_5 = new THREE.PointLight('white', 2, 50); // رنگ گرم، شدت ۱، برد ۱۰۰ واحد
    pointLight_5.position.set(20, 35, -18); // موقعیت لامپ در داخل ساختمان
    scene.add(pointLight_5);

    const pointLight_6 = new THREE.PointLight('white', 2, 50); // رنگ گرم، شدت ۱، برد ۱۰۰ واحد
    pointLight_6.position.set(-20, 35, -18); // موقعیت لامپ در داخل ساختمان
    scene.add(pointLight_6);

    // Animation loop
    const clock = new THREE.Clock();
    let animationFrameId: number;
    
    const animate = () => {
      const delta = clock.getDelta();
      updateControls(delta);
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup logic should also be updated to handle trees if needed
    return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('resize', handleResize);
        
        // Dispose scene objects
        while(scene.children.length > 0){ 
            const object = scene.children[0];
            if(object.geometry) object.geometry.dispose();
            if(object.material) {
                // handle arrays of materials
                if(Array.isArray(object.material)){
                    object.material.forEach(material => material.dispose());
                } else {
                    object.material.dispose();
                }
            }
            scene.remove(object); 
        }
        
        renderer.dispose();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 

  // ... (rest of the component)
  
  return <canvas ref={ref} className="w-full h-full block" />;
});