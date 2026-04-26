// cart-system.js
// Basic shopping cart system using objects and functions

const cart = {
  items: [],

  addItem(product) {
    const existing = this.items.find(item => item.id === product.id);

    if (existing) {
      existing.quantity += product.quantity;
    } else {
      this.items.push({ ...product });
    }
  },

  removeItem(productId) {
    this.items = this.items.filter(item => item.id !== productId);
  },

  updateQuantity(productId, quantity) {
    const item = this.items.find(item => item.id === productId);

    if (!item) {
      return;
    }

    if (quantity <= 0) {
      this.removeItem(productId);
    } else {
      item.quantity = quantity;
    }
  },

  getTotal() {
    return this.items.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  },

  clearCart() {
    this.items = [];
  },

  printCart() {
    if (this.items.length === 0) {
      console.log('The cart is empty.');
      return;
    }

    console.log('Cart contents:');
    this.items.forEach(item => {
      console.log(`- ${item.name}: $${item.price.toFixed(2)} x ${item.quantity}`);
    });
    console.log(`Total: $${this.getTotal().toFixed(2)}`);
  }
};

// Example usage
cart.addItem({ id: 1, name: 'T-shirt', price: 19.99, quantity: 2 });
cart.addItem({ id: 2, name: 'Sneakers', price: 59.99, quantity: 1 });
cart.addItem({ id: 1, name: 'T-shirt', price: 19.99, quantity: 1 });
cart.printCart();

cart.updateQuantity(2, 2);
cart.removeItem(1);
cart.printCart();

console.log('Cart total:', cart.getTotal().toFixed(2));
