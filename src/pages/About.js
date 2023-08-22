import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
      color: var(--light);
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
    background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
    color: var(--light);
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
    return (
        <>
            <AboutPageStyles>
                <div className="container">
                    <div className="top-section">
                        <div className="left">
                            <p className="about__subheading">
                                Hi, I am <span>Xiaojing Xu</span>
                            </p>
                            <p className="about__subheading">
                            You could call me <span>Jing</span> as well.
                            </p>
                            <h2 className="about__heading">A Web designer / developer</h2>
                            <div className="about__info">
                                <PText>
                                    I used to work as an architect for 3 years in China, since I love designing
                                    and visualizing objects when I was young. After that I was obsessed to programming
                                    and made small programs by self-learning.
                                    <br /> <br />
                                    Why not start a challenging life? I asked myself and came to Canada to pursue
                                    more knowledge about coding and engineering. Building an app or website is
                                    the like the same as building up a house.
                                    I love it and now I have the opportunity to design
                                    along with the coding. I find it really interesting and I
                                    enjoyed the process a lot.
                                    <br />
                                    <br />
                                    My vision is to make the world a better place. Now almost
                                    everything is becoming better than ever. It is time for us to
                                    create more good stuff that helps the world to become a better
                                    place.
                                </PText>
                            </div>
                        </div>
                        <div className="right">
                            <img src={AboutImg} alt="me" />
                        </div>
                    </div>
                    <div className="about__info__items">
                        <div className="about__info__item">
                            <h1 className="about__info__heading">Education</h1>

                            <AboutInfoItem
                                title="Diploma"
                                items={['Software Engineering Technology','Centennial Collage','Toronto']}
                            />
                            <AboutInfoItem
                                title="Certificate"
                                items={['Project Management','Centennial Collage', 'Toronto']}
                            />
                            <AboutInfoItem
                                title="Master"
                                items={['Architecture','South China University Of Technology','Guangzhou']}
                            />
                        </div>
                        <div className="about__info__item">
                            <h1 className="about__info__heading">My Skills</h1>

                            <AboutInfoItem
                                title="FrontEnd"
                                items={['HTML', 'CSS', 'JavaScript', 'REACT']}
                            />
                            <AboutInfoItem
                                title="BackEnd"
                                items={['Node', 'Express']}
                            />
                            <AboutInfoItem
                                title="Design"
                                items={['Photoshop','Illustrator', 'Indesign','Adobe XD','After Effects']}
                            />
                        </div>
                        <div className="about__info__item">
                            <h1 className="about__info__heading">Experiences</h1>

                            <AboutInfoItem
                                title="2021-2022"
                                items={['Junior web developer at Mark2Win IT Solutions', 'Toronto']}
                            />
                            <AboutInfoItem
                                title="2020-2021"
                                items={['UI designer at Mark2Win IT Solutions', 'Toronto']}
                            />
                            <AboutInfoItem
                                title="2015-2018"
                                items={['Architect', 'Guangzhou']}
                            />
                        </div>
                    </div>
                </div>
                <ContactBanner />
            </AboutPageStyles>
        </>
    );
}