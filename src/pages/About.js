import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 10rem 0;

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
    display:flex;
    justify-content:end;
    img {
      max-width:360px;
      border: 1px solid var(--gray-1);
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
      font-size: 1.6rem;
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
                            <h2 className="about__heading">A Web developer</h2>
                            <div className="about__info">
                                <PText>
                                    I'm a creator of digital experiences. My journey in web development began with a fascination for the limitless potential that lines of code hold in shaping the way we interact with the online world.
                                    <br /> <br />
                                    For me, it's not just about lines of code; it's about empowering users on their digital journeys. I've honed my skills in front-end development, ensuring that every website I create is an immersive experience that leaves a lasting impression. I take pride in crafting interfaces that are not just visually appealing, but also intuitive and seamless.
                                    <br />
                                    <br />
                                    Beyond the surface, I delve into the world of back-end development to create robust and efficient systems. I'm well-versed in NodeJS and Python and thrive on the challenge of optimizing performance and security. Whether it's setting up databases, implementing APIs, or integrating third-party services, I ensure that the backbone of every website I create is as strong as its front end.
                                </PText>
                            </div>
                        </div>
                        <div className="right">
                            <img src={AboutImg} alt="me" />
                        </div>
                    </div>
                    <div className="about__info__items">
                        
                        <div className="about__info__item">
                            <h1 className="about__info__heading">My Skills</h1>

                            <AboutInfoItem
                                title="Language"
                                items={['JavaScript', 'NodeJS', 'Python', 'Java']}
                            />
                            <AboutInfoItem
                                title="Library & Tools"
                                items={['React','Express','Flask','Docker']}
                            />
                            <AboutInfoItem
                                title="Database & Storage"
                                items={['MySql','MongoDB', 'Neo4j']}
                            />
                            <AboutInfoItem
                                title="Cloud Knowledge"
                                items={['Amazon Web Services','Google Cloud']}
                            />
                        </div>
                        <div className="about__info__item">
                            <h1 className="about__info__heading">Experiences</h1>

                            <AboutInfoItem
                                title="2022.2-Present"
                                items={['Wweb developer at Pixfuture Media', 'Toronto']}
                            />
                            <AboutInfoItem
                                title="2021.5-2021.12"
                                items={['Junior web developer at Mark2Win IT Solutions', 'Toronto']}
                            />
                        </div>

                        <div className="about__info__item">
                            <h1 className="about__info__heading">Education</h1>

                            <AboutInfoItem
                                title="Post Guaduate"
                                items={['Master of Computer Science','University of Illimois at Urbana-Champaign','US']}
                            />
                            <AboutInfoItem
                                title="Advanced Diploma"
                                items={['Software Engineering of Technology','Centennial Collage', 'Canada']}
                            />
                            <AboutInfoItem
                                title="Bachelor"
                                items={['Bachelor of Engineering','South China University Of Technology','China']}
                            />
                        </div>
                    </div>
                </div>
            </AboutPageStyles>
        </>
    );
}