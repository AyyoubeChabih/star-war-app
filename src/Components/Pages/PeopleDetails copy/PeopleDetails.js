import React, { useContext } from 'react';
import { Context } from '../../../actions/Provider';
import { GlobalError } from '../../Core/GlobalError';
import { Loader } from '../../Loader';
import { PageLayout } from '../../Core/Layout';
import { Title } from '../../Core/Title';
import { PeopleDetailsCard } from './PeopleDetailsCard';

export const PeopleDetails = (props) => {
  const { id } = props.match.params;
  const { state, dispatch } = useContext(Context);
  return (
    <>
      {!state.isPeopleLoadError && state.isPeopleLoad && <Loader />}
      {!state.isPeopleLoad && (
        <PageLayout>
          <Title text={state.people[id - 1].name} extraClass="bold"></Title>
          <div>
            <PeopleDetailsCard movie={state.people[id - 1]} />
          </div>
        </PageLayout>
      )}
      {state.isPeopleLoadError && <GlobalError />}
    </>
  );
};
