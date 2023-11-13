import Image from "next/image"
import Link from "next/link";
function Card({ item }:{item:any}) {
  return (
    <div className="max-w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-200 hover:shadow-2xl hover:-translate-y-1" style={{maxHeight: '500px'}}>
      <Image className="w-full object-cover" width={1000} height={324} src={item.image} alt="demo image" />

      <div className="p-4">
        <div className="flex mb-3">
          <p className="text-sm text-gray-500 dark:text-gray-400"> Mar 10, 2023 </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mx-1"> , </p>
          <p className="text-sm text-gray-500 dark:text-gray-400"> 5 min read </p>
        </div>

        <Link legacyBehavior href={`/read/${item.title.toLowerCase().trim().split(" ").join("-")}`}>
          <a className="text-lg font-semibold hover:text-blue-500 transition-colors duration-200">{item.title}</a>
        </Link>
      </div>
    </div>
  )
}

export default Card
