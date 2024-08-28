import { Invoice } from "../models/invoice";

export const invoiceData: any = {
  id: 1,
  name:'Componente de PC',
  client: {
    name: 'Andres',
    lastname:'Doe',
    address: {
      country:'USA',
      city:'Los Angeles',
      street: 'One Street',
      number: 15,
    }

  },
  company:{
    name:'New Age',
    fisicalNumber: 31231123
  },
  items: [
    {
      id:1,
      product:'Cpu Intel i9',
      price: 599,
      quantity: 1
    },
    {
      id:2,
      product:'Corsair teclado Mecanico',
      price: 399,
      quantity: 2
    },
    {
      id:3,
      product:'Monitor Asus',
      price: 899,
      quantity: 3
    },
  ]
}