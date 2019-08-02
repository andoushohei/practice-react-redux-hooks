import React from 'react';
import {Divider,Header} from 'semantic-ui-react'
import Counter from './containers/Counter';
import Counter2 from './containers/Counter2';
import './App.css';

const App: React.FC = () => (
  <>
    <Divider horizontal>
      <Header as='h3'>
        src/containers/Counter
      </Header>
    </Divider>
    <Counter/>

    <Divider horizontal>
      <Header as='h3'>
        src/containers/Counter2
      </Header>
    </Divider>
    <Counter2 />
  </>
);

export default App;
