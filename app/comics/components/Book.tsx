import React , {Suspense} from 'react'
import Image from "next/image";
import Link from "next/link";
import { Stories } from '@/app/utils';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

interface BookI{
    book:Stories
}

const Book:React.FC<BookI> = ({book}) => {
  return ( 
    <Link href={`/comics/details/${book.id}`} >
  <Card sx={{ width: {md:300 , sm:150} , height:{md:350 , sm:200} }} >
        <Image src={book.background_url} className='w-[200px]  h-[150px] md:w-[300px] md:h-[300px]' height={200} width={300} alt={book.title} />
        <CardContent>
          
          <Typography sx={{ fontSize:{md:'1.3rem' , sm:'.8rem'} ,  width:{md:300 , sm:150}}}>
            {book.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
         {book.author}
          </Typography>
          <Typography color='text.secondary' >
            {book.category}
          </Typography>
        </CardContent>
      </Card>
     </Link>
  )
}

export default Book



