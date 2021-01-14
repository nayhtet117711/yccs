import React from "react"

const SurveyInput = props => {
    const { onChange, type, value, placeholder, required } = props
    return (
        <input
            onChange={onChange}
            type={type}
            value={value}
            placeholder={placeholder}
            required={required}
            className="input px-2"
            style={{ borderRadius: '15px', boxShadow: "0px 2px 3px #b654c7", borderColor: "#b654c7", transition: "opacity 1s ease-in -out", width: '60%', height: '40px', }} />

    )
}

export default SurveyInput