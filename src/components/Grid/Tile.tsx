import { Link, To } from "react-router-dom";
import styled from "styled-components";
import Tag from "./Tag";
import { ProjectTag } from "../../types";

const StyledTile = styled.div<{$cropped: boolean}>`
    font-size: 16pt;
    max-width: 100%;

    display: flex;
    flex-direction: column;
    gap: 10px;

    padding: 10px;

    .tileImage {
        aspect-ratio: 1/1;
        width: 100%;    
        outline: 2px solid;
    }

    .tileContainer {
        overflow: ${props => props.$cropped ? "hidden" : "visible"};
        height: ${props => props.$cropped ? "60vh" : "auto"};
    }

    .tileContents {
        display: flex;
        flex-direction: column;
        gap: ${props => props.$cropped ? "10px" : "0px"};
    }

    .tileContents:hover .tileImage {
        outline-style: dashed;
    }

    .tileTags {
        padding: 0px;

        display: flex;
        flex-wrap: wrap;
        gap: 10px;

        pointer-events: none;
    }

    a {
        color: inherit;
    }
`

function Tile({ title, url, image, tags, cropped }: { title: string, url: To, image: string, tags: Array<ProjectTag>, cropped?: boolean }) {
    return (
        <StyledTile $cropped={cropped ?? false}>
            <Link to={url} className={"tileContents"}>
                <div className={"tileContainer"}>
                    <img src={image} className={"tileImage"} alt={title}></img>
                </div>
                {title}
            </Link>
            <div className={"tileTags"}>
                {tags.map((tag, index) => (
                    <Tag name={tag} key={index} />
                ))}
            </div>
        </StyledTile>);
}

export default Tile;