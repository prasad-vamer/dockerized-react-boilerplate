import { Button } from "@/shadcn/components/ui/button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { decrement, increment } from "../store//exampleSlice";

function Home() {
  const value = useSelector((state: RootState) => state.example.value)
  const dispatch = useDispatch()

  return (
    <div className="bg-purple-400">
      <h1>Home Page</h1>
      <p>Colors using Tailwind CSS</p>
      <p>Fine me in src/Container/Home.tsx</p>
      <br />
      <Link to={"/about"}>Go to About Page</Link>
      <br />
      example state's value: {value}
      <br />
      <div className="flex gap-2">
        <Button>Shadcn Button</Button>
        <Button onClick={():void => {dispatch(increment())}}>Increase Count</Button>
        <Button onClick={():void => {dispatch(decrement())}}>Decrease count</Button>
      </div>
    </div>
  )
}

export default Home;