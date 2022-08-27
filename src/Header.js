import React from 'react'
import "./Header.css"
import {Link} from 'react-router-dom'
import SearchIcon from "@mui/icons-material/Search"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useStateValue} from './StateProvider';
import { auth } from './firebase';

function Header() {

  const [{basket, user}] = useStateValue();

const login =()=>{
if (user){
  auth.signOut();
}
}

  
  
  return (
    <nav className='header'>

    <Link to = "/">

    {/* // logo on the left -> image */}
    
    <img className='header__logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=''/>

</Link>

{/* search box with icon */}
<div className='header__search'>
    <input type="text" className='header__searchInput'/>
<SearchIcon className="header__searchIcon"/>
</div>

{/* 3 links  */}
<div className='header__nav'>

{/* link 1 */}

<Link to={!user && "/login"} className='header__link'>
<div onClick={login} className='header__option'>
<span className='headerOptionLineOne'>Hello {user?.email}</span>
<span className='headerOptionLineTwo'>{user? 'Sign Out' : 'Sign In'}</span>
</div>
</Link>

{/* link 2 */}

<Link to="/" className='header__link'>
<div className='header__option'>
<span className='headerOptionLineOne'>Returns</span>
<span className='headerOptionLineTwo'>& Orders</span>
</div>
</Link>

{/* link 3 */}

<Link to="/" className='header__link'>
<div className='header__option'>
<span className='headerOptionLineOne'>Your</span>
<span className='headerOptionLineTwo'>Prime</span>
</div>
</Link>

{/* link 4 */}

<Link to="/checkout" className='header__link'>

    <div className='headerOptionBasket'>

{/* shopping basket icon */}

<ShoppingCartIcon/>

{/* no of items in basket */}

<span className='headerOptionLineTwo headerBasketCount'>{basket?.length}</span>

    </div>



</Link>

</div>

    </nav>
  )
}

export default Header