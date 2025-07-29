import { useState } from 'react'
import { PostComponent } from './post'
import { TopBar } from './topbar'

export default function App() {
  return <div>
    <TopBar></TopBar>
    <b>
      hi there
    </b>
    <Counter></Counter>
    <PostComponent name={"John Wick"} subtitle={"@johnwick"} time={"1h"} image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwkstKKj8JBx7d7mIlBbHgq4GjWBGZNDmWCushEzConxED0-43T6uehwc&s=10"} description={"Babayaga"} />
    <PostComponent name={"Mohd Arshad"} subtitle={"@arshad"} time={"2h"} image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ16WLAVKBaJIDh1bieHixwokBks6QIFIasiyRcSBj6AbNBKkYQUIjpSp8&s=10"} description={"Sick!"} />
  </div>
}


function Counter() {
  const [count, setCount] = useState(0);

  function increaseCount(){
    setCount(count + 1);
  }


  function decreaseCount(){
    setCount(count - 1);
  }

  function resetCount(){
    setCount(0);
  }

  
  return <div>
    <h1>Count: {count}</h1>
    <button onClick={increaseCount}>Increase Count</button>
    <button onClick={decreaseCount}>Decrease Count</button>
    <button onClick={resetCount}>Reset Count</button>
  </div>
}

