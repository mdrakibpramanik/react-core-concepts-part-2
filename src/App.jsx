import Counter from './counter-1st-';

import Batsman from './Batsman-2nd-';

import Users from './Users-4th-';

import Friends from './Friends-5th-';

import './App.css'
import { Suspense } from 'react';

const  fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())

const fetchFriends = async() => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  return res.json();
}

function App() {

  const FriendsPromise = fetchFriends();

  function handleClick(){
    alert('I am clicked-1.')
  }

  const handleClick3 = () => {
    alert('I am clicked-3.')
  }

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }

  return (
    <>
      <h1>Vite + React</h1>

      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers ={fetchUsers}></Users>
      </Suspense>

      <Suspense fallback={<h3>Friends are coming for treat...</h3>}>
        <Friends FriendsPromise ={FriendsPromise}></Friends>
      </Suspense>

      <Batsman></Batsman>

      <Counter></Counter>

      {/* <button onclick="handleClick()">Click Me</button> */}
      <button className="Button"  onClick={handleClick}>Click Me 1</button>
      <button className="Button"  onClick={function handleClick2(){
        alert('I am clicked-2.')
      }}>Click Me 2</button>

      <button className="Button"  onClick={handleClick3}>Click Me 3</button>

      <button className="Button"  onClick={() => alert('I am clicked-4.')}>Click Me 4</button>

      <button className="Button"  onClick={() => handleAdd5(10)}>Click Add 5</button>
    </>
  )     
}

export default App
