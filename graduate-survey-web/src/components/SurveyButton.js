import React from "react"

const SurveyButton = props => {
    const { } = props
    return(
        <button className="button survey-button" {...props}>{props.children}</button>
    )
}

export default SurveyButton