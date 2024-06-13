const fs = require('fs');

// Load the JSON file
const data = fs.readFileSync('C:\\Users\\ASUS\\Documents\\Frameworks\\Nextjs\\euphoria\\public\\json\\menshop.json', 'utf8');

// Parse the JSON to an array of objects
const products = JSON.parse(data);

// Function to filter the desired properties
function filterProduct(product) {
    return {
		id: product.id,
        productName: product.productName,
        brandName: product.brandName,
        price: product.prices[0].price, // Assuming there's always at least one price object
        swatches: product.swatches,
        images: product.images,
        modelImage: product.modelImage,
        productImage: product.productImage,
        colorName: product.colorName
    };
}

// Apply the function to each product object
const filteredProducts = products.map(filterProduct);

// Convert the filtered array back to JSON
const filteredData = JSON.stringify(filteredProducts, null, 2);

// Save the filtered JSON to a new file
fs.writeFileSync('C:\\Users\\ASUS\\Documents\\Frameworks\\Nextjs\\euphoria\\public\\json\\menshop.json', filteredData);

console.log('Filtered JSON saved successfully.');
