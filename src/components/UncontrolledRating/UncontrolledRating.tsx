import React, {useState} from "react";
import exp from "constants";

type RatingPropsType = {
    // value: 0 | 1 | 2 | 3 | 4 | 5
}

export function UncontrolledRating(props: RatingPropsType) {
    console.log("Rating rendering")

    const [value, setValue] = useState(0)

    const starCount = (num:number) => {
        setValue(num)
    }

    return (
        <div>
            <Star id={1} value={value>0} starCount={starCount}/>
            <Star id={2} value={value>1} starCount={starCount}/>
            <Star id={3} value={value>2} starCount={starCount}/>
            <Star id={4} value={value>3} starCount={starCount}/>
            <Star id={5} value={value>4} starCount={starCount}/>
        </div>
    )
}

type StarPropsType = {
    id: number
    value: boolean
    starCount: (num:number)=> void
}
function Star(props:StarPropsType) {
    return (
        props.value ? <span onClick={()=>{props.starCount(props.id)}}><b>star </b></span>
            : <span onClick={()=>{props.starCount(props.id)}}>star </span>
    )
}

export default UncontrolledRating