import Image from "next/image";

export default function HomeMenu() {
  return (
    <section className=""> 
    <div className="relative h-64 -left-12 right-0 w-full ">
      <div className="h-48 w-48 absolute left-0">
        <Image src={'/sallad1.png'} layout={'fill'} objectFit={'contain'} alt={'salad'} />
      </div>
      <div className="h-48 w-48 absolute -top-12 -right-12">
        <Image src={'/sallad2.png'} layout={'fill'} objectFit={'contain'} alt={'salad'} />
      </div>
    </div>
      <div className="text-center">
        <h3 className="uppercase text-gray-600 font-semibold leading-3">
          Check out
        </h3>
        <h2 className="text-primary font-bold text-4xl italic">
          Menu
        </h2>
      </div>
    </section>
  );
}