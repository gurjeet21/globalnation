import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const FeaturedArtistTest = () => {
    return (
        <Container fluid className='featured-artist-main landing-page-bg d-flex align-items-center'>
            <Row className='justify-content-center align-items-center'>
                <h1 className="section-title">Featured Artist</h1>
                <Col xs={12} md={6} lg={4} className="aspect-ratio aspect-ratio-16x9">
                    <div className="embed-responsive embed-responsive-16by9 featured-artist-column">
                        <div className="iframe-wrapper">
                            <iframe
                                className="elementor-video-iframe"
                                allowFullScreen
                                title="vimeo Video Player"
                                src="https://player.vimeo.com/video/900501674?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1#t="
                            ></iframe>
                        </div>
                        <div className="title">Graphic Novel</div>
                        <p>
                            See what one of our creators used our Interocitor™ toolset for, like this intro to a graphic novel...
                        </p>
                    </div>
                </Col>

                <Col xs={12} md={6} lg={4} className="aspect-ratio aspect-ratio-1x1">
                    <div className="embed-responsive embed-responsive-16by9 featured-artist-column">
                        <div className="iframe-wrapper">
                            <iframe
                                className="elementor-video-iframe"
                                allowFullScreen
                                title="vimeo Video Player"
                                src="https://player.vimeo.com/video/901909034?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1#t="
                            ></iframe>
                        </div>
                        <div className="title">Mel Tears</div>
                        <p>
                        Another dreamy creation by our featured artist shows what Interocitor™ can do in capable hands...
                        </p>
                    </div>
                </Col>

                <Col xs={12} md={6} lg={4} className="aspect-ratio aspect-ratio-1x1">
                    <div className="embed-responsive embed-responsive-16by9 featured-artist-column">
                        <div className="iframe-wrapper">
                            <iframe
                                className="elementor-video-iframe"
                                allowFullScreen
                                title="vimeo Video Player"
                                src="https://player.vimeo.com/video/900499676?color&autopause=0&loop=0&muted=0&title=1&portrait=1&byline=1#t="
                            ></iframe>
                        </div>
                        <div className="title">Show Reel</div>
                        <p>
                        Using our Interocitor™ toolset, our featured artist is working on this masterful work-in-progress showreel...
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default FeaturedArtistTest;