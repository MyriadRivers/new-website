import styled from "styled-components";
import breakpoints from "../styles/breakpoints";

const StyledVideo = styled.div<{$mainImage: boolean}>`
    /* background: pink; */
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0px 0px 0px calc(${props => props.$mainImage ? "0px" : "-100%"});

    video {
        width: 100%;
        /* max-height: 50vh; */
        /* max-width: 100%; */
    }

    overflow: hidden;
    align-items: end;
    text-align: center;
    font-size: 13pt;
    @media ${breakpoints.mobile} {
        font-size: 10pt;
    }
    font-style: italic;
`

function Video({ src, caption, mainImage }: { src: string, caption?: string, mainImage?: boolean }) {
    return (<StyledVideo $mainImage={mainImage ?? false}>
        <video src={src} controls >
            <source src={src} />
        </video>
        {caption}
    </StyledVideo>);
}

export default Video;