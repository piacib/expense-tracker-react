import React, { useState, } from "react";
import './style/App.css' 
import { lightTheme, darkTheme } from "./style/Themes"
import { Balance } from './components/Balance'
import {Header} from './components/Header'
import { IncomeExpenses } from './components/IncomeExpenses'
import { TransactionList } from './components/TransactionList'
import { AddTransaction } from './components/AddTransaction'
import {GlobalProvider} from './context/GlobalState'
// import { GlobalStyles } from "./context/GlobalStyles";
import {ThemeProvider} from "styled-components";

let App = () => {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
}
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalProvider>
      
       
          <div className="header">
            <Header />
            <label className="switch">
                <input type="checkbox" onClick={themeToggler}/>
                <span className="slider round"></span>
            </label>
          
          </div>
            <div className="container">
              <Balance/>
              <IncomeExpenses/>
              <TransactionList />
              <AddTransaction />
            </div> 
          
      
      </GlobalProvider>
    </ThemeProvider>
  )
}
export default App;
