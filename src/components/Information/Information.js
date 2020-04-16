import React from 'react'
import Styled from 'styled-components'

const MainStyle = Styled.div`
    .Paragraph{
        Color: #fff
    }
    .Text {
        Color: #fff
    }
    .class1{
        background-color: #CB4335;
    }
    .class2{
        background-color: #F3D063
    }
    .class3{
        background-color: #1ABCAD
    }
`

const BelowSlider = () => {
    return (
        <MainStyle>
            <div className='main pa4' style = {{display:'flex', justifyContent:'center'}}>
                <div className='class1 pa5 mw6 tl bg-transparent dib bw2 white'>
                    <h1 className='Paragraph f4'>
                    School News
                    </h1>
                    <p className='Text'>
                    Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augue tristique sed
                    </p>
                    <p className='b ph3 pv2 input-reset ba white b--white bg-transparent grow pointer f6 dib'>
                    Read More
                    </p>

                </div>
                <div className='class2 pa5 mw6 tl bg-transparent dib bw2 white'>
                    <h1 className='Paragraph f4'>
                    Opening Hours
                    </h1>
                    <p className='Text tl'>
                    Monday - Friday 8.00 - 17.00
                    </p>
                    <hr class="ph5 mw3 bb bw1 b--black-10"></hr>
                    <p className='Text tl'>
                    Saturday 9.30 - 17.30
                    </p>
                    <hr class="ph5 mw3 bb bw1 b--black-10"></hr>
                    <p className='Text tl'>
                    Sunday 9.30 - 15.00
                    </p>
                </div>
                <div className='class3 pa5 class1 mw6 tl bg-transparent dib bw2 white'>
                    <h1 className='Paragraph f4'>
                        Contact Us
                    </h1>
                    <div className="mt3">
                        <label className="tl db fw6 lh-copy f6" htmlFor="name">Name</label>
                        <input className="pa2 input-reset ba  b--white bg-transparent grow w-100" type="text" name="name"  id="name" />
                    </div>
                    <div className="mt3">
                        <label className="tl db fw6 lh-copy f6" htmlFor="name">Email</label>
                        <input className="pa2 input-reset ba  b--white bg-transparent grow w-100" type="text" name="name"  id="name" />
                    </div>
                    <div className="mt3">
                        <label className="tl db fw6 lh-copy f6" htmlFor="name">Massage</label>
                        <input className="pa2 input-reset ba  b--white bg-transparent grow w-100" type="text" name="name"  id="name" />
                    </div>
                    <div>
                    <br></br>
                    <input
                    className="b ph3 pv2 input-reset ba b--white white bg-transparent grow pointer f6 dib"
                    type="submit"
                    value="Register"/>
                    </div>
                </div>
            </div>
        </MainStyle>
    )
}
export default BelowSlider