

const HeroSection = () => {
  return (
     <div
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('image 1.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Text Content */}
      <div className="absolute z-1 flex flex-col items-start justify-center h-full px-8 md:px-20 text-white max-w-4xl">
        <h1 className="text-5xl font-serif font-bold leading-tight mb-6">
          Shape Your Future at University College
        </h1>
        <p className="text-lg md:text-xl font-semibold">
          Access world-class education, cutting-edge research facilities, and a vibrant campus
          life designed to empower your academic journey.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
