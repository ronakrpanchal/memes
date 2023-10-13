import { Card } from "@mui/material";
const meme = (meme) =>{
    // console.log(meme);
    return(
      <div>
      <Card>
        <img src={meme.data.image} height={400} alt="meme"/>
      </Card>
      </div>
    )
}
export default meme