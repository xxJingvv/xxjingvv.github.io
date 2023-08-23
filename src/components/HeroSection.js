import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';
import PText from './PText';

const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    min-height: 900px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    color: (--light);
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-family: 'Montserrat SemiBold';
      font-size: 7rem;
      color: var(--white);
    }
  }
  .hero__img {
    max-width: 500px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 1px solid var(--gray-1);
  }
  .hero__info {
    margin-top: -18rem;
  }
  .hero_para {
    display:flex;
    flex-direction:column;
    align-items:center;
  }
  .hero_para p{
    max-width:80vw;
    font-size:20px;
    text-align:center;
    color:white;
    padding:5px;
    font-weight:300;
    background-color:#00000066;
  }
  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;

    bottom: 20px;
    width: 50px;
  }
  .hero__social {
    left: 50px;
  }
  .hero__scrollDown {
    right: 50px;
  }

  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
      color:var(--light);
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain; 
    }
  }
  .hero__scrollDown {
    img {
      max-height: 70px;
    }
  }

  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 1.6rem;
          transform: rotate(-90deg);
          letter-spacing: 5px;
          margin-bottom: 2rem;
          color:var(--light);
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 650px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__img {
      height: 300px;
    }
    .hero__info {
      margin-top: 3rem;
    }
    .hero_para p{
      font-size:16px;
      font-weight:200;
    }
    .hero__social {
      left: 0px;
      bottom: -15%;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

export default function HeroSection() {
    return (
        <HeroStyles>
            <div className="hero">
                <div className="container">
                    <h1 className="hero__heading">
                        <span>Hello, This is</span>
                        <span className="hero__name">Xiaojing Xu</span>
                    </h1>
                    <div className="hero__img">
                        <img srcset='/images/hero-0-2x.png 2x' src='/images/hero-0.png' alt="" />
                    </div>
                    <div className="hero__info hero_para">
                        <p>
                        My journey began with an insatiable curiosity and a determination to understand the intricate world of programming.
                        </p>
                        <Button btnText="see my works" btnLink="/projects" />
                    </div>
                    <div className="hero__social">
                        <div className="hero__social__indicator">
                            <p>Follow</p>
                            <img src={SocialMediaArrow} alt="icon" />
                        </div>
                        <div className="hero__social__text">
                            <ul>
                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/xiaojing-xu/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        LI
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://github.com/xxJingvv"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        GIT
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="http://isntagram.com/xxjingvv"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        IG
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.facebook.com/profile.php?id=100022992270096"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        FB
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="hero__scrollDown">
                        <p>Scroll</p>
                        <img src={ScrollDownArrow} alt="ScrollDown Arrow" />
                    </div>
                </div>
            </div>
        </HeroStyles>
    );
}
