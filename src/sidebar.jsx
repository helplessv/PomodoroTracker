import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
    background-color: red;
    height: 100vh;
    width: 10vw;
    padding: 1vh;
`

const StyledButton = styled.button`
    height: 2vw;
    width: auto;
    background-color: blue;


`

function toggleSidebar() {

}



export default function Sidebar() {
    return (
        <SidebarContainer>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1vh' }}>
                <StyledButton />
                <StyledButton />
                <StyledButton />
                <StyledButton />
                <StyledButton />
                <StyledButton />
                <StyledButton />
            </div>
            <div></div>
        </SidebarContainer>
    )
}