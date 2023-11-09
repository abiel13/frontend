import axios from "axios";
import { Stories, Categories } from "@/types/types";

export async function getCategories() {
  try {
    const res = await axios.get("https://api.alteflix.com/api/v1/categories");
    return res.data.data;
  } catch (error: any) {
    console.error(error.message);
  }
}

export async function getStories() {
  try {
    const res = await axios.get("https://api.alteflix.com/api/v1/stories");
    return res.data.data;
  } catch (error: any) {
    console.error(error.message);
  }
}
