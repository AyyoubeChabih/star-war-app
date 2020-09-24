import React, { useContext } from 'react';
import { Context } from '../../../actions/Provider';
import { PageLayout, GlobalError, Loader, Title } from '../../Core';
import { VehicleDetailsCard } from './VehicleDetailsCard';

export const VehicleDetails = (props) => {
  const { id } = props.match.params;
  const { state } = useContext(Context);
  return (
    <>
      {!state.isVehiclesLoadError && state.isVehiclesLoad && <Loader />}
      {!state.isVehiclesLoad && !state.isVehiclesLoadError && (
        <PageLayout>
          <Title text={state.vehicles[id - 1].name} extraClass="bold"></Title>
          <div>
            <VehicleDetailsCard vehicle={state.vehicles[id - 1]} />
          </div>
        </PageLayout>
      )}
      {state.isVehiclesLoadError && <GlobalError />}
    </>
  );
};
