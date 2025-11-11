import styled from 'styled-components'
import { useState } from 'react';

const ContentContainer = styled.div`
    background-color: yellow;
    flex: 1;
`


export default function Content3({ kakashke, onChange }) {
    const [govno, setGovno] = useState(0);
  
    function handleCount() {
      const newValue = govno + 1;
      setGovno(newValue);
      if (onChange) onChange(newValue);
    }
  
    return (
      <ContentContainer>
        Rendered content3
        <button onClick={handleCount}>{govno}</button>
      </ContentContainer>
    );
  }
  