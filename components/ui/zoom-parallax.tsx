'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

interface Image {
    src: string;
    alt?: string;
}

interface ZoomParallaxProps {
    /** Array of images to be displayed in the parallax effect max 7 images */
    images: Image[];
    children?: React.ReactNode;
}

export function ZoomParallax({ images, children }: ZoomParallaxProps) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    });

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const textScale = useTransform(scrollYProgress, [0, 0.5], [1, 3]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

    const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];

    // Define responsive positioning for images to ensure they fit well on all screen sizes
    const getStyles = (index: number) => {
        switch (index) {
            case 1:
                return "md:[&>div]:!-top-[30vh] md:[&>div]:!left-[5vw] md:[&>div]:!h-[30vh] md:[&>div]:!w-[35vw] [&>div]:!-top-[22vh] [&>div]:!left-[10vw] [&>div]:!h-[18vh] [&>div]:!w-[45vw]";
            case 2:
                return "md:[&>div]:!-top-[10vh] md:[&>div]:!-left-[25vw] md:[&>div]:!h-[45vh] md:[&>div]:!w-[20vw] [&>div]:!-top-[10vh] [&>div]:!-left-[22vw] [&>div]:!h-[25vh] [&>div]:!w-[35vw]";
            case 3:
                return "md:[&>div]:!left-[27.5vw] md:[&>div]:!h-[25vh] md:[&>div]:!w-[25vw] [&>div]:!left-[25vw] [&>div]:!top-[5vh] [&>div]:!h-[18vh] [&>div]:!w-[35vw]";
            case 4:
                return "md:[&>div]:!top-[27.5vh] md:[&>div]:!left-[18vw] md:[&>div]:!h-[25vh] md:[&>div]:!w-[20vw] [&>div]:!top-[24vh] [&>div]:!left-[15vw] [&>div]:!h-[18vh] [&>div]:!w-[35vw]";
            case 5:
                return "md:[&>div]:!top-[27.5vh] md:[&>div]:!-left-[10vw] md:[&>div]:!h-[25vh] md:[&>div]:!w-[30vw] [&>div]:!top-[26vh] [&>div]:!-left-[12vw] [&>div]:!h-[20vh] [&>div]:!w-[45vw]";
            case 6:
                return "md:[&>div]:!top-[22.5vh] md:[&>div]:!left-[25vw] md:[&>div]:!h-[15vh] md:[&>div]:!w-[15vw] [&>div]:!top-[15vh] [&>div]:!left-[22vw] [&>div]:!h-[12vh] [&>div]:!w-[25vw]";
            default:
                return "";
        }
    };

    return (
        <div ref={container} className="relative h-[150vh]">
            <div className="sticky top-0 h-screen overflow-hidden bg-black flex items-center justify-center">
                {images.map(({ src, alt }, index) => {
                    const scale = scales[index % scales.length];

                    return (
                        <motion.div
                            key={index}
                            style={{ scale }}
                            className={`absolute top-0 flex h-full w-full items-center justify-center z-10 ${getStyles(index)}`}
                        >
                            <div className="relative h-[20vh] w-[60vw] md:h-[25vh] md:w-[25vw] overflow-hidden rounded-sm shadow-2xl transition-all duration-500 hover:ring-1 hover:ring-white/20">
                                <img
                                    src={src || '/placeholder.svg'}
                                    alt={alt || `Parallax image ${index + 1}`}
                                    className="h-full w-full object-cover"
                                    loading={index < 3 ? "eager" : "lazy"}
                                />
                            </div>
                        </motion.div>
                    );
                })}

                {children && (
                    <motion.div
                        style={{ scale: textScale, opacity: textOpacity }}
                        className="absolute z-[100] pointer-events-none flex flex-col items-center justify-center drop-shadow-[0_0_20px_rgba(0,0,0,0.9)] p-4 text-center max-w-[90vw]"
                    >
                        {children}
                    </motion.div>
                )}
            </div>
        </div>
    );
}
