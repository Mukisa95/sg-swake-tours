import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DetailsPage from './pages/DetailsPage';
import BookingPage from './pages/BookingPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="details" element={<DetailsPage />} />
          <Route path="booking" element={<BookingPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;