import React from "react";
import styled from "styled-components";
import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";
import Button from "../Utils/Button";

const CVForm = ({
  cv,
  onChangePersonal,
  onChangeExperience,
  onAddExperience,
  onDeleteExperience,
  onChangeEducation,
  onAddEducation,
  onDeleteEducation,
  onPrint,
  onLoadExample,
  onReset,
}) => {
  return (
    <CVFormWrapper>
      <Personal personalInfo={cv.personalInfo} onChange={onChangePersonal} />
      <Experience
        experience={cv.experience}
        onChange={onChangeExperience}
        onAdd={onAddExperience}
        onDelete={onDeleteExperience}
      />
      <Education
        education={cv.education}
        onChange={onChangeEducation}
        onAdd={onAddEducation}
        onDelete={onDeleteEducation}
      />
      <>
        <Button text="Generate PDF" onClick={onPrint} primary></Button>
        <Button text="Load an Example " onClick={onLoadExample} secondary></Button>
        <Button text="Reset" onClick={onReset} red></Button>
      </>
    </CVFormWrapper>
  );
};

const CVFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 215mm;
  padding: 2rem;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.light};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media (max-width: 800px) {
    
    width: 100%;
    position: relative;
    
    justify-content: center;
  }

  @media (max-width: 600px) {
    
    width: 140%;
    margin-left: 20%;
    
  }
  @media (max-width: 500px) {
    
    width: 180%;
    margin-left: 40%;
    
  }
  @media (max-width: 450px) {
    
    width: 200%;
    margin-left: 60%;
    
  }

  @media (max-width: 400px) {
    
    width: 240%;
    margin-left: 80%;
    
  }
  @media (max-width: 350px) {
    
    width: 300%;
    margin-left: 120%;
    
  }
`;

export default CVForm;
