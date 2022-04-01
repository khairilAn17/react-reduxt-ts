import { useSelector, useDispatch } from 'react-redux';
import { TRootState, logout } from '../store';
import classes from './Header.module.css';

const Header = () => {
  const isAuth = useSelector((state: TRootState) => state.auth.isAuthentication);
  const dispatch = useDispatch();

  const logoutHandler = (event: any) => {
    event.preventDefault();

    dispatch(logout());
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && ( 
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li onClick={logoutHandler}>
            <button>Logout</button>
          </li>
        </ul>
      </nav>) }
     
    </header>
  );
};

export default Header;
