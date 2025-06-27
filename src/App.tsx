//import { Toaster } from "../src/components/ui/toaster" // ✅ A component
import { Toaster as Sonner } from "../src/components/ui/sonner" // Another one
import { TooltipProvider } from "../src/components/ui/tooltip"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Index from "./pages/Index"
import DomainParkingPage from "./pages/DomainParking"
import NotFound from "./pages/NotFound"

const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* //<Toaster /> ✅ JSX Component */}
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/domain-parking" element={<DomainParkingPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
)

export default App
