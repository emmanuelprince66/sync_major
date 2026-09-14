import { useEffect, useRef, useState } from "react";

export interface Slide {
  src: string;
  alt: string;
  /** Optional caption rendered as a pill over the image. */
  caption?: string;
}

interface ImageSliderProps {
  slides: Slide[];
  /** Tailwind aspect class, e.g. "aspect-[4/3.1]". */
  aspect?: string;
  className?: string;
  /** Milliseconds between auto-advances. */
  interval?: number;
  children?: React.ReactNode;
}

/**
 * Cross-fading image slider with dot navigation — the `.fslider` pattern from
 * the design files. Auto-advance pauses while a viewer is interacting.
 */
const ImageSlider = ({
  slides,
  aspect = "aspect-[4/3.1]",
  className = "",
  interval = 4000,
  children,
}: ImageSliderProps) => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;
  const pauseTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (count < 2 || paused) return;
    const id = window.setInterval(
      () => setCurrent((c) => (c + 1) % count),
      interval
    );
    return () => window.clearInterval(id);
  }, [count, interval, paused]);

  // Clean up the resume timer if the slider unmounts mid-pause.
  useEffect(() => () => window.clearTimeout(pauseTimer.current), []);

  const goTo = (i: number) => {
    setCurrent(i);
    setPaused(true);
    window.clearTimeout(pauseTimer.current);
    pauseTimer.current = window.setTimeout(() => setPaused(false), 8000);
  };

  return (
    <div
      className={`relative overflow-hidden rounded-[22px] ${aspect} ${className}`}
    >
      {slides.map((slide, i) => (
        <div
          key={slide.src + i}
          className={`absolute inset-0 transition-opacity duration-500 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== current}
        >
          <img
            src={slide.src}
            alt={slide.alt}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          {slide.caption && (
            <span className="absolute left-4 top-4 rounded-full bg-white/94 px-3.5 py-2 text-xs font-extrabold text-grey-900 shadow-sm">
              {slide.caption}
            </span>
          )}
        </div>
      ))}

      {children}

      {count > 1 && (
        <div className="absolute bottom-3.5 left-1/2 z-20 flex -translate-x-1/2 gap-[7px]">
          {slides.map((slide, i) => (
            <button
              key={slide.src + i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Show slide ${i + 1} of ${count}`}
              aria-current={i === current}
              className={`h-2 cursor-pointer rounded-full border-0 p-0 transition-all ${
                i === current ? "w-[22px] bg-white" : "w-2 bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
