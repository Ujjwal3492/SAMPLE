import './App.css'
import { useState } from 'react';
import {Link} from 'react-dom'

const dummyNFTs = [
  { id: 1, name: "Amazon Rainforest", price: 0.5, image: "https://www.jonnymelon.com/wp-content/uploads/2021/11/NFT-7-1440x1113.jpg", category: "Rainforest", description: "A piece of the lungs of our planet." },
  { id: 2, name: "African Savanna", price: 0.4, image: "https://media.gettyimages.com/id/1407293969/photo/art-nft-concept.jpg?s=612x612&w=0&k=20&c=m1ZvrN9MwH3AUiIvXGgv9VIQBi7DaK_FHB80P4__WR8=", category: "Savanna", description: "Home to diverse wildlife and ecosystems." },
  { id: 3, name: "Boreal Forest", price: 0.6, image: "https://media.istockphoto.com/id/1307372676/photo/nft-non-fungible-token.jpg?s=612x612&w=0&k=20&c=UUKYflrHvm5BQhALjfhfZ7BmgsPrXr1TUi-eg_GOu6k=", category: "Boreal", description: "The world's largest land biome." },
  { id: 4, name: "Mangrove Forest", price: 0.3, image: "https://t3.ftcdn.net/jpg/05/70/44/44/360_F_570444407_AFx0DHVR8CMlBEyOL0atTCCM4w0mZAWJ.jpg", category: "Mangrove", description: "Crucial coastal ecosystems." },
];

const categories = ["All", "Rainforest", "Savanna", "Boreal", "Mangrove"];

const Marketplace = () => {
  const [filteredNFTs, setFilteredNFTs] = useState(dummyNFTs);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    const filtered = dummyNFTs.filter(nft => nft.name.toLowerCase().includes(term));
    setFilteredNFTs(filtered);
  };

  const handleCategoryChange = (category) => {
    if (category === "All") setFilteredNFTs(dummyNFTs);
    else setFilteredNFTs(dummyNFTs.filter(nft => nft.category === category));
  };

  return (
    <div className="App">
        {/* Navbar */}
        <nav className="navbar">
        <div className="navbar-content">
          <div className="logo">🌱 Green Marketplace</div>
          <div className="nav-links">
            <a href="#home">Home</a>
            <Link to="/">Home</Link>
            <a href="#marketplace">Marketplace</a>
            <a href="#stats">Stats</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>
      {/* Marketplace Stats Section */}
      
      <div className="stats">
        <div className="stat-item">
          <span className="stat-icon">🌳</span>
          <div className="stat-text">
            <p className="stat-label">Trees Planted</p>
            <p className="stat-value">1,234,567</p>
          </div>
        </div>
        <div className="stat-item">
          <span className="stat-icon">💨</span>
          <div className="stat-text">
            <p className="stat-label">CO₂ Absorbed</p>
            <p className="stat-value">5,678 tons</p>
          </div>
        </div>
        <div className="stat-item">
          <span className="stat-icon">🌬</span>
          <div className="stat-text">
            <p className="stat-label">Air Purified</p>
            <p className="stat-value">9,876,543 m³</p>
          </div>
        </div>
      </div>

      {/* Search and Filters Section */}
      <div className="filters">
        <input 
          type="text" 
          placeholder="Search NFTs..." 
          className="search-input" 
          onChange={handleSearch} 
        />
        <div className="category-buttons">
          {categories.map((category) => (
            <button 
              key={category} 
              className="category-btn" 
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* NFTs Display Section */}
      <div className="nfts">
        {filteredNFTs.map((nft) => (
          <div key={nft.id} className="nft-card">
            <img src={nft.image} alt={nft.name} className="nft-image" />
            <h3 className="nft-title">{nft.name}</h3>
            <p className="nft-description">{nft.description}</p>
            <span className="nft-price">{nft.price} ETH</span>
            <button className="buy-btn">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;