import React, { memo, useMemo, useState } from 'react'
import { DayClickEventHandler, DayPicker } from 'react-day-picker'
import './customStyle.css'

const Index = () => {
  const [busyDays, setBusyDays] = React.useState([
    new Date(2022, 4, 8),
    new Date(2022, 4, 9),
  ])
  const [date, setDate] = useState(new Date())
  const [month, setMonth] = useState<number>(date.getMonth())
  const [year, setYear] = useState<number>(date.getFullYear())

  const firstDayMonth: Date = useMemo(
    () => new Date(year, month, 1),
    [year, month]
  )
  const lastDayMonth: Date = useMemo(
    () => new Date(year, month + 1, 0),
    [year, month]
  )

  const handleDayClick: DayClickEventHandler = (day) => {
    setDate(day)
  }

  const handleChangePage = (month: Date) => {
    setMonth(month.getMonth())
    setYear(month.getFullYear())
  }

  return (
    <div className="mx-auto sm:mx-0 rounded-xl bg-white w-max h-max mt-3">
      <DayPicker
        defaultMonth={new Date()}
        showOutsideDays
        selected={date}
        modifiers={{ busyDays }}
        onDayClick={handleDayClick}
        onMonthChange={handleChangePage}
        weekStartsOn={1}
        modifiersClassNames={{ busyDays: 'busyDays' }}
        disabled={[{ before: firstDayMonth }, { after: lastDayMonth }]}
      />
    </div>
  )
}
export default memo(Index)
