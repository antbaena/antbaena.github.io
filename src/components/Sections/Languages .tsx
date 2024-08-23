import classNames from 'classnames';
import { FC, memo, useEffect, useMemo, useRef, useState } from 'react';
import { isApple, isMobile } from '../../config';
import { Skills, SectionId } from '../../data/data';
import useWindow from '../../hooks/useWindow';
import Section from '../Layout/Section';



const Languages: FC = memo(() => {
  const [parallaxEnabled, setParallaxEnabled] = useState(false);

  const itemWidth = useRef(0);
  const scrollContainer = useRef<HTMLDivElement>(null);

  const { width } = useWindow();

  const { imageSrc, items } = Skills;
  const resolveSrc = useMemo(() => {
    if (!imageSrc) return undefined;
    return typeof imageSrc === 'string' ? imageSrc : imageSrc.src;
  }, [imageSrc]);

  useEffect
  // Mobile iOS doesn't allow background-fixed elements
  useEffect(() => {
    setParallaxEnabled(!(isMobile && isApple));
  }, []);

  useEffect(() => {
    itemWidth.current = scrollContainer.current ? scrollContainer.current.offsetWidth : 0;
  }, [width]);

  return (
    <Section noPadding sectionId={SectionId.Skills}>
      <div
        className={classNames(
          'flex w-full items-center justify-center bg-cover bg-center px-4 py-16 md:py-24 lg:px-8',
          parallaxEnabled && 'bg-fixed',
          { 'bg-neutral-700': !imageSrc },
        )}
        style={imageSrc ? { backgroundImage: `url(${resolveSrc}` } : undefined}>
        <div className="z-10 w-full max-w-screen-md px-4 lg:px-0">
          <h1 className="text-4xl font-bold text-white sm:text-md lg:text-4xl m-5 text-center">Skills in Programming Languages and Technologies</h1>
          <div className="flex flex-col items-center gap-y-6 rounded-xl bg-bluey/60 p-6 shadow-lg">
            <div
              className="no-scrollbar flex w-full touch-pan-x snap-x snap-mandatory gap-x-6 overflow-x-auto scroll-smooth"
              ref={scrollContainer}>
            </div>

            {/* Mapea los datos para renderizar los logos */}
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
              {items.map(({ name, image }) => (
                <div key={name} className="flex flex-col items-center p-2 bg-black bg-opacity-20 rounded-xl">
                  <img src={image} alt={name} className="h-12 w-12" />
                  <p className="text-white">{name}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </Section>
  );
});


export default Languages;
