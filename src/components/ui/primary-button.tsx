interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function PrimaryButton({ children, onClick, className = "" }: PrimaryButtonProps) {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center gap-2 text-sm text-black bg-[#F3E3DE] border border-[#F3E3DE] rounded-full px-[15px] py-[8px] pr-[6px] pl-[15px] transition-colors ${className}`}
    >
      {children}
      <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 6H10M10 6L6 2M10 6L6 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </button>
  );
}