import React from 'react';

const Rating = () => {
    return (
        <div>
            <Star selected = {true}/>
            <Star selected = {true}/>
            <Star selected = {true}/>
            <Star selected = {true}/>
            <Star selected = {true}/>
        </div>
    );
};
function Star(props: boolean) {

        if (props.selected === true){
        return <span><b>star</b></span>
        } else {
          return  <span> star </span>
        }

}
export default Rating;