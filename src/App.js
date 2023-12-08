import logo from './logo.svg';
import './App.css';
import Nav from './component/Nav';
import { Outlet, Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import GlobalStyle from './style/GlobalStyle';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Allproduct from './pages/Allproduct'
import Footer from './component/Footer';
import TopBtn from './component/TopBtn';

const queryClient = new QueryClient();
//라이브러리의 쿼리 변경에 대한 기본 설정
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        
        <AuthContextProvider>
          <GlobalStyle/>
          <Nav/>
          <Routes>
            <Route path ='/' element ={<Allproduct/>}/>
          </Routes>
          <TopBtn/>
          <Outlet/>
          <Footer/>
        </AuthContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
