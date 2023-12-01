import Grid from "../../components/Grid/Grid";
import { projects } from "../../common";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const StyledProjects = styled.div`
    height: 100%;
`

function Projects() {
    return (
        <StyledProjects>
            <Grid tiles={projects} />
        </StyledProjects>
    );
}

export default Projects;