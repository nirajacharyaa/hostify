import HeroForm from "./hero-form";

const Hero = () => {
  return (
    <section className="main-hero">
      <div className="container flex flex-col gap-6 py-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Find a <span className="text-accent-orange">host</span> for every
            journey
          </h2>
          <p className=" md:text-lg font-light">
            Discover the best local rental properties that fits your every
            travel needs.
          </p>
        </div>
        <HeroForm />
      </div>
    </section>
  );
};

export default Hero;
