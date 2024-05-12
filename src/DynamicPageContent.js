import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from 'react-router-dom';
import DownloadIcon from "./Assets/Svg/DownloadIocn";
import EmailIcon from "./Assets/Svg/EmailIcon";

const DynamicPageContent = () => {
    const [pageData, setPageData] = useState(null);
    const [backgroundImage, setBackgroundImage] = useState(process.env.PUBLIC_URL + '/static/media/GNTV_BG_Landing-Page.651eb1397180fd19a27d.svg');
    const location = useLocation();
    const { pathname } = location;
    const [pageTemplate, setPageTemplate] = useState(1);
    const [artistList, setArtistList] = useState([]);
    const [apiData, setApiData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const pathUrl = pathname.split('/')[1];
                let pageStatus = 1;
                if (pathname.includes("preview")) {
                    pageStatus = 2;
                }
                // const response = await fetch(`http://127.0.0.1:8000/api/all-pages-data?pageslug=${pathUrl}&pagestatus=${pageStatus}`);
                const response = await fetch(`https://admin.globalnation.tv/api/all-pages-data?pageslug=${pathUrl}&pagestatus=${pageStatus}`);
                const data = await response.json();
                setPageTemplate(data.page_temp);
                if (data.page_temp === 2) {
                    setApiData(data.download);                    
                    if (data.download?.background_image !== "") {
                        setBackgroundImage(data.download?.background_image);
                    }
                } else if (data.page_temp === 3) {
                    setArtistList(data.artists);
                    if (data?.artists[0].background_image !== "") {
                        setBackgroundImage(data.artists[0].background_image);
                    }
                } else {
                    if (data?.pages.background_image !== "") {
                        setBackgroundImage(data?.pages.background_image);
                    }
                    setPageData(data.pages);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [pathname]);

    function isHtml(str) {
        const doc = new DOMParser().parseFromString(str, 'text/html');
        return Array.from(doc.body.childNodes).some(node => node.nodeType === 1);
    }

    return (
        <section>
            {pageTemplate === 1 && (
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
            )}

            {pageTemplate === 2 && (
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
            )}

            {pageTemplate === 3 && (
                <Container fluid className='featured-artist-main landing-page-bg d-flex align-items-center' style={{ backgroundImage: `url(${backgroundImage})` }}>
                    <Row className='align-items-center'>
                        <h1 className="section-title">Featured Artist</h1>
                        {artistList.map((artist, index) => (
                        <Col xs={12} md={6} lg={4} className="aspect-ratio aspect-ratio-1x1 mb-4">
                            <div className="embed-responsive embed-responsive-16by9 featured-artist-column">
                                <div className="iframe-wrapper">
                                    <iframe
                                        className="elementor-video-iframe"
                                        allowFullScreen
                                        title="vimeo Video Player"
                                        src={`${artist.video_url}?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1#t=`}
                                    ></iframe>
                                </div>
                                <div className="title">{artist.title}</div>
                                {isHtml(artist.description) ? (
                                    <div className="artist-description" dangerouslySetInnerHTML={{ __html: artist.description }} />
                                ) : (
                                    <div className="artist-description">{artist.description}</div>
                                )}
                            </div>
                        </Col>
                        ))}
                    </Row>
                 </Container>
            )}
        </section>
    );
};

export default DynamicPageContent;
