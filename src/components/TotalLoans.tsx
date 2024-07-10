import { Badge } from '@chakra-ui/react';

interface Props { 
  score: number;
}

const TotalLoans = ({ score }: Props) => {
  let color = score > 1 ? 'green' : score > 2 ? 'yellow' : '';

  return (
    <Badge colorScheme={color} fontSize='14px' paddingX={2} borderRadius='4px'>{score}</Badge>
  )
}

export default TotalLoans