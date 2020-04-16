import React from 'react'
import Styled from 'styled-components'
import BackgroundImage from './ppp.jpg'
import PeopleImg from './people.png'
import Head from './head.png'
import Building from './building.png'
const SubDiv = Styled.div`
    .subdiv{
        width: 2000px;
        height: 500px;
        background-position: center; 
        padding: 50px;
        margin: 20px;
        background-image: radial-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2)), url(${BackgroundImage})
    }
    .article{
        width: 200px;
        height: 300px;        
    }
    .below-panel{
        width: 2000px;
        height: 200px;
        background-color: #F3D063;
    }
`

const Principle = ()  => {
        return (
            <SubDiv>
            <div style={{display:'flex', justifyContent:'space-evenly'}}>
                <div className='subdiv shadow-4'>
                <h1 className='dark-gray'>Language School In Number</h1>
                <article className="article pt3 mw5 ml4 tc bg-transparent dib br3 ma2 bw2 shadow-5">
                <img className='pa2' src={PeopleImg} alt='Students' style={{width:'50px', height:'50px'}} />
                <hr class="mw3 bb bw1 b--black-10"></hr>
                    <h1 className='pa4 dark-gray'>
                    526
                    </h1>
                    <h3 className='dark-gray'> STUDENTS </h3>
                </article>
                <article className="article pt3 mw5 ml4 tc bg-transparent dib br3 ma2 bw2 shadow-5">
                <img className='pa2' src={Head} alt='Students' style={{width:'70px', height:'50px'}} />
                <hr class="mw3 bb bw1 b--black-10"></hr>
                    <h1 className='pa4 dark-gray'>
                    16
                    </h1>
                    <h3 className='dark-gray'> TEACHERS </h3>
                </article>
                <article className="article pt3 mw5 ml4 tc bg-transparent dib br3 ma2 bw2 shadow-5">
                <img className='pa2' src={Building} alt='Students' style={{width:'70px', height:'50px'}} />
                <hr class="mw3 bb bw1 b--black-10"></hr>
                    <h1 className='pa4 dark-gray'>
                    9
                    </h1>
                    <h3 className='dark-gray'> BRANCHES </h3>
                </article>
                </div>
            </div>
            </SubDiv>
        )
    }
export default Principle;