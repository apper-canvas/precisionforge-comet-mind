const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

class ProductService {
  constructor() {
    this.products = [];
    this.loadMockData();
  }

  async loadMockData() {
    try {
      const response = await fetch('/src/services/mockData/products.json');
      const data = await response.json();
      this.products = [...data];
    } catch (error) {
      // Fallback data if JSON file can't be loaded
      this.products = [
        {
          Id: 1,
          name: "Precision CNC Machined Parts",
          category: "CNC Machining",
          description: "High-precision custom machined components for aerospace, automotive, and industrial applications.",
          specifications: {
            tolerance: "±0.0001\"",
            materials: ["Aluminum", "Steel", "Titanium", "Stainless Steel"],
            maxSize: "24\" x 24\" x 12\"",
            finishes: ["Anodized", "Powder Coated", "Chrome Plated"]
          },
          images: [
            "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800",
            "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800"
          ],
          materials: ["Aluminum", "Steel", "Titanium", "Stainless Steel"]
        }
      ];
    }
  }

  async getAll() {
    await delay(300);
    return [...this.products];
  }

  async getById(id) {
    await delay(200);
    const product = this.products.find(p => p.Id === parseInt(id, 10));
    if (!product) {
      throw new Error('Product not found');
    }
    return { ...product };
  }

  async getByCategory(category) {
    await delay(250);
    return this.products.filter(p => p.category === category).map(p => ({ ...p }));
  }

  async create(product) {
    await delay(400);
    const maxId = this.products.length > 0 ? Math.max(...this.products.map(p => p.Id)) : 0;
    const newProduct = {
      ...product,
      Id: maxId + 1
    };
    this.products.push(newProduct);
    return { ...newProduct };
  }

  async update(id, productData) {
    await delay(350);
    const index = this.products.findIndex(p => p.Id === parseInt(id, 10));
    if (index === -1) {
      throw new Error('Product not found');
    }
    
    const updatedProduct = {
      ...this.products[index],
      ...productData,
      Id: this.products[index].Id // Preserve original Id
    };
    
    this.products[index] = updatedProduct;
    return { ...updatedProduct };
  }

  async delete(id) {
    await delay(300);
    const index = this.products.findIndex(p => p.Id === parseInt(id, 10));
    if (index === -1) {
      throw new Error('Product not found');
    }
    
    const deletedProduct = { ...this.products[index] };
    this.products.splice(index, 1);
    return deletedProduct;
  }

  async search(query) {
    await delay(250);
    const searchTerm = query.toLowerCase();
    return this.products
      .filter(p => 
        p.name.toLowerCase().includes(searchTerm) ||
        p.description.toLowerCase().includes(searchTerm) ||
        p.category.toLowerCase().includes(searchTerm)
      )
      .map(p => ({ ...p }));
  }
}

export default new ProductService();