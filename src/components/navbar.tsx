import { SecondaryButton } from './ui/secondary-button';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[70px] flex items-center justify-between px-6 bg-transparent">
      <div className="flex items-center">
        <div className="text-white text-xl font-bold">Chart Shastra</div>
      </div>
      
      <div className="flex items-center gap-[30px]">
        <a href="#home" className="text-sm text-white hover:text-[#F3E3DE] transition-colors">Home</a>
        <a href="#what-youll-learn" className="text-sm text-white hover:text-[#F3E3DE] transition-colors">What You'll Learn</a>
        <a href="#testimonials" className="text-sm text-white hover:text-[#F3E3DE] transition-colors">Testimonials</a>
        <a href="#blogs" className="text-sm text-white hover:text-[#F3E3DE] transition-colors">Blogs</a>
        <a href="#faqs" className="text-sm text-white hover:text-[#F3E3DE] transition-colors">FAQs</a>
      </div>
      
      <SecondaryButton>Join Now</SecondaryButton>
    </nav>
  );
}