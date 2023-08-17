import { Route, Routes } from "react-router-dom";

import Remodeling from "./components/pages/Remodeling";
import HomePage from "./components/pages/HomePage";
import Additions from "./components/pages/Additions";
import Garages from "./components/pages/Garages";
import Gallery from "./components/pages/Gallery";
import Testimonials from "./components/pages/Testimonials";
import Contact from "./components/pages/Contact";
import Layout from "./components/layout/Layout";

function App() {
  return (
      <div>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage exact={true} />} />
            <Route path="/additions" element={<Additions />} />
            <Route path="/remodeling" element={<Remodeling />} />
            <Route path="/garages" element={<Garages />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </div>
  );
}

export default App;
