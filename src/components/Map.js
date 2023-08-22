import React from 'react';
import styled from 'styled-components';
import MapImg from '../assets/images/map-0.png';
import PText from './PText';

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 12%;
    bottom: 12%;
    padding: 2rem;
    background: var(--deep-dark);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: var(--light);
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: none;
    color: var(--light);
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export default function Map() {
    return (
        <MapStyles>
            <div className="container">
                <div className="map__card">
                    <h3 className="map__card__heading">Here is me</h3>
                    <PText>Scarborough, Ontario, Canada</PText>
                    <a
                        className="map__card__link"
                        href="https://www.google.com/maps/place/@43.7886283,-79.2554246,15.61z/data=!4m5!3m4!1s0x89d4d11b9b887125:0xdaf742c0ac25fa41!8m2!3d43.7919655!4d-79.2514363"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Open in google map
                    </a>
                </div>
            </div>
            {/* <img src={MapImg} alt="Map" /> */}
        </MapStyles>
    );
}
