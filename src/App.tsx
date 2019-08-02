import React from 'react';
import {Divider,Header} from 'semantic-ui-react'
import Counter from './containers/Counter';
import Counter2 from './containers/Counter2';

const App: React.FC = () => (
  <>
    <Divider horizontal>
      <Header as='h3'>
        src/containers/Counter (with HOC)
      </Header>
    </Divider>
    <Counter/>

    <Divider horizontal>
      <Header as='h3'>
        src/containers/Counter2 (with Hooks)
      </Header>
    </Divider>
    <Counter2 />
  </>
);

export default App;
