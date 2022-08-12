import { Container } from "@mui/material";
import * as React from "react";
import { Home } from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const StyledContainer = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(10),
  backgroundColor: theme.palette.primary.main,
  height: "100vh",
  color: "white",
  [theme.breakpoints.up("sm")]: {
    backgroundColor: "white",
    color: "#555",
    border: "1px solid #ece7e7",
  },
}));

const Item = styled("Div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: theme.spacing(4),
  [theme.breakpoints.up("sm")]: {
    marginBottom: theme.spacing(3),
    cursor: "Pointer",
  },
}));

const Icon = styled("div")(({ theme }) => ({
  marginRight: theme.spacing(1),
  [theme.breakpoints.up("sm")]: {
    //I need to change the Icon size
    //fontSize:"18px" but this not working
  },
}));

const Text = styled("div")(({ theme }) => ({
  fontWeight: 500,
  color: "red",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

function Leftbar() {
  return (
    <StyledContainer>
      <Container>
        <div>
          <Item>
            <Icon>
              <Home />
            </Icon>

            <Typography>
              <Text>Homepage</Text>
            </Typography>
          </Item>
        </div>
        <div>
          <Item>
            <Icon>
              <PersonIcon />
            </Icon>
            <Text>
              <Typography>Friends</Typography>
            </Text>
          </Item>
        </div>
        <div>
          <Item>
            <Icon>
              <FormatListBulletedIcon />
            </Icon>
            <Text>
              <Typography>List</Typography>
            </Text>
          </Item>
        </div>
        <div>
          <Item>
            <Icon>
              <CameraAltIcon />
            </Icon>
            <Text>
              <Typography>Camera</Typography>
            </Text>
          </Item>
        </div>
        <div>
          <Item>
            <Icon>
              <OndemandVideoIcon />
            </Icon>
            <Text>
              <Typography>Video</Typography>
            </Text>
          </Item>
        </div>
        <div>
          <Item>
            <Icon>
              <PhoneAndroidIcon />
            </Icon>
            <Text>
              <Typography>Apps</Typography>
            </Text>
          </Item>
        </div>
        <div>
          <Item>
            <Icon>
              <FeaturedPlayListIcon />
            </Icon>
            <Text>
              <Typography>Collections</Typography>
            </Text>
          </Item>
        </div>
        <div>
          <Item>
            <Icon>
              <StorefrontIcon />
            </Icon>
            <Text>
              <Typography>Market Place</Typography>
            </Text>
          </Item>
        </div>
        <div>
          <Item>
            <Icon>
              <SettingsIcon />
            </Icon>
            <Text>
              <Typography>Settings</Typography>
            </Text>
          </Item>
        </div>
        <div>
          <Item>
            <Icon>
              <LogoutIcon />
            </Icon>
            <Text>
              <Typography>Logout</Typography>
            </Text>
          </Item>
        </div>
      </Container>
    </StyledContainer>
  );
}

export default Leftbar;
