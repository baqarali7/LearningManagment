import React from 'react'

const Registor = ({ OnRouteChange }) => {
    return (
        <article className="br3 ba b--black-10 mv6 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 black-80">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="tl f1 fw6 ph0 mh0">REGISTER</legend>
                    <div className="mt3">
                        <label className="tl db fw6 lh-copy f6" htmlFor="name">Name</label>
                        <input className="pa2 input-reset ba bg-transparent grow w-100" type="text" name="name"  id="name" />
                    </div>
                    <div className="mt3">
                        <label className="tl db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input className="pa2 input-reset ba bg-transparent grow w-100" type="email" name="email-address"  id="email-address" />
                    </div>
                    <div className="mv3">
                        <label className="tl db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input className="b pa2 input-reset ba bg-transparent grow w-100" type="password" name="password"  id="password" />
                    </div>
                    </fieldset>
                    <div className="">
                    <label className='db fw6 lh-copy f6' for="Class">Choose Class</label>
                    <select className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib' id="cars">
                    <option value="Class1">Class 1</option>
                    <option value="Class2">Class 2</option>
                    <option value="Class3">Class 3</option>
                    <option value="Class4">Class 4</option>
                    <option value="Class5">Class 5</option>
                    <option value="Class6">Class 6</option>
                    <option value="Class7">Class 7</option>
                    <option value="Class8">Class 8</option>
                    <option value="Class9">Class 9</option>
                    <option value="Class10">Class 10</option>
                    </select>
                    </div>
                    <br></br>
                    <div>
                    <input
                    onClick = { () => OnRouteChange('home')}
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                    type="submit"
                    value="Register"/>
                    </div>
                </div>
            </main>
        </article>

    );
}

export default Registor;