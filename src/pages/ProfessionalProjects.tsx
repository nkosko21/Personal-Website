import React from "react";
import NavigationBar from "../components/NavigationBar";
import PPAccordian from '../components/ProjectsAccordian';

export default function ProfessionalProjects() {
    return (
        <div style={{ backgroundColor: 'ivory' }}>
            <NavigationBar defaultValue="professional"/> 
            {/* <h1>Professional Projects</h1> */}
            <PPAccordian /> 
        </div>
    );
}