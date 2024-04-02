import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {useLocation } from 'react-router-dom';

const FeaturedArtistTest = () => {
    const [artistList, setartistList] = useState([]);
    const location = useLocation();
    const { pathname } = location;

    useEffect(() => {
        // Fetch data from the API
        const fetchData = async () => {
            try {               
                const response = await fetch(`https://admin.globalnation.tv/api/featured-artist`);
                const data = await response.json();
                setartistList(data.artists);
            } catch (error) {
                console.error("Error fetching data from API:", error);
            }
        };

        fetchData();
    }, [pathname]);

    function isHtml(str) {
        const doc = new DOMParser().parseFromString(str, 'text/html');
        return Array.from(doc.body.childNodes).some(node => node.nodeType === 1);
    }

    return (
        <Container fluid className='featured-artist-main landing-page-bg d-flex align-items-center'>
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
    );
};

export default FeaturedArtistTest;