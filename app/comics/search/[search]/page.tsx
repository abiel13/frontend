import { Stories } from "@/app/utils";
import axios from "axios";
import Book from '../../components/Book'
import Typography from '@mui/material/Typography'

async function getData() {
  const response = await axios.get("https://api.alteflix.com/api/v1/stories");
  return response.data.data;
}

const SearchPage = async ({ params }: { params: { search: string } }) => {
  const stories: Stories[] = await getData();
  const searchMathches: Stories[] = stories?.filter(
    (item) =>  item.title.includes(params.search) ||  item.title.toLowerCase().includes(params.search)
  );

  return (
    <div className="text-white mt-[3rem] mb-[5rem] md:mb-0 flex flex-col items-center min-h-[90vh] text-3xl">
     <p className=" md:px-[2rem] mb-[1rem] px-0 w-3/4 text-left">Search Result</p>
      <div className="w-3/4">
        {!searchMathches?.length ? (
          <div className="text-red-500 text-normal">No Comic Matches Your Search</div>
        ) : (
          <div className="flex flex-wrap gap-4 items-center  px-0 md:px-[2rem] justify-between ">
          <Typography>
          Search results
          </Typography>
            {searchMathches?.map((item , i) => (
                <Book key={i} book={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
