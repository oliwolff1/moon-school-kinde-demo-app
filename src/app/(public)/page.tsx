import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-gradient-to-b from-black via-gray-900 to-black"
          style={{
            backgroundImage: 'url(/moon-school-landing-page-image.png)',
          }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-20" />
      </div>

      {/* Fallback gradient and stars background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-80">
        {/* Stars background */}
        <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full opacity-60"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-white rounded-full opacity-80"></div>
        <div className="absolute top-40 left-1/4 w-0.5 h-0.5 bg-white rounded-full opacity-40"></div>
        <div className="absolute top-60 right-1/3 w-1 h-1 bg-white rounded-full opacity-70"></div>
        <div className="absolute bottom-40 left-20 w-0.5 h-0.5 bg-white rounded-full opacity-50"></div>
        <div className="absolute bottom-60 right-10 w-1 h-1 bg-white rounded-full opacity-60"></div>
        <div className="absolute top-1/3 left-10 w-0.5 h-0.5 bg-white rounded-full opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-white rounded-full opacity-40"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">


        {/* Main heading */}
        <div className="mb-6 md:mb-8 max-w-5xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-2xl text-shadow-lg">
            Enlighten your team with{" "}
            <span className="text-white">
              cosmic education
            </span>
          </h2>
        </div>

        {/* Subtitle */}
        <p className="text-lg md:text-xl lg:text-2xl text-gray-100 mb-10 md:mb-12 max-w-4xl leading-relaxed drop-shadow-xl font-medium">
          Interactive space courses for your company&apos;s next giant leap
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 items-center">
          <RegisterLink className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
            Get Started
          </RegisterLink>
          <Link 
            href="/pricing"
            className="text-white hover:text-orange-300 text-lg font-semibold transition-all duration-300 border-b-2 border-transparent hover:border-orange-300 drop-shadow-lg"
          >
            View Pricing
          </Link>
        </div>
      </div>

      {/* Additional cosmic elements */}
      <div className="absolute top-1/4 left-0 w-32 h-32 bg-gradient-to-r from-purple-900 to-transparent rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-40 h-40 bg-gradient-to-l from-blue-900 to-transparent rounded-full opacity-15 blur-3xl"></div>
    </main>
  );
}