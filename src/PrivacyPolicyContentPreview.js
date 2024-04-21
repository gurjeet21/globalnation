import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

const PrivacyPolicyContent = () => {
    const [pageData, setPageData] = useState(null);
    const [backgroundImage, setbackgroundImage] = useState(process.env.PUBLIC_URL +'/static/media/GNTV_BG_Landing-Page.651eb1397180fd19a27d.svg');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://admin.globalnation.tv/api/all-pages-preview");
                const data = await response.json();
                // Assuming the API response contains a 'pages' array
                const privacyPolicyPage = data.pages.find(page => page.page_slug === 'privacy-policy');
                if(privacyPolicyPage?.background_image != ""){
                    setbackgroundImage(privacyPolicyPage?.background_image);
                }
                setPageData(privacyPolicyPage);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <section>
            <Container fluid className="privacypolicy-section landing-page-bg d-flex align-items-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <Row className='justify-content-center align-items-center'>
                    {pageData && (
                        <>
                            <h1 className="section-title text-center" dangerouslySetInnerHTML={{ __html: pageData.page_title }}></h1>
                            <Col xs={12} md={10}>
                                <div dangerouslySetInnerHTML={{ __html: pageData.description }}></div>
                            </Col>
                        </>
                    )}
                </Row>
            </Container>
        </section>
    );
};

export default PrivacyPolicyContent;