interface ProfileCardProps {
  name: string;
  title: string;
  bio: string;
  achievements: string[];
  imageUrl?: string;
  initials?: string;
}

export function ProfileCard({
  name,
  title,
  bio,
  achievements,
  imageUrl,
  initials,
}: ProfileCardProps) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
      <div className="flex flex-col md:flex-row items-center gap-8">
        
        {/* Profile Image */}
        <div className="flex-shrink-0">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={name}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-[#F3E3DE]/30"
            />
          ) : (
            <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-[#F3E3DE]/20 to-[#F3E3DE]/5 rounded-full border-2 border-[#F3E3DE]/30 flex items-center justify-center">
              <div className="text-4xl font-bold text-[#F3E3DE]">
                {initials || name.split(' ').map(n => n[0]).join('')}
              </div>
            </div>
          )}
        </div>
        
        {/* Profile Info */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{name}</h3>
          <p className="text-[#F3E3DE] text-lg mb-4">{title}</p>
          <p className="text-gray-300 leading-relaxed mb-6">{bio}</p>
          
          {/* Achievements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#F3E3DE] rounded-full flex-shrink-0"></div>
                <span className="text-gray-300 text-sm">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
}