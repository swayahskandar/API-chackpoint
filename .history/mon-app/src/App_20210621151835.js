import './App.css';
import {Route} from 'react-root-dom'

function App() {
  return (
    <div className="App">
     <Route path='/' component={User}/>
    </div>
  );
}

export default App;
