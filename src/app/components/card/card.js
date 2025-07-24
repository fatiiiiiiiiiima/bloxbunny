import Image from 'next/image';
import './globals.css'; // Assuming you are using CSS modules

const StatisticCard = ({ iconPath, mainText, label,trendText,cornerIconPath }) => {
  

  return (
    <div className='statcard'>
      <div className='leftsection'>
      <div className='mainText'>{mainText}</div>
      <div className='label'>{label}</div>
      <div className='trend'>
        <Image src={`/${iconPath}.png`} alt={label} width={10} height={10} loading="lazy"/>
        <span>{trendText}</span>
      </div>
      </div>
      <div className='rightsection'>
      <div className='cornerIcon'>
          <Image src={`/${cornerIconPath}.png`} alt="Corner Icon" width={20} height={20} />
        </div>
      </div>
    </div>
  );
};

export default StatisticCard;
