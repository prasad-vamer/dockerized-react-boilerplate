import { Button } from "@/shadcn/components/ui/button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-purple-400">
      <h1>Home Page</h1>
      <p>Colors using Tailwind CSS</p>
      <p>Fine me in src/Container/Home.tsx</p>
      <br />
      <Link to={"/about"}>Go to About Page</Link>
      <br />
      <Button>Shadcn Button</Button>
    </div>
  )
}

export default Home;