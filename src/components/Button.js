import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 1.8rem;
    background-color: ${(props) =>
    props.outline ? 'transperant' : 'var(--light)'};
    padding: 0.7em 2em;
    border: 1px solid var(--light);
    border-radius: 8px;
    display: inline-block;
    color: ${(props) => (props.outline ? 'var(--light)' : 'black')};
    font-weight: ${(props) => (props.outline ? 200 : 300)};
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.6rem;
    }
  }
`;

export default function Button({
                                   btnText = 'test',
                                   btnLink = 'test',
                                   outline = false,
                               }) {
    return (
        <ButtonStyle outline={outline} className="button-wrapper">
            <Link className="button" to={btnLink}>
                {btnText}
            </Link>
        </ButtonStyle>
    );
}
