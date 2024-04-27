import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {useLocation } from 'react-router-dom';

const DynamicPageContent = () => {
    const [pageData, setPageData] = useState(null);
    const [backgroundImage, setbackgroundImage] = useState(process.env.PUBLIC_URL +'/static/media/GNTV_BG_Landing-Page.651eb1397180fd19a27d.svg');
    const location = useLocation();
    const { pathname } = location;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const pathUrl = pathname.split('/')[2];
                //const response = await fetch("https://admin.globalnation.tv/api/all-pages");
                const response = await fetch(`http://127.0.0.1:8000/api/dynamicpage/${pathUrl}`);
                const data = await response.json();
                // Assuming the API response contains a 'pages' array
                if(data?.pages.background_image != ""){
                    setbackgroundImage(data?.pages.background_image);
                }
                setPageData(data.pages);             
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

export default DynamicPageContent;