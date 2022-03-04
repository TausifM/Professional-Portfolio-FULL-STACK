import { Navbar } from "./components";
import {Header, About, Work, Skills, Testimonials, Footer} from './container';
import './App.scss'
function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
