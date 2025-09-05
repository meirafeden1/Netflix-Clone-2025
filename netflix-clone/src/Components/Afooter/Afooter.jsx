import React from 'react'

import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "../Afooter/afooter.css"
// import afacebookIcon from '@mui/icons-material/Facebook';


export default function Afooter() {
  return (
    <><div>Afooter</div><div className="afooter_Outer_Container">
        <div className="afooter_Innner_Container">
    <div className="afooter_Container">
<InstagramIcon />
<YouTubeIcon />
{/* <facebookOutkineedIcon /> */}
    </div>
<div className="afooter_data">
<div>
<ul>
<li>Audio Description</li>
<li>Investor Relation</li>
<li>Legal Notice</li>
</ul>
</div>

<div>
<ul>
<li>Help Center</li>
<li>Jobs</li>
<li>Cookie preference</li>
</ul>

</div>

<div>
<ul>
<li>Gift Cards</li>
<li>Terms of use</li>
<li>Corporate Information</li>
</ul>

</div>

<div>
<ul>
<li>Media Center</li>
<li>privact</li>
<li>Contact Use</li>
</ul>
</div>
</div>
<div className="service_code">
<p>
Service Code
</p>
</div>
<div className="copy-write">
&copy; 1997-2024 Netflix, inc

</div>
</div>
</div>
</>
  )
}
