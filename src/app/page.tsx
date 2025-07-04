import { Navbar } from '@/components/navbar';
import { PrimaryButton } from '@/components/ui/primary-button';
import { SecondaryButton } from '@/components/ui/secondary-button';

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Vertical lines container */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <div className="absolute left-[calc(50%-550px)] top-0 w-px h-full bg-[#3C3533] hidden lg:block"></div>
        <div className="absolute right-[calc(50%-550px)] top-0 w-px h-full bg-[#3C3533] hidden lg:block"></div>
      </div>
      
      {/* Main content container */}
      <div className="max-w-[1100px] mx-auto relative z-20">
        <Navbar />
        
        {/* Hero section */}
        <div className="h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center" style={{backgroundImage: "url('/ChatGPT Image Jul 5, 2025, 04_57_09 AM.png')"}}>
          <div className="text-center text-white max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight max-w-[550px] mx-auto tracking-tight">
              The Gita for Every Market Participant
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Start your trading journey with Chart Shastra
            </p>
            <div className="mb-8">
              <p className="text-lg mb-4">Next Cohort Starts In:</p>
              <div className="text-3xl font-bold bg-black bg-opacity-50 inline-block px-6 py-3 rounded-lg">
                15 Days 06:41:23
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PrimaryButton>Join Now</PrimaryButton>
              <SecondaryButton>Download Brochure</SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
