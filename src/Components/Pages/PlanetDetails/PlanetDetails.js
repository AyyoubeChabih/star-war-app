import React, { useContext } from 'react';
import { Context } from '../../../actions/Provider';
import { PageLayout, GlobalError, Loader, Title } from '../../Core';
import { PlanetDetailsCard } from './PlanetDetailsCard';

export const PlanetDetails = (props) => {
  const { id } = props.match.params;
  const { state } = useContext(Context);
  return (
    <>
      {!state.isPlanetsLoadError && state.isPlanetsLoad && <Loader />}
      {!state.isPlanetsLoad && !state.isPlanetsLoadError && (
        <PageLayout>
          <Title text={state.planets[id - 1].name} extraClass="bold"></Title>
          <div>
            <PlanetDetailsCard planet={state.planets[id - 1]} />
          </div>
        </PageLayout>
      )}
      {state.isPlanetsLoadError && <GlobalError />}
    </>
  );
};
