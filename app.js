const data = [
    {
      id: 1,
      name: "SEIKO Mens Essential TT White DIAL",
      img: "https://m.media-amazon.com/images/I/61CQ0EzOaCL._AC_UX679_.jpg",
      price: 74,
      category: "Dress",
    },
    {
      id: 11,
      name: "Amazon Essentials Men's Strap Watch",
      img: "https://m.media-amazon.com/images/I/81SkKZjDDyL._AC_UY679_.jpg",
      price: 74,
      category: "Dress",
    },
    {
      id: 2,
      name: "Timex Men's Expedition Scout ",
      img: "https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg",
      price: 40,
      category: "Sport",
    },
    {
      id: 3,
      name: "Breitling Superocean Heritage",
      img: "https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg",
      price: 200,
      category: "Luxury",
    },
    {
      id: 4,
      name: "Casio Classic Resin Strap ",
      img: "https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UY879_.jpg",
      price: 16,
      category: "Sport",
    },
    {
      id: 5,
      name: "Garmin Venu Smartwatch ",
      img: "https://m.media-amazon.com/images/I/51kyjYuOZhL._AC_SL1000_.jpg",
      price: 74,
      category: "Casual",
    },
    {
      id: 12,
      name: "Timex Men's Expedition Metal Field Watch",
      img: "https://m.media-amazon.com/images/I/91jcSpznRyL._AC_UY879_.jpg",
      price: 181,
      category: "Casual",
    },
  ];


  const products_container = document.querySelector(".products");
  const search_input = document.querySelector('.search');
  const categories_container = document.querySelector('.category-container');
  const price_range = document.getElementById('price-range');
  const price_value = document.querySelector('.price-value');

  const display_products = (filteredProducts) => {
    products_container.innerHTML = filteredProducts.map(
      (product) => 
      `
      <div class="product">
        <img src=${product.img} alt="watch">
        <span class="product-name"> ${product.name} </span>
        <span class="product-price"> ${product.price} $ </span>
      </div>
      
      `
    ).join("");
  };

  display_products(data);

  search_input.addEventListener('keyup', (e) => {
    const value = e.target.value.toLowerCase();
    
    if(value) {
      display_products(data.filter(item => item.name.toLocaleLowerCase().indexOf(value) !== -1))
    }
    else {
      display_products(data);
    }
  })

  const setCategories = () => {
  const all_categories = data.map((item) => item.category);
    
   const categories = [
    ...all_categories.filter((item, i) => {
    return all_categories.indexOf(item) === i;
  })];
  
  categories_container.innerHTML = categories.map(
    category => 
    `
      <span class="category"> ${category} </span>
    ` 
  ).join('');
}

const setPrice = () => {
  const priceList = data.map((item) => item.price);
  const minPrice = Math.min(...priceList);
  const maxPrice = Math.max(...priceList);

  price_range.min = minPrice;
  price_range.max = maxPrice;
  price_range.value = maxPrice;
  price_value.textContent = "$" + maxPrice;

  price_range.addEventListener("input", (e) => {
  price_value.textContent = "$" + e.target.value;
    display_products(data.filter((item) => item.price <= e.target.value));
  });
}

  setCategories();
  setCategories();
  setPrice();