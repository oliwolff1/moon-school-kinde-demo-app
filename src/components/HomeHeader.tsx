import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";

interface HomeHeaderProps {
  currentPage?: "landing" | "pricing";
}

export default function HomeHeader({ currentPage = "landing" }: HomeHeaderProps) {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 flex w-full items-center justify-between p-6 md:p-8">
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">
          MOON SCHOOL
        </h1>
      </div>
      <nav className="flex items-center gap-4">
        {currentPage === "pricing" ? (
          <Link 
            href="/"
            className="text-white hover:text-orange-300 transition-colors duration-300"
          >
            Home
          </Link>
        ) : (
          <Link 
            href="/pricing"
            className="text-white hover:text-orange-300 transition-colors duration-300"
          >
            Pricing
          </Link>
        )}
        <LoginLink className="text-white hover:text-orange-300 transition-colors duration-300">
          Sign in
        </LoginLink>
        <RegisterLink className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300">
          Register
        </RegisterLink>
      </nav>
    </header>
  );
}
