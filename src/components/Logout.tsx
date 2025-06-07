import { Button } from '@chakra-ui/react'
import React from 'react'

interface Props {
    submitter: () => void
}

const Logout:React.FC<Props> = ({submitter}) => {
  return (
    <Button onClick={submitter}>Logout</Button>
  )
}

export default Logout