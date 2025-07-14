interface JPLogoProps {
  className?: string;
}

const JPLogo = ({ className = "h-12 w-auto" }: JPLogoProps) => {
  return (
    <svg 
      viewBox="0 0 120 120" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Blue top triangle */}
      <path
        d="M60 10 L100 40 L80 60 L40 30 Z"
        fill="#2563eb"
        className="fill-primary"
      />
      
      {/* Orange/brown hexagon */}
      <path
        d="M30 45 L70 45 L85 65 L70 85 L30 85 L15 65 Z"
        fill="#ea580c"
        className="fill-accent"
      />
      
      {/* Blue bottom triangle */}
      <path
        d="M75 70 L105 70 L90 100 L60 100 Z"
        fill="#1d4ed8"
        className="fill-primary"
      />
      
      {/* White connecting elements for modern look */}
      <path
        d="M50 50 L70 50 L65 60 L55 60 Z"
        fill="white"
        className="fill-background"
      />
    </svg>
  );
};

export default JPLogo;