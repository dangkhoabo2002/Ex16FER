import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import AddingBox from "./components/AddingBox";
import Table from "./components/Table";
import { Grid } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <AddingBox></AddingBox>
        </Grid>
        <Grid item xs={8}>
          <Table ></Table>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
