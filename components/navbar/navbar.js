import React from 'react'
import LabeledInput from '../labeledInput'
import CheckBoxFilterHorizontal from '../checkBoxFilterHorizontal'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { IconButton, Typography } from '@material-ui/core'
import './style.scss'

export const Navbar = ({ reports, setReports, newReporter, setNewReporter, addReporter }) => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography component={'h2'}>Filters</Typography>
          <CheckBoxFilterHorizontal elements={reports} setElements={setReports} label={'reporter'} />
          <LabeledInput value={newReporter} valueSetter={setNewReporter} submitHandler={addReporter} hint="Add new reporter" />
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar