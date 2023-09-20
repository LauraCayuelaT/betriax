import Home from './views/home/home';
import style from "./App.module.css"
import { Route} from 'react-router-dom';
import Detail from './views/detail/detail';


function App() {

  return (
    <div className={style.container}>
        
        <Route exact path="/" render={()=><Home/>} />
        
        <Route path="/detail/:id" render={()=><Detail/>}/>
        
      
    </div>
  );
}

export default App;
