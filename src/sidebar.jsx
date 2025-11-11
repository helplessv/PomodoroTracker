import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SidebarContainer = styled.div`
    background-color: red;
    height: 100vh;
    width: ${props => props.width};
    padding: clamp(0.2rem, 0.5vw, 1rem);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: 0.3s;
`

const StyledButton = styled.button`
    height: 2vw;
    width: auto;
    background-color: blue;


`



export default function Sidebar() {
    const [SidebarWidth, setSidebarWidth] = useState('3vw');
    const navigate = useNavigate();

    function toggleSidebar(){
        setSidebarWidth(SidebarWidth === '3vw' ? '10vw' : '3vw');
    }

    return (
        <SidebarContainer width={SidebarWidth}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1vh'}}>
                <StyledButton onClick={toggleSidebar}/>
                <StyledButton onClick={() => navigate('/Content1')}/>
                <StyledButton onClick={() => navigate('/Content2')}/>
                <StyledButton onClick={() => navigate('/Content3')}/>
                <StyledButton onClick={() => navigate('/Content4')}/>
                <StyledButton onClick={() => navigate('/Content5')}/>
                <StyledButton onClick={() => navigate('/Content6')}/>
            </div>
            <StyledButton />
        </SidebarContainer>
    )
}