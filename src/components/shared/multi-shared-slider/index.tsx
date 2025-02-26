import { useCallback, useEffect, useState, useRef } from "react";
import "./style.css";

type Props = {
  min: number;
  max: number;
  step?: number; // 👈 Add step as a prop
  unit?: string; // 👈 New: Defines the unit ($, ft², etc.)
  onChange: (min: number, max: number) => void;
};

let timeoutId: NodeJS.Timeout;

const MultiRangeSlider = ({
  min,
  max,
  step = 500,
  unit = "$",
  onChange,
}: Props) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef<HTMLDivElement>(null);

  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);
    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);
    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  useEffect(() => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      onChange(minVal, maxVal);
    }, 300);
  }, [minVal, maxVal]);

  return (
    <div id="multi-range-slider">
      <input
        type="range"
        min={min}
        max={max}
        step={step} // 👈 Dynamic step
        value={minVal}
        onChange={(event) => {
          const value = Math.min(
            Math.round(Number(event.target.value) / step) * step,
            maxVal - step
          );
          setMinVal(value);
          minValRef.current = value;
        }}
        className="thumb thumb--left"
        style={{ zIndex: minVal > max - 100 ? "5" : undefined }}
      />
      <input
        type="range"
        min={min}
        max={max}
        step={step} // 👈 Dynamic step
        value={maxVal}
        onChange={(event) => {
          const value = Math.max(
            Math.round(Number(event.target.value) / step) * step,
            minVal + step
          );
          setMaxVal(value);
          maxValRef.current = value;
        }}
        className="thumb thumb--right"
      />

      <div className="slider">
        <div className="slider__track" />
        <div ref={range} className="slider__range" />
        <div className="slider__left-value flex">
          <p className="text-[20px]">{unit}</p>
          <input
            type="number"
            value={minVal}
            step={step} // 👈 Dynamic step
            onChange={(e) => {
              const value = Math.max(
                min,
                Math.min(Number(e.target.value), maxVal - step)
              );
              setMinVal(value);
              minValRef.current = value;
            }}
            style={{ width: "72px", textAlign: "center" }}
          />
        </div>
        <div className="slider__right-value flex">
          <p className="text-[20px]">{unit}</p>
          <input
            type="number"
            value={maxVal}
            step={step} // 👈 Dynamic step
            onChange={(e) => {
              const value = Math.min(
                max,
                Math.max(Number(e.target.value), minVal + step)
              );
              setMaxVal(value);
              maxValRef.current = value;
            }}
            style={{ width: "72px", textAlign: "center" }}
          />
        </div>
      </div>
    </div>
  );
};

export default MultiRangeSlider;
