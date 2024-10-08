"use client"

import type { Product } from "@prisma/client"
import { useStore } from "@/src/store"

type AddProductButtonProps = {
    product: Product
}

export default function AddProductButton({product}: AddProductButtonProps) {
    const addToOrder = useStore((state) => state.addToOrder)

  return (
    <button 
    type='button'
    className='bg-indigo-500 hover:bg-indigo-700 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer'
    onClick={() => addToOrder(product)}
    >
       Agregar
    </button>
  )
}
