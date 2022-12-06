import React from "react"; // importing react

//importing all the components
import Info from "./components/Info";
import About from "./components/About";
import Interest from "./components/Interests";
import Footer from "./components/Footer";

// exporting the app component which returns the whole
// app
export default function App() {
  return (
    <div>
      <Info />
      <About />
      <Interest />
      <Footer />
    </div>
  )
} 