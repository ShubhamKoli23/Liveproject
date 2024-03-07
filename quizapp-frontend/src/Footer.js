import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
    
  return (
    <Box component="footer" sx={{  backgroundColor:"#0077B6" }}>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
             Quick Links
            </Typography>
            <Link href="#" color="inherit" display="block">About Us</Link>
            <Link href="#" color="inherit" display="block">Home</Link>
            <Link href="#" color="inherit" display="block">Questions</Link>
            <Link href="#" color="inherit" display="block">Contacts</Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Contact No.: +91 8888888888
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: <Link href="#" color="inherit" display="block">abacusacademy@gmail.com</Link>
            </Typography>
            <Typography variant="body2" color="text.secondary">
             Address: Nigdi,Pune
            </Typography>
            <Typography variant="body2" color="text.secondary">
             Website: <Link href="#" color="inherit" display="block">www.abacusacademy.com</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        
      </Container>
    </Box>
  );
}
