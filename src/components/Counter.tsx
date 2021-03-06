import React from 'react';
import { Button, Card, Statistic } from 'semantic-ui-react';

export interface CounterProps {
  count?: number;
  add?: (amount: number) => void;
  decrement?: () => void;
  increment?: () => void;
}

const Counter: React.FC<CounterProps> = ({
  count = 0,
  add = () => {},
  decrement = () => {},
  increment = () => {},
}) => (
  <Card centered>
    <Statistic>
      <Statistic.Label>count</Statistic.Label>
      <Statistic.Value>{count}</Statistic.Value>
    </Statistic>
    <Card.Content>
      <Button.Group widths="2">
        <Button color="red" onClick={decrement}>
          -1
        </Button>
        <Button color="green" onClick={increment}>
          +1
        </Button>
      </Button.Group>
      <div>
        <Button fluid color="grey" onClick={() => add(10)}>
          +10
        </Button>
      </div>
    </Card.Content>
  </Card>
);

export default Counter;
