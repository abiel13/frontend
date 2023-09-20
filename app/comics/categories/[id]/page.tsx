import { Stories }  from '@/app/utils'
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Book from '../../components/Book.tsx'
import axios from 'axios'

async function getdata() {
	 try {
    const res = await axios.get("https://api.alteflix.com/api/v1/stories");
    return res.data.data;
  } catch (error) {
    console.log("an error occured");
  }
}

const Categories = async ({params} : {params :{id :string}}) => {
 const stories: Stories[] = await getdata()
const catStories: Stories[] = stories?.filter(item => item.category_id == params.id )

        return(
  <div className="text-white text-3xl"> 
			<Typography>
search results 
</Typography>      
<Grid container spacing={0.5}>
{catStories?.map( items => (
	  <Grid key={item.id} item>
    <Book book={items} />
  </Grid>
	))}
</Grid>
            </div> 
           )
}

export default Categories