import React from 'react'

const AnswerDisplay = (props) => {
    console.log(props)
    return(
        <div>{props.randomAnswer.data}</div>
    )
}

export default AnswerDisplay