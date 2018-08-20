import * as React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Header from './layout/Header'
import Routes from './routes'

import './index.scss'
import './vendor'

render(
  <BrowserRouter>
    <div className="App">
      <Header />
      <main>
        <Routes />
      </main>
    </div>
  </BrowserRouter>,
  document.getElementById('app')
)
