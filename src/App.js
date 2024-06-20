import './App.css';
import Heading from './components/Heading';
import { ParentComponent, Hello } from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      <Heading heading="Hello Heading!" />
      <ParentComponent />
      <Hello />
    </div>
  );
}

export default App;
