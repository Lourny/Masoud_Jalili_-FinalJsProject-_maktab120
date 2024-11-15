export function ce(name, {className = "", children = [], events = {}, restAttrs = {},innerText}={}) {
    const element = document.createElement(name);
    if (className) {
        element.className = className;
    }
    Object.keys(events).forEach(eventKey => {
        element.addEventListener(eventKey, events[eventKey]);
    });
    children.forEach(child => {
        element.append(child);
    });
    Object.keys(restAttrs).forEach(restAttrsKey => {
        element.setAttribute(restAttrsKey, restAttrs[restAttrsKey]);
    });
    if(innerText){
        element.innerText=innerText;
    }
    return element;
}