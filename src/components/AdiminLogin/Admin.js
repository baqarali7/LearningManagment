import React from 'react'

const AdminLogin = ({ OnRouteChange }) => {
    return (
        <article className="br3 ba b--black-10 mv6 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 black-80">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f1 fw6 ph0 mh0">Admin</legend>
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
                    <input
                    onClick = { () => OnRouteChange('adminpanel')}
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                    type="submit"
                    value="Sign in"/>
                    </div>
                </div>
            </main>
        </article>

    );
}

export default AdminLogin;