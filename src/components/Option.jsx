import React from "react";

const Option = (props)=>{
    const changeCategory=()=>{
        console.log(props.option)
        props.change(props.option);
    }
    return (
            <option onClick={changeCategory}>{props.option}</option>
    )
}

export default Option;