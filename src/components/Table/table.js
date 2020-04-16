import React from 'react'

const Table = ({OnRouteChange, AdminSignIn})  => {
        return (
            <div class="mt6 tc bg-transparent dib br3 pa3 ma2 bw2 shadow-5">
                <div style={{display:'flex', justifyContent:'space-evenly'}}>
                { AdminSignIn === true ?
                    <>
                    <h1>TIME TABLE</h1>
                    <h1 onClick = {() => OnRouteChange('addclass')} className = "b ph3 pv1 input-reset ba b--black bg-transparent grow pointer f4 dib">SCHEDULE CLASS</h1> 
                    </> :
                    <h1>TIME TABLE</h1>
                }   
                </div>
                <table class="pure-table">
                    <thead>
                        <tr>
                            <th className='pa4'>Day</th>
                            <th className='pa4'>Subject</th>
                            <th className='pa4'>Timing</th>
                            <th className='pa4'>Online Class</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className='pa4 f6 lh-copy measure mt2 mid-gray'>Monday</td>
                            <td className='pa4 f6 lh-copy measure mt2 mid-gray'>Maths</td>
                            <td className='pa4 f6 lh-copy measure mt2 mid-gray'>10.00 am to 11.00 am</td>
                            <td className='pa4 f6 lh-copy measure mt2 mid-gray'><a href="https://zoom.us/j/9984000209?status=success">Zoom Online Class Link</a> <br></br> Password: 6456</td>
                        </tr>

                        <tr>
                        <td className='pa4 f6 lh-copy measure mt2 mid-gray'>Monday</td>
                            <td className='pa4 f6 lh-copy measure mt2 mid-gray'>Urdu</td>
                            <td className='pa4 f6 lh-copy measure mt2 mid-gray'>10.00 am to 11.00 am</td>
                            <td className='pa4 f6 lh-copy measure mt2 mid-gray'><a href="https://zoom.us/j/9984000209?status=success">Zoom Online Class Link</a>  <br></br> Password: 6456</td>
                        </tr>

                        <tr>
                        <td className='pa4 f6 lh-copy measure mt2 mid-gray'>Monday</td>
                            <td className='pa4 f6 lh-copy measure mt2 mid-gray'>Pak Studies</td>
                            <td className='pa4 f6 lh-copy measure mt2 mid-gray'>10.00 am to 11.00 am</td>
                            <td className='pa4 f6 lh-copy measure mt2 mid-gray'><a href="https://zoom.us/j/9984000209?status=success">Zoom Online Class Link</a>  <br></br> Password: 6456</td>
                        </tr>
                        <tr>
                        <td className='pa4 f6 lh-copy measure mt2 mid-gray'>Monday</td>
                            <td className='pa4 f6 lh-copy measure mt2 mid-gray'>Islamiyat</td>
                            <td className='pa4 f6 lh-copy measure mt2 mid-gray'>10.00 am to 11.00 am</td>
                            <td className='pa4 f6 lh-copy measure mt2 mid-gray'><a href="https://zoom.us/j/9984000209?status=success">Zoom Online Class Link</a>  <br></br> Password: 6456</td>
                        </tr>
                        <tr>
                        <td className='pa4 f6 lh-copy measure mt2 mid-gray'>Webnesday</td>
                            <td className='pa4 f6 lh-copy measure mt2 mid-gray'>Culture</td>
                            <td className='pa4 f6 lh-copy measure mt2 mid-gray'>10.00 am to 11.00 am</td>
                            <td className='pa4 f6 lh-copy measure mt2 mid-gray'><a href="https://zoom.us/j/9984000209?status=success">Zoom Online Class Link</a>  <br></br> Password: 6456</td>
                        </tr>
                        <tr>
                        <td className='pa4 f6 lh-copy measure mt2 mid-gray'>Tuesday</td>
                            <td className='pa4 f6 lh-copy measure mt2 mid-gray'>Science</td>
                            <td className='pa4 f6 lh-copy measure mt2 mid-gray'>12.00 pm to 1.00 pm</td>
                            <td className='pa4 f6 lh-copy measure mt2 mid-gray'><a href="https://zoom.us/j/9984000209?status=success">Zoom Online Class Link</a> <br></br> Password: 6456</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
export default Table;
