import { useSelector } from 'react-redux';
import Auth from './components/Auth';
import Counter from './components/Counter';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import { TRootState } from './store';


function App() {

  const isAuth = useSelector((state: TRootState) => state.auth.isAuthentication);

  return (
   <>
     <Header />
     {!isAuth && <Auth />}
     {isAuth && <UserProfile />}
     <Counter />   
   </>
  );
}

export default App;
