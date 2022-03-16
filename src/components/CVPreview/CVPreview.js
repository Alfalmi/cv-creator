import React, { Component } from "react";
import styled from "styled-components";
import Header from "./Header";
import Content from "./Content";
import Sidebar from "./Sidebar";

//react-to-print package prints only class components

class CVPreview extends Component {
  render() {
    const { cv } = this.props;

    return (
      <CVPreviewWrapper>
        <Header personalInfo={cv.personalInfo} />
        <Content
          personalInfo={cv.personalInfo}
          experience={cv.experience}
          education={cv.education}
        />
        <Sidebar personalInfo={cv.personalInfo} />
      </CVPreviewWrapper>
    );
  }
}

export default CVPreview;

const CVPreviewWrapper = styled.div`
  width: 800px;
  
  position: sticky;
  top: 10px;
  display: grid;

  @media (max-width: 800px) {
    width: 600px;
  }
 
  @media (max-width: 600px) {
    width: 400px; 
  }

  @media (max-width: 400px) {
    width: 300px; 
  }
 
`;
