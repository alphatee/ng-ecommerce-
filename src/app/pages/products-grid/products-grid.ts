import { Component, signal } from '@angular/core';
import { Product } from '../../layout/models/product';

@Component({
  selector: 'app-products-grid',
  imports: [],
  template: `
    <p>
      products-grid works!
    </p>
  `,
  styles: ``,
})
export default class ProductsGrid {
  products = signal<Product[]>([
    // Electronics
    {
      id: '1', // Generated unique identifier
      name: 'Wireless Noise-Cancelling Headphones',
      description: 'Premium wireless headphones with active noise cancellation and 30-hour battery life',
      price: 299.99,
      imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&w=400&q=80', // Placeholder as no image was provided
      rating: 4.8,
      reviewCount: 6,
      inStock: true,
      category: 'electronics'
    }
  ]);
}
