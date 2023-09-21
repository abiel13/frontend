import { Stories } from "@/app/utils";
import axios from "axios";
import Book from '../../components/Book'
import Typography from '@mui/material/Typography'
import { toast } from "react-toastify";
import { Grid } from "@mui/material";

async function getData() {
  try {
     const response = await axios.get("https://api.alteflix.com/api/v1/stories");
  return response.data.data;
  } catch (error:any) {
    toast(error?.meassage)
  }
 
}

const SearchPage = async ({ params }: { params: { search: string } }) => {
  const stories: Stories[] = await getData();
  const searchMathches: Stories[] = stories?.filter(
    (item) =>  item.title.includes(params.search) ||  item.title.toLowerCase().includes(params.search)
  );

  return(
    <div className="text-black text-3xl px-[1rem] mt-[2rem]"> 
        <Typography variant='h6'>
  search results for <span className="font-bold"> {params.search}</span>
  </Typography>      
  <Grid container sx={{mt:'1.5rem' }} spacing={1}>
  {searchMathches?.map( items => (
      <Grid key={items.id} item xs={4}>
      <Book book={items} />
    </Grid>
    ))}
  </Grid>
              </div> 
             )
};

export default SearchPage;
