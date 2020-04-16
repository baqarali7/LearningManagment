import React from 'react'
import Styled from 'styled-components'
import Photo1 from './ooo.jpg'
import Photo2 from './ooo2.jpg'


const SubDiv = Styled.div`
    .subdiv{
        width: 1200px;
        padding: 50px;
        margin: 20px;
    }
`

const Principle = ()  => {
        return (
            <SubDiv>
            <div style={{display:'flex', justifyContent:'space-evenly'}}>
                <div className='subdiv shadow-4'>
                <article className="mw5 ml4 tc bg-transparent dib br3 ma2 bw2 shadow-5">
                <img src={Photo2} alt='Principle' />
                <hr class="mw3 bb bw1 b--black-10"></hr>
                    <h2> Principal </h2>
                    <p className='pa3'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida arcu ac tortor dignissim convallis aenean et tortor.
                    </p>
                </article>
                <article className="mw5 ml4 tc bg-transparent dib br3 ma2 bw2 shadow-5">
                <img src={Photo1} alt='Vice Principle'/>
                <hr class="mw3 bb bw1 b--black-10"></hr>
                    <h2> Vice Principal </h2>
                    <p className='pa3'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida arcu ac tortor dignissim convallis aenean et tortor.
                    </p>
                </article>
                </div>
            </div>
            </SubDiv>
        )
    }
export default Principle;