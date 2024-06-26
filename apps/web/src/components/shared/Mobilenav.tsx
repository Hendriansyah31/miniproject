import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from "next/image"
import { Separator } from "../ui/separator"
import Navitem from "./Navitem"

const Mobilenav = () => {
  return (
    <nav className="md:hidden">
          <Sheet>
        <SheetTrigger className="align-middle">
          <Image 
            src="/menu.svg"
            alt="menu"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
          <Image 
            src="/ssa.jpg"
            alt="logo"
            width={128}
            height={38}
          />
          <Separator className="border border-gray-50" />
          <Navitem/>
        </SheetContent>
      </Sheet>
    </nav>
  )
}

export default Mobilenav