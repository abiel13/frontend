import { Stories } from "@/app/utils";
import axios from "axios";
import Book from '../../components/Book'

async function getData() {
  const response = await axios.get("https://api.alteflix.com/api/v1/stories");
  return response.data.data;
}

const SearchPage = async ({ params }: { params: { search: string } }) => {
  const stories: Stories[] = await getData();
  const searchMathches: Stories[] = stories?.filter(
    (item) => item.title.toLowerCase().includes(params.search)
  );

  return (
    <div className="text-white min-h-[90vh] text-3xl">
      Search Result :
      <div>
        {!searchMathches?.length ? (
          <div className="text-red-500">No Comic Matches Your Search</div>
        ) : (
          <div className="flex flex-wrap ">
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
