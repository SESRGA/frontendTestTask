import './App.css';
import { Header } from './src/header/header';
import { Content } from './src/content/content';
import { Footer } from './src/footer/footer';

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
