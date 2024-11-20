import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tours from './pages/Tours';
import About from './pages/About';
// import FAQ from './pages/FAQ';
import Services from './pages/Services';
import BookingForm from './components/BookingForm';

const App = () => {
  return (
<div>
      <Navbar />
         <Home />
         <About />
         <Services />
          <Tours />
          <BookingForm />
          {/* <FAQ /> */}
      <Footer />
    </div>
  );
};

export default App;
