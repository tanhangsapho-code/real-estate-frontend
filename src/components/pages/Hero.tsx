export default function Hero() {
  return (
    <section id="home">
      <div className="relative h-screen w-full">
        <div
          className="bg-cover absolute inset-0 bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/a.jpg')",
            zIndex: -1,
          }}
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative container mx-auto h-full flex justify-center items-center z-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-white text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              Find Your Dream Home Today
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 px-4 sm:px-0">
              Discover the perfect property from our extensive collection of
              homes, apartments, and luxury estates.
            </p>
            <div className="flex justify-center">
              {/* <Button
              variant="secondary"
              className="text-sm sm:text-sm px-4 sm:px-6 py-2 "
            >
              Get house
            </Button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
