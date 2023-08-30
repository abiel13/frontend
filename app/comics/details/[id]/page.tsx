import axios from "axios";
import { Stories } from "@/app/utils";
import Image from "next/image";
import { BiBookReader, BiStar } from "react-icons/bi";
import Book from "../../components/Book";


async function getData() {
    try {
        const res = await axios.get("https://api.alteflix.com/api/v1/stories");
    return res.data.data;
    } catch (error) {
     console.log('an error occured')
    }
}

const DetailsPage = async ({params} : {params :{id:number}}) => {
    const data:Stories[]  = await getData();
const book:Stories[] = data?.filter(item => item.id == params.id)
const relatedBooks:Stories[] = data?.filter(item  => item.category == book[0].category)

        return (
            <div className="min-h-[90vh] mt-10  py-[2rem] text-white text-2xl">
               {
                book?.map((item , i) =>(
                    <div key={i} className=" w-full flex flex-col md:flex-row gap-8 md:gap-0  md:w-3/4 mx-auto min-h-[60vh]">
                        <div className="flex-1 flex items-center  justify-center ">
                            <Image className="w-full h-[70vh] relative md:w-1/2 md:h-full  aspect-[4/3]" quality={100} src={item.background_url} alt="bg-img" width={250} height={250} />
                            <div className="flex items-end md:hidden absolute  top-0 right-0 bottom-0 left-0 opacity-40 justify-center gap-8 bg-black">
                            <div className="flex cursor-pointer  items-center border-2 border-white w-[50px] h-[50px] rounded-full justify-center">
                                <BiBookReader />
                            </div>
                            <div className="flex cursor-pointer   items-center border-2 border-white w-[50px] h-[50px] rounded-full justify-center">
                                <BiStar />
                            </div>
                            </div>
                        </div>
                        <div className="flex-1 flex  flex-col">
                            <div className="flex flex-1 px-4 justify-between">
                                <div className="flex-1  flex gap-8 flex-col justify-between">
                                     <div className="text-sm md:text-base " dangerouslySetInnerHTML={{__html : item.description}} />
                                     <div className='flex flex-col gap-5 md:gap-2'>
                                        <div className=" flex items-center gap-2"><p className= " text-sm md:text-base font-normal md:font-bold tracking-widest">Title:</p>  <p className="  md:font-medium  md:text-base text-sm font-light"> {item.title}</p></div>
                                        <div className=" flex items-center gap-2"><p className="  text-sm md:text-base font-normal md:font-bold tracking-widest">Category:</p>  <p className="  md:font-medium  md:text-base text-sm font-light">{item.category}</p> </div>
                                        <div className=" flex items-center gap-2"><p className="  text-sm md:text-base font-normal md:font-bold tracking-widest">Publisher:</p>  <p className="  md:font-medium  md:text-base text-sm font-light">{item.author}</p> </div>
                                     </div>
                                </div>
                              
                                <div className="flex-1 flex justify-end"> <Image src={item.thumbnail_url}  alt="sample image" width={150} height={150} /></div>
                            </div>
                            <div className="hidden md:flex gap-10   flex-1 py-8"> 
                            <div className="flex cursor-pointer  items-center border-2 border-white w-[50px] h-[50px] rounded-full justify-center">
                                <BiBookReader />
                            </div>
                            <div className="flex cursor-pointer   items-center border-2 border-white w-[50px] h-[50px] rounded-full justify-center">
                                <BiStar />
                            </div>
                            </div>
                        </div>
                    </div>
                ))
               }

               <div className="w-full md:w-3/4 mx-auto flex flex-col gap-5 mt-[2.5rem]">
                <h4>Related Stories</h4>

                <div>{
                    relatedBooks?.map(( item  , i ) => (
                        <Book key={i} book={item} />
                    ))
                    }</div>
               </div>
                 </div>
        )
}


export default DetailsPage;