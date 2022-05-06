import {useState} from "react";
import CalendarElement, {CalendarType} from 'react-calendar';
import 'react-calendar/dist/Calendar.css'


const Calendar = () => {
  const [value, onChange] = useState(new Date());
  const valueArr = [new Date('2022-06-19T03:24:00'), new Date('2022-06-20T03:24:00')]
  console.log(value)
  return (
    <div className='w-96'>
      <CalendarElement locale='en' className={'mt-4'} onChange={onChange} value={value}/>
    </div>
  )
}
export default Calendar;