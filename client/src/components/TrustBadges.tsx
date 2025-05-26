interface TrustBadgesProps {
  variant?: 'light' | 'dark';
  showExperience?: boolean;
}

const TrustBadges = ({ variant = 'light', showExperience = true }: TrustBadgesProps) => {
  const textColor = variant === 'dark' ? 'text-white' : 'text-gray-700';
  const iconColor = variant === 'dark' ? 'text-green-400' : 'text-green-600';
  
  return (
    <div className="flex flex-wrap items-center gap-4 text-sm">
      <div className={`flex items-center ${textColor}`}>
        <i className={`fas fa-shield-alt ${iconColor} mr-2`}></i>
        <span className="font-semibold">Licensed & Insured</span>
      </div>
      
      {showExperience && (
        <div className={`flex items-center ${textColor}`}>
          <i className={`fas fa-calendar-alt ${iconColor} mr-2`}></i>
          <span className="font-semibold">Serving Denver Since 2012</span>
        </div>
      )}
      
      <div className={`flex items-center ${textColor}`}>
        <i className={`fas fa-award ${iconColor} mr-2`}></i>
        <span className="font-semibold">A+ BBB Rating</span>
      </div>
      
      <div className={`flex items-center ${textColor}`}>
        <i className={`fas fa-clock ${iconColor} mr-2`}></i>
        <span className="font-semibold">24/7 Emergency Service</span>
      </div>
    </div>
  );
};

export default TrustBadges;