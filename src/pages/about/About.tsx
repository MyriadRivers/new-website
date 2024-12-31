import styled from "styled-components";
import jason from "../../assets/images/jason.png"
import jason2 from "../../assets/images/jason2.png"
import jason3 from "../../assets/images/jason3.png"
import jason4 from "../../assets/images/jason4.png"
import jason5 from "../../assets/images/jason5.png"
import jason6 from "../../assets/images/jason6.png"
import jason7 from "../../assets/images/jason7.png"
import breakpoints from "../../styles/breakpoints";
import { useEffect, useRef, useState } from "react";
import LinkList from "../../components/LinkList";

import resumePath from "../../assets/files/resume.pdf";
import Link from "../../components/Link";

const jasonImages = [jason, jason2, jason3, jason4, jason5, jason6, jason7];

const StyledAbout = styled.div<{ $overflow: boolean, $topPadding: number }>`
    height: 100%;
    /* width: 100%; */

    display: flex;
    flex-direction: row;

    /* overflow: auto; */

    gap: 40px;
    @media ${breakpoints.mobile} {
        gap: 0px;
    }
    
    @media ${breakpoints.mobile} {
        flex-direction: column;
    }

    .aboutTextContainer {
        /* background: green; */
        width: 40%;

        margin: 0px 0px 0px calc(60% + 20px);
        @media ${breakpoints.mobile} {
            width: 100%;
            margin: 0px;
            padding: 0px; 
        }
        display: flex;
        justify-content: ${props => props.$overflow ? "start" : "center"};
        flex-direction: column;
    }

    .aboutText {
        /* width: 100%; */
        /* background: pink; */

        display: flex;
        
        flex-direction: column;
        /* gap: 20px; */

        /* padding-right: 60px; */
        
    }

    .aboutHeader {
        font-weight: bold;
        font-size: 1.25em;
    }

    .jasonImageContainer {
        /* background: lavender; */
        position: fixed;
        top: ${props => props.$topPadding};
        /* top: 50%; */

        /* transform: translateY(-50%); */

        height: ${props => `calc(100% - ${props.$topPadding}px - 30px)`};
        width: min(calc(60% - 60px), 1500px * 0.6 - 60px);

        @media ${breakpoints.laptop} {
            width: calc(60% - 40px);     
        }

        @media ${breakpoints.mobile} {
            position: static;
            transform: translateY(0%);
            width: 50%;
            margin: auto;        
        }
        /* width: 140%; */
        display: flex;
        /* overflow: hidden; */
    }

    .jasonImage {
        cursor: help;
        margin: auto;

        max-width: 100%;
        max-height: 100%;
        width: auto;
        
    }

    .bottomSpace {
        /* background-color: pink; */
        display:  ${props => props.$overflow ? "inline-block" : "none"};
        min-height: 150px;
    }
`

const links = [
    { text: "résumé", url: resumePath },
    { text: "LinkedIn", url: "https://www.linkedin.com/in/jasoncgao/" },
    { text: "GitHub", url: "https://github.com/MyriadRivers" },
    { text: "email", url: "mailto:jasongao678+careers@gmail.com" }
]

function About() {
    const [portraitID, setPortraitID] = useState<number>(Math.floor(Math.random() * jasonImages.length));
    const aboutPageRef = useRef<HTMLDivElement | null>(null);
    const aboutContainerRef = useRef<HTMLDivElement | null>(null);
    const aboutRef = useRef<HTMLDivElement | null>(null);

    const [overflow, setOverflow] = useState<boolean>(false);
    const [aboutTopPadding, setAboutTopPadding] = useState<number>(0);

    useEffect(() => {
        if (!aboutPageRef.current) return;
        console.log(aboutPageRef.current.getBoundingClientRect().top);
        const topPadding = aboutPageRef.current.getBoundingClientRect().top;
        setAboutTopPadding(topPadding);
    }, [])

    useEffect(() => {
        if (!aboutContainerRef.current || !aboutRef.current) return;
        const aboutContainerResizeObserver = new ResizeObserver((size) => {
            let rect = size[0].contentRect;
            if (!aboutRef.current) return;
            if (rect.height > aboutRef.current.clientHeight) {
                setOverflow(false);
            } else {
                setOverflow(true);
            }
        })
        aboutContainerResizeObserver.observe(aboutContainerRef.current);
        // setTagsHeight(tagsContainerRef.current.clientHeight);
    }, [])

    const swapPortrait = () => {
        let newID = Math.floor(Math.random() * jasonImages.length);
        while (newID === portraitID) {
            newID = Math.floor(Math.random() * jasonImages.length);
        }
        setPortraitID(newID);
    }

    return (<StyledAbout $overflow={overflow} $topPadding={aboutTopPadding} ref={aboutPageRef}>
        <div className={"jasonImageContainer"}>
            <img className={"jasonImage"} onClick={swapPortrait} src={jasonImages[portraitID]} alt={"Self portrait of me!"} />
        </div>
        <div className={"aboutTextContainer"} ref={aboutContainerRef}>
            <div className={"aboutText"} ref={aboutRef}>
                <div className={"aboutHeader"}>
                    Hey, I'm Jason!
                </div>
                <div>
                    <p>
                        I'm a current master's student in <Link url={"https://mshci.gatech.edu"}>Human-Computer Interaction at Georgia Tech</Link>,
                        where I studied Computer Science and Music Technology in my undergrad.
                    </p>
                    <p>
                        My desire is to unify creativity, technology, and human connection.
                        Good design doesn't stop at the sketching or wireframing phase; I bring a usability and empathy
                        centered mindset from the initial user interviews to the technical implementation in code.
                    </p>
                    <p>
                        In my free time, you might catch me making music, coding a personal project, or looking for bugs outside.
                    </p>
                </div>
                <LinkList links={links} />
                <div className={"bottomSpace"} >&nbsp;</div>
            </div>
        </div>
    </StyledAbout>);
}

export default About;