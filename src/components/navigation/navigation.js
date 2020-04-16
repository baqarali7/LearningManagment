import React from 'react'
import styled from 'styled-components'
import Logo from './logolearn.png'

const Styles = styled.nav`
.navbar {
    overflow: hidden;
    background: #fff;
    position: fixed; /* Set the navbar to fixed position */
    top: 0; /* Position the navbar at the top of the page */
    width: 100%; /* Full width */
    z-index: 88;
  }
`

const navigation = ({ OnRouteChange, isSignedIn, AdminSignIn }) => {
    if (AdminSignIn) {
        return (
            <Styles>

                <nav className='shadow-5 navbar ph3 pv3' style = {{display:'flex', justifyContent:"center"}}>
                    <img className = "dib mr7" src={Logo} alt='logo' style = {{ width: '200px', height: '30px'}} />
                    <h1 onClick = {() => OnRouteChange('adminpanel')} className = "dib f6 ml7 mr3 black hover-blue grow">ADMIN PANEL</h1>
                    <h1 onClick = {() => OnRouteChange('signin')} className = "dib f6  mr3 black hover-blue grow">LOGOUT</h1>
                </nav>
            </Styles>
        );        
    }
    else if(isSignedIn){
        return (
            <Styles>
                <nav className='shadow-5 navbar ph3 pv3' style = {{display:'flex', justifyContent:"center"}}>
                    <img className = "dib mr7" src={Logo} alt='logo' style = {{ width: '200px', height: '30px'}} />
                    <h1 onClick = {() => OnRouteChange('home')}className = "dib f6 ml7 mr3 black hover-blue grow">HOME</h1>
                    <h1 onClick = {() => OnRouteChange('sic')} className = "dib f6 mr3 black hover-blue grow">SIC</h1>
                    <h1 onClick = {() => OnRouteChange('signin')} className = "dib f6 mr3 black hover-blue grow ">LOGOUT</h1>
                </nav>
            </Styles>
        );
    } else {
        return (
            <Styles>
                <nav className="shadow-5 navbar ph3 pv3" style = {{display:'flex', justifyContent:"center"}}>
                    <img className = "dib mr7" src={Logo} alt='logo' style = {{ width: '200px', height: '30px'}} />
                    <h1 onClick = {() => OnRouteChange('entry')} className = "dib f6 ml7 mr3 black hover-blue grow">HOME</h1>
                    <h1 onClick = {() => OnRouteChange('signin')} className = "dib f6 mr3 black hover-blue grow">STUDENT LOGIN</h1>
                    <h1 onClick = {() => OnRouteChange('admin')} className = "dib f6 mr3 black hover-blue grow">ADMIN LOGIN</h1>
                    <h1 onClick = {() => OnRouteChange('registor')} className = "dib f6 mr3 black hover-blue grow">REGISTER</h1>
                </nav>
            </Styles>
        );
    }
}

export default navigation;