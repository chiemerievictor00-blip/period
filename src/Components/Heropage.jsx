import React from 'react'
import '../Styles/Heropage.css';
import { Link } from 'react-router-dom';

const Heropage = () => {
  return ( 

    <>  
        <div className='heropage'>
            <h1>🌸 Welcome to Cycle Tracker</h1>
            <p>
                Your personal space to track your menstrual cycle, understand your body,
                and stay informed every day. Health awareness made simple and stress-free.
            </p>
            <div className="herobtn">
                <Link to="/tracker"><button>Start Tracking</button></Link>
            </div>


        </div>

        <div className="iconsbox">

            <div className="icon">
                <i class="bx bx-calendar-alt"/>
                <h3>Track Easily</h3>
                <p>Log your period lenghts and cycle length in just seconds.</p>
            </div>

            <div className="icon">
                <i class="bx bx-calendar-heart" />
                <h3>Stay Healthy</h3>
                <p>Get helpful tips and reminders to take good care of yourself.</p>
            </div>

            <div className="icon">
                <i class="bx bx-bell-ring" />
                <h3> Never Miss</h3>
                <p>Get reminded about your next period and ovulation dates.</p>
            </div>
        </div>

    </>

       
        
  );
}

export default Heropage
