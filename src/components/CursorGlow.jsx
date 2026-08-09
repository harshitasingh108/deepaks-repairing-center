import { useEffect, useState } from "react";

const CursorGlow = () => {
    const [position, setPosition] = useState({
        x: -100,
        y: -100,
    });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setPosition({
                x: event.clientX,
                y: event.clientY,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener(
                "mousemove",
                handleMouseMove
            );
        };
    }, []);

    return (
        <>
            {/* Outer Glow */}

            <div
                className="
          pointer-events-none
          fixed
          z-[9998]
          hidden
          h-14
          w-14
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-yellow-300/10
          blur-xl
          transition-[left,top]
          duration-100
          md:block
        "
                style={{
                    left: position.x,
                    top: position.y,
                }}
            />

            {/* Main Ring */}

            <div
                className="
          pointer-events-none
          fixed
          z-[9999]
          hidden
          h-7
          w-7
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-yellow-300/70
          bg-yellow-300/10
          shadow-[0_0_22px_rgba(250,204,21,0.55)]
          transition-[left,top]
          duration-75
          md:block
        "
                style={{
                    left: position.x,
                    top: position.y,
                }}
            />

            {/* Center Dot */}

            <div
                className="
          pointer-events-none
          fixed
          z-[10000]
          hidden
          h-1.5
          w-1.5
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-yellow-300
          shadow-[0_0_10px_rgba(250,204,21,0.9)]
          md:block
        "
                style={{
                    left: position.x,
                    top: position.y,
                }}
            />
        </>
    );
};

export default CursorGlow;