import './App.css';
import {Route} from 'react-rooter-dom'
import Users from './components/Users'

function App() {
  return (
    <div className="App">
     <Route path='/' component={Users}/>
    </div>
  );
}

export default App;
