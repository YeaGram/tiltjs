const CardContainer = document.querySelector("#CardContainer");

// Fetch
const GetProduct = async (callback) => {
  await fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => callback(data));
};
const GetProductDetail = async (id, callback) => {
  await fetch(`https://dummyjson.com/products/${id}`)
    .then((res) => res.json())
    .then((data) => callback(data));
};

// Set
GetProduct((data) => {
  renderProduct(data, CardContainer, (x = true));
});

// Render
const Category = (target, item) => {
  return (target.innerHTML += `
    <div class="wrapper">
       <div class="imageContainer">
          <div class="imageWrapper ">
              <img src="${item.thumbnail}" alt="${item.title}" />        
            </div>
        </div>
        <div class="details">
            <span>${item.category}</span>
            <div>
                <h3>${item.title}</h3>
                <p class="cardRating"> &#9733 ${item.rating}</p>
            </div>
            <p class="cardDesc">${item.description}</p>
            <p>From : ${item.brand}</p>
            <div>
                <p>Stock : ${item.stock}</p>                                
                <p>$${item.price}</p>
            </div>
        </div>
    </div>
`);
};

const renderProduct = (res, target, log = true) => {
  res.products.map((item) => {
    item.category && Category(target, item);
    log && console.log(item);
  });
};
