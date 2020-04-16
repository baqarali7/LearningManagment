import React from 'react'
import Styled from 'styled-components'
import MailImage from './mail.png'
import HeadPhone from './headphone.png'
import AddFriend from './addfriend.png'

const MainStyle = Styled.div`
    background-color: #1ABCAD;
    .Paragraph{
        Color: #F3E463
    }
    .Text {
        Color: #fff
    }
`

const BelowSlider = () => {
    return (
        <MainStyle>
            <div className='pa4' style = {{display:'flex', justifyContent:'space-evenly'}}>
                <div>
                    <img className='' src = {MailImage} alt='mail' style = {{width:'50px', height:'35px'}} />
                    <p className='Paragraph f4'>
                        Get Quote!
                    </p>
                    <p className='Text'>
                        The Best Place for your Child Education
                    </p>
                </div>
                <div>
                <img className='' src = {HeadPhone} alt='Support' style = {{width:'40px', height:'40px'}} />
                    <p className='Paragraph f4'>
                        Ask a Question
                    </p>
                    <p className='Text'>
                        Not sure what you need? Ask our Advisors
                    </p>
                </div>
                <div>
                <img className='' src = {AddFriend} alt='Join' style = {{width:'30px', height:'40px'}} />
                    <p className='Paragraph f4'>
                        Join Today
                    </p>
                    <p className='Text'>
                        If you are student Sign up Now
                    </p>
                </div>
            </div>
        </MainStyle>
    )
}
export default BelowSlider