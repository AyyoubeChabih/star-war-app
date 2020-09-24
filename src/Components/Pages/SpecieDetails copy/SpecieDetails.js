import React, { useContext } from 'react';
import { Context } from '../../../actions/Provider';
import { GlobalError } from '../../Core/GlobalError';
import { Loader } from '../../Loader';
import { PageLayout } from '../../Core/Layout';
import { Title } from '../../Core/Title';
import { SpecieDetailsCard } from './SpecieDetailsCard';

export const SpecieDetails = (props) => {
  const { id } = props.match.params;
  const { state, dispatch } = useContext(Context);
  return (
    <>
      {!state.isSpeciesLoadError && state.isSpeciesLoad && <Loader />}
      {!state.isSpeciesLoad && (
        <PageLayout>
          <Title text={state.species[id - 1].name} extraClass="bold"></Title>
          <div>
            <SpecieDetailsCard specie={state.species[id - 1]} />
          </div>
        </PageLayout>
      )}
      {state.isSpeciesLoadError && <GlobalError />}
    </>
  );
};
