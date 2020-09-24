import React, { useContext } from 'react';
import { Context } from '../../../actions/Provider';
import { GlobalError } from '../../Core/GlobalError';
import { Loader } from '../../Loader';
import { PageLayout } from '../../Core/Layout';
import { Title } from '../../Core/Title';
import { StarshipDetailsCard } from './StarshipDetailsCard';

export const StarshipDetails = (props) => {
  const { id } = props.match.params;
  const { state, dispatch } = useContext(Context);
  return (
    <>
      {!state.isStarshipsLoadError && state.isStarshipsLoad && <Loader />}
      {!state.isStarshipsLoad && (
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
