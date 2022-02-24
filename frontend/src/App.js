import { Navbar } from "./components";
import {Header, About} from './container'
function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
    </div>
  );
}

export default App;
