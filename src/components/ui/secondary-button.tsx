interface SecondaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function SecondaryButton({ children, onClick, className = "" }: SecondaryButtonProps) {
  return (
    <button 
      onClick={onClick}
      className={`text-sm text-[#F3E3DE] border border-[#F3E3DE] bg-white/20 backdrop-blur-md rounded-full px-6 py-2 transition-colors ${className}`}
    >
      {children}
    </button>
  );
}