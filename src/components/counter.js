import { ce } from "../Utils/create-element"

export default function setupCounter(element) {
        let element=ce("button",{

        })

    let counter = 0
    const setCounter = (count) => {
      counter = count
      element.innerHTML = count is ${counter}
    }
    element.addEventListener('click', () => setCounter(counter + 1))
    setCounter(0)
  }

  setupCounter(document.querySelector('#counter'))

