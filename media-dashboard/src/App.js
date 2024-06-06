import './App.css';
import { Header } from './Components/Header';
import Section from './Components/Section';

export default function App() {
  return (
    <div className="App">
      <header className="App-header sticky top-0 z-50">
        <Header/>
      </header>
      <main className='App-main z-0'>
        <Section/>
      </main>
    </div>
  );
}

