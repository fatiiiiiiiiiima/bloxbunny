// Import the Next.js Image component
import Image from 'next/image';
import './globals.css'; 

const GameCard = ({subtitle,rank,ccu,maxrevenue,minrevenue,favorites,logoUrl,title,genre,dislikes}) => {
    
  function formatNumbers(x) {
    if (x < 100000) {
        return parseInt(x);
    } else if (x < 1000000) {
        return (x / 1000).toFixed(1) + '(K)';
    } else if (x < 1000000000) {
        return (x / 1000000).toFixed(3) + 'M';
    } else {
        return (x / 1000000000).toFixed(3) + 'B';
    }
  }
    const roundedCCU = formatNumbers(ccu);
    const roundedMaxRevenue = formatNumbers(maxrevenue);
    const roundedMinRevenue = formatNumbers(minrevenue);
    const roundedFavorites = formatNumbers(favorites);
    const roundedDisLikes = formatNumbers(dislikes);
    return (
    <div className="card">
        <div className='headingcard'>
      <div className="cardslogo">
        <Image src={logoUrl} alt="Game Logo" width={94} height={94} />
      </div>
      <div className='textcardcontent'>
        <h2 className="title">{title}</h2>
        <p className="subTitle">{subtitle}</p>
        </div>
        </div>
        <div className="content">
        <div className="info">
        <div className="info-grid">
          <div className='infocol'>
            <strong>Rank</strong>
            <span>{rank}</span>
          </div>
          <div> 
            <div className='infocol'>
            <strong>Genres</strong>
            <span>{genre}</span>
            </div>
          </div>
          <div className='infocol'>
            <strong>CCUs</strong>
            <span>{roundedCCU}</span>
          </div>
      
        
          <div className='infocol'>
            <strong>Revenue</strong>
            <span>${roundedMinRevenue} - ${roundedMaxRevenue}</span>
          </div>
          <div className='infocol'>
            <strong>Favorites</strong>
            <span>{roundedFavorites}</span>
          </div>
          <div className='infocol'>
            <strong>Dislikes</strong>
            <span>{roundedDisLikes}</span>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default GameCard;
