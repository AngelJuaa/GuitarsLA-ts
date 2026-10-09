type Guitar = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
};
type CartItem =  Guitar &{
quantity: number
};

type GuitarProps = {
  guitar: Guitar;
  addToCart: (item: Guitar) => void;
};
type CartProp ={
  cart:CartItem[]
  decreseQuantity:(item:number)=> void,
  increaseQuantity:(item:number)=> void,
  removeFromCart:(item:number)=> void,
  clearCart:()=> void,
  isEmpty:number,
  cartTotal:number,
}