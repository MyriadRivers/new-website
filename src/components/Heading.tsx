import styled from "styled-components";
import { Ref, forwardRef, ReactNode } from "react"
import breakpoints from "../styles/breakpoints";

const StyledHeading = styled.div<{ $level: number }>`
    display: flex;
    flex-direction: column;

    font-family: ${props => props.theme.bodyFont};
    font-weight: bold;

    font-size: ${props => props.$level <= 3 ? "1.5em" : (props.$level <= 4 ? "1.25em" : "1em")};

    margin-top: ${props => props.$level <= 3 ? "0px" : (props.$level <= 4 ? "20px" : "0px")};
    /* font-size: 1.25em;   */
    /* text-transform: uppercase;font-size: 1.25em; */
    /* letter-spacing: 6pt; */

    /* padding: 15px 0px; */
    /* padding: 10px 100px 10px 100px; */
    
    @media ${breakpoints.mobile} {
        padding: 0px 0px;
    }
`

function Heading({ level, subtitle, children }: { level: number, subtitle?: string, children: ReactNode }, ref: Ref<HTMLDivElement>) {
    return (
        <StyledHeading $level={level} ref={ref}>
            {children}
            <div className={"subtitle"}>
                {subtitle}
            </div>
        </StyledHeading>);
}

export default forwardRef(Heading);