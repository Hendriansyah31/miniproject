import Link from "next/link";
import Image from "next/image";
import Navitem from "./shared/Navitem";
import Mobilenav from "./shared/Mobilenav";
export const Header = () => {
  return (
    <header className="w-full border-b">
    <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-35">
        <Image src="/ssa.jpg" alt="logo" width={100} height={60}/>
        </Link>
      
        
          <nav className="md:flex-between hidden w-full max-w-xs">
          <Navitem/>
          </nav>
          <div className="flex w-30 justify-end gap-3">

              <Mobilenav/>
          </div>
      </div>
      </header>
  )
    
};
