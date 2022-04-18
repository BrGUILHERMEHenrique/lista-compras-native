import React from 'react';

import { AuthProvider } from './authcontext';

const AppProvider = ({ children }) => (
  <AuthProvider>
    {children}
  </AuthProvider>
);

export default AppProvider;