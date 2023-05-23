import React from 'react'
import { useHistory } from "react-router-dom"

function Home() {
    const history = useHistory()
    const redirect_to_roles = () => {
        history.push('/roles')
    }
    const redirect_to_addmed = () => {
        history.push('/addmed')
    }
    const redirect_to_supply = () => {
        history.push('/supply')
    }
    const redirect_to_track = () => {
        history.push('/track')
    }
    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">PharmaChain</a>
</nav>
        <div>
            <br />
            <h3 className='text-center'>Register Here for Raw Material Suppliers, Manufacturers, Distributors and Retailers</h3>
            <br />
            <div className="d-flex justify-content-center">
            <button onClick={redirect_to_roles} className="btn btn-danger btn-lg">Register</button>
            </div>
            <br />
            <br/>
            <br />
            <br />
            <h4 className='text-center'><pre>  Order Medicines                                  Control Supply Chain</pre></h4>
            <div className="d-flex justify-content-around">
            <button onClick={redirect_to_addmed} className="btn btn-dark btn-sm">Order Medicines</button>
            <button onClick={redirect_to_supply} className="btn btn-dark btn-sm">Control Supply Chain</button>
            </div>
            <br />
            <br />
            <br />
            <br/>
            <h4 className='text-center'><b>Track</b> the medicines</h4>
            <br/>
            <div className="d-flex justify-content-around">
            <button onClick={redirect_to_track} className="btn btn-outline-dark btn-sm">Track Medicines</button>
            </div>
        </div>
        </>
    )
}

export default Home
