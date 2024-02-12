import React from "react";
import NavigationBar from "../components/NavigationBar";
import PPAccordian from '../components/ProfessionalProjectsAccordian';

export default function ProfessionalProjects() {
    return (
        <div>
            <NavigationBar defaultValue="professional"/> 
            <h1>Professional Projects</h1>
            <p>This is the professional projects page</p>
            <PPAccordian /> 
        </div>
    );
}