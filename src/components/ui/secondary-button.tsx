interface SecondaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function SecondaryButton({ children, onClick, className = "" }: SecondaryButtonProps) {
  return (
    <button 
      onClick={onClick}
      className={`text-sm text-[#F3E3DE] border border-[#F3E3DE] bg-white/20 backdrop-blur-md rounded-full px-6 py-2 transition-all duration-300 hover:bg-white/30 hover:scale-105 hover:shadow-lg hover:shadow-[#F3E3DE]/20 hover:border-[#F3E3DE]/80 ${className}`}
    >
      {children}
    </button>
  );
}