import React from 'react';
import { MovieList } from '../MovieList';
import './main.css';
import { Context } from '../../actions/Provider';
import { Loader, GlobalError, PageLayout, Title } from '../Core';

export const Main = () => (
  <Context.Consumer>
    {(context) => (
      <>
        {!context.state.isError && context.state.isLoading && <Loader />}
        {!context.state.isLoading && (
          <PageLayout>
            <Title text="Star wars" extraClass="bold" />
            <Title text="Movies" />
            <div className="movie-section">
              <MovieList items={context.state.movies} />
            </div>
          </PageLayout>
        )}
        {context.state.isError && <GlobalError />}
      </>
    )}
  </Context.Consumer>
);
