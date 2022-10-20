// dependencies
import { useState } from "react";
import { Typography, Box, TextField, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

// styles
import Styles from "./Home.styles";

const Home = () => {
  const [userName, setUserName] = useState("");
  const [userNameFieldError, setUserNameError] = useState("");
  const navigate = useNavigate();

  const handleUsernameFieldChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    setUserName(event.target.value);
  };

  const handleJoinGroupChat = () => {
    if (userName === "") {
      setUserNameError("Username is required");
      return;
    }

    if (userName.length < 3) {
      setUserNameError("Username must at least be 3 characters or more");
      return;
    }
    navigate("chats");
  };

  return (
    <Box component="div" sx={Styles.app}>
      <Typography variant="h4" sx={Styles.heading}>
        Chat Application
      </Typography>
      <Typography variant="subtitle1" sx={Styles.subTitle}>
        Welcome to group chat application
      </Typography>
      <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
        <Box component="div" sx={Styles.userNameContainer}>
          <Typography variant="subtitle1" sx={Styles.formHeading}>
            To join the group chat, you have to enter your unique username
          </Typography>

          <TextField
            id="standard-basic"
            label="Username"
            variant="standard"
            sx={Styles.textField}
            required
            value={userName}
            onChange={(e) => handleUsernameFieldChange(e)}
          />
          {userNameFieldError.length > 0 && (
            <span style={{ color: "red", fontSize: "14px" }}>
              {userNameFieldError}
            </span>
          )}
          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={Styles.joinBtn}
            onClick={handleJoinGroupChat}
          >
            Join
          </Button>
        </Box>
      </div>
    </Box>
  );
};

export default Home;
