import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import Dashboard from './components/dashboard'
import Display from './components/display';


describe('<Dashboard />', () => {
   
    it('renders strike button', () => {
        const { getByText } = render(<Dashboard />)
        getByText('Strike') //finds button

       
    })
    it('renders ball button', () => {
        const { getByText } = render(<Dashboard />)
        getByText('Ball') //finds button

       
    })
    it('renders foul button', () => {
        const { getByText } = render(<Dashboard />)
        getByText(/Foul/i) //finds button

       
    })
    it('renders hit button', () => {
        const { getByText } = render(<Dashboard />)
        getByText(/Hit/i) //finds button

       
    })
    it('strikes button', () => {
      const { getByText } = render(<Dashboard />)
      const button = getByText('Strike');

      fireEvent.click(button)


    })
    it('ball button', () => {
      const { getByText } = render(<Dashboard />)
      const button = getByText('Ball');

      fireEvent.click(button)


    })
    it('foul button', () => {
      const { getByText } = render(<Dashboard />)
      const button = getByText('Foul');

      fireEvent.click(button)


    })
    it('hit button', () => {
      const { getByText } = render(<Dashboard />)
      const button = getByText('Hit');

      fireEvent.click(button)


    })
})
describe('<Display />', () => {
   
  it('renders strike button', () => {
      const { getByText } = render(<Display />)
      getByText(/Strikes:/i) //finds button

     
  })
  it('renders ball button', () => {
      const { getByText } = render(<Dashboard />)
      getByText(/Balls:/i) //finds button

     
  })
  it('renders ball button', () => {
    const { getByText } = render(<Dashboard />)
    getByText(/Count/i) 
  })

})