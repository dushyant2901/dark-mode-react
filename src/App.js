import React, { useState, useEffect } from 'react';
import data from './data'
import './index.css';
import Article from './Article';
const getTheme=()=>{
 /*  let curTheme = localStorage.getItem("theme")
  if (curTheme) {
    return curTheme
  }else{
    return 'light-theme'
  } */

  let theme='light-theme'
  if (localStorage.getItem("theme")) {
   return theme=localStorage.getItem("theme")
  }
  return theme
}
function App() {
  const [theme, setTheme] = useState(getTheme());
  useEffect(() => {
   document.documentElement.classList=theme
   localStorage.setItem("theme",theme)
  }, [theme]);
  const toggleTheme = ()=>{
    setTheme(theme==='light-theme'?'dark-theme': 'light-theme')
  }
  return (
    <main >
      <nav>
        <div className="nav-center">
          <h1>overreacted</h1>
          <button className="btn" onClick={toggleTheme}>
            toggle
          </button>
        </div>
      </nav>
      <section className="articles">
        {data.map((item) => {
          return <Article key={item.id} {...item} />;
        })}
      </section>
    </main>
  );
}

export default App;
