import React from "react";
import useStyles from "./Styles";
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined'
import mern from '../../../images/mern.png'
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deletepost, likepost } from "../../../actions/posts";

function Post({ post, setCurrentID }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={mern}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.name}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
        <Typography className={classes.Front_End_Github_Url} variant="h5" gutterBottom>
        {post.Task_Tile}
      </Typography>
        
      </div>
      { (user?.result?.googleId===post?.creator || user?.result?._id===post?.creator)&&(<div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setCurrentID(post._id)}
        >
          <MoreHorizIcon fontSize="medium" />
        </Button>
      </div>)
      }
     
      <CardContent style={{right:'50px'}}>
      <Typography className={classes.Front_End_Github_Url} variant="h6" gutterBottom >
        {post.Front_End_Github_Url}
      </Typography>
        <Typography className={classes.Front_End_Github_Url} variant="h6"  gutterBottom >
          {post.Back_end_Github_url}
        </Typography>
        <Typography className={classes.Front_End_Github_Url} variant="h6" gutterBottom>
        {post.Front_End_Deployment_Url}
      </Typography>
      <Typography className={classes.Front_End_Github_Url} variant="h6" gutterBottom>
        {post.Back_End_Deployment_Url}
      </Typography>

      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          disabled={!user?.result}
          onClick={() => dispatch(likepost(post._id))}
        >
        </Button>
        {
          (user?.result?.googleId===post?.creator || user?.result?._id===post?.creator)&&
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(deletepost(post._id))}
        >
          <DeleteIcon fontSize="small" /> Delete
        </Button>
        }
      </CardActions>
    </Card>
  );
}

export default Post;
