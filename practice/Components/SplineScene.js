'use client';
import Spline from '@splinetool/react-spline/next';

export default function SplineScene() {
  return (
    <div className="w-full h-full">
      <Spline
        scene="https://prod.spline.design/ikx3p5jrCZoCMbnN/scene.splinecode" 
      />
    </div>
  );
}
