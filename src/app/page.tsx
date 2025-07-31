// pages/index.tsx
import { Box } from "@mui/material";
import Greeting from "./components/Greeting";

export default function Home() {
  return (
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          px: 2,
        }}
      >
        <Box
          sx={{
            width: "fit-content",
            textAlign: "left",
          }}
        >
          <Greeting />
        </Box>
      </Box>
  );
}
