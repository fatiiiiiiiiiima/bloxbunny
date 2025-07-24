// Import Next.js Image component for image rendering
"use client"
import Image from 'next/image';
import { useEffect } from 'react';
import './globals.css';
const GamesAnalyticsTable = () => {
    useEffect(() => {
        const tableCells = document.querySelectorAll('.table-container td');
        
        tableCells.forEach(cell => {
          if (cell.textContent.trim() === '0' || cell.textContent.trim().toLowerCase() === 'free') {
            cell.classList.add('grey-text');
          }
        });
      }, []);
    
  return (
    <div className="table-container">
      <table>
        <tbody>
          {/* Repeat for each game entry */}
          <tr>
            <td>
              <div className="game-info">
                <Image src="/deadcells.png" alt="Game Image" width={40} height={40} />
                <span>Dead Cells</span>
              </div>
            </td>
            <td className='content'><p >DAU</p>16,680 <span className="percentage-change">+3.5%</span></td>
            <td className='content'><p >NEW PLAYERS</p>16,680 <span className="percentage-change">+3.5%</span></td>
            <td className='content'><p >ARPDAU</p>16,680 <span className="percentage-change">+3.5%</span></td>
            <td className='content'><p >AVG. PRICE</p>22.30$</td>
            <td className='content'><p >STORES</p>8</td>
            <td>
            <div className='menu-dots' >
            <Image  src="/dots.svg" alt="Game Image" width={10} height={10} />
            </div></td>
          </tr>
          <tr>
            <td>
              <div className="game-info">
                <Image src="/dino.png" alt="Game Image" width={40} height={40} />
                <span>Dino RPG</span>
              </div>
            </td>
            <td className='content'><p >DAU</p>16,680 <span className="percentage-change">+3.5%</span></td>
            <td className='content'><p >NEW PLAYERS</p>16,680 <span className="percentage-change">+3.5%</span></td>
            <td className='content'><p >ARPDAU</p>0 </td>
            <td className='content'><p >AVG. PRICE</p>Free</td>
            <td className='content'><p >STORES</p>0</td>
            <td>
            <div className='menu-dots' >
            <Image  src="/dots.svg" alt="Game Image" width={10} height={10} />
            </div></td>
          </tr>
          <tr>
            <td>
              <div className="game-info">
                <Image src="/teacher.png" alt="Game Image" width={40} height={40} />
                <span>Teacher Story</span>
              </div>
            </td>
            <td className='content'><p >DAU</p>16,680 <span className="percentage-change">+3.5%</span></td>
            <td className='content'><p >NEW PLAYERS</p>16,680 <span className="percentage-change">+3.5%</span></td>
            <td className='content'><p >ARPDAU</p>0 </td>
            <td className='content'><p >AVG. PRICE</p>Free</td>
            <td className='content'><p >STORES</p>0</td>
            <td>
            <div className='menu-dots' >
            <Image  src="/dots.svg" alt="Game Image" width={10} height={10} />
            </div></td>
          </tr>
          <tr>
            <td>
              <div className="game-info">
                <Image src="/teacher.png" alt="Game Image" width={40} height={40} />
                <span>Teacher Story</span>
              </div>
            </td>
            <td className='content'><p >DAU</p>16,680 <span className="percentage-change">+3.5%</span></td>
            <td className='content'><p >NEW PLAYERS</p>16,680 <span className="percentage-change">+3.5%</span></td>
            <td className='content'><p >ARPDAU</p>0 </td>
            <td className='content'><p >AVG. PRICE</p>Free</td>
            <td className='content'><p >STORES</p>0</td>
            <td>
                <div className='menu-dots' >
            <Image  src="/dots.svg" alt="Game Image" width={10} height={10} />
            </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GamesAnalyticsTable;
