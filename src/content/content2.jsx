import styled from 'styled-components'

const ContentContainer = styled.div`
    background-color: yellow;
    flex: 1;
`


export default function Content2({kakashke}){

    return(
        <ContentContainer>
            Rendered content2
            <br></br>   
            {kakashke}
        </ContentContainer>
    )
}