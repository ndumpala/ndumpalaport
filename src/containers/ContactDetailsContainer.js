import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ContactDetailsContainer = React.memo(() => {

    const socialIcons = [
        {
            logo: require('../Images/fb.png'),
            alt: 'FB logo',
            url: 'https://www.facebook.com/public/Nithesh.505'
        },
        {
            logo: require('../Images/insta.png'),
            alt: 'Insta logo',
            url: 'https://www.instagram.com/ndumpala/'
        },
        {
            logo: require('../Images/twitter.png'),
            alt: 'Twitter logo',
            url: 'https://twitter.com/NITHESHDUMPALA'
        },
        {
            logo: require('../Images/linkedin.png'),
            alt: 'Linkedin logo',
            url: 'https://www.linkedin.com/in/nithesh-dumpala-b881b8bb/'
        }
    ];

    const renderSocialIcons = () => {

        const icons = socialIcons.map((data, index) => {

            return (
                <div className="socialIcons">
                    <a
                    href={data.url}
                    rel="nofollow noopener noreferrer"
                    target="_blank"  key={index}
                    className="socialIcons margin-horizontal-sm padding-horizontal-sm">
                        <img src={data.logo} alt="" height="50" width="50" />
                    </a>
                </div>
            );
        });

        return (
            <Row className="margin-vertical-sm">
                {icons}
            </Row>
        );
    }

    return (
        <Container fluid className="margin-vertical-md color-white bgBlack" id="contact">
            <Container className="padding-vertical-xlg">
                <Row className="padding-horizontal-sm">
                    <Col xs={12} md={6} className="margin-vertical-md">
                        <strong className="font-size-md">
                            About Me:
                        </strong>
                        <div className="margin-vertical-md">
                            I am an Experienced User Interface Engineer with a demonstrated history of working in the IT industry.
                            Skilled in Frontend Technologies like HTML, CSS, JAVASCRIPT, JQUERY, JSF, SASS, LESS, Github, SQL,
                            NodeJS, AngularJS, ReactJS, Redux. Mocha, Jest as a test runner with assertions handled by Chai-Enzyme for
                            React support and Agile Methodologies.
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="margin-vertical-md ">
                         <strong className="font-size-md margin-vertical-md">
                            Let's Talk:
                        </strong>
                        <div className="diplay-flex flex-column margin-vertical-md text-underline">
                            <div>
                                <a href="tel:+16157843440" rel="nofollow noopener noreferrer" >
                                +1(615)784-3440
                                </a>
                            </div>
                            <div>
                                <a href="mailto:ui.nitesh@gmail.com" rel="nofollow noopener noreferrer">ui.nitesh@gmail.com</a>
                            </div>
                            {renderSocialIcons()}
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
});

export default ContactDetailsContainer;