import { useEffect, useRef } from 'react';

function MyComponent({backURL}) {
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const urlRef = useRef({ url: window.location.href });
  const mousePositionPer2SecondRef = useRef({ x: 0, y: 0 });
  const countRef = useRef(0);

  useEffect(() => {
    const updateInformation = (e) => {
      mousePositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const detect = () => {

      if (urlRef.current.url !== window.location.href){
        if(JSON.stringify(mousePositionRef.current) === JSON.stringify(mousePositionPer2SecondRef.current)){
          countRef.current += 1;
          if(countRef.current >= 3){
            console.log('crawling detected 3 times');
          }
        }
        else{
          countRef.current = 0;
        }
      }

      urlRef.current = { url: window.location.href };
      mousePositionPer2SecondRef.current = mousePositionRef.current;
      console.log(countRef.current);
    };

    const intervalId = setInterval(detect, 2000);

    window.addEventListener('mousemove', updateInformation);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('mousemove', updateInformation);
    };
  }, []);


  return;
}

export default MyComponent;