import './App.css';
import {Route} from 'react-root-dom'
import Users from './components/Users'

function App() {
  return (
    <div className="App">
     <Route path='/' component={Users}/>
    </div>
  );
}

export default App;
