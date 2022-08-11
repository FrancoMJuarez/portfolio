import styled from "styled-components";
import {Link} from "react-scroll"

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({primary}) => (primary? 'green' : 'blue')};
  white-space: nowrap;
  padding: ${({big}) => (big? '12px 48px' : '12px 30px')};
  color: ${({dark}) => (dark? '#010606' : 'white')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary? 'blue' : 'green')}
  }
`