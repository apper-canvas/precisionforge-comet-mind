const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

class CertificationService {
  constructor() {
    this.certifications = [];
    this.loadMockData();
  }

  async loadMockData() {
    try {
      const response = await fetch('/src/services/mockData/certifications.json');
      const data = await response.json();
      this.certifications = [...data];
    } catch (error) {
      // Fallback data if JSON file can't be loaded
      this.certifications = [
        {
          Id: 1,
          name: "ISO 9001:2015",
          issuer: "International Organization for Standardization",
          validUntil: "2025-06-15",
          logo: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=400",
          documentUrl: "/documents/iso-9001-certificate.pdf"
        }
      ];
    }
  }

  async getAll() {
    await delay(250);
    return [...this.certifications];
  }

  async getById(id) {
    await delay(200);
    const certification = this.certifications.find(c => c.Id === parseInt(id, 10));
    if (!certification) {
      throw new Error('Certification not found');
    }
    return { ...certification };
  }

  async create(certification) {
    await delay(400);
    const maxId = this.certifications.length > 0 ? Math.max(...this.certifications.map(c => c.Id)) : 0;
    const newCertification = {
      ...certification,
      Id: maxId + 1
    };
    this.certifications.push(newCertification);
    return { ...newCertification };
  }

  async update(id, certificationData) {
    await delay(350);
    const index = this.certifications.findIndex(c => c.Id === parseInt(id, 10));
    if (index === -1) {
      throw new Error('Certification not found');
    }
    
    const updatedCertification = {
      ...this.certifications[index],
      ...certificationData,
      Id: this.certifications[index].Id
    };
    
    this.certifications[index] = updatedCertification;
    return { ...updatedCertification };
  }

  async delete(id) {
    await delay(300);
    const index = this.certifications.findIndex(c => c.Id === parseInt(id, 10));
    if (index === -1) {
      throw new Error('Certification not found');
    }
    
    const deletedCertification = { ...this.certifications[index] };
    this.certifications.splice(index, 1);
    return deletedCertification;
  }
}

export default new CertificationService();