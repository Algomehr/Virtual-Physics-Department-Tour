import { useEffect, useRef, useCallback, Ref, useState } from 'react';

// Since three.js is loaded from a CDN, we need to declare it globally for TypeScript
declare const THREE: any;

const MOVEMENT_SPEED = 8.0;
const MOUSE_SENSITIVITY = 0.002;

// FIX: Accept a ref to the target element for more precise pointer lock checks.
export const useFirstPersonControls = (targetRef: Ref<HTMLCanvasElement>) => {
  const camera = useRef(new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000));
  const euler = useRef(new THREE.Euler(0, 0, 0, 'YXZ'));
  const velocity = useRef(new THREE.Vector3());
  const moveForward = useRef(false);
  const moveBackward = useRef(false);
  const moveLeft = useRef(false);
  const moveRight = useRef(false);
  const moveUp = useRef(false);
  const moveDown = useRef(false);

  // State for touch controls UI
  const [joystick, setJoystick] = useState<{ base: { x: number, y: number } | null, stick: { x: number, y: number } | null }>({ base: null, stick: null });
  const lookTouch = useRef<{ id: number | null, lastX: number, lastY: number }>({ id: null, lastX: 0, lastY: 0 });
  const moveTouch = useRef<{ id: number | null }>({ id: null });


  useEffect(() => {
    camera.current.position.set(0, 2, 10);
  }, []);

  const onMouseMove = useCallback((event: MouseEvent) => {
    // FIX: Check against the specific element ref for pointer lock.
    const element = targetRef && typeof targetRef !== 'function' ? targetRef.current : null;
    if (document.pointerLockElement === element) {
      euler.current.y -= event.movementX * MOUSE_SENSITIVITY;
      euler.current.x -= event.movementY * MOUSE_SENSITIVITY;
      euler.current.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, euler.current.x));
      camera.current.quaternion.setFromEuler(euler.current);
    }
  }, [targetRef]);

  const onKeyDown = useCallback((event: KeyboardEvent) => {
    switch (event.code) {
      case 'ArrowUp':
      case 'KeyW':
        moveForward.current = true;
        break;
      case 'ArrowLeft':
      case 'KeyA':
        moveLeft.current = true;
        break;
      case 'ArrowDown':
      case 'KeyS':
        moveBackward.current = true;
        break;
      case 'ArrowRight':
      case 'KeyD':
        moveRight.current = true;
        break;
      case 'Space':
        moveUp.current = true;
        break;
      case 'ShiftLeft':
      case 'ShiftRight':
        moveDown.current = true;
        break;
    }
  }, []);
  
  const onKeyUp = useCallback((event: KeyboardEvent) => {
    switch (event.code) {
      case 'ArrowUp':
      case 'KeyW':
        moveForward.current = false;
        break;
      case 'ArrowLeft':
      case 'KeyA':
        moveLeft.current = false;
        break;
      case 'ArrowDown':
      case 'KeyS':
        moveBackward.current = false;
        break;
      case 'ArrowRight':
      case 'KeyD':
        moveRight.current = false;
        break;
      case 'Space':
        moveUp.current = false;
        break;
       case 'ShiftLeft':
      case 'ShiftRight':
        moveDown.current = false;
        break;
    }
  }, []);

  // Touch event handlers
  const onTouchStart = useCallback((event: TouchEvent) => {
    if (document.pointerLockElement) return;
    event.preventDefault();

    for (const touch of Array.from(event.changedTouches)) {
        if (touch.clientX < window.innerWidth / 2 && moveTouch.current.id === null) {
            moveTouch.current.id = touch.identifier;
            setJoystick({ base: { x: touch.clientX, y: touch.clientY }, stick: { x: 0, y: 0 }});
        } else if (touch.clientX >= window.innerWidth / 2 && lookTouch.current.id === null) {
            lookTouch.current.id = touch.identifier;
            lookTouch.current.lastX = touch.clientX;
            lookTouch.current.lastY = touch.clientY;
        }
    }
  }, []);

  const onTouchMove = useCallback((event: TouchEvent) => {
    if (document.pointerLockElement) return;
    event.preventDefault();

    for (const touch of Array.from(event.changedTouches)) {
        if (touch.identifier === moveTouch.current.id && joystick.base) {
            const dx = touch.clientX - joystick.base.x;
            const dy = touch.clientY - joystick.base.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const maxDist = 60;

            const stickX = dist === 0 ? 0 : (dx / dist) * Math.min(dist, maxDist);
            const stickY = dist === 0 ? 0 : (dy / dist) * Math.min(dist, maxDist);
            
            setJoystick(prev => ({ ...prev, stick: { x: stickX, y: stickY }}));

            const deadZone = 15;
            moveForward.current = stickY < -deadZone;
            moveBackward.current = stickY > deadZone;
            moveLeft.current = stickX < -deadZone;
            moveRight.current = stickX > deadZone;
        } else if (touch.identifier === lookTouch.current.id) {
            const deltaX = touch.clientX - lookTouch.current.lastX;
            const deltaY = touch.clientY - lookTouch.current.lastY;

            euler.current.y -= deltaX * MOUSE_SENSITIVITY * 2.5;
            euler.current.x -= deltaY * MOUSE_SENSITIVITY * 2.5;
            euler.current.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, euler.current.x));
            camera.current.quaternion.setFromEuler(euler.current);

            lookTouch.current.lastX = touch.clientX;
            lookTouch.current.lastY = touch.clientY;
        }
    }
  }, [joystick.base, euler]);

  const onTouchEnd = useCallback((event: TouchEvent) => {
    if (document.pointerLockElement) return;
    event.preventDefault();

    for (const touch of Array.from(event.changedTouches)) {
        if (touch.identifier === moveTouch.current.id) {
            moveTouch.current.id = null;
            setJoystick({ base: null, stick: null });
            moveForward.current = false;
            moveBackward.current = false;
            moveLeft.current = false;
            moveRight.current = false;
        } else if (touch.identifier === lookTouch.current.id) {
            lookTouch.current.id = null;
        }
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);
    
    const canvasEl = targetRef && typeof targetRef !== 'function' ? targetRef.current : null;
    if (canvasEl) {
        canvasEl.addEventListener('touchstart', onTouchStart, { passive: false });
        canvasEl.addEventListener('touchmove', onTouchMove, { passive: false });
        canvasEl.addEventListener('touchend', onTouchEnd, { passive: false });
        canvasEl.addEventListener('touchcancel', onTouchEnd, { passive: false });
    }

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('keyup', onKeyUp);
      if (canvasEl) {
        canvasEl.removeEventListener('touchstart', onTouchStart);
        canvasEl.removeEventListener('touchmove', onTouchMove);
        canvasEl.removeEventListener('touchend', onTouchEnd);
        canvasEl.removeEventListener('touchcancel', onTouchEnd);
      }
    };
  }, [onMouseMove, onKeyDown, onKeyUp, onTouchStart, onTouchMove, onTouchEnd, targetRef]);

  // FIX: Memoize updateControls with useCallback to ensure it's stable across renders.
  const updateControls = useCallback((delta: number) => {
    // Apply damping
    velocity.current.x -= velocity.current.x * 10.0 * delta;
    velocity.current.z -= velocity.current.z * 10.0 * delta;
    velocity.current.y -= velocity.current.y * 10.0 * delta;

    const direction = new THREE.Vector3();
    
    direction.z = Number(moveForward.current) - Number(moveBackward.current);
    direction.x = Number(moveRight.current) - Number(moveLeft.current);
    direction.y = Number(moveUp.current) - Number(moveDown.current);
    direction.normalize(); // Ensure consistent movement speed in all directions

    if (moveForward.current || moveBackward.current) {
        velocity.current.z -= direction.z * MOVEMENT_SPEED * delta * 10;
    }
    if (moveLeft.current || moveRight.current) {
        velocity.current.x -= direction.x * MOVEMENT_SPEED * delta * 10;
    }
    if (moveUp.current || moveDown.current) {
        velocity.current.y += direction.y * MOVEMENT_SPEED * delta * 10;
    }

    camera.current.translateX(-velocity.current.x * delta);
    camera.current.translateY(velocity.current.y * delta);
    camera.current.translateZ(velocity.current.z * delta);
  }, []);
  
  return { camera: camera.current, updateControls, joystick };
};