import Navbar from "/src/components/Navbar.js";
import Hero from "/src/components/Hero.js";
import Destination from "../components/Destination.js";
import Trip from "../components/Trip.js";
import Footer from "../components/Footer.js";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1519160558534-579f5106e43f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
        title="Create memories with journey"
        text="Choose your best Destination"
        url="/"
        btnText="Travel Plan"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}
export default Home;
