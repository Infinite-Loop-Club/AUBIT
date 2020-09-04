## Accordion

<br />

### States

1.[active, setActive]:

    This state is used to open and close Accordion.
    When active is true,the accordion will be opened and vice versa

<br />

### UseRef (contentRef)

* Initially height of the content div set to 0px .When the active is true,with the help of useRef the height of the content div is set to its actuall height

<br />

### UseEffect

* With the help of useEffect  we listen to the changes in active state and also in contentRef
