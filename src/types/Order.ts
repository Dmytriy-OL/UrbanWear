export interface Order {
    id: string;
    items: {
      id: string;
      title: string;
      price: number;
      imageUrl: string;
    }[];
    total: number;
    date: string;
  }
  