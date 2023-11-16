import React from 'react';

const Accordion = () => {
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>
        </div>
    );
};

function AccordionTitle() {
    return(
        <div>
            Menu
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