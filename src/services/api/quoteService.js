const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

class QuoteService {
  constructor() {
    this.quotes = [];
    this.loadMockData();
  }

  async loadMockData() {
    try {
      const response = await fetch('/src/services/mockData/quoteRequests.json');
      const data = await response.json();
      this.quotes = [...data];
    } catch (error) {
      // Fallback data if JSON file can't be loaded
      this.quotes = [
        {
          Id: 1,
          customerInfo: {
            name: "John Smith",
            email: "john.smith@company.com",
            phone: "+1-555-0123",
            company: "Advanced Systems Inc"
          },
          products: [
            {
              productId: 1,
              quantity: 500,
              specifications: "Custom modifications required for mounting holes"
            }
          ],
          specifications: "Need parts for automotive application with specific anodizing requirements",
          timeline: "6 weeks",
          quantity: 500,
          timestamp: "2024-01-15T10:30:00Z"
        }
      ];
    }
  }

  async getAll() {
    await delay(300);
    return [...this.quotes];
  }

  async getById(id) {
    await delay(200);
    const quote = this.quotes.find(q => q.Id === parseInt(id, 10));
    if (!quote) {
      throw new Error('Quote request not found');
    }
    return { ...quote };
  }

  async create(quoteData) {
    await delay(500);
    const maxId = this.quotes.length > 0 ? Math.max(...this.quotes.map(q => q.Id)) : 0;
    const newQuote = {
      ...quoteData,
      Id: maxId + 1,
      timestamp: new Date().toISOString()
    };
    this.quotes.push(newQuote);
    return { ...newQuote };
  }

  async update(id, quoteData) {
    await delay(400);
    const index = this.quotes.findIndex(q => q.Id === parseInt(id, 10));
    if (index === -1) {
      throw new Error('Quote request not found');
    }
    
    const updatedQuote = {
      ...this.quotes[index],
      ...quoteData,
      Id: this.quotes[index].Id
    };
    
    this.quotes[index] = updatedQuote;
    return { ...updatedQuote };
  }

  async delete(id) {
    await delay(300);
    const index = this.quotes.findIndex(q => q.Id === parseInt(id, 10));
    if (index === -1) {
      throw new Error('Quote request not found');
    }
    
    const deletedQuote = { ...this.quotes[index] };
    this.quotes.splice(index, 1);
    return deletedQuote;
  }

  async submitQuote(quoteData) {
    return this.create(quoteData);
  }
}

export default new QuoteService();