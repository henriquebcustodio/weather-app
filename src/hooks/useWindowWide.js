import { useEffect, useState } from 'react';

const useWindowWide = (size) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return width >= size;
};

export default useWindowWide;