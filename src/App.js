import './App.css';
import Registration from './components/Registration/Registration';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Overview from "./components/pages/Overview";
import {Reports, ReportsOne, ReportsTwo, ReportsThree} from "./components/pages/Reports";

import Team from "./components/pages/Team";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="outer">
          <div className="inner">
            <Registration />
          </div>
        </div>
      </div>
      <Switch>
        <Route path='/overview' exact component={Overview} />
        <Route path='/reports' exact component={Reports} />
        <Route path='/reports/reports1' exact component={ReportsOne} />
        <Route path='/reports/reports2' exact component={ReportsTwo} />
        <Route path='/reports/reports3' exact component={ReportsThree} />
        <Route path='/team' exact component={Team} />
      </Switch>
    </Router>
  );
}

export default App;
