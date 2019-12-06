import React, { useEffect, useState } from 'react'
import Report from '../report'
import fetch from 'isomorphic-unfetch'
import './style.scss'
import Navbar from '../navbar/navbar'

// TODO add this to the filter
const nMonths = 3

const Dashboard = () => {
  const [reports, setReports] = useState([])
  const [newReporter, setNewReporter] = useState('')
  const REPORTERS_API = process.env.REPORTERS_API

  const fetchReporters = () => {
    return fetch(`${REPORTERS_API}${nMonths}`).then(res => res.json())
  }

  useEffect(() => {
    fetchReporters().then(setReports)
  }, [])

  const addReporter = async () => {
    await fetch('/api/report', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ reporter: newReporter })
    })
    setNewReporter('')
    fetchReporters().then(setReports)
  }

  return (
    <>
      <Navbar
        reports={reports}
        setReports={setReports}
        newReporter={newReporter}
        setNewReporter={setNewReporter}
        addReporter={addReporter}
      />
      <div className="locations">
        {reports
          .filter(r => !r.hidden)
          .map(r => (
            <Report key={r.reporter} location={r} />
          ))}
      </div>
    </>
  )
}

export default Dashboard
