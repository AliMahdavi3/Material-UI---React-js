import React from "react";
import Container from "@mui/material/Container";
import { Box, Typography, Paper } from "@mui/material";
import ImageCollage from "../components/ImageCollage";
import CustomizedAccordions from "../components/Accordion";
import BottomNavigation from "@mui/material/BottomNavigation"
import BasicModal from "../components/Modal"

function Tour() {
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h4" component="h1" marginTop={3}>
        Explore the World in Vegas
      </Typography>
      <Box marginTop={3} sx={{ display: "flex" }}>
        <img
          src="https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80"
          alt="img"
          height={325}
        />
        <ImageCollage />
      </Box>
      <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
          About This Ticket
        </Typography>
        <Typography variant="paragraph" component="p" marginTop={3}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          accusantium fugit doloremque eligendi eos optio quasi consequatur
          veniam qui, beatae excepturi reprehenderit, ipsa quod cum impedit,
          eveniet maiores illo eius ut nihil sapiente voluptates provident
          aperiam? Enim corporis cupiditate obcaecati asperiores laudantium
          ducimus numquam magnam doloremque nulla officiis ratione omnis
        </Typography>
      </Box>
      <Box marginBottom={10}>
        <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
          Frequently Ask Questions
        </Typography>
        <CustomizedAccordions />
      </Box>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation>
            <BasicModal/>
        </BottomNavigation>
      </Paper>
    </Container>
  );
}

export default Tour;
