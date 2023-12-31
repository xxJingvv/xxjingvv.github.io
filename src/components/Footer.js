import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: var(--white);
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
    return (
        <FooterStyle>
            <div className="container">
                <div className="footer__col1">
                    <h1 className="footer__col1__title">Xiaojing Xu</h1>
                    <PText>
                        A developer based in Toronto. My journey is one of perpetual growth, and I'm eager to see how I can shape the future with my code.
                    </PText>
                </div>
                <div className="footer__col2">
                    <FooterCol
                        heading="Important Links"
                        links={[
                            {
                                title: 'Home',
                                path: '/',
                                type: 'Link',
                            },
                            {
                                type: 'Link',
                                title: 'My Story',
                                path: '/about',
                            },
                            {
                                type: 'Link',
                                title: 'Projects',
                                path: '/projects',
                            },
                            {
                                type: 'Link',
                                title: 'Contact',
                                path: '/contact',
                            },
                        ]}
                    />
                </div>
                <div className="footer__col3">
                    <FooterCol
                        heading="Contact Info"
                        links={[
                            {
                                title: '+1(647)6226208',
                                path: 'tel:+1(647)6226208',
                            },
                            {
                                title: 'xxjingvv@gmail.com',
                                path: 'mailto:xxjingvv@gmail.com',
                            },
                            {
                                title: 'Scarborough, Ontario, Canada',
                                path: 'http://google.com/maps',
                            },
                        ]}
                    />
                </div>
                <div className="footer__col4">
                    <FooterCol
                        heading="Social Links"
                        links={[
                            {
                                title: 'LinkedIn',
                                path: 'https://www.linkedin.com/in/xiaojing-xu/',
                            },
                            {
                                title: 'GitHub',
                                path: 'https://github.com/xxJingvv',
                            },
                            {
                                title: 'Instagram',
                                path: 'http://isntagram.com/xxjingvv',
                            },
                            {
                                title: 'Facebook',
                                path: 'https://www.facebook.com/profile.php?id=100022992270096',
                            },
                        ]}
                    />
                </div>
            </div>
            <div className="copyright">
                <div className="container">
                    <p style={{fontSize:'12px'}}>
                        © 2023 - Xiaojing Xu | Enjoy your life
                    </p>
                </div>
            </div>
        </FooterStyle>
    );
}
