import React from 'react';
import { Home, Sidebar } from '../../features';

export const Main = () => (
  <div>
    <Sidebar>
      <Home />
    </Sidebar>
  </div>
);

export default Main;
