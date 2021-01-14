import React from "react"

const SurveyRadio = props => {
    const { onChange, type, name, value, checked, _handleRadioChange } = props
    return (
        value.map((v, k) => {
            return (
                <div className="column" key={k}>
                    <label>
                        <input
                            type="radio"
                            name={name}
                            value={v.option_choice_name}
                            onChange={() => _handleRadioChange()}
                        />
                        <span>{v.option_choice_name}</span>
                    </label>
                </div>
            )
        })
    )
}

export default SurveyRadio