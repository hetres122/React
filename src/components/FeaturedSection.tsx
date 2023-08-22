import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import React from 'react';

interface Section {
  imgSrc: string;
  text: string;
  link: string;
}

const FeaturedSection = () => {
  const section: Section[] = [
    {
      imgSrc: 'krakow.jpg',
      text: 'Zwiedzaj Kraków',
      link: '/strona1',
    },
    {
      imgSrc: 'krakow.jpg',
      text: 'Zwiedzaj Kraków',
      link: '/strona1',
    },
    {
      imgSrc: 'krakow.jpg',
      text: 'Zwiedzaj Kraków',
      link: '/strona1',
    },
    {
      imgSrc: 'krakow.jpg',
      text: 'Zwiedzaj Kraków',
      link: '/strona1',
    },
    {
      imgSrc: 'krakow.jpg',
      text: 'Zwiedzaj Kraków',
      link: '/strona1',
    },
  ];

  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    rtl: true,
    slides: {
      perView: 5,
      spacing: 25,
    },
  });

  return (
    <section className="mx-20 mb-7 flex flex-col gap-12 pt-16 ">
      <div className="flex justify-center">
        <h2 className="text-2xl font-bold text-primary-500">
          Zobacz popularne miejsca
        </h2>
      </div>
      <div ref={ref} className="keen-slider pt-5 ">
        {section.map((src, idx) => (
          <div
            key={idx}
            className="keen-slider__slide bottom-1 flex flex-col justify-center gap-3 rounded-md border border-gray-300 p-4"
          >
            <img src={src.imgSrc} alt="wawel" className="h-96 rounded-md" />
            <p className="text-xl text-gray-800">{src.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;
