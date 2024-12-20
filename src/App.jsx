import './App.css'
import { useState } from 'react';
import { useInView } from 'react-intersection-observer'; // Import Intersection Observer hook
import { Link } from 'react-router';

function App() {
  const [beforeImage, setBeforeImage] = useState(null);
  const [afterImage, setAfterImage] = useState(null);

  // Mock user data - replace with your actual user data
  const userData = {
    name: "John Doe",
    avatar: "/api/placeholder/150/150",
    plantsSeeded: 24,
    earnings: 1200
  };

  const handleBeforeImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setBeforeImage(URL.createObjectURL(file));
    }
  };

  const handleAfterImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setAfterImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    if (beforeImage && afterImage) {
      console.log('Submitting images for verification');
      // Add your submission logic here
    } else {
      alert('Please upload both before and after images');
    }
  };

  // Intersection Observer hook for fade-in animation
  const { ref: profileRef, inView: profileInView } = useInView({
    triggerOnce: true, // Trigger animation once
    threshold: 0.1, // 10% of the element should be in view
  });

  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: goalsRef, inView: goalsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });


  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-500 flex flex-col">
        {/* <!-- Navbar --> */}
        <nav className="bg-green-600 text-white py-4 px-8 shadow-lg">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold">GreenNFT</div>
            <ul className="flex space-x-8 text-lg">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <Link to="/Marketplace" className="hover:underline">Marketplace</Link>
            </ul>
          </div>
        </nav>

        {/* <!-- Main Content --> */}
        <main className="flex-grow container mx-auto px-8 py-16 space-y-16">
          {/* <!-- Profile Section --> */}
          <div className="text-center mb-16">
  <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-6 shadow-lg border-4 border-red-500">
    <img
      src="https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_640.jpg"
      alt="Profile Picture"
      className="w-full h-full object-cover"
    />
  </div>
  <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome, John Doe!</h1>
  <p className="text-gray-700">Track your planting progress and earnings</p>
</div>

{/* Stats Section */}
<div className="flex justify-center space-x-16 mb-16">
  <div className="text-center transform transition duration-300 hover:scale-105">
    <h2 className="text-xl font-semibold text-gray-700">Plants Seeded</h2>
    <p className="text-4xl font-bold text-green-700 mt-2">1,234</p>
    <p className="text-gray-600 mt-2">Total trees planted</p>
  </div>
  <div className="text-center transform transition duration-300 hover:scale-105">
    <h2 className="text-xl font-semibold text-gray-700">Money Earned</h2>
    <p className="text-4xl font-bold text-blue-700 mt-2">$5,678</p>
    <p className="text-gray-600 mt-2">Total earnings</p>
  </div>
</div>

{/* Marketplace Card with Big Image on Left and Text on Right */}
<div className="flex items-center justify-center mb-16 bg-white rounded-lg shadow-lg p-10 w-full max-w-4xl mx-auto gap-36">
  <div className="flex-shrink-0 w-48 h-48 rounded-lg overflow-hidden mr-8">
    <img
      src="https://www.nft.com/api/imageFetcher?gcp=false&url=https://images.ctfassets.net/v06qbfn5fzrz/2qimV1q1FWn4xU6MIHFC4p/d494084938ecb595e63f4878a5640e5f/nft_profile_images-white_2x.png&fm=webp&w=3840&q=75"
      alt="Marketplace"
      className="w-full h-full object-cover"
    />
  </div>
  <div className="flex flex-col justify-center">
    <h3 className="text-2xl font-semibold text-gray-700 mb-4">Marketplace</h3>
    <p className="text-lg text-gray-600 mb-4">Visit the marketplace to list and buy NFTs</p>
    <a
      href="/marketplace"
      className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
    >
      Go to Marketplace
    </a>
  </div>
</div>


          {/* <!-- Goals Section --> */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">Your Goals</h2>
            <p className="text-lg">Plant 50 trees this month</p>
            <div className="w-full bg-gray-200 rounded-full h-4 mt-4">
              <div className="bg-green-600 h-4 rounded-full" style={{ width: "70%" }}></div>
            </div>
            <p className="text-right mt-2 text-gray-700">35/50 Trees</p>
          </div>

          {/* <!-- Leadership and Community Section --> */}
          <div className="">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">Leadership and Community</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* <!-- Member 1 --> */}
              <div className="text-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 shadow-lg">
                  <img
                    src="https://t3.ftcdn.net/jpg/03/02/88/46/360_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg"
                    alt="Community Member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-lg font-semibold">Alice</p>
                <p className="text-sm text-gray-600">Trees Planted: 500</p>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: "80%" }}></div>
                </div>
              </div>

              {/* <!-- Member 2 --> */}
              <div className="text-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 shadow-lg">
                  <img
                    src="https://img.freepik.com/free-photo/man-with-photo-camera-his-holidays_23-2149373965.jpg?semt=ais_hybrid"
                    alt="Community Member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-lg font-semibold">Bob</p>
                <p className="text-sm text-gray-600">Trees Planted: 450</p>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: "70%" }}></div>
                </div>
              </div>

              {/* <!-- Member 3 --> */}
              <div className="text-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 shadow-lg">
                  <img
                    src="https://media.istockphoto.com/id/1337642347/photo/young-smiling-woman-waving-with-hand-on-video-call-at-home-office.jpg?s=612x612&w=0&k=20&c=d5cydGTpdfEQVZiz7AmQQ6WOu8UQflETdseZQLW6X7c="
                    alt="Community Member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-lg font-semibold">Charlie</p>
                <p className="text-sm text-gray-600">Trees Planted: 400</p>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: "60%" }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Activity Timeline --> */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">Activity Timeline</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="w-3 h-3 rounded-full bg-green-600 mt-1"></span>
                <p>Planted 5 trees in California on Dec 10, 2024.</p>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-3 h-3 rounded-full bg-blue-600 mt-1"></span>
                <p>Sold 2 NFTs for $150 each on Dec 8, 2024.</p>
              </li>
            </ul>
          </div>
        {/* <!-- Image Upload Section --> */}
<div className="w-full max-w-3xl p-6 mx-auto">
  <h2 className="text-2xl font-semibold text-gray-700 text-center mb-8">
    Upload New Plant Images
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Before Image Upload */}
    <div className="relative group flex flex-col items-center justify-center">
      <p className="text-lg font-medium mb-4 text-center">Before Planting</p>
      <div className="border-2 border-gray-300 rounded-lg p-4 transition hover:border-green-500 w-full">
        <input
          type="file"
          accept="image/*"
          onChange={handleBeforeImageUpload}
          className="hidden"
          id="before-image"
        />
        <label htmlFor="before-image" className="block cursor-pointer w-full">
          {beforeImage ? (
            <img
              src={beforeImage}
              alt="Before planting"
              className="w-full h-48 object-cover rounded-lg"
            />
          ) : (
            <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 group-hover:text-green-500 transition">
                Click to upload before image
              </p>
            </div>
          )}
        </label>
      </div>
    </div>

    {/* After Image Upload */}
    <div className="relative group flex flex-col items-center justify-center">
      <p className="text-lg font-medium mb-4 text-center">After Planting</p>
      <div className="border-2 border-gray-300 rounded-lg p-4 transition hover:border-blue-500 w-full">
        <input
          type="file"
          accept="image/*"
          onChange={handleAfterImageUpload}
          className="hidden"
          id="after-image"
        />
        <label htmlFor="after-image" className="block cursor-pointer w-full">
          {afterImage ? (
            <img
              src={afterImage}
              alt="After planting"
              className="w-full h-48 object-cover rounded-lg"
            />
          ) : (
            <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 group-hover:text-blue-500 transition">
                Click to upload after image
              </p>
            </div>
          )}
        </label>
      </div>
    </div>
  </div>

  {/* Submit Button */}
  <div className="text-center mt-8">
    <button
      onClick={handleSubmit}
      className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-semibold shadow-md"
    >
      Submit
    </button>
  </div>
</div>
          {/* <!-- Notifications Section --> */}
        
        </main>

        {/* <!-- Footer --> */}
        <footer className="bg-green-600 text-white py-6">
          <div className="container mx-auto text-center">
            {/* <p className="text-lg font-medium">GreenNFT &copy; 2024</p> */}
            <p className="text-sm mt-2">Sustainability Through Innovation</p>
          </div>
        </footer>
      </div>
    </>

  )
}
export default App










// import './App.css';
// import { useState } from 'react';

// // Dummy NFT Data
// const dummyNFTs = [
//   { id: 1, name: "Amazon Rainforest", price: 0.5, image: "https://www.jonnymelon.com/wp-content/uploads/2021/11/NFT-7-1440x1113.jpg", category: "Rainforest", description: "A piece of the lungs of our planet." },
//   { id: 2, name: "African Savanna", price: 0.4, image: "https://media.gettyimages.com/id/1407293969/photo/art-nft-concept.jpg?s=612x612&w=0&k=20&c=m1ZvrN9MwH3AUiIvXGgv9VIQBi7DaK_FHB80P4__WR8=", category: "Savanna", description: "Home to diverse wildlife and ecosystems." },
//   { id: 3, name: "Boreal Forest", price: 0.6, image: "https://media.istockphoto.com/id/1307372676/photo/nft-non-fungible-token.jpg?s=612x612&w=0&k=20&c=UUKYflrHvm5BQhALjfhfZ7BmgsPrXr1TUi-eg_GOu6k=", category: "Boreal", description: "The world's largest land biome." },
//   { id: 4, name: "Mangrove Forest", price: 0.3, image: "https://t3.ftcdn.net/jpg/05/70/44/44/360_F_570444407_AFx0DHVR8CMlBEyOL0atTCCM4w0mZAWJ.jpg", category: "Mangrove", description: "Crucial coastal ecosystems." },
// ];

// const categories = ["All", "Rainforest", "Savanna", "Boreal", "Mangrove"];

// const Marketplace = () => {
//   const [filteredNFTs, setFilteredNFTs] = useState(dummyNFTs);

//   const handleSearch = (event) => {
//     const term = event.target.value.toLowerCase();
//     const filtered = dummyNFTs.filter(nft => nft.name.toLowerCase().includes(term));
//     setFilteredNFTs(filtered);
//   };

//   const handleCategoryChange = (category) => {
//     if (category === "All") setFilteredNFTs(dummyNFTs);
//     else setFilteredNFTs(dummyNFTs.filter(nft => nft.category === category));
//   };

//   return (
//     <div className="App">
//         {/* Navbar */}
//         <nav className="navbar">
//         <div className="navbar-content">
//           <div className="logo">🌱 Green Marketplace</div>
//           <div className="nav-links">
//             <a href="#home">Home</a>
//             <a href="#marketplace">Marketplace</a>
//             <a href="#stats">Stats</a>
//             <a href="#contact">Contact</a>
//           </div>
//         </div>
//       </nav>
//       {/* Marketplace Stats Section */}
      
//       <div className="stats">
//         <div className="stat-item">
//           <span className="stat-icon">🌳</span>
//           <div className="stat-text">
//             <p className="stat-label">Trees Planted</p>
//             <p className="stat-value">1,234,567</p>
//           </div>
//         </div>
//         <div className="stat-item">
//           <span className="stat-icon">💨</span>
//           <div className="stat-text">
//             <p className="stat-label">CO₂ Absorbed</p>
//             <p className="stat-value">5,678 tons</p>
//           </div>
//         </div>
//         <div className="stat-item">
//           <span className="stat-icon">🌬</span>
//           <div className="stat-text">
//             <p className="stat-label">Air Purified</p>
//             <p className="stat-value">9,876,543 m³</p>
//           </div>
//         </div>
//       </div>

//       {/* Search and Filters Section */}
//       <div className="filters">
//         <input 
//           type="text" 
//           placeholder="Search NFTs..." 
//           className="search-input" 
//           onChange={handleSearch} 
//         />
//         <div className="category-buttons">
//           {categories.map((category) => (
//             <button 
//               key={category} 
//               className="category-btn" 
//               onClick={() => handleCategoryChange(category)}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* NFTs Display Section */}
//       <div className="nfts">
//         {filteredNFTs.map((nft) => (
//           <div key={nft.id} className="nft-card">
//             <img src={nft.image} alt={nft.name} className="nft-image" />
//             <h3 className="nft-title">{nft.name}</h3>
//             <p className="nft-description">{nft.description}</p>
//             <span className="nft-price">{nft.price} ETH</span>
//             <button className="buy-btn">Buy Now</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Marketplace;