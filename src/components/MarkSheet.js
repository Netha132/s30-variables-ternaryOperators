import React from 'react'

function MarkSheet(props) {
    let telMarks=Number(props.telMarks);
    let hinMarks=Number(props.hinMarks);
    let engMarks=Number(props.engMarks);
    let matMarks=Number(props.matMarks);
    let sciMarks=Number(props.sciMarks);
    let socMarks=Number(props.socMarks);

   let totalMarks=telMarks+hinMarks+engMarks+matMarks+sciMarks+socMarks;

   let perc=(totalMarks/600)*100;
  return (
    <div>
        
      <div className='marksTables'>
        <table className='markSheet'>
          <caption>{props.name} MarkSheet</caption>
          <thead>
            <th>Subjects</th>
            <th>Max-Marks</th>
            <th>Marks Obtained</th>
            <th>Result</th>
            <th>Remarks</th>
          </thead>
          <tbody>
            <tr>
              <td>Telugu</td>
              <td>100</td>
              <td>{telMarks}</td>
              <td>{telMarks>=35?"Pass":"Fail"}</td>
              <td>{telMarks>=35?"Good":"Need To Improve"}</td>
            </tr>

            <tr>
              <td>Hindi</td>
              <td>100</td>
              <td>{hinMarks}</td>
              <td>{hinMarks>=35?"Pass":"Fail"}</td>
              <td>{hinMarks>=35?"Good":"Need To Improve"}</td>
            </tr>

            <tr>
              <td>English</td>
              <td>100</td>
              <td>{engMarks}</td>
              <td>{engMarks>=35?"Pass":"Fail"}</td>
              <td>{engMarks>=35?"Good":"Need To Improve"}</td>
            </tr>

            <tr>
              <td>Maths</td>
              <td>100</td>
              <td>{matMarks}</td>
              <td>{matMarks>=35?"Pass":"Fail"}</td>
              <td>{matMarks>=35?"Good":"Need To Improve"}</td>
            </tr>

            <tr>
              <td>Science</td>
              <td>100</td>
              <td>{sciMarks}</td>
              <td>{sciMarks>=35?"Pass":"Fail"}</td>
              <td>{sciMarks>=35?"Good":"Need To Improve"}</td>
            </tr>

            <tr>
              <td>Social</td>
              <td>100</td>
              <td>{socMarks}</td>
              <td>{socMarks>=35?"Pass":"Fail"}</td>
              <td>{socMarks>=35?"Good":"Need To Improve"}</td>
            </tr>          
          </tbody>
          <tfoot>
            <tr>
              <th>Total</th>
              <th>600</th>
              <th>{totalMarks} ({perc.toFixed(1)}%)</th>
              <th>Pass</th>
              <th>Good</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}

export default MarkSheet
