import React from 'react'


const ScheduleClass = ({OnRouteChange})  => {
        return (
            <div>
                <h1> Schedule Class</h1>
                <article style={{display: 'flex', justifyContent:'center' }}>
                <div className='shadow-5 ba b--black-10 pa4 w-50'>
                <div className="">
                    <label className='db fw6 lh-copy f6 tl mt3' for="Class">Class</label>
                    <select className='grow pa2 input-reset ba bg-transparent grow w-100' id="Class">
                    <option className= 'tc' value="Class1">Class 1</option>
                    <option className= 'tc' value="Class2">Class 2</option>
                    <option className= 'tc' value="Class3">Class 3</option>
                    <option className= 'tc' value="Class4">Class 4</option>
                    <option className= 'tc' value="Class5">Class 5</option>
                    <option className= 'tc' value="Class6">Class 6</option>
                    <option className= 'tc' value="Class7">Class 7</option>
                    <option className= 'tc' value="Class8">Class 8</option>
                    <option className= 'tc' value="Class9">Class 9</option>
                    <option className= 'tc' value="Class10">Class 10</option>
                    </select>
                </div>
                <div className="">
                    <label className='db fw6 lh-copy f6 tl mt3' for="Class">Day</label>
                    <select className='grow pa2 input-reset ba bg-transparent grow w-100' id="Day">
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thusday">Thusday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                    <option value="Sunday">Sunday</option>
                    </select>
                </div>
                <div className="">
                    <label className='db fw6 lh-copy f6 tl mt3' for="Class">Time</label>
                    <select className='grow pa2 input-reset ba bg-transparent grow w-100' id="Time">
                    <option className= 'tc' value="Monday">8.00 to 9.00 am</option>
                    <option className= 'tc' value="Tuesday">9.00 to 10.00 am</option>
                    <option className= 'tc'value="Wednesday">10.00 to 11.00 am</option>
                    <option className= 'tc' value="Thusday">11.00 to 12.00 am</option>
                    <option className= 'tc' value="Friday">12.00 to 1.00 pm</option>
                    <option className= 'tc' value="Saturday">1.00 to 2.00 pm</option>
                    </select>
                </div>
                <div className="">
                    <label className='db fw6 lh-copy f6 tl mt3' for="Class">Location</label>
                    <select className='grow pa2 input-reset ba bg-transparent grow w-100' id="Location">
                    <option className= 'tc' value="Class">Class</option>
                    <option className= 'tc' value="Online">Online</option>
                    </select>
                </div>
                <div className="">
                    <label className="db fw6 lh-copy f6 tl mt3" htmlFor="name">Online Class URL</label>
                    <input className="pa2 input-reset ba bg-transparent w-100" type="text" name="url"  id="url" />
                </div>
                <div className='db fw6 lh-copy f6 tl mt3'>
                    <input
                    onClick = { () => OnRouteChange('adminpanel')}
                    className="grow pa2 input-reset ba bg-transparent grow w-100"
                    type="submit"
                    value="Submit Class"/>
                </div>
                </div>
                </article>
            </div>
            
        )
    }
export default ScheduleClass;