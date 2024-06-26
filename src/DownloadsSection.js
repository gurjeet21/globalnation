import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import DownloadIcon from "./Assets/Svg/DownloadIocn";
import EmailIcon from "./Assets/Svg/EmailIcon";
import {useLocation } from 'react-router-dom';

const DownloadSection = () => {
    const [apiData, setApiData] = useState({});
    const [backgroundImage, setbackgroundImage] = useState(process.env.PUBLIC_URL +'/static/media/GNTV_BG_Landing-Page.651eb1397180fd19a27d.svg');
    const location = useLocation();
    const { pathname } = location;

    useEffect(() => {
        // Fetch data from the API
        const fetchData = async () => {
            try {
                let pageStatus = 1;              
                if (pathname.includes("preview")) {
                    pageStatus = 2;
                }
                const pathUrl = pathname.split('/')[2];
                const response = await fetch(`https://admin.globalnation.tv/api/download-content?pagestatus=${pageStatus}&pageslug=${pathUrl}`);
                // const response = await fetch(`http://127.0.0.1:8000/api/download-content?pagestatus=${pageStatus}&pageslug=${pathUrl}`);
                const data = await response.json();
                setApiData(data.download); // Access the 'download' property
                if(data.download?.background_image != ""){
                    setbackgroundImage(data.download?.background_image);
                }
            } catch (error) {
                console.error("Error fetching data from API:", error);
            }
        };

        fetchData();
    }, [pathname]);
    const macos_download_path = process.env.PUBLIC_URL + '/interocitor-0.7.1-b2_arm64.pkg';
    const window_download_path = process.env.PUBLIC_URL + '/interocitor-0.7.1-b2.msi';
    return (
        <Container fluid className='download-section landing-page-bg d-flex flex-column' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <Row className='justify-content-center align-items-center'>
                <Col className="aspect-ratio aspect-ratio-1x1">
                    <h1 className="section-title">
                        {apiData.title && <p dangerouslySetInnerHTML={{ __html: apiData.title }} />}
                    </h1>
                    
                    <div className="download-content-sec">
                        {apiData.plateform_name && (
                            <div className="main-row">
                                {apiData.plateform_name.map((platform, index) => (
                                    <div className="download-row">
                                        <div className="download-title" key={index}>{platform}</div>
                                        <div className="download-button">
                                             {apiData.plateform_file[index] && (
                                                <a
                                                    href={"https://admin.globalnation.tv/_uploads/builds/" + apiData.plateform_file[index]}
                                                    className="download-btn"
                                                    rel="noopener noreferrer"
                                                >
                                                    <DownloadIcon /> Download
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="download-row">
                            <div className="download-title">Android***</div>
                            <div className="download-button">
                            <a className="download-btn" href="mailto:beta@globalnation.tv?subject=Please%20add%20me%20to%20your%20Android%20Beta%20list!">
                                <EmailIcon/>Email Us
                            </a>
                            </div>
                        </div>

                        <div className="download-row last-row">
                            <div className="download-title">iOS/iPadOS***</div>
                            <div className="download-button">
                            <a className="download-btn" href="mailto:beta@globalnation.tv?subject=Please%20add%20me%20to%20your%20iOS%20Beta%20list!">
                                <EmailIcon/>Email Us
                            </a>
                            </div>
                        </div>
                    
                        <div className="download-main-para text-white">
                            {apiData.disclaimers && <p dangerouslySetInnerHTML={{ __html: apiData.disclaimers }} />}
                        </div>
                    </div>
                </Col>

            </Row>
        </Container>
    );
};

export default DownloadSection;