import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { MenuIcon } from "lucide-react"

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5 lg:px-24">
        <Image src="/logo.svg" alt="Logo FSW Barber" height={22} width={130} />
        <Button size="icon" variant="outline" className="lg:hidden">
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  )
}

export default Header
