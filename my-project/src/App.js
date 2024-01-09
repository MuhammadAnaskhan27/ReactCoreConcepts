import Header from './components/Header/Header';
import "../src/index.css"
import Examples from './components/Core/Example';
import CoreConcept from './components/Core/CoreConcept';


function App() {
  
  return (
    <>
      <Header />
      <main>
       <CoreConcept/>
    <Examples/>
    </main>
    </>
   
  );
}

export default App;