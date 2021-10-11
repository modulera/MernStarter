import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';

import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";

import Themes from "./themes";

import { AuthProvider } from './context/auth';
import { LayoutProvider } from "./context/LayoutContext";

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <LayoutProvider>
      <AuthProvider>
        <ThemeProvider theme={Themes.default}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </AuthProvider>
    </LayoutProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
