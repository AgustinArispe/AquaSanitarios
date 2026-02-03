import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Definimos cómo se ve un item en el carrito
export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

// Definimos las acciones disponibles
interface CartState {
  items: CartItem[];
  addItem: (product: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  decreaseItem: (id: string) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === product.id);

        if (existingItem) {
          // Si ya existe, sumamos 1 a la cantidad
          set({
            items: currentItems.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          });
        } else {
          // Si es nuevo, lo agregamos con cantidad 1
          set({ items: [...currentItems, { ...product, quantity: 1 }] });
        }
      },

      decreaseItem: (id) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === id);

        if (existingItem && existingItem.quantity > 1) {
          // Si hay más de 1, restamos
          set({
            items: currentItems.map((item) =>
              item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            ),
          });
        } else {
          // Si hay 1, lo borramos
          set({
            items: currentItems.filter((item) => item.id !== id),
          });
        }
      },

      removeItem: (id) => {
        set({
          items: get().items.filter((item) => item.id !== id),
        });
      },

      clearCart: () => set({ items: [] }),

      getTotalPrice: () => {
        return get().items.reduce((total, item) => total + item.price * item.quantity, 0);
      },
    }),
    {
      name: 'aqua-cart-storage', // Nombre para guardar en el navegador
    }
  )
);