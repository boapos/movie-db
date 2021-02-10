import axios from 'axios'
import React from 'react'
import { Tooltip, BarChart, CartesianGrid, XAxis, YAxis, Bar} from 'recharts'

interface Props {
  
}

const Analytics = (props: Props) => {
  const [data, setData] = React.useState([])
  
  React.useEffect(() => {
    axios.get('http://178.128.221.77:3000/analytics/years').then(res => {
      setData(res.data)
      data.sort((a:any, b:any) => a._id - b._id)
    })
    
    console.log(data)
  }, [])


  return (
    <div className='graph'>
      <BarChart width={1800} height={500} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="_id" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
    </div>
  )
}

export default Analytics
