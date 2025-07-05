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
      
      {/* About Chart Shastra Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* About Nikhil Gayam */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Nikhil Gayam</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  With over 7 years of experience in the financial markets, Nikhil Gayam has established himself as a leading authority in technical analysis and trading education.
                </p>
                <p>
                  His unique approach combines traditional chart analysis with modern trading psychology, helping traders develop both the technical skills and mental discipline required for consistent success.
                </p>
                <p>
                  Nikhil has successfully managed over ₹1,600 crores in assets and has trained more than 500 students, many of whom have gone on to become successful independent traders.
                </p>
              </div>
              
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Credentials & Experience</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#F3E3DE] rounded-full"></div>
                    7+ Years Market Experience
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#F3E3DE] rounded-full"></div>
                    ₹1,600+ Cr AUM Managed
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#F3E3DE] rounded-full"></div>
                    500+ Students Trained
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#F3E3DE] rounded-full"></div>
                    Expert in Technical Analysis
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Why Learn from Chart Shastra */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Learn from Chart Shastra?</h2>
              <div className="space-y-6">
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#F3E3DE] rounded-full flex items-center justify-center text-black font-bold">1</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Practical Approach</h3>
                    <p className="text-gray-700">Learn real-world trading strategies that are tested and proven in live markets, not just theoretical concepts.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#F3E3DE] rounded-full flex items-center justify-center text-black font-bold">2</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Comprehensive Curriculum</h3>
                    <p className="text-gray-700">From basic chart reading to advanced trading psychology, our curriculum covers everything you need to succeed.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#F3E3DE] rounded-full flex items-center justify-center text-black font-bold">3</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Mentorship</h3>
                    <p className="text-gray-700">Get individual attention and feedback to accelerate your learning and address your specific challenges.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#F3E3DE] rounded-full flex items-center justify-center text-black font-bold">4</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Track Record</h3>
                    <p className="text-gray-700">Join a community of successful traders who have transformed their financial lives through our methods.</p>
                  </div>
                </div>
                
              </div>
              
              <div className="mt-8">
                <PrimaryButton>Start Your Journey</PrimaryButton>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
