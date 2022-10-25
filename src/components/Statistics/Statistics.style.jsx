import styled from "styled-components"

export const StatisticList = styled.ul` 
        margin-top: ${p => p.theme.space[3]}px;
        text-align: center;
`

export const StatisticListItem = styled.li`
    &:not(:first-child){
        margin-top: ${p => p.theme.space[2]}px;
    }
    font-size: ${p => p.theme.fontSizes[3]}px;
`

export const StatisticValue = styled.span`
    margin-left: ${p => p.theme.space[2]}px;
`
