import React from 'react';
import styled from 'styled-components';

interface IProps {
  count: number;
  color: string;
}

export const Count: React.FC<IProps> = ({ count, color }) => {
  return <Container color={color}>Count: {count}</Container>;
};

const Container = styled.div`
  padding: 1rem;
  color: ${(props) => props.color || "green"};
`;
