import React from 'react';
import { Provider } from './actions/Provider';

import { Main } from './Components/Main';
import { MovieDetails } from './Components/Pages/MovieDetails';
import { PeopleDetails } from './Components/Pages/PeopleDetails';
import { PlanetDetails } from './Components/Pages/PlanetDetails';
import { SpecieDetails } from './Components/Pages/SpecieDetails';
import { StarshipDetails } from './Components/Pages/StarshipDetails';
import { VehicleDetails } from './Components/Pages/VehicleDetails';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Provider>
      <Switch>
        <Route path="/movie/:id" component={MovieDetails} />
        <Route path="/people/:id" component={PeopleDetails} />
        <Route path="/planet/:id" component={PlanetDetails} />
        <Route path="/specie/:id" component={SpecieDetails} />
        <Route path="/starship/:id" component={StarshipDetails} />
        <Route path="/vehicle/:id" component={VehicleDetails} />
        <Route path="/" component={Main} />
      </Switch>
    </Provider>
  );
}
export default App;
