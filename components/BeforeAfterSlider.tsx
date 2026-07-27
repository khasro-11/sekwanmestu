"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";

export default function BeforeAfterSlider() {
  const [pos, setPos] = useState(50);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = trackRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, Math.round(pct))));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as Element).setPointerCapture?.(e.pointerId);
    setFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    setFromClientX(e.clientX);
  };
  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <div
      ref={trackRef}
      className="ba-slider"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <div className="ba-slider__layer">
        <Image
          src="/before-after/badnachher.jpg"
          alt="Bad nach der Reinigung"
          fill
          sizes="(max-width: 900px) 100vw, 900px"
          className="ba-slider__image"
          priority
        />
      </div>
      <div
        className="ba-slider__layer"
        style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
      >
        <Image
          src="/before-after/badvorher.jpg"
          alt="Bad vor der Reinigung"
          fill
          sizes="(max-width: 900px) 100vw, 900px"
          className="ba-slider__image"
          priority
        />
      </div>
      <div className="ba-slider__divider" style={{ left: `${pos}%` }} />
      <span className="ba-slider__tag ba-slider__tag--before">VORHER</span>
      <span className="ba-slider__tag ba-slider__tag--after">NACHHER</span>
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Vorher-Nachher-Vergleich"
        className="ba-slider__range"
      />
    </div>
  );
}
