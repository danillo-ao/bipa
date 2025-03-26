'use client';

import React from 'react';

import { HomeScreenController } from './home.controller';
import { HomeScreenProps } from './home.types';

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <HomeScreenController>
      {({ loading, error, data }) => {
        console.log({ loading, error, data });
        return (
          <>
            <div>Home Screen</div>
          </>
        );
      }}
    </HomeScreenController>
  );
};
export { HomeScreen };
