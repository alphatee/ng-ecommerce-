import { Component, computed, input, signal } from '@angular/core';
import { Product } from '../../layout/models/product';

@Component({
  selector: 'app-products-grid',
  imports: [],
  template: `
    <div class="bg-gray-100 p-6">
      <h1 class="text-2xl font-bold text-gray-900 mb-6">
        {{ category() }} <!-- text interpolation -->
      </h1>

      <div class="responsive-grid">
      @for (product of filteredProducts(); track product.id) {
        <div class="bg-white cursor-pointer rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
          <img [src]="product.imageUrl" class="w-full h-[300px] object-cover rounded-t-xl" />
        </div>
      }
      </div>

      <!-- Place product info below: 15:40 -->
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
    },
    {
      id: '2',
      name: "Ultra HD 4K Smart TV",
      description: "Experience breathtaking clarity with this 55-inch LED display featuring integrated smart streaming apps and HDR support",
      price: 649.99,
      imageUrl: "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4.5,
      reviewCount: 12,
      inStock: true,
      category: "electronics"
    },
    {
      id: '3',
      name: "Professional Mirrorless Camera",
      description: "Capture high-resolution photos and 4K video with lightning-fast autofocus and a compact weather-sealed body",
      price: 1299.00,
      imageUrl: "https://images.unsplash.com/photo-1538531048068-aef582996426?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4.9,
      reviewCount: 8,
      inStock: true,
      category: "electronics"
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
