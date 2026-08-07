import Hero from "./components/hero/Hero";

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />

      <section
        id="journey"
        className="min-h-screen bg-white text-black flex items-center justify-center"
      >
        <h1 className="text-6xl font-light">
          Our Journey Begins...
        </h1>
      </section>
    </main>
  );
}