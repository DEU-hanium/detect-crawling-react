import { useEffect, useRef } from 'react';

function MyComponent({backURL}) {
  const mousePositionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      mousePositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const logMousePosition = () => {
      console.log(`Mouse Position: x=${mousePositionRef.current.x}, y=${mousePositionRef.current.y}`);
    };

    const intervalId = setInterval(logMousePosition, 3000);

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);


  return;
}

export default MyComponent;
