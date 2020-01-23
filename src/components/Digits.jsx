import React from 'react';
import styled from 'styled-components';

const Block = styled.ul`
  padding: 0;
  display: ${props => (props.newGame ? 'block' : 'none')};
  list-style-type: none;
  color: white;
  margin: 5px 0;
  li {
    cursor: pointer;
    margin-right: 11px;
    padding: 1px;
    text-transform: uppercase;
    font-size: 28px;
    display: inline-block;
  }
  li[disabled] {
    text-decoration: line-through;
    opacity: 0.4;
    pointer-events: none;
  }
`;

const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

const Digits = props => (
  <div>
    <Block {...props}>
      {letters.map(letter => (
        <li
          key={letter}
          className="digit"
          disabled={props.guesses.includes(letter) ? true : false}
          onClick={props.onClick}
        >
          {letter}
        </li>
      ))}
    </Block>
  </div>
);

export default Digits;
