import React, { useContext } from "react";
import { AccordionContext, useAccordionToggle, Card } from "react-bootstrap";

function AccordionToggle({ children, eventKey, callback }) {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <Card.Header
      className={isCurrentEventKey ? "accordion-item-active" : "accordion-item"}
      onClick={decoratedOnClick}
    >
      {children}
    </Card.Header>
  );
}

export default AccordionToggle;
