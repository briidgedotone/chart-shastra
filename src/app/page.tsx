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
      <div className="h-screen w-full bg-cover bg-center bg-no-repeat relative border-b border-white/10" style={{backgroundImage: "url('/ChatGPT Image Jul 5, 2025, 04_57_09 AM.png')"}}>
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
          
          {/* Stats section */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent">
            <div className="py-12">
              <div className="flex justify-center items-center gap-20">
                <div className="text-center group">
                  <div className="relative">
                    <div className="text-3xl font-bold text-white mb-2 transition-transform duration-300 group-hover:scale-110">
                      500<span className="text-[#F3E3DE]">+</span>
                    </div>
                    <div className="absolute -inset-4 bg-white/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="text-sm text-white/70 uppercase tracking-wider font-medium">Students Trained</div>
                </div>
                
                <div className="h-16 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
                
                <div className="text-center group">
                  <div className="relative">
                    <div className="text-3xl font-bold text-white mb-2 transition-transform duration-300 group-hover:scale-110">
                      <span className="text-[#F3E3DE]">₹</span>1,600<span className="text-xl ml-1">Cr</span>
                    </div>
                    <div className="absolute -inset-4 bg-white/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="text-sm text-white/70 uppercase tracking-wider font-medium">AUM Managed</div>
                </div>
                
                <div className="h-16 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
                
                <div className="text-center group">
                  <div className="relative">
                    <div className="text-3xl font-bold text-white mb-2 transition-transform duration-300 group-hover:scale-110">
                      7<span className="text-[#F3E3DE]">+</span>
                    </div>
                    <div className="absolute -inset-4 bg-white/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="text-sm text-white/70 uppercase tracking-wider font-medium">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Why MTP? Section */}
      <section className="py-20">
        <div className="max-w-[1100px] mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Why <span className="text-[#F3E3DE]">MTP</span>?
            </h2>
          </div>

          {/* Bento Container */}
          <div className="w-full h-[593px] overflow-visible z-[1] p-0 gap-2 relative">
            
            {/* Card 1 - Top left (730x352px) */}
            <div className="absolute top-0 left-0 w-[730px] h-[352px] flex flex-row justify-center items-center p-5 bg-[#1c1c1c] overflow-hidden z-[1] content-center flex-nowrap gap-[10px] rounded-[10px] border border-[#3e2013]">
              <div className="w-3 h-3 bg-[#F3E3DE] rounded-full"></div>
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-4">Pure Price Action</h3>
                <p className="text-gray-300">Learn to read markets through pure price and volume action. No confusing indicators, no predictions - just clean, objective analysis.</p>
              </div>
            </div>

            {/* Card 2 - Top right (362x230px) */}
            <div className="absolute top-0 right-0 w-[362px] h-[230px] flex flex-col justify-center items-center p-5 bg-[#1c1c1c] overflow-hidden content-center flex-nowrap gap-[10px] rounded-[10px] border border-[#3e2013]">
              <div className="w-3 h-3 bg-[#F3E3DE] rounded-full"></div>
              <div className="text-white text-center">
                <h3 className="text-lg font-bold mb-2">Real-Time Analysis</h3>
                <p className="text-gray-300 text-sm">Master live chart reading</p>
              </div>
            </div>

            {/* Card 3 - Bottom left (730x230px) */}
            <div className="absolute bottom-0 left-0 w-[730px] h-[230px] flex flex-row justify-center items-center p-5 bg-[#1c1c1c] overflow-hidden content-center flex-nowrap gap-[10px] rounded-[10px] border border-[#3e2013]">
              <div className="w-3 h-3 bg-[#F3E3DE] rounded-full"></div>
              <div className="text-white">
                <h3 className="text-xl font-bold mb-3">High-Probability Setups</h3>
                <p className="text-gray-300">Identify and execute trades with clarity and confidence using proven market structure principles.</p>
              </div>
            </div>

            {/* Card 4 - Bottom right (362x352px) */}
            <div className="absolute bottom-0 right-0 w-[362px] h-[352px] flex flex-col justify-center items-center p-5 bg-[#1c1c1c] overflow-hidden content-center flex-nowrap gap-[10px] rounded-[10px] border border-[#3e2013]">
              <div className="w-3 h-3 bg-[#F3E3DE] rounded-full"></div>
              <div className="text-white text-center">
                <h3 className="text-lg font-bold mb-4">Market Structure Mastery</h3>
                <p className="text-gray-300">Understand how markets really move through deep analysis of structure and price action patterns.</p>
              </div>
            </div>

          </div>

        </div>
      </section>
      
    </div>
  );
}
