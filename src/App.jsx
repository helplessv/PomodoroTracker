import { useState } from 'react'
import Sidebar from './sidebar'
import Infobar from './infobar'
import Content from './content'
import styled from 'styled-components';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

`



function App() {
  
  const [selectedId, setSelectedId] = useState(1);

  return (
    <div style={{display: 'flex'}}>
      <Sidebar onCategorySelect={setSelectedId}/>
      <Main>
        <Infobar/>
        <Content selectedId={selectedId}/>
      </Main>
    </div>
  )
}

export default App
