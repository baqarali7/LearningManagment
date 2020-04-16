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
    .Main{
        margin-top: 100px;
    }
`

const AdminPanel = ({OnRouteChange})  => {
        return (
            <SubDiv>
            <div className = 'Main'>
                <div style={{display:'flex', justifyContent:'space-evenly'}}>
                <div className='subdiv shadow-4'>
                <article className="article mw5 ml4 tc bg-transparent dib br3 ma2 bw2 shadow-5">
                <img src={Photo2} alt='Principle' />
                <hr class="mw3 bb bw1 b--black-10"></hr>
                    <h2> Classes </h2>
                    <input
                    onClick = { () => OnRouteChange('')}
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                    type="submit"
                    value="Classes"/>
                </article>
                <article className="article mw5 ml4 tc bg-transparent dib br3 ma2 bw2 shadow-5">
                <img src={Photo1} alt='Vice Principle'/>
                <hr class="mw3 bb bw1 b--black-10"></hr>
                    <h2> Results </h2>
                    <input
                    onClick = { () => OnRouteChange('home')}
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                    type="submit"
                    value="Results"/>
                </article>
                <article className="article mw5 ml4 tc bg-transparent dib br3 ma2 bw2 shadow-5">
                <img src={Photo3} alt='Vice Principle'/>
                <hr class="mw3 bb bw1 b--black-10"></hr>
                    <h2> Students </h2>
                    <input
                    onClick = { () => OnRouteChange('home')}
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                    type="submit"
                    value="Students"/>
                </article>
                <article className="article mw5 ml4 tc bg-transparent dib br3 ma2 bw2 shadow-5">
                <img src={Photo4} alt='Vice Principle'/>
                <hr class="mw3 bb bw1 b--black-10"></hr>
                    <h2> Teachers </h2>
                    <input
                    onClick = { () => OnRouteChange('')}
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                    type="submit"
                    value="Teachers"/>
                </article>
                <article className="article mw5 ml4 tc bg-transparent dib br3 ma2 bw2 shadow-5">
                <img src={Photo5} alt='Vice Principle'/>
                <hr class="mw3 bb bw1 b--black-10"></hr>
                    <h2> Time Table </h2>
                    <input
                    onClick = { () => OnRouteChange('table')}
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                    type="submit"
                    value="Time Table"/>
                </article>
                </div>
            </div>
            </div>
            </SubDiv>
        )
    }
export default AdminPanel;