import styled from "styled-components"

export const ButtonList = styled.ul`
    display: flex;
    justify-content: center;
    margin-top: ${p => p.theme.space[4]}px;
`

export const ButtonListItem = styled.li`
    &:not(:first-child){
        margin-left: ${p => p.theme.space[2]}px;
    }
    
`

export const MainButton = styled.button`
    display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  font-size: ${p => p.theme.fontSizes[2]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  width: 100px;
  height: 40px;


  border: ${p => p.theme.borders.mainBorder};
  border-radius: 25px;


  transition: background-color 500ms cubic-bezier(0.075, 0.82, 0.165, 1),
    color 500ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.hoverColor};
  }

  
    text-transform: uppercase;
`