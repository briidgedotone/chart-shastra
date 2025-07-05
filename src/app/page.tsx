import { Navbar } from '@/components/navbar';
import { PrimaryButton } from '@/components/ui/primary-button';
import { SecondaryButton } from '@/components/ui/secondary-button';
import CountdownTimer from '@/components/countdown-timer';

export default function Home() {
  // Set target date to 15 days from now
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 15);
  targetDate.setHours(targetDate.getHours() + 6);
  targetDate.setMinutes(targetDate.getMinutes() + 41);
  targetDate.setSeconds(targetDate.getSeconds() + 23);
  return (
    <div className="min-h-screen relative">
      {/* Vertical lines container */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <div className="absolute left-[calc(50%-550px)] top-0 w-px h-full bg-white/10 hidden lg:block"></div>
        <div className="absolute right-[calc(50%-550px)] top-0 w-px h-full bg-white/10 hidden lg:block"></div>
      </div>
      
      {/* Navbar with full-width border */}
      <Navbar />
      
      {/* Hero section with full-width background */}
      <div className="h-screen w-full bg-cover bg-center bg-no-repeat relative" style={{backgroundImage: "url('/ChatGPT Image Jul 5, 2025, 04_57_09 AM.png')"}}>
        {/* Main content container */}
        <div className="max-w-[1100px] mx-auto relative z-20 h-full">
          {/* Hero content */}
          <div className="h-full flex items-center justify-center">
            <div className="text-center text-white max-w-4xl mx-auto px-6">
              <h1 className="text-[72px] font-bold mb-3 leading-none max-w-[690px] mx-auto tracking-tight">
                The Gita For Every Market Participant
              </h1>
              <p className="text-base mb-6 opacity-90">
                Start Your Trading Journey With Chart Shastra
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <PrimaryButton>Join Now</PrimaryButton>
                <SecondaryButton>Download Brochure</SecondaryButton>
              </div>
              <CountdownTimer targetDate={targetDate} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
