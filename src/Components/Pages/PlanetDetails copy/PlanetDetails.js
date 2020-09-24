import React, { useContext } from 'react';
import { Context } from '../../../actions/Provider';
import { GlobalError } from '../../Core/GlobalError';
import { Loader } from '../../Loader';
import { PageLayout } from '../../Core/Layout';
import { Title } from '../../Core/Title';
import { PlanetDetailsCard } from './PlanetDetailsCard';

export const PlanetDetails = (props) => {
  const { id } = props.match.params;
  const { state, dispatch } = useContext(Context);
  return (
    <>
      {!state.isPlanetsLoadError && state.isPlanetsLoad && <Loader />}
      {!state.isPlanetsLoad && (
        <PageLayout>
          <Title text={state.planets[id - 1].name} extraClass="bold"></Title>
          <div>
            <PlanetDetailsCard movie={state.planets[id - 1]} />
          </div>
        </PageLayout>
      )}
      {state.isPlanetsLoadError && <GlobalError />}
    </>
  );
};
