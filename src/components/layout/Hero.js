import Image from "next/image"
import Right from "../icons/Right";

export default function Hero() {
    return (
      <section className="hero">
        <div className="py-12">
          <h1 className="text-4xl font-semibold">
            Everything <br /> is better with <br /> a&nbsp;  
          <span className="text-primary">
            Pizza
          </span>
          </h1>
          <p className="my-6 text-gray-500 text-sm">
              Pizza is the missing piece that makes everyday complete, a simple yet delicious treat.
          </p>
          <div className="flex gap-4">
            <button className="bg-primary text-sm flex gap-2 text-white px-8 py-2 rounded-full items-center">
                Order Now    
                <Right />
            </button>
            <button className="flex gap-2 py-2 font-semibold text-gray-500 text-sm">
                Learn More
                <Right />
            </button>
          </div>
        </div>
        <div className="relative">
          <Image src={'/pizza.png'} layout={'fill'} objectFit={'contain'} alt={'Pizza'} />
        </div>
      </section>
      
    )
}