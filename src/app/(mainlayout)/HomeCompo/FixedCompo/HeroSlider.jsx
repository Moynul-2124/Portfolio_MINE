



'use client';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function HeroSlider() {
  const slides = [
    {
      image:
        'https://news.cnrs.fr/sites/default/files/styles/visuel_principal/public/assets/images/adobestock_290833398_72dpi.jpg',
    },
    {
      image:
        'https://w0.peakpx.com/wallpaper/128/635/HD-wallpaper-man-silhouette-alone-light-ray-dark-black.jpg',
    },
    {
      image:
        'https://p0.piqsels.com/preview/929/680/902/adult-art-backlit-backyard.jpg',
    },
  ];

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-10">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        interval={4000}
        showStatus={false}
        swipeable
        emulateTouch
        dynamicHeight={false}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[300px] sm:h-[400px] md:h-[500px]">
            <Image
              src={slide.image}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 1280px"
              priority
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
