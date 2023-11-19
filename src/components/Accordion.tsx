import React from 'react';

const Accordion = (props: any) => {
    return (
        <div>
            <AccordionTitle title={props.title}/>
            <AccordionBody/>
        </div>
    );
};

function AccordionTitle(props: any) {
    return(
        <div>
            {props.title}
        </div>
    )
}

function AccordionBody() {
    return(
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )

}

export default Accordion;