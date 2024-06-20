import './App.css';
import Heading from './components/Heading';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      <Heading heading="Hello Heading!" />
      <ParentComponent />
    </div>
  );
}

export default App;
