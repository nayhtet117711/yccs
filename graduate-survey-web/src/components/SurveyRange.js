import React from "react"

const SurveyRange = props => {
    const { } = props
    return (
        <div className="is-flex is-flex-direction-row is-justify-content-center">
            <div className="">lowest</div>
            <div className="control ">
                <label className="radio mx-3">
                    <input type="radio" name="rsvp" />
                </label>
                <label className="radio mx-3">
                    <input type="radio" name="rsvp" />
                </label>
                <label className="radio mx-3">
                    <input type="radio" name="rsvp" />
                </label>
                <label className="radio mx-3">
                    <input type="radio" name="rsvp" />
                </label>
                <label className="radio mx-3">
                    <input type="radio" name="rsvp" />
                </label>
            </div>
            <div className="">highest</div>
        </div>
    )
}

export default SurveyRange