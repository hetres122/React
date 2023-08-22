import React from 'react';
import { Link } from 'react-router-dom';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

interface Image {
  img: string;
  text: string;
  link: string;
  textToLink: string;
}

const HeroSection: React.FC = () => {
  const images: Image[] = [
    {
      img: 'jonas-leupe-WargGLQW_Yk-unsplash.jpg',
      text: 'Pobierz naszą aplikację i odkryj świat!',
      link: '/strona1',
      textToLink: 'Pobierz teraz',
    },
    {
      img: 'pexels-matt-hardy-2272940.jpg',
      text: 'Odkrywaj fascynujące miejsca i twórz własne przewodniki!',
      link: '/strona2',
      textToLink: 'Rozpocznij teraz',
    },
    {
      img: 'sarah-brown-gDFynEQcDkI-unsplash.jpg',
      text: 'Otwórz drzwi do nowej rzeczywistości i poznawaj nieodkryte tajemnice!',
      link: '/strona3',
      textToLink: 'Rozpocznij teraz',
    },
  ];

  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      slider => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 10000);
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      },
    ],
  );

  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="keen-slider__slide h-105 transition-opacity  duration-1000 ease-in-out sm:h-100"
          >
            <img
              src={src.img}
              className="h-full w-auto object-cover brightness-50 sm:w-full"
              alt={src.text}
            />

            <div className="absolute left-1/3 top-1/2 flex w-96 -translate-x-28 -translate-y-2/4 flex-col gap-3 text-white sm:left-1/4">
              <h1 className="w-48 text-left font-bold sm:w-full sm:text-4xl">
                {src.text}
              </h1>
              <Link to={src.link}>
                <p className="w-fit rounded-md bg-primary-200 p-3 text-center hover:bg-primary-700">
                  {src.textToLink}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HeroSection;
