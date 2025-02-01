import Desktop2 from "./Components/Desktop2/page"
import Card1 from "./Components/ProductCard/Card1"
import Desktop1 from "./Components/Desktop1/page"
import Post from "./Components/Desktop2/FeaturedPost/page"

export default function Home() {
  return (
    <div className="w-[1440px] justify-self-center"> 
      <div><Desktop2 /></div>
      <div><Card1 /></div>
      <div><Desktop1 /></div>
      <div><Post /></div>
    </div>
  )
}
