import { FC, useEffect } from 'react';
import { connect } from 'react-redux';

import './App.css';
import { IAppState, isAppStarted, appStartAction } from './getStore';

export interface IAppProps {
  started: boolean;
  onStart: () => void;
}

export const AppFC: FC<IAppProps> = ({ started, onStart }) => {
  useEffect(() => {
    if (!started) {
      onStart();
    }
  }, [started, onStart]);
  if (!started) {
    return <span className="loading">Loading...</span>;
  }
  return (
    <div className="app">
      <p>place your soultion here</p>
    </div>
  );
};

export const mapStateToProps = (state: IAppState) => {
  const started = isAppStarted(state);
  return {
    started,
  };
};

export const mapDispatchToProps = {
  onStart: appStartAction,
};

const App = connect(mapStateToProps, mapDispatchToProps)(AppFC);
export default App;
