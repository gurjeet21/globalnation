import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">

      </Container>
    </div>
  );
}

export default ResumeNew;
