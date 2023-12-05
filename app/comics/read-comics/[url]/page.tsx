'use client'

import { useState , useEffect } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import axios from 'axios'
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import { Typography } from '@mui/material';
import { BiChevronLeftCircle, BiChevronRightCircle } from 'react-icons/bi';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();



const ReadBookPage = ({params} :{ params: {url : string}})=>{

    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState<number>(2);
    const [doc_url , setDoc_url] =useState<string>('')
    
    
    useEffect(   () => {
 fetch('https://api.alteflix.com/api/v1/stories').then(res => res.json()).then(data => {
   let doc_url = data.data.filter((item : any) => item.id == params.url)
setDoc_url(doc_url[0]?.doc_url)
})
} , [])
  
    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
      setNumPages(numPages);
    }

    return (
        <div className='w-[100vw] min-h-[80vh] my-[4rem] flex items-center justify-center flex-col text-3xl'>
        <Document file={'https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf'} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        <div className='flex items-center justify-around gap-5 mt-[1rem]'>
    <BiChevronLeftCircle fontSize={40} onClick={() =>setPageNumber((prev) => prev -1)} />
           <Typography className='text-black'>
          Page {pageNumber} of {numPages}
        </Typography>
        <BiChevronRightCircle fontSize={40} onClick={() => setPageNumber((prev) => prev +1)} />
        </div>
       

      </div>
    )
}

export default ReadBookPage