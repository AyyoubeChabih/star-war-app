import React, { useContext } from 'react';
import { Context } from '../../../actions/Provider';
import { PageLayout, GlobalError, Loader, Title } from '../../Core';
import { StarshipDetailsCard } from './StarshipDetailsCard';

export const StarshipDetails = (props) => {
  const { id } = props.match.params;
  const { state } = useContext(Context);
  return (
    <>
      {!state.isStarshipsLoadError && state.isStarshipsLoad && <Loader />}
      {!state.isStarshipsLoad && !state.isStarshipsLoadError && (
        <PageLayout>
          <Title text={state.starships[id - 1].name} extraClass="bold"></Title>
          <div>
            <StarshipDetailsCard starship={state.starships[id - 1]} />
          </div>
        </PageLayout>
      )}
      {state.isStarshipsLoadError && <GlobalError />}
    </>
  );
};
