"use client"

import * as React from "react"
import {
  Provider as ToastProviderBase,
  Viewport as ToastViewportBase,
} from "@radix-ui/react-toast"

type ToastData = {
  id: string
  title?: string
  description?: string
}

type ToastContextType = {
  showToast: (toast: Omit<ToastData, "id">) => void
  toasts: ToastData[]
}

const ToastContext = React.createContext<ToastContextType | undefined>(undefined)

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = React.useState<ToastData[]>([])

  const showToast = ({ title, description }: Omit<ToastData, "id">) => {
    const id = crypto.randomUUID()
    setToasts((prev) => [...prev, { id, title, description }])
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 3000)
  }

  return (
    <ToastContext.Provider value={{ showToast, toasts }}>
      <ToastProviderBase swipeDirection="right">
        {children}
        <ToastViewportBase className="fixed bottom-4 right-4 z-50 flex flex-col gap-2" />
      </ToastProviderBase>
    </ToastContext.Provider>
  )
}

export const useToast = () => {
  const ctx = React.useContext(ToastContext)
  if (!ctx) throw new Error("useToast must be used within ToastProvider")
  return ctx
}
