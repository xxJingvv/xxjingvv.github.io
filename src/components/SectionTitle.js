import React from 'react';
import styled from 'styled-components';

const SectionTitleStyle = styled.div`
  text-align: center;
  p {
    font-family: 'Roboto';
    font-size: 1.6rem;
    color:var(--light);
  }
  h2 {
    font-family: 'Montserrat Bold';
    font-size: 6rem;
    margin-top: 0.5rem;
    text-transform: uppercase;
    background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
    p {
      font-size: 1.2rem;
    }
    h2 {
      font-size: 3.6rem;
    }
  }
`;

export default function SectionTitle({
                                         subheading = 'Need Subheading',
                                         heading = 'need heading',
                                     }) {
    return (
        <SectionTitleStyle className="section-title">
            <p>{subheading}</p>
            <h2>{heading}</h2>
        </SectionTitleStyle>
    );
}
