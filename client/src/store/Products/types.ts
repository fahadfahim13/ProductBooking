export interface Product {
  name: string;
  code: string;
  type: string;
  availability: boolean;
  needing_repair: boolean;
  durability: number;
  max_durability: number;
  mileage: number;
  price: number;
  minimum_rent_period: number;
}

export interface ProductResponse extends Product {
  id: number;
}

export interface ProductState {
  status: 'idle' | 'pending' | 'success' | 'rejected';
  data: ProductResponse[];
}
