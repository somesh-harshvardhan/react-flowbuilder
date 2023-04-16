
import styled from 'styled-components';
import Sidebar from './components/sidebar/Sidebar';
import Flowbuilder from './components/flowbuilder/Flowbuilder';
import NodeSidebar from './components/flowbuilder/nodesidebar/NodeSidebar';
import GlobalStyles from './Global'
import { SnackbarProvider } from 'notistack';
const Container = styled.div`
  display : flex;
  align-items : center;
  justify-content: flex-start;
  width: 100vw;
 height: 100vh;
`
function App() {
  

  return (
    <>
    <SnackbarProvider>
    <GlobalStyles/>
    <Container>
     <Sidebar/>
     <Flowbuilder/>
     <NodeSidebar/>
    </Container>
    </SnackbarProvider>
    </>
  )
}

export default App
