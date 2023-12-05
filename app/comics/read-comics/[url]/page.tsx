'use client'

import { useState , useEffect } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import axios from 'axios'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();



const ReadBookPage = ({params} :{ params: {url : string}})=>{

    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState<number>(1);
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
        <div className='text-black text-3xl'>
        <Document file={doc_url} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        <p className='text-black'>
          Page {pageNumber} of {numPages}
     
        </p>
      </div>
    )
}

export default ReadBookPage