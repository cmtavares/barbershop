import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Input } from "./_components/ui/input"
import { Button } from "./_components/ui/button"
import Image from "next/image"

export default function Home() {
  return (
    <div>
      <Header />
      <div className="px-5 py-6">
        <h2 className="text-xl font-bold">Olá, Carlos!</h2>
        <p>Segunda-feira, 05 de Agosto</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/banner-01.svg"
            alt="Agende nos melhores com FSW Barber"
            fill
            className="rounded-xl object-cover md:hidden"
          />
        </div>
      </div>
    </div>
  )
}
