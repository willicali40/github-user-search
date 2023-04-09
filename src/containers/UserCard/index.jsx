import { CardMedia, Grid, Stack } from "@mui/material";
import { borderRadius } from "@mui/system";
import React from "react";

import PrincipalInformation from "../../components/PrincipalInformation/index";
import Description from "../Description";

const UserCard = (props) => {
const { userState } = props;
const { avatar_url } = userState;

  return(
    <Grid
      container
      spacing={2}
      xs={12}
      sx={{marginTop:'15px'}}
      >
      <Grid item  xs={8} sm={2} >
        <CardMedia
          component="img"
          alt="GitHub User"
          image={avatar_url}
          sx={{
            borderRadius:'50%',
            marginLeft: '25%'
          }}
        />
      </Grid>
      <Grid item xs={12} sm={10}>
        <Stack
          direction="column"
          spacing={1}
          sx={{margin: '30px'}}
        >
          <PrincipalInformation userState={userState} />
          <Description userState={userState} />
        </Stack>
      </Grid>
    </Grid>
  )
}

export default UserCard;