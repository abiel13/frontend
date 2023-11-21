import { Stories } from "@/types/types";
import Book from "@/app/comics/components/Book";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { getStories } from "@/request_api/ComicsApiRequest";

const SearchPage = async ({ params }: { params: { search: string } }) => {
  const stories: Stories[] = await getStories();
  const searchMathches: Stories[] = stories?.filter(
    (item) =>
      item.title.includes(params.search) ||
      item.title.toLowerCase().includes(params.search)
  );

  return (
    <div className="text-black text-3xl px-[1rem] md:px-[5rem]  mt-[2rem]">
      <Typography variant="h6">
        search results for <span className="font-bold"> {params.search}</span>
      </Typography>

      {!searchMathches?.length ? (
        <Typography color="red">No Search Results</Typography>
      ) : (
        <Grid container sx={{ mt: "1.5rem" }} spacing={1}>
          {searchMathches?.map((items) => (
            <Grid item key={items.id} xs={6} md={4}>
              <Book book={items} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default SearchPage;
