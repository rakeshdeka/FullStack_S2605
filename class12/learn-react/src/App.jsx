import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Welcome from './Welcome'
// import Home from './Home'
import CourseCard from './CourseCard'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {

  // const [likes, setLikes] = useState(0);

  const [user, setUser] = useState(null);

  console.log("All User", user?.users);


  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then(data => setUser(data))
  }, [])


  // props drilling



  return (
    <>
      {/* <Welcome />
      <Welcome /> */}
      {/* <Home /> */}
      {/* <CourseCard title="NodeJS Course" price={4999} isPurchased={true} />
      <CourseCard title="ReactJS Course" price={5999} isPurchased={false} /> */}
      {/* <CourseCard title="Angular Course" price={6999} /> */}

      {/* <p>Likes:{likes}</p>

      <button onClick={() => setLikes(likes + 1)} >
        Like
      </button> */}

      {/* <p>{user?.users}</p> */}

      <div>
        {user?.users?.map((usr) => (
          <p key={usr.id}>{usr.firstName} {usr.lastName}</p>
          
        ))}
      </div>

    </>
  )
}

export default App
