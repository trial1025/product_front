import axios from 'axios'

export default class ProductService {
  static async getProducts () {
    return await axios.get('http://localhost:4000/products').then(response => response.data)
  }
}
