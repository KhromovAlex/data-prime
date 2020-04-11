import React from 'react';

import Sphere from './Sphere';

function App() {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
      }}>
        <Sphere
          radius={300}
          sizePoint={5}
        />
      </div>
    );
}

export default App;