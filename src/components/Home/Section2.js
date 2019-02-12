import React from 'react'

const Section2 = () => (
    <div className=" bg-section-two">
        <div className="container__inner ">
            <h2 className="find-hotels__title" >Find Hotels</h2>
            <form className="find-hotels__form" >
                <label>Where
                <input placeholder="Location"></input>
                </label>
                <label>Check in
                <input placeholder="DD-MM-YYYY"></input>
                </label>
                <label>Check out
                <input placeholder="DD-MM-YYYY"></input>
                </label>
                <label>Adult
                <input placeholder="01"></input>
                </label>
                <label>Child
                <input placeholder="00"></input>
                </label>
                <button className="click-here-button" >Click Here</button>
            </form>
        </div>
    </div>

)

export default Section2