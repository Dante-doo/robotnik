import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
    {
        src: "/CarouselPhotos/img1.png",
        alt: "First slide"
    },
    {
        src: "/CarouselPhotos/img2.png",
        alt: "Second slide"
    },
    {
        src: "/CarouselPhotos/img3.png",
        alt: "Third slide"
    },
    {
        src: "/CarouselPhotos/img4.png",
        alt: "Fourth slide"
    },
    {
        src: "/CarouselPhotos/img5.png",
        alt: "Fifith slide"
    },
    {
        src: "/CarouselPhotos/img6.png",
        alt: "Sixth slide"
    }
];

const MotionDiv = motion.div;

export function Carousel() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    const variants = {
        enter: () => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        },
        exit: () => ({
            x: direction < 0 ? 100 : -100,
            opacity: 0,
            transition: { duration: 0.5 }
        })
    };

    const nextSlide = () => {
        setDirection(1);
        setIndex((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="d-flex flex-column align-items-center w-100">
            <div
                className="position-relative overflow-hidden rounded w-100"
                style={{ maxWidth: "1000px", height: "500px" }}
            >
                <button
                    className="btn position-absolute top-50 start-0 translate-middle-y"
                    onClick={prevSlide}
                >
                    <FaChevronLeft />
                </button>

                <AnimatePresence custom={direction} mode="wait">
                    <MotionDiv
                        key={index}
                        className="top-0 start-0 w-100 h-100"
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        custom={direction}
                    >
                        <img
                            src={slides[index].src}
                            alt={slides[index].alt}
                            className="w-100 h-100 object-fit-cover"
                        />
                    </MotionDiv>
                </AnimatePresence>

                <button
                    className="btn position-absolute top-50 end-0 translate-middle-y"
                    onClick={nextSlide}
                >
                    <FaChevronRight />
                </button>
            </div>
        </div>
    );
}
