import React from 'react';
import { Context } from '../../../actions/Provider';
import { Title, GlobalError, Loader, PageLayout } from '../../Core';
import { MovieDetailsCard } from './MovieDetailsCard';
import { PeopleList } from './PeopleList';
import { PlanetsList } from './PlanetsList';
import { SpeciesList } from './SpeciesList';
import { StarshipsList } from './StarshipsList';
import { VehiclesList } from './VehiclesList';
import './movieDetails.css';

export const MovieDetails = (props) => {
  const { id } = props.match.params;
  return (
    <Context.Consumer>
      {(context) => (
        <>
          {!context.state.isError && context.state.isLoading && <Loader />}
          {!context.state.isLoading && (
            <PageLayout extraClass="large">
              <Title
                text={context.state.movies[id - 1].title}
                extraClass="bold"
              ></Title>
              <div>
                <MovieDetailsCard movie={context.state.movies[id - 1]} />
              </div>
              <div className="tables-section">
                <PeopleList
                  charactersUrls={context.state.movies[id - 1].characters}
                />
                <PlanetsList
                  planetsUrls={context.state.movies[id - 1].planets}
                />
                <SpeciesList
                  speciesUrls={context.state.movies[id - 1].species}
                />
                <StarshipsList
                  starshipsUrls={context.state.movies[id - 1].starships}
                />
                <VehiclesList
                  vehiclesUrls={context.state.movies[id - 1].vehicles}
                />
              </div>
            </PageLayout>
          )}
          {context.state.isError && <GlobalError />}
        </>
      )}
    </Context.Consumer>
  );
};
