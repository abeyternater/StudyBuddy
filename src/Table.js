import './tablestyles.css';

import gif1 from './media/Testimonial-1.gif';
import gif2 from './media/Testimonial-2.gif';
import gif3 from './media/Testimonial-3.gif';
import gif4 from './media/Testimonial-4.gif';
import Contactform from './Contactform';


function Table() {
  return (
    <div className="Table">
      <table>
        <tbody>
        <tr className='flex'>
        <td className="oneThird"><h2>858-774-6467</h2></td>
        <td className="oneThird"><Contactform></Contactform></td>
        <td className="oneThird"><h2>858-774-6467</h2></td>
        </tr>
        <tr>
          <td className="oneHalf">
            <img src={gif1} alt='Testimonial 1' />
        </td>
        <td className="oneHalf">
        <img src={gif2}  alt='Testimonial 2' />
        </td>
        </tr>
      <tr>          <td className="oneHalf">

      <img src={gif3}alt='Testimonial 3' />
        </td>
        <td className="oneHalf">

        <img src={gif4} alt='Testimonial 4' />
        </td>
        </tr>
        </tbody>
        </table>
    </div>
  );
}

export default Table;
