import styled from "styled-components";


export const Sections = styled.section`
    background: ${p => p.theme.colors.sectionBgColor};
    padding-top: ${p => p.theme.space[4]}px;
    padding-bottom: ${p => p.theme.space[4]}px;
    min-width: 380px;
    width: 95vw;
    box-shadow: ${p => p.theme.shadows.mainShadow};

    &:not(:first-child){
        margin-top: ${p =>p.theme.space[3]}px;
    }
`

export const Title = styled.h2`
text-align: center;
    color: ${p => p.theme.colors.primaryTextColor};
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes[5]}px;
`

