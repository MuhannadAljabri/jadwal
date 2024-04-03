import React, { useState } from 'react';

const CategoryButton = ({ onAddCategory }) => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [categoryName, setCategoryName] = useState('');
  
    const handleAddClick = () => {
      // This function will be called when the "Add" button is clicked
      if (categoryName.trim().length > 0) {
        onAddCategory(categoryName);
        setCategoryName(''); // Reset the input field
        setIsPopupVisible(false); // Hide the popup
      }
    };

    const handleCloseClick = () => {
        setIsPopupVisible(false);
    };



return (
    <div className="category-button-container">
        <button onClick={() => setIsPopupVisible(true)}>Add Category</button>
        {isPopupVisible && (
        <div className="popup">
            <h2 className="popup-title">Add category</h2>
            <input
                type="text"
                placeholder="Type the category's name"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
            />
           <button onClick={handleAddClick}>Add</button>
           <span className = "close-btn" onClick={handleCloseClick}>×</span> 
        </div>
        )}
    </div>
    );
        };

export default CategoryButton;