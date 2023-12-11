import logo from './logo.svg';
import './App.css';
import Section from './component/Section';
import 'bootstrap/dist/css/bootstrap.min.css';
import Section2 from './component/Section2';
import Section3 from './component/Section3';
import Section4 from './component/Section4';


function App() {
  return (
    <div className='bg-light App p-3'>
      <div className='text-start mb-3'>Food Sellers / Settings / Food Types</div>
      <div className='d-flex'>

      <Section />
      {/* <Section2 /> */}
      {/* <Section3 /> */}
      <Section4 />
      </div>
    </div>
  );
}

export default App;
