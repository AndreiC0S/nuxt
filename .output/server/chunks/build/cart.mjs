import { defineStore } from 'pinia';

const useCartStore = defineStore("cart", {
  state: () => ({
    items: []
  }),
  getters: {
    cartCount: (state) => state.items.reduce((t, i) => t + i.quantity, 0),
    totalPrice: (state) => state.items.reduce((t, i) => t + i.price * i.quantity, 0).toFixed(2)
  },
  actions: {
    load() {
      const local = localStorage.getItem("cart");
      this.items = local ? JSON.parse(local) : [];
    },
    clear() {
      localStorage.removeItem("cart");
      this.items = [];
      this.save();
    },
    save() {
      localStorage.setItem("cart", JSON.stringify(this.items));
    },
    add(product) {
      const existing = this.items.find((i) => i.id === product.id);
      if (existing) {
        existing.quantity++;
      } else {
        this.items.push({ ...product, quantity: 1 });
      }
      this.save();
    },
    changeQty(index, amount) {
      this.items[index].quantity += amount;
      if (this.items[index].quantity < 1) this.items[index].quantity = 1;
      this.save();
    },
    remove(index) {
      this.items.splice(index, 1);
      this.save();
    }
  }
});

export { useCartStore as u };
//# sourceMappingURL=cart.mjs.map
