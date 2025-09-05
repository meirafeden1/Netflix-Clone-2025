import React from 'react'
import "../Header/header.css"
import NetflixLogo from '../../assets/images/Netflix-Logo.png'
import SearchIcon from '@mui/icons-material/Search'; 
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function Header() {
  return (
    <div className="header_outercontainer">
<div className="header_container">
<div className="header_left">


<ul>
<li><img src={NetflixLogo} alt="Netflix Logo" width="71%" /></li>


<li>Home</li>
<li>TVShows</li>
<li>Movies</li>

<li>Latest</li>
<li>MyList</li>
<li>Browser by language</li>

</ul>

</div>

<div className="header_right">
<ul>
     <li><SearchIcon /></li>
<li><NotificationsNoneIcon /></li>
<li><AccountBoxIcon /></li>

<li><ArrowDropDownIcon /></li>
</ul>
</div>
</div>
    </div>
  )
}
