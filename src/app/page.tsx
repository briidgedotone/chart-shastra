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
              
              {/* Text Content - absolute positioned at top */}
              <div className="absolute top-5 left-5 z-20 max-w-full">
                <h3 className="text-[20px] text-white font-normal mb-2">Precision-Driven Portfolio Growth</h3>
                <p className="text-[16px] text-[#C8C8C8]">Every move guided by data and insights for smarter portfolio growth.</p>
              </div>
              
              <div className="relative">
                {/* Vertical white line */}
                <div className="w-[3px] h-full bg-white absolute top-[75px] right-[280px] z-10"></div>
                
                {/* Concentric circles at top of line */}
                {/* Outer circle - 61px B85C00 35% opacity */}
                <div className="w-[61px] h-[61px] bg-[#B85C00] bg-opacity-35 rounded-full absolute top-[44px] right-[251px] z-10"></div>
                
                {/* Middle circle - 39px FF4D00 40% opacity */}
                <div className="w-[39px] h-[39px] bg-[#FF4D00] bg-opacity-40 rounded-full absolute top-[55px] right-[262px] z-11"></div>
                
                {/* Inner circle - 15px white */}
                <div className="w-[15px] h-[15px] bg-white rounded-full absolute top-[67px] right-[274px] z-12"></div>
                
                {/* Chart line stroke */}
                <svg xmlns="http://www.w3.org/2000/svg" width="831.299" height="212.154" fill="none" overflow="visible">
                  <path d="M 0 212.154 L 84.53 212.154 L 107.681 192.769 L 121.141 192.769 L 137.832 179.308 L 163.675 179.308 L 178.212 165.308 L 192.749 165.308 L 207.825 182 L 237.975 182 L 268.664 157.231 L 287.509 157.231 L 306.353 145.385 L 337.042 145.385 L 423.725 74.846 L 610.014 74.846 L 654.163 33.385 L 673.546 33.385 L 693.467 13.462 L 706.388 13.462 L 718.233 19.923 L 735.462 19.923 L 755.383 0 L 831.299 0" fill="transparent" strokeWidth="4.31" stroke="rgb(255, 77, 0)"></path>
                </svg>
                
                {/* Chart gradient fill */}
                <svg xmlns="http://www.w3.org/2000/svg" width="831.299" height="299.385" fill="none" overflow="visible" className="absolute top-0 left-0">
                  <g>
                    <defs>
                      <linearGradient id="idid_pUg98B20dg-1619420498" x1="0.49751243781094523" x2="0.5024875621890548" y1="0" y2="1">
                        <stop offset="0" stopColor="rgb(255, 77, 0)" stopOpacity="1"></stop>
                        <stop offset="1" stopColor="rgba(23, 23, 23, 0.7)" stopOpacity="0.7"></stop>
                      </linearGradient>
                    </defs>
                    <path d="M 831.299 299.385 L 0 299.385 L 0 212.154 L 84.53 212.154 L 107.681 192.769 L 121.141 192.769 L 137.832 179.308 L 163.675 179.308 L 178.212 165.308 L 192.749 165.308 L 207.825 182 L 237.975 182 L 268.664 157.231 L 287.509 157.231 L 306.353 145.385 L 337.042 145.385 L 423.725 74.846 L 610.014 74.846 L 654.163 33.385 L 673.546 33.385 L 693.467 13.462 L 706.388 13.462 L 718.233 19.923 L 735.462 19.923 L 755.383 0 L 831.299 0 Z" fill="url(#idid_pUg98B20dg-1619420498)"></path>
                  </g>
                </svg>
              </div>
              
            </div>

            {/* Card 2 - Top right (362x230px) */}
            <div className="absolute top-0 right-0 w-[362px] h-[230px] flex flex-col justify-center items-center p-5 bg-[#1c1c1c] overflow-hidden content-center flex-nowrap gap-[10px] rounded-[10px] border border-[#3e2013]">
              
              {/* Text Content - absolute positioned at top */}
              <div className="absolute top-5 left-5 z-20 max-w-full">
                <h3 className="text-[20px] text-white font-normal mb-2">Diversified Assets</h3>
                <p className="text-[16px] text-[#C8C8C8]">Tailor your portfolio to achieve optimal performance.</p>
              </div>
              
              {/* Visual - positioned at bottom right */}
              <div className="absolute bottom-5 right-5 z-10">
                <img src="/Card 2 Visual.png" alt="Card 2 Visual" className="w-auto h-auto scale-90" />
              </div>
              
            </div>

            {/* Card 3 - Bottom left (730x230px) */}
            <div className="absolute bottom-0 left-0 w-[730px] h-[230px] flex flex-row justify-center items-center p-5 bg-[#1c1c1c] overflow-hidden content-center flex-nowrap gap-[10px] rounded-[10px] border border-[#3e2013]">
              
              {/* Text Content - absolute positioned at top */}
              <div className="absolute top-5 left-5 z-20 max-w-[244px]">
                <h3 className="text-[20px] text-white font-normal mb-2">Maximize Returns, Minimize Effort</h3>
                <p className="text-[16px] text-[#C8C8C8]">A fully automated investment system that saves you time and worry.</p>
              </div>
              
              {/* Lightning Visual Container - absolute positioned */}
              <div className="absolute top-[40px] right-[-55px] w-[400px] h-full">
                
                {/* Circle glow effect with blur */}
                <div className="absolute top-[50px] left-[50px] w-[150px] h-[150px] bg-orange-500 rounded-full blur-3xl z-[5] pointer-events-none">
                </div>
                
                {/* Orange lightning bolt - middle layer */}
                <div className="absolute top-0 left-0 z-5">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="204.5" height="276.5" fill="none" overflow="visible">
                    <g>
                      <defs>
                        <path d="M 161.642 6.96 C 162.165 5.001 159.777 3.597 158.32 5.006 L 3.558 154.562 C 2.265 155.811 3.149 158 4.948 158 L 69.838 158 C 71.885 158 73.331 160.006 72.684 161.949 L 37.11 268.671 C 36.446 270.661 38.903 272.2 40.404 270.735 L 199.23 115.646 C 201.154 113.767 199.824 110.5 197.134 110.5 L 136.604 110.5 C 135.29 110.5 134.333 109.254 134.672 107.984 Z" id="a1002z"></path>
                        <filter id="a1004z" filterUnits="objectBoundingBox" x="-13.8%" y="-10.6%" width="127.7%" height="121.2%">
                          <feOffset dx="0" dy="1" in="SourceAlpha" result="a1007z"></feOffset>
                          <feGaussianBlur stdDeviation="6.5" in="a1007z" result="a1008z"></feGaussianBlur>
                          <feFlood floodColor="rgba(255, 72, 0, 0.72)" result="a1009z"></feFlood>
                          <feComposite in="a1009z" in2="a1008z" operator="in" result="a1005z"></feComposite>
                        </filter>
                      </defs>
                      <mask id="a1006z" x="-13.8%" y="-10.6%" width="127.7%" height="121.2%">
                        <rect x="-13.8%" y="-10.6%" width="127.7%" height="121.2%" fill="white"></rect>
                        <use href="#a1002z" fill="black"></use>
                      </mask>
                      <g filter="url(#a1004z)" mask="url(#a1006z)">
                        <use fill="black" stroke="black" strokeOpacity="0" strokeWidth="0" xlinkHref="#a1002z" clipPath="url(#a1003z)"></use>
                      </g>
                      <use xlinkHref="#a1002z" fill="rgb(255, 77, 0)" clipPath="url(#a1003z)"></use>
                    </g>
                  </svg>
                </div>
                
                {/* White lightning bolt with glow - top layer */}
                <div className="absolute -top-[44px] -left-[28px] z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="239" height="304" fill="none">
                    <g>
                      <defs>
                        <path d="M 177.642 20.46 C 178.165 18.501 175.777 17.097 174.32 18.506 L 19.558 168.062 C 18.265 169.311 19.149 171.5 20.948 171.5 L 85.838 171.5 C 87.885 171.5 89.331 173.506 88.684 175.449 L 53.11 282.171 C 52.446 284.161 54.903 285.7 56.404 284.235 L 215.23 129.146 C 217.154 127.267 215.824 124 213.134 124 L 152.604 124 C 151.29 124 150.333 122.754 150.672 121.484 Z" id="a1010z"></path>
                        <filter id="a1012z" filterUnits="objectBoundingBox" x="-21.3%" y="-15.7%" width="142.6%" height="131.5%">
                          <feOffset dx="0" dy="0" in="SourceAlpha" result="a1015z"></feOffset>
                          <feGaussianBlur stdDeviation="10" in="a1015z" result="a1016z"></feGaussianBlur>
                          <feFlood floodColor="rgb(255, 198, 176)" result="a1017z"></feFlood>
                          <feComposite in="a1017z" in2="a1016z" operator="in" result="a1013z"></feComposite>
                        </filter>
                      </defs>
                      <mask id="a1014z" x="-21.3%" y="-15.7%" width="142.6%" height="131.5%">
                        <rect x="-21.3%" y="-15.7%" width="142.6%" height="131.5%" fill="white"></rect>
                        <use href="#a1010z" fill="black"></use>
                      </mask>
                      <g filter="url(#a1012z)" mask="url(#a1014z)">
                        <use fill="black" stroke="black" strokeOpacity="0" strokeWidth="0" xlinkHref="#a1010z" clipPath="url(#a1011z)"></use>
                      </g>
                      <use xlinkHref="#a1010z" fill="rgb(255, 255, 255)" clipPath="url(#a1011z)"></use>
                    </g>
                  </svg>
                </div>
                
              </div>
            </div>

            {/* Card 4 - Bottom right (362x352px) */}
            <div className="absolute bottom-0 right-0 w-[362px] h-[352px] flex flex-col justify-center items-center p-5 bg-[#1c1c1c] overflow-hidden content-center flex-nowrap gap-[10px] rounded-[10px] border border-[#3e2013]">
              
              {/* Text Content - absolute positioned at top */}
              <div className="absolute top-5 left-5 z-20 max-w-full">
                <h3 className="text-[20px] text-white font-normal mb-2">Your Portfolio, Optimized in Real-Time</h3>
                <p className="text-[16px] text-[#C8C8C8]">Adjusted instantly with market changes to enhance investment efficiency.</p>
              </div>
              
              {/* Visual - positioned at bottom right */}
              <div className="absolute bottom-5 right-5 z-10">
                <img src="/Card 4 Visual.png" alt="Card 4 Visual" className="w-auto h-auto" />
              </div>
              
            </div>

          </div>

        </div>
      </section>
      
    </div>
  );
}
