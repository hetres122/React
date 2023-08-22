const HowItWork = () => {
  return (
    <section className="container mx-auto my-12 flex flex-col gap-16  px-8">
      <h2 className="text-4xl text-primary-500 ">Jak to działa</h2>
      <div className="mx-auto  grid grid-cols-1  gap-x-5 gap-y-20 md:grid-cols-2">
        {/*Step 01    */}
        <div className="">
          <p className="mb-2 text-7xl font-extrabold text-gray-300">01</p>
          <h3 className="mb-2 text-2xl font-extrabold tracking--0.5 text-gray-900">
            Wybierz swojego idealnego przewodnika
          </h3>
          <p className="leading-relaxed ">
            Wzbogać swoją podróż dzięki zróżnicowanej bibliotece przewodników
            audio, która oferuje bogactwo tematów, stylów i głosów. Wybierz
            przewodnika, który będzie pasował do Twoich zainteresowań i
            nastroju.
          </p>
        </div>

        <div className="relative row-start-1 flex h-96 items-center justify-center md:row-start-2">
          <img
            src="bitmapa.png"
            className="absolute z-[1] w-72"
            alt="iPhone app preferences selection screen"
          />
          <div className="absolute left-1/2 top-1/2 w-[60%] -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-primary-100 pb-[60%]"></div>
          <div className="absolute left-1/2 top-1/2 w-[45%] -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-primary-200 pb-[45%]"></div>
        </div>
        {/*Step 02    */}
        <div className="relative flex h-96 items-center justify-center">
          <img
            src="bitmapa.png"
            className="absolute z-[1] w-72"
            alt="iPhone app preferences selection screen"
          />
          <div className="absolute left-1/2 top-1/2 w-[60%] -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-primary-100 pb-[60%]"></div>
          <div className="absolute left-1/2 top-1/2 w-[45%] -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-primary-200 pb-[45%]"></div>
        </div>

        <div className="">
          <p className="mb-2 text-7xl font-extrabold text-gray-300">02</p>
          <h3 className="mb-2 text-2xl font-extrabold tracking--0.5 text-gray-900">
            Odkryj idealną trasę dla swojej przygody
          </h3>
          <p className="leading-relaxed ">
            Ciesz się dostępem do różnorodnych tras, które poprowadzą Cię przez
            fascynujące miejsca, ukryte skarby i lokalne historie. Wybierz tę,
            która zapewni Ci najbardziej satysfakcjonujące doświadczenia.
          </p>
        </div>

        {/*Step 03    */}
        <div className=" md:row-start-5">
          <p className="mb-2 text-7xl font-extrabold text-gray-300">03</p>
          <h3 className="mb-2 text-2xl font-extrabold tracking--0.5 text-gray-900 ">
            Odkrywaj miasto w nowy sposób
          </h3>
          <p className="leading-relaxed ">
            Poznaj nie tylko główne atrakcje, ale także tajemnicze zakamarki i
            ukryte skarby miasta. Oddaj się narracjom, które wzbogacą Twoje
            zrozumienie i odczucia związane z miejscem, które zwiedzasz.
          </p>
        </div>
        <div className="relative row-start-5 flex h-96 items-center justify-center ">
          <img
            src="bitmapa.png"
            className="absolute z-[1] w-72"
            alt="iPhone app preferences selection screen"
          />
          <div className="absolute left-1/2 top-1/2 w-[60%] -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-primary-100 pb-[60%]"></div>
          <div className="absolute left-1/2 top-1/2 w-[45%] -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-primary-200 pb-[45%]"></div>
        </div>
      </div>
      {/*<div className="grid grid-cols-3 gap-9">*/}
      {/*    <div className=" flex flex-col">*/}
      {/*        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}*/}
      {/*             stroke="currentColor" className="w-14 h-14 text-primary-500 bg-primary-100 p-3 rounded-full ">*/}
      {/*            <path strokeLinecap="round" strokeLinejoin="round"*/}
      {/*                  d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"/>*/}
      {/*        </svg>*/}

      {/*        <h3 className="font-bold text-2xl pt-8">Podążaj za dźwiękiem</h3>*/}
      {/*        <p className="pt-3 leading-8">Gdy dotrzesz do wybranego miejsca, włącz aplikację i włącz tryb Audio*/}
      {/*            Zwiedzania. Teraz wystarczy podążać za dźwiękiem, który przewodnik będzie opowiadał na temat danego*/}
      {/*            miejsca. Dzięki temu będziesz mógł słuchać ciekawostek, historii i opowieści związanych z miejscem,*/}
      {/*            w którym się znajdujesz.</p>*/}
      {/*    </div>*/}
      {/*    <div className=" flex flex-col">*/}
      {/*        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}*/}
      {/*             stroke="currentColor" className="w-14 h-14 text-primary-500 bg-primary-100 p-3 rounded-full">*/}
      {/*            <path strokeLinecap="round" strokeLinejoin="round"*/}
      {/*                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"/>*/}
      {/*        </svg>*/}

      {/*        <h3 className="font-bold text-2xl pt-8">Odkrywaj na własnym tempie</h3>*/}
      {/*        <p className="pt-3 leading-8">Nasza aplikacja pozwala Ci odkrywać miejsca turystyczne w swoim własnym*/}
      {/*            tempie. Możesz zatrzymać się, gdy coś Cię zainteresuje, albo kontynuować podróż, gdy będziesz*/}
      {/*            gotowy. To Ty decydujesz, jak długo chcesz spędzić w danym miejscu i jakie aspekty chcesz*/}
      {/*            zgłębić.</p>*/}
      {/*    </div>*/}
      {/*    <div className="flex flex-col">*/}
      {/*        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}*/}
      {/*             stroke="currentColor" className="w-14 h-14 text-primary-500 bg-primary-100 p-3 rounded-full">*/}
      {/*            <path strokeLinecap="round" strokeLinejoin="round"*/}
      {/*                  d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"/>*/}
      {/*        </svg>*/}

      {/*        <h3 className="font-bold text-2xl pt-8">Personalizacja i interakcje</h3>*/}
      {/*        <p className="pt-3 leading-8">Aplikacja Audio Zwiedzanie daje Ci również możliwość personalizacji*/}
      {/*            doświadczenia zwiedzania. Możesz wybrać język, w którym chcesz słuchać przewodnika, dostosować*/}
      {/*            ustawienia dźwięku i interakcji oraz korzystać z dodatkowych funkcji, takich jak notatki czy*/}
      {/*            zakładki, które pomogą Ci organizować swoje zwiedzanie.</p>*/}
      {/*    </div>*/}

      {/*</div>*/}
    </section>
  );
};
export default HowItWork;
