import { Component, computed, input, signal } from '@angular/core';
import { Product } from '../../layout/models/product';

@Component({
  selector: 'app-products-grid',
  imports: [],
  template: `
    <div class="bg-gray-100 p-6">
      <h1 class="text-2xl font-bold text-gray-900">
        Category
      </h1>
    </div>
  `,
  styles: ``,
})
export default class ProductsGrid {
  category =  input<string>('all'); 

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

  // *** Prepare the data for the UI: ****
  // listen for changes on products
  // there is a dynamic interplay between both listeners 
  // use of basic javascript to filter the inputs for the filteredProducts property 
  filteredProducts = computed(() =>
    this.products().filter((p) => p.category === this.category()
                                                     .toLowerCase())
  );
}
