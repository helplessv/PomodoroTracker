import { useState, useEffect } from 'react'
import Sidebar from './sidebar'
import Infobar from './infobar'
import Content1 from './content/content1'
import Content2 from './content/content2'
import Content3 from './content/content3'
import Content4 from './content/content4'
import Content5 from './content/content5'
import Content6 from './content/content6'
import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'

const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

function App() {
  const [currentName, setCurrentName] = useState(() => {
    return localStorage.getItem("currentName") || ""; // восстанавливаем
  });

  useEffect(() => {
    if (currentName) {
      localStorage.setItem("currentName", currentName);
    }
  }, [currentName]);

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar currentName={currentName} setCurrentName={setCurrentName}/>
      <Main>
        <Infobar currentName={currentName}/>
        <Routes>
          <Route path="/Content1" element={<Content1 />} />
          <Route path="/Content2" element={<Content2 />} />
          <Route path="/Content3" element={<Content3 />} />
          <Route path="/Content4" element={<Content4 />} />
          <Route path="/Content5" element={<Content5 />} />
          <Route path="/Content6" element={<Content6 />} />
        </Routes>
      </Main>
    </div>
  )
}

export default App
