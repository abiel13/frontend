import { Stories }  from '@/app/utils'
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Book from '../../components/Book'
import axios from 'axios'
import { toast } from 'react-toastify'

async function getdata() {
	 try {
    const res = await axios.get("https://api.alteflix.com/api/v1/stories");
    return res.data.data;
  } catch (error:any) {
 toast(error?.meassage)
  }
}

const Categories = async ({params} : {params :{id :number}}) => {
 const stories: Stories[] = await getdata()
const catStories: Stories[] = stories?.filter(item => item.category_id == params.id )

        return(
  <div className="text-black text-3xl px-[1rem] mt-[2rem]"> 
			<Typography variant='h6'>
search results 
</Typography>      
<Grid container sx={{mt:'1.5rem' }} spacing={1}>
{catStories?.map( items => (
	  <Grid key={items.id} item xs={4}>
    <Book book={items} />
  </Grid>
	))}
</Grid>
            </div> 
           )
}

export default Categories