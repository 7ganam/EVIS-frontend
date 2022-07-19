import { Container, Grid } from "@mui/material";
import BlogCard1 from "components/blog-cards/BlogCard1";
import CategorySectionHeader from "components/CategorySectionHeader";

// ================================================
const Section7 = ({ blogLists }) => {
  return (
    <Container
      sx={{
        mb: "4rem",
      }}
    >
      <CategorySectionHeader title="Get Ideas from our Blog" />

      <Grid container spacing={3}>
        {blogLists.map((blog, index) => (
          <Grid item md={6} xs={12} key={index}>
            <BlogCard1 blog={blog} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Section7;
