import './App.scss';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Details from './Details/Details'
import Platform from './Platform/Platform'
import Timeline from './Timeline/Timeline'
import Registration from './Registration/Registration'
import Prizes from './Prizes/Prizes'
import Sponsors from './Sponsors/Sponsors'
import Panelists from './Panelists/Panelists'
import { useState } from 'react';
import Footer from './Footer/Footer'
import CodeWarsLogo from './Assets/CodeWarsLogo.png'

function App() {

    const [checknav, changenav] = useState(false);

    return (
        <Router>
            <div className="allin">
                <div className="LogoImgDiv">
                    <img className="LogoImg" src={CodeWarsLogo} alt="Code Wars Logo"/>
                </div>

                <div className="nav-container">
                    <div className={checknav? "burger active": "burger"} onClick={() => changenav(!checknav)} >
                        <div class="bun top"></div>
                        <div class="filling"></div>
                        <div class="bun bottom"></div>
                    </div>
                </div>

                <nav className={checknav? "topnav show": "topnav"}>
                    <ul>
                        <li className="green"><Link to={'/'} className="nav-link"> Details </Link></li>
                        <li className="red"><Link to={'/platform'} className="nav-link">Platform</Link></li>
                        <li className="yellow"><Link to={'/timeline'} className="nav-link">Timeline</Link></li>
                        <li className="purple"><Link to={'/registration'} className="nav-link">Registration</Link></li>
                        <li className="green"><Link to={'/prizes'} className="nav-link">Prizes</Link></li>
                        <li className="red"><Link to={'/sponsors'} className="nav-link">Sponsors</Link></li>
                        <li className="yellow"><Link to={'/panelists'} className="nav-link">Panelists</Link></li>
                    </ul>
                </nav>


                <Routes>
                    <Route exact path='/' element={<Details />} />
                    <Route path='/platform' element={<Platform />} />
                    <Route path='/timeline' element={<Timeline />} />
                    <Route path='/registration' element={<Registration />} />
                    <Route path='/prizes' element={<Prizes />} />
                    <Route path='/sponsors' element={<Sponsors />} />
                    <Route path='/panelists' element={<Panelists />} />
                </Routes>
                <Footer/>
            </div>
            
        </Router>
    );
}

export default App;