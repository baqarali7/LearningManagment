import React from 'react'
import Styled from 'styled-components'
import Photo1 from './iii.jpg'
import Photo2 from './iii2.jpg'
import Photo3 from './iii3.jpg'
import Photo4 from './iii4.jpg'
import Photo5 from './iii5.jpg'

const SubDiv = Styled.div`
    .subdiv{
        width: 1200px;
        padding: 50px;
        margin: 20px;
    }
    .article{
        width: 400px;
        height: 300px;        
    }
`

const Sic = ({OnRouteChange})  => {
        return (
            <SubDiv>
            <div>
                <h1> Student Information Center</h1>
                <h1>Academics</h1>
                <div style={{display:'flex', justifyContent:'space-evenly'}}>
                <div className='subdiv shadow-4'>
                <article className="article mw5 ml4 tc bg-transparent dib br3 ma2 bw2 shadow-5">
                <img src={Photo2} alt='Principle' />
                <hr class="mw3 bb bw1 b--black-10"></hr>
                    <h2> Class Schedule </h2>
                    <input
                    onClick = { () => OnRouteChange('table')}
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                    type="submit"
                    value="Class Schedule"/>
                </article>
                <article className="article mw5 ml4 tc bg-transparent dib br3 ma2 bw2 shadow-5">
                <img src={Photo1} alt='Vice Principle'/>
                <hr class="mw3 bb bw1 b--black-10"></hr>
                    <h2> Exam Results </h2>
                    <input
                    onClick = { () => OnRouteChange('home')}
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                    type="submit"
                    value="Exam Results"/>
                </article>
                <article className="article mw5 ml4 tc bg-transparent dib br3 ma2 bw2 shadow-5">
                <img src={Photo3} alt='Vice Principle'/>
                <hr class="mw3 bb bw1 b--black-10"></hr>
                    <h2> Attendence </h2>
                    <input
                    onClick = { () => OnRouteChange('home')}
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                    type="submit"
                    value="Attendence"/>
                </article>
                <article className="article mw5 ml4 tc bg-transparent dib br3 ma2 bw2 shadow-5">
                <img src={Photo4} alt='Vice Principle'/>
                <hr class="mw3 bb bw1 b--black-10"></hr>
                    <h2> Progress </h2>
                    <input
                    onClick = { () => OnRouteChange('home')}
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                    type="submit"
                    value="Progress"/>
                </article>
                <article className="article mw5 ml4 tc bg-transparent dib br3 ma2 bw2 shadow-5">
                <img src={Photo5} alt='Vice Principle'/>
                <hr class="mw3 bb bw1 b--black-10"></hr>
                    <h2> Events </h2>
                    <input
                    onClick = { () => OnRouteChange('home')}
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                    type="submit"
                    value="Events"/>
                </article>
                </div>
            </div>
            </div>
            </SubDiv>
        )
    }
export default Sic;