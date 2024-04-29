import { Link } from "react-router-dom";

function About() {
  return (
    <div className="bg-purple-400">
      <h1>About Page</h1>
      <p>Colors using Tailwind CSS</p>
      <p>Fine me in src/Container/About.tsx</p>
      <br />
      <Link to={"/"}>Go to Home Page</Link>
    </div>
  )
}

export default About;