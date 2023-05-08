import React, { useState } from 'react';
function Categories() {  
  const [categoryToAdd, setCategoryToAdd] = useState('');
  const [categories, setCategories] = useState(['Alimentation', 'Logement', 'Transport', 'Loisirs']);
  const handleAddCategory = (event) => {
    event.preventDefault();
    setCategories([...categories, categoryToAdd]);
    setCategoryToAdd('');
  }
  const handleDeleteCategory = (index) => {
    setCategories(categories.filter((category, i) => i !== index))
  }
  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map((category, i) => (
          <li key={i}>
            {category}
            <button onClick={() => handleDeleteCategory(i)}>Delete</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleAddCategory}>
        <input type="text" value={categoryToAdd} onChange={(event) => setCategoryToAdd(event.target.value)} />
        <button type="submit">Add Category</button>
      </form>
    </div>
  );  
}

export default Categories;