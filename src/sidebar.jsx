import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

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



export default function Sidebar({onCategorySelect}) {
    const [SidebarWidth, setSidebarWidth] = useState('3vw');

    function toggleSidebar(){
        setSidebarWidth(SidebarWidth === '3vw' ? '10vw' : '3vw');
    }

    function handleCategory(e){
        onCategorySelect(e.target.id);
    }


    return (
        <SidebarContainer width={SidebarWidth}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1vh'}}>
                <StyledButton onClick={toggleSidebar} />
                    {[1,2,3,4,5,6].map(num => (
                        <StyledButton key={num} onClick={handleCategory} id={num.toString()} />
                    ))}
            </div>
            <StyledButton />
        </SidebarContainer>
    )
}