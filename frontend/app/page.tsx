import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="bg-gray-300 text-black min-h-screen">
      <div className="bg-white">
        <div className="py-8 px-36">
          <Navbar />
        </div>
        <div>
          <Hero />
        </div>
      </div>
    </div>
  );
}
