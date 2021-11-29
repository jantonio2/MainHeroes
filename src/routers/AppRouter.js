import { AvengersPage } from './../components/heroes/AvengersPage';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from "react-router-dom";
import { HeroScreen } from '../components/heroes/HeroScreen';

export const AppRouter = () => {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route path="/hero/:heroId" component={HeroScreen} />
            <Route path="/" component={AvengersPage} />

            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </div>
  );
};
