import React from 'react';
import AppRoutes from './routes';
import ProgressIndicator from './components/ProgressIndicator';

const App: React.FC = () => {
  return (
    <div className="App">
      <ProgressIndicator />
      <AppRoutes />
    </div>
  );
};

export default App;