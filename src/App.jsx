import { RecoilRoot, atom,  useRecoilValue, useSetRecoilState } from 'recoil'
import './App.css'
import { Button, Card, Typography } from '@mui/material'

function App() {

  return (
    <RecoilRoot>
        <Card>
          <Buttons/>
          <Counter/>
        </Card>
    </RecoilRoot>
  )
}

function Buttons(){
  return(
    <div style={{display: "flex", justifyContent: "space-between", padding: "4px"}}>
      <Increase/>
      <Decrease/>
    </div>
  )
}

function Increase(){
  const setCount= useSetRecoilState(countState);
  return(
    <div>
      <Button variant={"contained"} onClick={()=>setCount(existingCount=>existingCount+1)}>Increase Count</Button>
    </div>
  )
}

function Decrease(){
  const setCount= useSetRecoilState(countState);
  return(
    <div>
      <Button variant={"contained"} onClick={()=>setCount(existingCount=>existingCount-1)}>Decrease Count</Button>
    </div>
  )
}

function Counter(){
  const count= useRecoilValue(countState);
  return(
    <div>
      <Typography variant='h5' textAlign={"center"}>
        {count}
      </Typography>
    </div>
  )
}

export default App

const countState= atom({
  key: 'countState',
  default: 0
})