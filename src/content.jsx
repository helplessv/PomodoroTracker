import styled from 'styled-components'

const ContentContainer = styled.div`
    background-color: yellow;
    flex: 1;
`


export default function Content({selectedId}){
    return(
        <ContentContainer>
            {selectedId}    
        </ContentContainer>
    )
}