
import './App.css';
import MarkSheet from './components/MarkSheet';

function App() {
  return (
    <div className="App">
      <div className='parentContainer'>
        <h1>Student MarkSheet</h1>

      
      <MarkSheet name="First Unit Test" telMarks='33' hinMarks='87' engMarks='95' matMarks='55' sciMarks='35' socMarks='70'></MarkSheet>

      <MarkSheet  name="Second Unit Test" telMarks='79' hinMarks='92' engMarks='98' matMarks='73' sciMarks='67' socMarks='45'></MarkSheet>

      <MarkSheet  name="Quaterly Test" telMarks='35' hinMarks='77' engMarks='56' matMarks='88' sciMarks='27' socMarks='66'></MarkSheet>

      <MarkSheet  name="Half Yearly Test" telMarks='44' hinMarks='34' engMarks='66' matMarks='30' sciMarks='78' socMarks='99'></MarkSheet>

      <MarkSheet  name="Annual Test" telMarks='73' hinMarks='80' engMarks='67' matMarks='90' sciMarks='87' socMarks='35'></MarkSheet>
      </div>
    </div>
  );
}

export default App;
