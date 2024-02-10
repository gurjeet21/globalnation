import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import DownloadIcon from "./Assets/Svg/DownloadIocn";
import EmailIcon from "./Assets/Svg/EmailIcon";

const DownlaodSection = () => {
    return (
        <Container fluid className='download-section landing-page-bg d-flex flex-column'>
            <Row className='justify-content-center align-items-center'>
                <Col className="aspect-ratio aspect-ratio-1x1">
                    <h1 className="section-title">Downloads</h1>
                    <div className="download-content-sec">
                    <div className="download-row">
                        <div className="download-title">MacOS ARM v.0.7.1</div>
                        <div className="download-button">
                        <Link to="/beta" className="download-btn"><DownloadIcon/>Download</Link>
                        </div>
                    </div>

                    <div className="download-row">
                        <div className="download-title">Win X64 v.0.7.1*</div>
                        <div className="download-button">
                        <Link to="/beta" className="download-btn"><DownloadIcon/>Download</Link>
                        </div>
                    </div>

                    <div className="download-row">
                        <div className="download-title">Android**</div>
                        <div className="download-button">
                        <Link to="/beta" className="download-btn"><EmailIcon/>Email Us</Link>
                        </div>
                    </div>

                    <div className="download-row last-row">
                        <div className="download-title">iOS/iPadOS**</div>
                        <div className="download-button">
                        <Link to="/beta" className="download-btn"><EmailIcon/>Email Us</Link>
                        </div>
                    </div>

                    <p className="download-main-para">* On Windows, you might encounter the following issues:</p>
                    <ul>
                        <li>Notice from Microsoft Defender SmartScreen preventing an unrecognized app from starting. Choose “More Info”, then “Run anyway”.</li>
                        <li>Notices from your antivirus/firewall. Choose to “allow access” to Interocitor.exe and network resources (that’s the term for Norton AV)</li>
                    </ul>

                    <p className="download-main-para">These issues can safely be ignored and will disappear once the apps have been downloaded and installed in greater numbers.</p>
                    <p className="download-main-para"><span>** To test the apps for mobile platforms, we will need you to</span> send us the email address that you use to log into your respective app store! <span>(which might be different from your “regular” email address)</span></p>
                    <p className="download-main-para"><span>Please send us</span> that email address with nothing else in the body of your email!</p>
                    </div>
                </Col>

            </Row>
        </Container>
    );
};

export default DownlaodSection;