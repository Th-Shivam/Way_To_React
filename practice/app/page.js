import Spline from '@splinetool/react-spline/next';

const page = () => {
  return (
    <div className="w-full h-screen bg-black overflow-hidden relative">
      {/* Background 3D Scene */}
      <div className="absolute inset-0 z-0">
         <Spline
          scene="https://prod.spline.design/ikx3p5jrCZoCMbnN/scene.splinecode" 
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center pointer-events-none">
        <h1 className="text-white text-6xl md:text-8xl font-bold tracking-tighter mb-4 drop-shadow-2xl">
          MEDPROOF
        </h1>
        <p className="text-gray-300 text-xl md:text-2xl font-light tracking-widest uppercase">
          DeCentrallized Medicine Proof
        </p>
      </div>
    </div>
  );
};

export default page;

