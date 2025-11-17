import styled from 'styled-components'

const InfobarContainer = styled.div`
    display: flex;
    height: 6vh;
    background-color: green;
`


export default function Infobar({currentName}){
    return(
        <InfobarContainer>
            {currentName}
        </InfobarContainer>
    )
}