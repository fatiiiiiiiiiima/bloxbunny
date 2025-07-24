// Import the Next.js Image component
import Image from 'next/image';
import './globals.css'; 

const GameCard = ({rating,rank,ccu,revenue,favorites,logoUrl,title,genre,dislikes}) => {
    const roundedRating = Math.floor(rating);
    const roundedCCU = Math.floor(ccu);
    const roundedRevenue = Math.floor(revenue);
    const roundedFavorites = Math.floor(favorites);
    const roundedDisLikes = Math.floor(dislikes);
    return (
    <div className="gamecard">
        <div className='cardheadingsect'>
      <div className="gamecardlogo">
        <Image src={logoUrl} alt="Game Logo" width={50} height={70} loading="lazy" />
      </div>
      <div className='gametextcontent'>
        <h2 className="title">{title}</h2>
        <p className="subTitle">GARENA INTERNATIONAL II PRIVATE</p>
        </div>
        </div>
        <div className="content">
        <div className="rating">
          <span className="stars">★★★★☆</span>
          <span className="ratingCount">{roundedRating}</span>
        </div>
        <div className="info">
          <div>
            <strong>Rank</strong>
            <span>{rank}</span>
          </div>
          <div> 
           
            <strong>Genres</strong>
            <span>{genre}</span>
            
          </div>
          <div className='gapset4'>
            <strong>CCUs</strong>
            <span>{roundedCCU}</span>
          </div>
        </div>
        <div className="info">
          <div>
            <strong>Revenue</strong>
            <span>{roundedRevenue}</span>
          </div>
          <div className='gapset3'>
            <strong>Favorites</strong>
            <span>{roundedFavorites}</span>
          </div>
          <div className='gapset2'>
            <strong>Dislikes</strong>
            <span>{roundedDisLikes}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
