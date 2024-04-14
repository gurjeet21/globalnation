import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

const TermServiceContent = () => {
    const [pageData, setPageData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://admin.globalnation.tv/api/all-pages-preview");
                const data = await response.json();
                // Assuming the API response contains a 'pages' array
                const termsServicePage = data.pages.find(page => page.page_slug === 'terms-of-service');
                setPageData(termsServicePage);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <section>
            <Container fluid className="privacypolicy-section landing-page-bg d-flex align-items-center">
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

export default TermServiceContent;