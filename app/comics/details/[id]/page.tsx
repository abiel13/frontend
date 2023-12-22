import { Stories } from "@/types/types";
import Book from "../../components/Book";
import { Typography, Stack } from "@mui/material";
import { getStories } from "@/request_api/ComicsApiRequest";

import Details from "../../components/Details";

const DetailsPage = async ({ params }: { params: { id: number } }) => {
  const data: Stories[] = await getStories();
  const book: Stories[] = data?.filter((item) => item.id == params.id);
  const relatedBooks: Stories[] = data?.filter(
    (item) => item.category == book[0].category && item.id != book[0].id
  );
  return (
    <Stack
      spacing={8}
      className="min-h-[90vh] my-10  py-[2rem] text-white px-4 text-2xl"
    >
      {book?.map((item, i) => (
        <>
          <Details key={i} item={item} />
        </>
      ))}
      {relatedBooks.length > 0 && (
        <Stack sx={{ padding: "1rem 2rem" }} spacing={4}>
          <Typography
            sx={{ fontWeight: "bold", fontSize: { md: "2rem", xs: "1.4rem" } }}
          >
            Related Books
          </Typography>

          {relatedBooks.map((item, i) => (
            <Book key={i} book={item} />
          ))}
        </Stack>
      )}
    </Stack>
  );
};

export default DetailsPage;
