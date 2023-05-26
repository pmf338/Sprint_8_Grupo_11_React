import Sidebar from './components/SideBar';
import ContentWrapper from './components/ContentWrapper';
import {Route, Link, Routes} from 'react-router-dom';

function App() {
  return (
    <>
      <div id="wrapper">
        <Sidebar />
        <ContentWrapper />
      </div>
    </>
  )
}

export default App
