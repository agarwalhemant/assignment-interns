import { BrowserRouter, Routes, Route } from "react-router-dom"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import 'bootstrap/dist/css/bootstrap.min.css';





export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Signup />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}