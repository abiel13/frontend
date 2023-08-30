import React , {Suspense} from 'react'
import Image from "next/image";
import Link from "next/link";
import { Stories } from '@/app/utils';

interface BookI{
    book:Stories
}

const Book:React.FC<BookI> = ({book}) => {
  return (
    <Suspense
                fallback={
                  <p className="text-white text-2xl">hey there am loading</p>
                }
              >
                <Link href={`/comics/details/${book.id}`} className="flex flex-col gap-2 w-[250px] h-[350px]">
                  <Image
                    src={book.background_url}
                    alt="book cover"
                    width={250}
                    height={250}
                    quality={80}
                    className="w-full h-[250px] "
                  />
                  <div className="text-white flex justify-between items-center">
                    <p className="text-normal font-bold">{book.title}</p>
                    <p className="text-sm font-light text-right"> {book.author}</p>
                  </div>
                  <div className="text-white flex justify-between items-center">
                      <p className="text-normal font-bold">{book.category}</p>
                    <p className="text-sm font-light text-right"> {book.year}</p>
                  </div>
                </Link>
              </Suspense>
  )
}

export default Book