"use client"
import { useStore } from "@/src/store"
import ProductsDetails from "./ProductsDetails"
import { useMemo } from "react"
import { formatCurrency } from "@/src/utils"


export default function OrderSummary() {
  const order = useStore((state) => state.order)
  const total = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0) ,[order])

  return (
    <aside className="lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-96 p-5">
      <h1 className="text-4xl text-center font-black">Mi Pedido</h1>

      {order.length === 0 ? <p className="text-center my-10">El pedido esta vacio</p> : (
        <div className="mt-5">
          {order.map(item => (
            <ProductsDetails
               key={item.id}
               item={item}
            />
          ))}
          <p className='text-2xl mt-20 text-center'>
            Total a pagar: {''}
            <span className="font-bold">{formatCurrency(total)}</span>
          </p>
          <form 
             className="w-full mt-10 space-y-5"
        
          >
            <input
              type="submit"
              className="py-2 rounded uppercase text-white bg-black text-center cursor-pointer w-full font-bold"
              value='Confirmar Pedido'
            />

          </form>
        </div>
      )}
    </aside>
  )
}
