'use client';

import { useState } from 'react';
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

  // FAQ state management
  const [openFaq, setOpenFaq] = useState<number>(0); // FAQ 0 is open by default

  const faqs = [
    {
      question: "Is this for beginners?",
      answer: "Yes — no prior trading experience is required."
    },
    {
      question: "What if I miss a session?",
      answer: "All sessions are recorded and shared with you."
    },
    {
      question: "How big are the batches?",
      answer: "We keep it small — about 20–25 learners per cohort."
    },
    {
      question: "Do I need a Demat account?",
      answer: "Not during the program — we use simulation platforms."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };
  return (
    <div className="min-h-screen relative">
      <style jsx>{`
        @keyframes riseUp {
          0% {
            transform: translateY(100px) translateX(-20px);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          20% {
            opacity: 1;
          }
          25% {
            transform: translateY(-100vh) translateX(20px);
            opacity: 0;
          }
          100% {
            transform: translateY(-100vh) translateX(20px);
            opacity: 0;
          }
        }
        
        @keyframes riseUp2 {
          0% {
            transform: translateY(120px) translateX(-10px);
            opacity: 0;
          }
          5% {
            opacity: 0.8;
          }
          20% {
            opacity: 0.8;
          }
          25% {
            transform: translateY(-100vh) translateX(10px);
            opacity: 0;
          }
          100% {
            transform: translateY(-100vh) translateX(10px);
            opacity: 0;
          }
        }
        
        @keyframes riseUp3 {
          0% {
            transform: translateY(80px) translateX(-30px);
            opacity: 0;
          }
          5% {
            opacity: 0.6;
          }
          20% {
            opacity: 0.6;
          }
          25% {
            transform: translateY(-100vh) translateX(30px);
            opacity: 0;
          }
          100% {
            transform: translateY(-100vh) translateX(30px);
            opacity: 0;
          }
        }
        
        .sparkle-star {
          position: absolute;
          width: 4px;
          height: 30px;
          background: linear-gradient(
            to top,
            rgba(204, 85, 0, 0) 0%,
            rgba(204, 85, 0, 0.3) 20%,
            rgba(255, 140, 0, 0.6) 50%,
            rgba(255, 165, 0, 0.9) 80%,
            rgba(255, 200, 100, 1) 100%
          );
          clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
          animation: riseUp linear infinite;
          box-shadow: 
            0 0 4px rgba(255, 165, 0, 0.8),
            0 0 8px rgba(255, 140, 0, 0.6),
            0 0 15px rgba(255, 140, 0, 0.3);
        }
        
        .sparkle-star:nth-child(3n) {
          width: 3px;
          height: 22px;
          background: linear-gradient(
            to top,
            rgba(180, 70, 0, 0) 0%,
            rgba(180, 70, 0, 0.2) 25%,
            rgba(255, 140, 0, 0.5) 60%,
            rgba(255, 165, 0, 0.9) 100%
          );
          clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
          animation: riseUp2 linear infinite;
          animation-duration: 1.5s;
          box-shadow: 
            0 0 3px rgba(255, 140, 0, 0.8),
            0 0 6px rgba(255, 140, 0, 0.5);
        }
        
        .sparkle-star:nth-child(4n) {
          width: 5px;
          height: 35px;
          background: linear-gradient(
            to top,
            rgba(200, 90, 0, 0) 0%,
            rgba(200, 90, 0, 0.2) 15%,
            rgba(255, 140, 0, 0.4) 40%,
            rgba(255, 180, 50, 0.8) 75%,
            rgba(255, 220, 120, 1) 100%
          );
          clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
          animation: riseUp linear infinite;
          animation-duration: 1.2s;
          box-shadow: 
            0 0 5px rgba(255, 180, 50, 0.9),
            0 0 10px rgba(255, 165, 0, 0.6),
            0 0 18px rgba(255, 140, 0, 0.4);
        }
        
        .sparkle-star:nth-child(7n) {
          width: 3px;
          height: 28px;
          background: linear-gradient(
            to top,
            rgba(160, 50, 0, 0) 0%,
            rgba(160, 50, 0, 0.2) 20%,
            rgba(204, 85, 0, 0.5) 45%,
            rgba(255, 140, 0, 0.8) 80%,
            rgba(255, 180, 50, 1) 100%
          );
          clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
          animation: riseUp3 linear infinite;
          animation-duration: 1.8s;
          box-shadow: 
            0 0 4px rgba(204, 61, 0, 0.9),
            0 0 8px rgba(255, 140, 0, 0.5),
            0 0 12px rgba(255, 165, 0, 0.3);
        }
        
        .sparkle-star:nth-child(5n) {
          animation-duration: 1.3s;
        }
        
        .sparkle-star:nth-child(6n) {
          animation-duration: 1.6s;
        }
      `}</style>
      {/* Vertical lines container */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <div className="absolute left-[calc(50%-550px)] top-0 w-px h-full bg-white/10 hidden lg:block"></div>
        <div className="absolute right-[calc(50%-550px)] top-0 w-px h-full bg-white/10 hidden lg:block"></div>
      </div>
      
      {/* Navbar with full-width border */}
      <Navbar />
      
      {/* Hero section with full-width background */}
      <div className="h-screen w-full bg-cover bg-center bg-no-repeat relative border-b border-white/10 overflow-hidden" style={{backgroundImage: "url('/ChatGPT Image Jul 5, 2025, 04_57_09 AM.png')"}}>
        {/* Sparkling Stars - Left Side */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(2)].map((_, i) => (
            <div
              key={`left-${i}`}
              className="sparkle-star"
              style={{
                bottom: `${Math.random() * 20}%`,
                left: `${Math.random() * 25}%`, // Only left 25% of screen
                animationDelay: `${i * 0.3}s`, // 0s, 0.3s for slight stagger
                animationDuration: `4s`
              }}
            />
          ))}
        </div>
        
        {/* Sparkling Stars - Right Side */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(1)].map((_, i) => (
            <div
              key={`right-${i}`}
              className="sparkle-star"
              style={{
                bottom: `${Math.random() * 20}%`,
                right: `${Math.random() * 25}%`, // Only right 25% of screen
                animationDelay: `2s`,
                animationDuration: `4s`
              }}
            />
          ))}
        </div>
        
        {/* Background Orb */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#cc3d00] rounded-full blur-[300px] opacity-20"></div>
        
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
          <div className="absolute bottom-0 left-0 right-0">
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
      <section className="pt-[180px] pb-20 relative overflow-hidden">
        {/* Background Orbs */}
        <div className="absolute top-40 left-0 w-96 h-96 bg-[#cc3d00] rounded-full blur-[150px] opacity-20"></div>
        
        <div className="max-w-[1100px] mx-auto px-6 relative z-10">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-[44px] font-bold text-white mb-4 tracking-tight">
              Welcome to <span className="text-[#F3E3DE]">Chart Shastra</span>
            </h2>
          </div>

          {/* Content */}
          <div className="max-w-5xl mx-auto">
            
            {/* Welcome Text */}
            <div className="text-center mb-16">
              <div className="max-w-3xl mx-auto">
                <p className="text-[20px] text-[#C8C8C8] mb-6 leading-relaxed">
                  Founded by <span className="text-[#F3E3DE] font-semibold">Nikhil Gayam</span> — CFA, CMT, NISM Gold Medalist, and full-time trader
                </p>
                <p className="text-[18px] text-[#C8C8C8] leading-relaxed">
                  Chart Shastra blends deep financial expertise with real-world trading discipline to deliver uncluttered, actionable market insights.
                </p>
              </div>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* MTP Course Section */}
              <div className="p-8 rounded-[12px] border border-[#704536]/70 hover:border-[#F3E3DE]/30 transition-colors duration-300 backdrop-blur-sm" style={{background: 'linear-gradient(180deg, #1c1c1c 15%, #3e2013 131%)'}}>
                <div className="w-12 h-12 bg-[#cc3d00] rounded-[8px] flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3V21L12 18L21 21V3H3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="text-[20px] font-bold text-white mb-4 tracking-tight">MTP Course</h4>
                <p className="text-[16px] text-[#C8C8C8] leading-relaxed opacity-80">
                  We decode the markets using pure price and volume action — no noise, no indicators, no predictions. Just clean, objective analysis that helps both traders and investors spot high-probability setups with clarity and confidence.
                </p>
              </div>

              {/* Our Edge Section */}
              <div className="p-8 rounded-[12px] border border-[#704536]/70 hover:border-[#F3E3DE]/30 transition-colors duration-300 backdrop-blur-sm" style={{background: 'linear-gradient(180deg, #1c1c1c 15%, #3e2013 131%)'}}>
                <div className="w-12 h-12 bg-[#cc3d00] rounded-[8px] flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="text-[20px] font-bold text-white mb-6 tracking-tight">Our Edge</h4>
                <ul className="space-y-3">
                  <li className="text-[16px] text-[#C8C8C8] flex items-start gap-3">
                    <span className="text-[#F3E3DE] text-sm mt-1">•</span>
                    <span>Swing Trading & Technical Analysis</span>
                  </li>
                  <li className="text-[16px] text-[#C8C8C8] flex items-start gap-3">
                    <span className="text-[#F3E3DE] text-sm mt-1">•</span>
                    <span>Market Structure & Price Action Mastery</span>
                  </li>
                  <li className="text-[16px] text-[#C8C8C8] flex items-start gap-3">
                    <span className="text-[#F3E3DE] text-sm mt-1">•</span>
                    <span>Real-Time Chart Reads & Trade Setups</span>
                  </li>
                </ul>
              </div>

            </div>

          </div>

        </div>
      </section>
      
      {/* Why MTP? Section */}
      <section className="pt-[180px] pb-20 relative overflow-hidden">
        {/* Background Orbs */}
        <div className="absolute top-40 right-20 w-64 h-64 bg-[#cc3d00] rounded-full blur-[100px] opacity-15"></div>
        
        <div className="max-w-[1100px] mx-auto relative z-10">
          
          {/* Section Header */}
          <div className="text-center mb-9 px-6">
            <h2 className="text-[44px] font-bold text-white mb-4 tracking-tight">
              Why <span className="text-[#F3E3DE]">MTP</span>?
            </h2>
          </div>

          {/* Bento Container */}
          <div className="w-full h-[593px] overflow-visible z-[1] p-0 gap-2 relative">
            
            {/* Card 1 - Top left (730x352px) */}
            <div className="absolute top-0 left-0 w-[730px] h-[352px] flex flex-row justify-center items-center p-5 bg-[#1c1c1c] overflow-hidden z-[1] content-center flex-nowrap gap-[10px] rounded-[10px] border border-[#3e2013]">
              
              {/* Text Content - absolute positioned at top */}
              <div className="absolute top-5 left-5 z-20 max-w-full">
                <h3 className="text-[20px] text-white font-normal mb-2">Live Portfolio Building</h3>
                <p className="text-[16px] text-[#C8C8C8]">Build a real-time portfolio with expert guidance.</p>
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
                <h3 className="text-[20px] text-white font-normal mb-2">Analyze Winning Stocks</h3>
                <p className="text-[16px] text-[#C8C8C8]">Learn to identify stocks with the highest potential.</p>
              </div>
              
              {/* Visual container - below text, centered */}
              <div className="absolute top-[100px] left-0 right-0 flex justify-center items-center z-10">
                <img src="/Card 2 Visual.png" alt="Card 2 Visual" className="w-auto h-auto scale-90" />
              </div>
              
            </div>

            {/* Card 3 - Bottom left (730x230px) */}
            <div className="absolute bottom-0 left-0 w-[730px] h-[230px] flex flex-row justify-center items-center p-5 bg-[#1c1c1c] overflow-hidden content-center flex-nowrap gap-[10px] rounded-[10px] border border-[#3e2013]">
              
              {/* Text Content - absolute positioned at top */}
              <div className="absolute top-5 left-5 z-20 max-w-[244px]">
                <h3 className="text-[20px] text-white font-normal mb-2">Timely Exits Before Corrections</h3>
                <p className="text-[16px] text-[#C8C8C8]">Master when to exit before losses hit.</p>
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
                <h3 className="text-[20px] text-white font-normal mb-2">Identify Market Trends</h3>
                <p className="text-[16px] text-[#C8C8C8]">Spot market trends early to stay ahead of the curve.</p>
              </div>
              
              {/* Visual - positioned at bottom right */}
              <div className="absolute bottom-[-137px] right-[-31px] z-10">
                <img src="/Card 4 Visual.png" alt="Card 4 Visual" className="w-auto h-auto scale-90" />
              </div>
              
            </div>

          </div>

        </div>
      </section>
      
      {/* What you'll learn Section */}
      <section className="pt-[180px] pb-20 relative overflow-hidden">
        {/* Background Orbs */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-[#cc3d00] rounded-full blur-[200px] opacity-10"></div>
        
        <div className="max-w-[1100px] mx-auto px-6 relative z-10">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-[44px] font-bold text-white mb-4 tracking-tight">
              What you&apos;ll <span className="text-[#F3E3DE]">learn</span>
            </h2>
          </div>

          {/* Modules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            
            {/* Module 1 */}
            <div className="p-6 rounded-[12px] border border-[#704536]/70 hover:border-[#F3E3DE]/30 transition-colors duration-300 backdrop-blur-sm" style={{background: 'linear-gradient(180deg, #1c1c1c 15%, #3e2013 131%)'}}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#cc3d00] rounded-[8px] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">01</span>
                </div>
                <div>
                  <h3 className="text-[18px] text-white font-normal mb-2">Risk Management</h3>
                  <p className="text-[14px] text-[#C8C8C8] opacity-80">The Foundation of Profitable Trading.</p>
                </div>
              </div>
            </div>

            {/* Module 2 */}
            <div className="p-6 rounded-[12px] border border-[#704536]/70 hover:border-[#F3E3DE]/30 transition-colors duration-300 backdrop-blur-sm" style={{background: 'linear-gradient(180deg, #1c1c1c 15%, #3e2013 131%)'}}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#cc3d00] rounded-[8px] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">02</span>
                </div>
                <div>
                  <h3 className="text-[18px] text-white font-normal mb-2">Stage Analysis</h3>
                  <p className="text-[14px] text-[#C8C8C8] opacity-80">Spotting Multibaggers.</p>
                </div>
              </div>
            </div>

            {/* Module 3 */}
            <div className="p-6 rounded-[12px] border border-[#704536]/70 hover:border-[#F3E3DE]/30 transition-colors duration-300 backdrop-blur-sm" style={{background: 'linear-gradient(180deg, #1c1c1c 15%, #3e2013 131%)'}}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#cc3d00] rounded-[8px] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">03</span>
                </div>
                <div>
                  <h3 className="text-[18px] text-white font-normal mb-2">Trends & Volume</h3>
                  <p className="text-[14px] text-[#C8C8C8] opacity-80">Reading the Market&apos;s Pulse.</p>
                </div>
              </div>
            </div>

            {/* Module 4 */}
            <div className="p-6 rounded-[12px] border border-[#704536]/70 hover:border-[#F3E3DE]/30 transition-colors duration-300 backdrop-blur-sm" style={{background: 'linear-gradient(180deg, #1c1c1c 15%, #3e2013 131%)'}}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#cc3d00] rounded-[8px] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">04</span>
                </div>
                <div>
                  <h3 className="text-[18px] text-white font-normal mb-2">Relative Strength</h3>
                  <p className="text-[14px] text-[#C8C8C8] opacity-80">Identify the True Leaders.</p>
                </div>
              </div>
            </div>

            {/* Module 5 */}
            <div className="p-6 rounded-[12px] border border-[#704536]/70 hover:border-[#F3E3DE]/30 transition-colors duration-300 backdrop-blur-sm" style={{background: 'linear-gradient(180deg, #1c1c1c 15%, #3e2013 131%)'}}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#cc3d00] rounded-[8px] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">05</span>
                </div>
                <div>
                  <h3 className="text-[18px] text-white font-normal mb-2">Trade Execution</h3>
                  <p className="text-[14px] text-[#C8C8C8] opacity-80">Entering &amp; Exiting like a Pro.</p>
                </div>
              </div>
            </div>

            {/* Module 6 */}
            <div className="p-6 rounded-[12px] border border-[#704536]/70 hover:border-[#F3E3DE]/30 transition-colors duration-300 backdrop-blur-sm" style={{background: 'linear-gradient(180deg, #1c1c1c 15%, #3e2013 131%)'}}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#cc3d00] rounded-[8px] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">06</span>
                </div>
                <div>
                  <h3 className="text-[18px] text-white font-normal mb-2">Chart Patterns</h3>
                  <p className="text-[14px] text-[#C8C8C8] opacity-80">Master essential chart patterns.</p>
                </div>
              </div>
            </div>

            {/* Module 7 */}
            <div className="p-6 rounded-[12px] border border-[#704536]/70 hover:border-[#F3E3DE]/30 transition-colors duration-300 backdrop-blur-sm" style={{background: 'linear-gradient(180deg, #1c1c1c 15%, #3e2013 131%)'}}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#cc3d00] rounded-[8px] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">07</span>
                </div>
                <div>
                  <h3 className="text-[18px] text-white font-normal mb-2">General Market Mood</h3>
                  <p className="text-[14px] text-[#C8C8C8] opacity-80">Understanding market sentiment.</p>
                </div>
              </div>
            </div>

            {/* Module 8 */}
            <div className="p-6 rounded-[12px] border border-[#704536]/70 hover:border-[#F3E3DE]/30 transition-colors duration-300 backdrop-blur-sm" style={{background: 'linear-gradient(180deg, #1c1c1c 15%, #3e2013 131%)'}}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#cc3d00] rounded-[8px] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">08</span>
                </div>
                <div>
                  <h3 className="text-[18px] text-white font-normal mb-2">Explosive Stocks</h3>
                  <p className="text-[14px] text-[#C8C8C8] opacity-80">High-tight flags patterns.</p>
                </div>
              </div>
            </div>

            {/* Module 9 */}
            <div className="p-6 rounded-[12px] border border-[#704536]/70 hover:border-[#F3E3DE]/30 transition-colors duration-300 backdrop-blur-sm" style={{background: 'linear-gradient(180deg, #1c1c1c 15%, #3e2013 131%)'}}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#cc3d00] rounded-[8px] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">09</span>
                </div>
                <div>
                  <h3 className="text-[18px] text-white font-normal mb-2">The Trading Journal</h3>
                  <p className="text-[14px] text-[#C8C8C8] opacity-80">Data, not Drama.</p>
                </div>
              </div>
            </div>

            {/* Module 10 */}
            <div className="p-6 rounded-[12px] border border-[#704536]/70 hover:border-[#F3E3DE]/30 transition-colors duration-300 backdrop-blur-sm" style={{background: 'linear-gradient(180deg, #1c1c1c 15%, #3e2013 131%)'}}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#cc3d00] rounded-[8px] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">10</span>
                </div>
                <div>
                  <h3 className="text-[18px] text-white font-normal mb-2">Trading Psychology</h3>
                  <p className="text-[14px] text-[#C8C8C8] opacity-80">Your Final Edge.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Enroll Now Button */}
          <div className="flex justify-center">
            <PrimaryButton>Enroll Now</PrimaryButton>
          </div>

        </div>
      </section>
      
      {/* Cohort Journey Timeline Section */}
      <section className="pt-[180px] pb-20 relative overflow-hidden">
        {/* Background Orbs */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-[600px] h-[600px] bg-[#cc3d00] rounded-full blur-[250px] opacity-10"></div>
        
        <div className="max-w-[1100px] mx-auto px-6 relative z-10">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-[44px] font-bold text-white mb-4 tracking-tight">
              Your 8-Week <span className="text-[#F3E3DE]">Journey</span>
            </h2>
          </div>

          {/* Subtitle */}
          <div className="text-center mb-16">
            <p className="text-[18px] text-[#C8C8C8] opacity-80">
              A structured path from beginner to confident trader
            </p>
          </div>

          {/* Timeline Content */}
          <div className="max-w-6xl mx-auto relative">
            
            {/* Vertical Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#F3E3DE] via-[#cc3d00] to-[#F3E3DE] h-full opacity-60"></div>
            
            {/* Timeline Item 1 - Right Side */}
            <div className="relative mb-24">
              <div className="flex items-center">
                <div className="w-1/2 pr-12 text-right">
                  <div className="inline-block mb-2 px-3 py-1 bg-[#F3E3DE]/20 text-[#F3E3DE] text-sm font-medium rounded-full">
                    Week 1
                  </div>
                  <div className="p-8 rounded-[12px] border border-[#704536]/70 backdrop-blur-sm" style={{background: 'linear-gradient(180deg, #1c1c1c 15%, #3e2013 131%)'}}>
                    <h3 className="text-[24px] font-bold text-white mb-4 tracking-tight">Foundations & Setup</h3>
                    <p className="text-[16px] text-[#C8C8C8] opacity-80 mb-4">
                      Build your trading foundation with risk management principles and platform setup
                    </p>
                    <ul className="space-y-2 text-[14px] text-[#C8C8C8]">
                      <li>• Trading platform setup</li>
                      <li>• Risk management basics</li>
                      <li>• Position sizing</li>
                      <li>• Journal creation</li>
                    </ul>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#F3E3DE] rounded-full flex items-center justify-center z-10 shadow-lg">
                  <span className="text-black font-bold text-xl">1</span>
                </div>
                <div className="w-1/2 pl-12 flex items-center justify-center">
                  <div className="relative">
                    {/* Orb behind visual */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#cc3d00] rounded-full blur-[80px] opacity-30"></div>
                    <img src="/ card 5 Visual.png" alt="Progress Chart Visual" className="w-auto h-80 opacity-90 relative z-10" />
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline Item 2 - Left Side */}
            <div className="relative mb-24">
              <div className="flex items-center">
                <div className="w-1/2 pr-12 flex items-center justify-center">
                  <div className="relative">
                    {/* Orb behind visual */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#cc3d00] rounded-full blur-[80px] opacity-30"></div>
                    <img src="/card 6 visual.png" alt="Chart Analysis Visual" className="w-auto h-80 opacity-90 relative z-10" />
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#cc3d00] rounded-full flex items-center justify-center z-10 shadow-lg">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <div className="w-1/2 pl-12">
                  <div className="inline-block mb-2 px-3 py-1 bg-[#cc3d00]/20 text-[#cc3d00] text-sm font-medium rounded-full">
                    Weeks 2-4
                  </div>
                  <div className="p-8 rounded-[12px] border border-[#704536]/70 backdrop-blur-sm" style={{background: 'linear-gradient(180deg, #1c1c1c 15%, #3e2013 131%)'}}>
                    <h3 className="text-[24px] font-bold text-white mb-4 tracking-tight">Chart Practice & Mentor Feedback</h3>
                    <p className="text-[16px] text-[#C8C8C8] opacity-80 mb-4">
                      Intensive chart analysis practice with personalized mentor feedback
                    </p>
                    <ul className="space-y-2 text-[14px] text-[#C8C8C8]">
                      <li>• Daily chart analysis</li>
                      <li>• Pattern recognition</li>
                      <li>• Live market analysis</li>
                      <li>• 1-on-1 feedback sessions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline Item 3 - Right Side */}
            <div className="relative mb-24">
              <div className="flex items-center">
                <div className="w-1/2 pr-12 text-right">
                  <div className="inline-block mb-2 px-3 py-1 bg-[#F3E3DE]/20 text-[#F3E3DE] text-sm font-medium rounded-full">
                    Weeks 5-6
                  </div>
                  <div className="p-8 rounded-[12px] border border-[#704536]/70 backdrop-blur-sm" style={{background: 'linear-gradient(180deg, #1c1c1c 15%, #3e2013 131%)'}}>
                    <h3 className="text-[24px] font-bold text-white mb-4 tracking-tight">Strategy Building & Refinement</h3>
                    <p className="text-[16px] text-[#C8C8C8] opacity-80 mb-4">
                      Develop and refine your personal trading strategy
                    </p>
                    <ul className="space-y-2 text-[14px] text-[#C8C8C8]">
                      <li>• Strategy development</li>
                      <li>• Backtesting</li>
                      <li>• Paper trading</li>
                      <li>• Performance analysis</li>
                    </ul>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#F3E3DE] rounded-full flex items-center justify-center z-10 shadow-lg">
                  <span className="text-black font-bold text-xl">3</span>
                </div>
                <div className="w-1/2 pl-12 flex items-center justify-center">
                  <div className="relative">
                    {/* Orb behind visual */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#cc3d00] rounded-full blur-[80px] opacity-30"></div>
                    <img src="/card 7 visual.png" alt="Strategy Network Visual" className="w-auto h-80 opacity-90 relative z-10" />
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline Item 4 - Left Side */}
            <div className="relative mb-24">
              <div className="flex items-center">
                <div className="w-1/2 pr-12 flex items-center justify-center">
                  <div className="relative">
                    {/* Orb behind visual */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#cc3d00] rounded-full blur-[80px] opacity-30"></div>
                    <img src="/card 8 visual.png" alt="Psychology & Risk Visual" className="w-auto h-32 opacity-90 relative z-10" />
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#cc3d00] rounded-full flex items-center justify-center z-10 shadow-lg">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <div className="w-1/2 pl-12">
                  <div className="inline-block mb-2 px-3 py-1 bg-[#cc3d00]/20 text-[#cc3d00] text-sm font-medium rounded-full">
                    Week 7
                  </div>
                  <div className="p-8 rounded-[12px] border border-[#704536]/70 backdrop-blur-sm" style={{background: 'linear-gradient(180deg, #1c1c1c 15%, #3e2013 131%)'}}>
                    <h3 className="text-[24px] font-bold text-white mb-4 tracking-tight">Psychology & Risk Drills</h3>
                    <p className="text-[16px] text-[#C8C8C8] opacity-80 mb-4">
                      Master the mental game and develop psychological edge
                    </p>
                    <ul className="space-y-2 text-[14px] text-[#C8C8C8]">
                      <li>• Trading psychology</li>
                      <li>• Emotional control</li>
                      <li>• Risk management drills</li>
                      <li>• Mindset coaching</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline Item 5 - Right Side */}
            <div className="relative">
              <div className="flex items-center">
                <div className="w-1/2 pr-12 text-right">
                  <div className="inline-block mb-2 px-3 py-1 bg-[#F3E3DE]/20 text-[#F3E3DE] text-sm font-medium rounded-full">
                    Week 8
                  </div>
                  <div className="p-8 rounded-[12px] border border-[#704536]/70 backdrop-blur-sm" style={{background: 'linear-gradient(180deg, #1c1c1c 15%, #3e2013 131%)'}}>
                    <h3 className="text-[24px] font-bold text-white mb-4 tracking-tight">Final Assessment & Showcase</h3>
                    <p className="text-[16px] text-[#C8C8C8] opacity-80 mb-4">
                      Demonstrate mastery and graduate with confidence
                    </p>
                    <ul className="space-y-2 text-[14px] text-[#C8C8C8]">
                      <li>• Portfolio showcase</li>
                      <li>• Final assessment</li>
                      <li>• Strategy presentation</li>
                      <li>• Graduation ceremony</li>
                    </ul>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#F3E3DE] rounded-full flex items-center justify-center z-10 shadow-lg">
                  <span className="text-black font-bold text-xl">5</span>
                </div>
                <div className="w-1/2 pl-12 flex justify-center items-center">
                  <div className="relative">
                    {/* Smooth Glowing Orange Background - Multiple Layers */}
                    <div className="absolute inset-0 w-[200px] h-[200px] bg-[#cc3d00] rounded-full blur-[100px] opacity-10"></div>
                    <div className="absolute inset-0 w-[160px] h-[160px] bg-[#ff4d00] rounded-full blur-[80px] opacity-15 top-[20px] left-[20px]"></div>
                    <div className="absolute inset-0 w-[120px] h-[120px] bg-[#ff6b00] rounded-full blur-[60px] opacity-20 top-[40px] left-[40px]"></div>
                    <div className="absolute inset-0 w-[80px] h-[80px] bg-[#ff8800] rounded-full blur-[40px] opacity-25 top-[60px] left-[60px]"></div>
                    <div 
                      className="relative flex items-center justify-center"
                      style={{
                        width: '200px',
                        height: '200px'
                      }}
                    >
                      <svg width="180" height="180" viewBox="0 0 120 120">
                      {/* Shadow */}
                      <path 
                        d="M30 70 L60 10 L55 55 H90 L30 110 L45 70 Z"
                        fill="#FF5C1B"
                        opacity="0.4"
                        transform="translate(8,8)" 
                      />
                      {/* Bolt */}
                      <path 
                        d="M30 70 L60 10 L55 55 H90 L30 110 L45 70 Z"
                        fill="white"
                        style={{filter: 'drop-shadow(0 0 8px #FF5C1B)'}}
                      />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
      
      {/* Meet Your Mentor Section */}
      <section className="pt-[180px] pb-20 relative overflow-hidden">
        {/* Background Orbs */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-96 h-96 bg-[#cc3d00] rounded-full blur-[150px] opacity-15"></div>
        
        <div className="max-w-[1100px] mx-auto px-6 relative z-10">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-[44px] font-bold text-white mb-6 tracking-tight">
              Meet Your <span className="text-[#F3E3DE]">Mentor</span>
            </h2>
            <p className="text-[18px] text-[#C8C8C8] opacity-80">
              Helping traders build skill, discipline, and confidence.
            </p>
          </div>

          {/* Mentor Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Mentor Image */}
            <div className="flex flex-col items-center">
              <div className="relative">
                {/* Orange glow behind image */}
                <div className="absolute -inset-4 bg-[#cc3d00] rounded-full blur-xl opacity-30"></div>
                <div className="relative w-96 h-96 rounded-full overflow-hidden border-4 border-[#704536]/50">
                  <img 
                    src="/Xnip2025-07-05_12-47-54 Background Removed.png" 
                    alt="Nikhil Gayam" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              
              {/* Certification Logos */}
              <div className="flex justify-center gap-4 mt-8">
                <div className="w-16 h-16 flex items-center justify-center bg-white rounded-lg p-2">
                  <img 
                    src="/cfa.jpg" 
                    alt="CFA" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-16 h-16 flex items-center justify-center bg-white rounded-lg p-2">
                  <img 
                    src="/cmt Background Removed.png" 
                    alt="CMT" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-16 h-16 flex items-center justify-center bg-white rounded-lg p-2">
                  <img 
                    src="/nism.jpg" 
                    alt="NISM" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-16 h-16 flex items-center justify-center bg-white rounded-lg p-2">
                  <svg width="64" height="64" viewBox="0 0 300 300" className="w-full h-full">
                    <defs>
                      <linearGradient id="sebiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#4a5ba8"/>
                        <stop offset="100%" stopColor="#2d4799"/>
                      </linearGradient>
                    </defs>
                    <rect width="300" height="300" fill="url(#sebiGradient)" rx="15"/>
                    <text x="150" y="80" textAnchor="middle" fill="white" fontSize="48" fontWeight="bold">SEBI</text>
                    <text x="150" y="130" textAnchor="middle" fill="white" fontSize="12">भारतीय प्रतिभूति और विनिमय बोर्ड</text>
                    <text x="150" y="150" textAnchor="middle" fill="white" fontSize="12">Securities and Exchange Board of India</text>
                  </svg>
                </div>
              </div>
            </div>

            {/* Mentor Bio */}
            <div className="space-y-6">
              <div className="p-8 rounded-[12px] border border-[#704536]/70 backdrop-blur-sm" style={{background: 'linear-gradient(180deg, #1c1c1c 15%, #3e2013 131%)'}}>
                <h3 className="text-[28px] font-bold text-white mb-4">Nikhil Gayam</h3>
                <div className="space-y-4 text-[16px] text-[#C8C8C8] leading-relaxed">
                  <p>
                    Nikhil Gayam is a seasoned trader, educator, and wealth manager who believes trading is both an art and a science. A gold medalist from NISM (SEBI) and a CFA and CMT charterholder, he brings over 7 years of hands-on market experience and a proven track record of managing portfolios exceeding ₹1,600 crore.
                  </p>
                  <p>
                    After building his career as an analyst and creating innovative financial tools, Nikhil transitioned into full-time trading and co-founded Avigna Capital, a family wealth office focused on strategic wealth creation and education. At Chart Shastra, he combines technical expertise, price-action strategies, and a passion for teaching to help aspiring traders navigate the markets with confidence and discipline.
                  </p>
                </div>
                
                {/* Credentials */}
                <div className="mt-6 pt-6 border-t border-[#704536]/50">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#F3E3DE] rounded-full"></div>
                      <span className="text-[#C8C8C8] text-sm">CFA & CMT Charterholder</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#F3E3DE] rounded-full"></div>
                      <span className="text-[#C8C8C8] text-sm">NISM Gold Medalist</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#F3E3DE] rounded-full"></div>
                      <span className="text-[#C8C8C8] text-sm">7+ Years Experience</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#F3E3DE] rounded-full"></div>
                      <span className="text-[#C8C8C8] text-sm">₹1,600 Cr+ AUM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
      
      {/* Interactive Quiz Section */}
      <section className="pt-[180px] pb-20 relative overflow-hidden">
        {/* Background Orbs */}
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-[400px] h-[400px] bg-[#cc3d00] rounded-full blur-[180px] opacity-10"></div>
        
        <div className="max-w-[1100px] mx-auto px-6 relative z-10">
          
          {/* Quiz Container */}
          <div className="max-w-4xl mx-auto">
            <div 
              className="relative p-12 rounded-[20px] border backdrop-blur-sm overflow-hidden"
              style={{
                borderColor: 'rgba(255, 77, 0, 0.3)',
                background: 'radial-gradient(70% 100% at 50% 0%, rgba(255, 77, 0, 0.1) 0%, rgba(204, 61, 0, 0.05) 40%, rgba(23, 23, 23, 0.9) 100%)'
              }}
            >
              
              {/* Floating Elements */}
              <div className="absolute top-6 right-6 w-16 h-16 bg-[#F3E3DE]/5 rounded-full blur-xl"></div>
              <div className="absolute bottom-6 left-6 w-20 h-20 bg-[#cc3d00]/10 rounded-full blur-2xl"></div>
              <div className="absolute top-1/2 left-8 w-2 h-2 bg-[#F3E3DE]/40 rounded-full"></div>
              <div className="absolute top-1/3 right-12 w-1 h-1 bg-[#cc3d00]/60 rounded-full"></div>
              
              <div className="relative z-10 text-center">
                {/* Section Label */}
                <div className="inline-flex items-center gap-2 mb-8 px-6 py-3 bg-gradient-to-r from-[#cc3d00]/20 to-[#F3E3DE]/10 text-[#F3E3DE] text-sm font-medium rounded-full border border-[#F3E3DE]/20">
                  <div className="w-2 h-2 bg-[#cc3d00] rounded-full animate-pulse"></div>
                  Interactive Quiz
                </div>
                
                {/* Quiz Title */}
                <h2 className="text-[48px] font-bold text-white mb-6 tracking-tight leading-tight">
                  What Kind of Trader Are <span className="text-transparent bg-gradient-to-r from-[#F3E3DE] to-[#cc3d00] bg-clip-text">You</span>?
                </h2>
                
                {/* Quiz Stats */}
                <div className="flex justify-center gap-8 mb-8">
                  <div className="text-center">
                    <div className="text-[24px] font-bold text-[#F3E3DE]">5</div>
                    <div className="text-[12px] text-white/60 uppercase tracking-wider">Questions</div>
                  </div>
                  <div className="w-px h-12 bg-white/20"></div>
                  <div className="text-center">
                    <div className="text-[24px] font-bold text-[#F3E3DE]">2</div>
                    <div className="text-[12px] text-white/60 uppercase tracking-wider">Minutes</div>
                  </div>
                  <div className="w-px h-12 bg-white/20"></div>
                  <div className="text-center">
                    <div className="text-[24px] font-bold text-[#F3E3DE]">100%</div>
                    <div className="text-[12px] text-white/60 uppercase tracking-wider">Personalized</div>
                  </div>
                </div>
                
                {/* Quiz Description */}
                <p className="text-[18px] text-[#C8C8C8]/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Discover your unique trading personality and get personalized recommendations for your learning journey.
                </p>
                
                {/* Quiz Button */}
                <div className="flex justify-center">
                  <button className="px-8 py-4 bg-[#F3E3DE] text-black rounded-[27px] font-medium hover:bg-[#F3E3DE]/90 transition-colors flex items-center gap-2">
                    <span>Start Quiz</span>
                    <svg width="16" height="16" viewBox="0 0 256 256" fill="currentColor">
                      <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"/>
                    </svg>
                  </button>
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="pt-[180px] pb-20 relative overflow-hidden">
        {/* Background Orbs */}
        <div className="absolute top-40 left-0 w-96 h-96 bg-[#cc3d00] rounded-full blur-[150px] opacity-15"></div>
        
        <div className="max-w-[1100px] mx-auto px-6 relative z-10">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-[44px] font-bold text-white mb-4 tracking-tight">
              What Our <span className="text-[#F3E3DE]">Learners Say</span>
            </h2>
          </div>

          {/* Testimonials Grid - Staggered Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left Column - Title and Description */}
            <div className="lg:col-span-4 flex flex-col justify-center pr-8">
              <h3 className="text-[48px] font-bold text-white mb-8 leading-tight">
                Trusted by Forward-Thinking <span className="text-[#F3E3DE]">Traders</span>
              </h3>
              <p className="text-[18px] text-[#C8C8C8] opacity-80 leading-relaxed max-w-sm">
                Real stories from learners who&apos;ve transformed their trading experience with Chart Shastra insights.
              </p>
            </div>

            {/* Right Column - Staggered Testimonials */}
            <div className="lg:col-span-8 relative">
              
              {/* Testimonial 1 - Top Left */}
              <div 
                className="absolute w-72 p-6 rounded-[15px] border border-[#704536]/70"
                style={{
                  background: 'linear-gradient(0deg, rgb(28, 28, 28) 0%, rgb(62, 32, 19) 100%)',
                  top: '0px',
                  left: '100px'
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-[#F3E3DE]/20 flex items-center justify-center">
                      <span className="text-[#F3E3DE] font-bold text-sm">RK</span>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-white font-medium text-[16px]">Ravi Krishnan</h5>
                    <h6 className="text-[#C8C8C8] text-[14px] opacity-70">Retail Trader</h6>
                  </div>
                </div>
                <p className="text-[14px] text-[#C8C8C8] leading-relaxed">
                  I finally understood how to trade smart. The cohort pushed me to take action!
                </p>
              </div>

              {/* Testimonial 2 - Top Right (Lower) */}
              <div 
                className="absolute w-72 p-6 rounded-[15px] border border-[#704536]/70"
                style={{
                  background: 'linear-gradient(0deg, rgb(28, 28, 28) 0%, rgb(62, 32, 19) 100%)',
                  top: '80px',
                  right: '0px'
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-[#F3E3DE]/20 flex items-center justify-center">
                      <span className="text-[#F3E3DE] font-bold text-sm">DR</span>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-white font-medium text-[16px]">Divya Rao</h5>
                    <h6 className="text-[#C8C8C8] text-[14px] opacity-70">Investment Analyst</h6>
                  </div>
                </div>
                <p className="text-[14px] text-[#C8C8C8] leading-relaxed">
                  The live feedback & community were priceless. I saw results within weeks!
                </p>
              </div>

              {/* Testimonial 3 - Middle Left (Lower) */}
              <div 
                className="absolute w-72 p-6 rounded-[15px] border border-[#704536]/70"
                style={{
                  background: 'linear-gradient(0deg, rgb(28, 28, 28) 0%, rgb(62, 32, 19) 100%)',
                  top: '200px',
                  left: '100px'
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-[#F3E3DE]/20 flex items-center justify-center">
                      <span className="text-[#F3E3DE] font-bold text-sm">AG</span>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-white font-medium text-[16px]">Arindam Gosh</h5>
                    <h6 className="text-[#C8C8C8] text-[14px] opacity-70">Software Engineer</h6>
                  </div>
                </div>
                <p className="text-[14px] text-[#C8C8C8] leading-relaxed">
                  The hands-on simulations felt like real trading — without the risk.
                </p>
              </div>

              {/* Testimonial 4 - Bottom Right */}
              <div 
                className="absolute w-72 p-6 rounded-[15px] border border-[#704536]/70"
                style={{
                  background: 'linear-gradient(0deg, rgb(28, 28, 28) 0%, rgb(62, 32, 19) 100%)',
                  top: '300px',
                  right: '0px'
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-[#F3E3DE]/20 flex items-center justify-center">
                      <span className="text-[#F3E3DE] font-bold text-sm">SK</span>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-white font-medium text-[16px]">Sanjay Kumar</h5>
                    <h6 className="text-[#C8C8C8] text-[14px] opacity-70">Business Owner</h6>
                  </div>
                </div>
                <p className="text-[14px] text-[#C8C8C8] leading-relaxed">
                  Chart Shastra transformed my approach to market analysis. The systematic methodology helped me make more informed decisions.
                </p>
              </div>

              {/* Spacer to ensure proper height */}
              <div className="h-[480px]"></div>

            </div>

          </div>

        </div>
      </section>
      
      {/* Pricing & Enrollment Section */}
      <section className="pt-[180px] pb-20 relative overflow-hidden">
        {/* Background Orbs */}
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-[500px] h-[500px] bg-[#cc3d00] rounded-full blur-[200px] opacity-15"></div>
        
        <div className="max-w-[1100px] mx-auto px-6 relative z-10">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-[44px] font-bold text-white mb-6 tracking-tight">
              Seats Are <span className="text-[#F3E3DE]">Limited!</span>
            </h2>
            <p className="text-[18px] text-[#C8C8C8] opacity-80 mb-8">
              Choose the subscription plan that suits your needs
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
            
            {/* Core Plan */}
            <div className="lg:col-span-2 p-8 rounded-[20px] border border-[#704536]/70 backdrop-blur-sm" style={{background: 'linear-gradient(180deg, #1c1c1c 15%, #2a2a2a 100%)'}}>
              <h3 className="text-[24px] font-bold text-white mb-6">Join the Next Cohort</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="text-xl">🕒</div>
                  <div>
                    <div className="text-[16px] font-semibold text-white">Duration</div>
                    <div className="text-[14px] text-[#C8C8C8]">8 weeks</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-xl">👥</div>
                  <div>
                    <div className="text-[16px] font-semibold text-white">Batch Size</div>
                    <div className="text-[14px] text-[#C8C8C8]">~20–25 learners</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-xl">💰</div>
                  <div>
                    <div className="text-[16px] font-semibold text-white">Fees</div>
                    <div className="text-[14px] text-[#C8C8C8]">₹29,999 inclusive of GST</div>
                    <div className="text-[12px] text-[#C8C8C8] opacity-70">(One-time)</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-3 w-full">
                <button className="w-full py-3 px-6 bg-[#ff4d00] text-black rounded-[27px] font-medium hover:bg-[#ff5722] transition-colors flex items-center justify-center">
                  Join Now
                </button>
                <button className="w-full py-3 px-6 border border-white text-white rounded-[27px] font-medium hover:bg-white hover:text-black transition-colors flex items-center justify-center">
                  Talk to Us
                </button>
              </div>
            </div>

            {/* Vision Plan - What's Included */}
            <div className="lg:col-span-3 rounded-[20px] border relative" style={{borderColor: 'rgba(209, 63, 0, 0.7)', backdropFilter: 'blur(10px)', backgroundColor: 'rgba(0, 0, 0, 0)', boxShadow: '0px 0px 15px 0px rgba(209, 63, 0, 0.7)'}}>
              {/* Best Value Badge */}
              <div className="absolute -top-3 right-6">
                <span className="bg-white text-[#cc3d00] px-3 py-1 rounded-full text-sm font-medium">
                  Best value
                </span>
              </div>
              
              {/* Inner Container */}
              <div className="p-8 rounded-[16px] border" style={{borderColor: 'rgba(255, 77, 0, 0.7)', background: 'linear-gradient(135deg, rgba(255, 77, 0, 0.3) 0%, rgba(204, 61, 0, 0.4) 50%, rgba(139, 69, 19, 0.3) 100%)'}}>
                
                {/* What's Included - Top Section */}
                <div className="mb-8">
                  <h4 className="text-[18px] font-semibold text-white mb-4">What&apos;s Included:</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center">
                        <svg width="24" height="24" viewBox="0 0 256 256" fill="white">
                          <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"/>
                        </svg>
                      </div>
                      <span className="text-white">Live sessions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center">
                        <svg width="24" height="24" viewBox="0 0 256 256" fill="white">
                          <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"/>
                        </svg>
                      </div>
                      <span className="text-white">Trade Journaling</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center">
                        <svg width="24" height="24" viewBox="0 0 256 256" fill="white">
                          <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"/>
                        </svg>
                      </div>
                      <span className="text-white">Mentor feedback</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center">
                        <svg width="24" height="24" viewBox="0 0 256 256" fill="white">
                          <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"/>
                        </svg>
                      </div>
                      <span className="text-white">Peer-to-peer cohort support</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center">
                        <svg width="24" height="24" viewBox="0 0 256 256" fill="white">
                          <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"/>
                        </svg>
                      </div>
                      <span className="text-white">Access to our alumni network</span>
                    </div>
                  </div>
                </div>
                
                {/* Price Section */}
                <div className="mb-8">
                  <div className="mb-2">
                    <span className="text-[48px] font-bold text-white">₹29,999</span>
                  </div>
                  <div className="text-white/75 text-sm">One-time payment</div>
                </div>
                
                {/* Button */}
                <button className="w-full py-3 px-6 bg-[#ff4d00] text-black rounded-[27px] font-medium hover:bg-[#ff5722] transition-colors flex items-center justify-center gap-2">
                  <span>Enroll Now</span>
                  <svg width="16" height="16" viewBox="0 0 256 256" fill="white">
                    <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"/>
                  </svg>
                </button>
                
              </div>
            </div>

          </div>

        </div>
      </section>
      
      {/* FAQs Section */}
      <section className="pt-[180px] pb-20 relative overflow-hidden">
        {/* Background Orbs */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-[#cc3d00] rounded-full blur-[200px] opacity-10"></div>
        
        <div className="max-w-[1100px] mx-auto px-6 relative z-10">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-[44px] font-bold text-white mb-6 tracking-tight">
              Got <span className="text-[#F3E3DE]">Questions?</span>
            </h2>
          </div>

          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="p-6 rounded-[15px] border border-[#3e2013] bg-[#1c1c1c]">
                <div 
                  className="flex justify-between items-start cursor-pointer"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className={`text-[20px] font-medium flex-1 ${openFaq === index ? 'text-[#cc3d00]' : 'text-white'}`}>
                    {faq.question}
                  </h3>
                  <div className="ml-4 mt-1">
                    {openFaq === index ? (
                      <div className="w-4 h-0.5 bg-[#cc3d00]"></div>
                    ) : (
                      <div className="relative w-4 h-4">
                        <div className="absolute top-1/2 left-0 w-4 h-0.5 bg-[#cc3d00] transform -translate-y-1/2"></div>
                        <div className="absolute top-0 left-1/2 w-0.5 h-4 bg-[#cc3d00] transform -translate-x-1/2"></div>
                      </div>
                    )}
                  </div>
                </div>
                {openFaq === index && (
                  <p className="text-[#C8C8C8] text-base leading-relaxed opacity-80 mt-4">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>
      
      {/* Trading Wisdom / Quotes Section */}
      <section className="pt-[80px] pb-[80px] relative overflow-hidden">
        {/* Background Orbs */}
        
        <div className="max-w-[1100px] mx-auto px-6 relative z-10">
          
          {/* Simple Quote */}
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Quote Text */}
            <blockquote className="text-[36px] font-light text-white italic leading-relaxed mb-4">
              &ldquo;It&apos;s not about being right — it&apos;s about managing risk.&rdquo;
            </blockquote>
            <cite className="text-[16px] text-white/70">— Trading Wisdom</cite>
            
          </div>

        </div>
      </section>
      
      {/* CTA Section */}
      <section className="pt-[80px] pb-20 relative overflow-hidden">
        <div className="max-w-[1100px] mx-auto px-6 relative z-10">
          
          {/* CTA Card */}
          <div 
            className="relative p-12 rounded-[20px] border text-center overflow-hidden"
            style={{
              borderColor: 'rgb(62, 32, 19)',
              background: 'radial-gradient(55% 113% at 50% 114.7%, rgb(250, 187, 0) 0%, rgb(204, 61, 0) 46.58%, rgb(23, 23, 23) 100%)'
            }}
          >

            {/* Content */}
            <div className="relative z-10">
              {/* Title */}
              <h3 className="text-[44px] font-bold text-white mb-6 text-center">
                Ready to Trade Smarter?
              </h3>
              
              {/* Subtitle */}
              <p className="text-[18px] text-white/80 max-w-2xl mx-auto mb-12 text-center">
                Seats fill fast — secure your spot in the next cohort today.
              </p>

              {/* CTA Buttons */}
              <div className="flex gap-4 justify-center">
                <button 
                  className="px-8 py-4 rounded-[20px] font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.85)',
                    color: 'rgb(0, 0, 0)'
                  }}
                >
                  <span>Join Now</span>
                  <svg width="16" height="16" viewBox="0 0 256 256" fill="currentColor">
                    <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"/>
                  </svg>
                </button>
                <button 
                  className="px-8 py-4 rounded-[20px] font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    color: 'rgb(255, 255, 255)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                >
                  <span>Talk to Us</span>
                  <svg width="16" height="16" viewBox="0 0 256 256" fill="currentColor">
                    <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>
      
      {/* Footer */}
      <footer className="relative" style={{backdropFilter: 'blur(5px)'}}>
        {/* Top Border Line */}
        <div className="h-px bg-[rgba(138,138,138,0.6)]"></div>
        
        {/* Gap between border lines */}
        <div className="h-4"></div>
        
        {/* Additional Border Line */}
        <div className="h-px bg-[rgba(138,138,138,0.6)]"></div>
        
        <div className="bg-[#171717] py-8">
          <div className="max-w-[1200px] mx-auto px-6">
            
            {/* Single Row Layout */}
            <div className="flex items-center justify-between">
              
              {/* Logo */}
              <div className="flex-shrink-0">
                <a href="#hero" className="block">
                  <span className="text-white font-bold text-lg">Chart Shastra</span>
                </a>
              </div>
              
              {/* Center Section with Navigation and Contact */}
              <div className="flex-1 text-center">
                {/* Navigation Links */}
                <div className="flex justify-center gap-8 mb-4">
                  <a href="#hero" className="text-white hover:text-[#F3E3DE] transition-colors text-sm">Home</a>
                  <a href="#" className="text-white hover:text-[#F3E3DE] transition-colors text-sm">Privacy Policy</a>
                  <a href="#" className="text-white hover:text-[#F3E3DE] transition-colors text-sm">Terms of Use</a>
                  <a href="#" className="text-white hover:text-[#F3E3DE] transition-colors text-sm">Contact</a>
                </div>
                {/* Contact Information */}
                <div className="flex justify-center gap-8 mb-4">
                  <a href="mailto:hello@chartsashtra.com" className="text-white hover:text-[#F3E3DE] transition-colors text-xs">📧 hello@chartsashtra.com</a>
                  <a href="tel:+918125940515" className="text-white hover:text-[#F3E3DE] transition-colors text-xs">📞 +91-81259 40515</a>
                </div>
                {/* Copyright */}
                <p className="text-[#888] text-xs">2025 Copyright © Chart Shastra. All rights reserved.</p>
              </div>
              
              {/* Right Section with Social Icons */}
              <div className="flex items-center gap-4">
                {/* Social Icons */}
                <div className="flex gap-3">
                  <a href="#" className="text-[#888] hover:text-white transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-[#888] hover:text-white transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-[#888] hover:text-white transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>
              
            </div>
            
          </div>
        </div>
        
        {/* Bottom Border Line */}
        <div className="h-px bg-[rgba(138,138,138,0.6)]"></div>
      </footer>
      
    </div>
  );
}
