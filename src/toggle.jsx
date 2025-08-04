import { useState } from 'react';
import { PropsComponent } from './props'

export function ToggleMessage(){

  const [isVisible, setIsVisible] = useState(true);

  return <div>
    <button onClick={() => setIsVisible(!isVisible)}>
    Toggle Message
  </button>
  {isVisible && <PropsComponent name={"Heisenberg"} age={50} />}
  </div>
}