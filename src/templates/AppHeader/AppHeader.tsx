import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import { FunctionComponent } from "react";

interface AppHeaderProps {}

const AppHeader: FunctionComponent<AppHeaderProps> = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Taeg-ul
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

AppHeader.displayName = "AppHeader";

export default AppHeader;
