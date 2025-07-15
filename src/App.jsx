import { Routes, Route } from "react-router";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <section className="min-h-screen bg-amber-300">
        {/* <Boxes/> */}
      </section>
      <section className="h-screen bg-amber-700">1</section>
      <section className="h-screen bg-blue-500">1</section>
    </>
  )
}

export default App
