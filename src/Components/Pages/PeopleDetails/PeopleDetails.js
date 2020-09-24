import React, { useContext } from 'react';
import { Context } from '../../../actions/Provider';
import { PageLayout, GlobalError, Loader, Title } from '../../Core';
import { PeopleDetailsCard } from './PeopleDetailsCard';

export const PeopleDetails = (props) => {
  const { id } = props.match.params;
  const { state } = useContext(Context);
  return (
    <>
      {!state.isPeopleLoadError && state.isPeopleLoad && <Loader />}
      {!state.isPeopleLoad && !state.isPeopleLoadError && (
        <PageLayout>
          <Title text={state.people[id - 1].name} extraClass="bold"></Title>
          <div>
            <PeopleDetailsCard person={state.people[id - 1]} />
          </div>
        </PageLayout>
      )}
      {state.isPeopleLoadError && <GlobalError />}
    </>
  );
};
