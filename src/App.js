import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showColorDropdown, setShowColorDropdown] = useState(false);

  const products = [
    { 
      id: 1,
      name: 'Roadster Men Pure Cotton T-shirt',
      category: 'tshirt',
      color: 'red',
      price: 234,
      originalPrice: 599,
      image: 'https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/13745166/2021/7/16/0ba4359a-aa42-46a7-9f2d-3ceada6f4b851626428743766-Roadster-Men-Maroon--Navy-Blue-2-Solid-T-shirts-961626428743-1.jpg'
    },
    { 
      id: 2, 
      name: 'United Colors of Benetton Brand Logo Printed T-shirt',
      category: 'tshirt', 
      color: 'blue', 
      price: 899, 
      originalPrice: 999, 
      image:'https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/17565118/2022/5/24/9bec2393-3f2e-4ae9-9bae-9a247ed6fca21653366571416-United-Colors-of-Benetton-Men-Blue-Brand-Logo-Printed-T-shir-1.jpg',
    },
    { 
      id: 3,
       name: 'ONEWAY Unless Solid Cotton T-shirt', 
       category: 'tshirt', 
       color: 'green', 
       price: 799,
       image:'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/18556290/2022/6/1/458f7d71-b576-4013-b7e6-658e59ff89cc1654087137412Tshirts1.jpg'
      },
    { id: 4,
       name: 'Flying Machine Pure Cotton Relaxed T-shirt',
       category: 'tshirt',
       color: 'yellow',
       price: 584,
       originalPrice: 999,
       image: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/31598736/2025/2/20/244284a8-fead-4cb8-a056-5957c51786271740034342802-Mens-Causal-Tshirt-6541740034342352-1.jpg'
    },
    { 
      id: 5,
      name: 'Roadster Pure Cotton T-shirt',
      category: 'tshirt', 
      color: 'black', price: 314, 
      originalPrice: 599,
      image: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/19997780/2022/9/21/3c0fb2ef-859c-4908-afb8-36a7b57400741663752020138-Roadster-Mens-Black-Printed-Short-Sleeve-Tshirt-883166375201-1.jpg'
    },
    { 
      id: 6, 
      name: 'Roadster Men Cotton Shirt', 
      category: 'shirt', 
      color: 'white', 
      price: 499, 
      originalPrice: 799,
      image:'https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/11896110/2020/6/13/255b6d0d-f8f9-42f2-bb7e-8fb1f08a4b3d1592039989996-Roadster-Men-Shirts-8561592039988127-1.jpg'
     },
    { 
      id: 7, 
      name: 'Tommy Hilfiger Slim Fit Shirt', 
      category: 'shirt', 
      color: 'blue', 
      price: 1299, 
      originalPrice: 1999,
      image:'https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/22179594/2023/4/6/48bbf2dd-47f0-48b6-abf0-8f70bfce6aa31680774609127-Tommy-Hilfiger-Men-Shirts-8571680774608480-1.jpg'
    },
    { 
      id: 8, 
      name: 'U.S. Polo Assn. Denim Shirt', 
      category: 'shirt', 
      color: 'black', 
      price: 899, 
      originalPrice: 1299,
      image:'https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/19166086/2022/9/8/f244b033-9074-4c81-87b4-34e954ae75e91662617671397-U-S-Polo-Assn-Denim-Co-Men-Charcoal-Black-Solid-Slim-Fit-Pur-1.jpg'
    },
    { 
      id: 9, 
      name: 'HEREAMOVI Casual Shirt', 
      category: 'shirt', 
      color: 'green', 
      price: 699, 
      originalPrice: 999,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLaVyp7T3hQRlUh-yuvgDF4LeMzT5bpmNQhQ&s"' 
    },
   
    
  ];

  const filteredProducts = products.filter(product => {
    const categoryMatch =
      selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const colorMatch =
      selectedColors.length === 0 || selectedColors.includes(product.color);
    return categoryMatch && colorMatch;
  });

  return (
    <div className="container mt-3">
      <div className="breadcrumb">
        <span>Home</span> 
      </div>
      <h1 className="my-4">Men T-Shirts - {filteredProducts.length} items</h1>
      <div className="row mb-4">
        <div className="col-md-3 filter1">
          <h3>FILTERS</h3>
          <div className="filter-section">
            <div className="filter-header" onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}>
              <h4>CATEGORIES ▼</h4>
            </div>
            {showCategoryDropdown && (
              <div className="filter-options">
                {['all', 'tshirt', 'shirt'].map(category => (
                  <div className="form-check" key={category}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={category}
                      checked={selectedCategories.includes(category)}
                      onChange={() => {
                        if (category === 'all') {
                          setSelectedCategories([]);
                        } else {
                          setSelectedCategories(prev => {
                            if (prev.includes(category)) {
                              return prev.filter(cat => cat !== category);
                            } else {
                              return [...prev, category];
                            }
                          });
                        }
                      }}
                    />
                    <label className="form-check-label" htmlFor={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="filter-section">
            <div className="filter-header" onClick={() => setShowColorDropdown(!showColorDropdown)}>
              <h4>COLOR ▼</h4>
            </div>
            {showColorDropdown && (
              <div className="filter-options">
                {['all', 'red', 'blue', 'green', 'yellow', 'black', 'white'].map(color => (
                  <div className="form-check me-2 mb-2" key={color}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={color}
                      checked={selectedColors.includes(color)}
                      onChange={() => {
                        if (color === 'all') {
                          setSelectedColors([]);
                        } else {
                          setSelectedColors(prev => {
                            if (prev.includes(color)) {
                              return prev.filter(col => col !== color);
                            } else {
                              return [...prev, color];
                            }
                          });
                        }
                      }}
                    />
                    <label className="form-check-label" htmlFor={color}>
                      {color === 'all' ? 'All Colors' : (
                        <div
                          className="color-option"
                          style={{ backgroundColor: color, border: color === 'white' ? '1px solid #000' : 'none' }}
                        ></div>
                      )}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="col-md-9">
          <div className="row">
            {filteredProducts.map(product => (
              <div className="col-md-4 mb-4" key={product.id}>
               
                <div className="card product-card">
                  <img src={product.image} className="card-img-top" alt={product.name} />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">
                      Rs. {product.price}
                      {product.originalPrice && (
                        <span className="text-muted text-decoration-line-through"> Rs. {product.originalPrice}</span>
                      )}
                    </p>
                   
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;