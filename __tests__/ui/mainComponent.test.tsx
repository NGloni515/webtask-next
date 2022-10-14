import { render } from '@testing-library/react'
import Body from '../../components/Body/Body'
import '@testing-library/jest-dom'
// import axios from 'axios'
import { CAR_1 } from '../../constants/carData';

describe('Body', () => {
  beforeEach(()=>{
    global.fetch = jest.fn(()=>Promise.resolve({
      json: ()=>Promise.resolve(CAR_1)
    })) as jest.Mock;
  });

  it('Match snapshot Carousel', async() => {
    const {asFragment} = render(<Body/>)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders a Carousel', async() => {
    const {getByTestId} = render(<Body/>)
    const carousel = getByTestId("grid-container")
    expect(carousel).toBeInTheDocument()
  })

  it('renders a Carousel', async() => {
    const {getByTestId} = render(<Body/>)
    const imgContainer = getByTestId("image-container")
    expect(imgContainer).toBeInTheDocument()
  })
})