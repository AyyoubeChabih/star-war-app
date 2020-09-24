import React, { useContext } from 'react';
import { Context } from '../../../actions/Provider';
import { PageLayout, GlobalError, Loader, Title } from '../../Core';
import { SpecieDetailsCard } from './SpecieDetailsCard';

export const SpecieDetails = (props) => {
  const { id } = props.match.params;
  const { state } = useContext(Context);
  return (
    <>
      {!state.isSpeciesLoadError && state.isSpeciesLoad && <Loader />}
      {!state.isSpeciesLoad && !state.isSpeciesLoadError && (
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
