import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { DefaultLayout } from './layouts/DefaultLayout'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Header />} />
        <Route path="/post" element={<Header />} />
      </Route>
    </Routes>
  )
}