import { useEffect, useState } from "react";
import { Card, Grid } from "@mui/material";
import axios from "axios";
import Meme from "./Meme";
import Loading from "./Loading";

const Memes = () => {
  const [memes, setMeme] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getData = async () => {
    const API_URL = "https://fakestoreapi.com/products/";
    try {
      const response = await axios.get(API_URL);

      setMeme(response.data);
    } catch (error) {
      console.log("error while fetching data", error.message);
      return error.response;
    }
  };
  useEffect(() => {
    setTimeout(()=>{
      setIsLoading(false);
      getData();
    },2000)
  }, []);
  return (
    <div className="div">
    {isLoading?(<Loading />):(
      <Grid container className="cards" margin={3}>
        {memes.map((meme) => (
          <Card>
            <Meme data={meme} />
          </Card>
        ))}
      </Grid>
    )}
    </div>
  );
};
export default Memes;
