import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./Styles";
import { createpost, updatepost } from "../../actions/posts";
import Home from "../Home/Home";
function Forms({ currentId, setCurrentID }) {
  const [postData, setpostData] = useState({
    Task_Tile:"",
    Front_End_Github_Url: "",
    Back_end_Github_url: "",
    Front_End_Deployment_Url:"",
    Back_End_Deployment_Url:"",
  });
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );
  const dispatch = useDispatch();
  const classes = useStyles();
  const user=JSON.parse(localStorage.getItem('profile'))
  useEffect(() => {
    if (post) setpostData(post);
  }, [post]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updatepost(currentId, {...postData,name:user?.result?.name}));
    } else {
      dispatch(createpost({...postData,name:user?.result?.name}));
    }
    clear()
  };
  const clear = () =>
   {
     setCurrentID(null)
     setpostData({
       Task_Tile:"",
      Front_End_Github_Url: "",
      Back_end_Github_url: "",
      Front_End_Deployment_Url:"",
      Back_End_Deployment_Url:"",
    })
   };
   if(!user?.result?.name){
     return (
<Paper className={classes.paper}>
  <Typography variant="h6" align="center"> Please sign in to submit your tasks</Typography>
</Paper>
     )
   }
  return (
    <Paper className={classes.paper}>
     
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? "Update" : "Submit"} Your Appropriate Task
        </Typography>
        <TextField
          name="Task_Tile"
          variant="outlined"
          label="Task_Tile"
          fullWidth
          value={postData.Task_Tile}
          onChange={(e) => setpostData({ ...postData, Task_Tile: e.target.value })}
        />
        <TextField
          name="Front_End_Github_Url"
          variant="outlined"
          label="Front_End_Github_Url"
          fullWidth
          value={postData.Front_End_Github_Url}
          onChange={(e) => setpostData({ ...postData, Front_End_Github_Url: e.target.value })}
        />
        <TextField
          name="Back_end_Github_url"
          variant="outlined"
          label="Back_end_Github_url"
          fullWidth
          value={postData.Back_end_Github_url}
          onChange={(e) =>
            setpostData({ ...postData, Back_end_Github_url: e.target.value })
          }
        />
        <TextField
          name="Front_End_Deployment_Url"
          variant="outlined"
          label="Front_End_Deployment_Url"
          fullWidth
          value={postData.Front_End_Deployment_Url}
          onChange={(e) =>
            setpostData({ ...postData, Front_End_Deployment_Url: e.target.value })
          }
        />
        <TextField
          name="Back_End_Deployment_Url"
          variant="outlined"
          label="Back_End_Deployment_Url"
          fullWidth
          value={postData.Back_End_Deployment_Url}
          onChange={(e) =>
            setpostData({ ...postData,Back_End_Deployment_Url: e.target.value })
          }
        />
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
}

export default Forms;
