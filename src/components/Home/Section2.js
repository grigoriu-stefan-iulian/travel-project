import React from 'react'

const Section2 = () => (
    <div className="section-two__bg">
        <div className="container__inner ">
            <h2 className="section-two__title" >Find Hotels</h2>
            <form className="section-two__form" >
                <label><span>Where?</span>
                <input placeholder="Location" />
                </label>
                <label><span>Check in</span>
                <input placeholder="DD-MM-YYYY" />
                </label>
                <label><span>Check out</span>
                <input placeholder="DD-MM-YYYY" />
                </label>
                <label><span>Adult</span>
                <input placeholder="01" />
                </label>
                <label><span>Child</span>
                <input placeholder="00" />
                </label>
                <button className="button section-two__button" >Click Here</button>
            </form>
        </div>
    </div>

)

export default Section2