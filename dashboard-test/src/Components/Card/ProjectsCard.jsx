import * as react from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

 
 let rows = [
    { id : 1, name : "Material UI XD Version", budget : "$14,000" },
    { id : 2, name :  "Add Progress Track", budget : "$3,000" },
    { id : 3, name : "Fix Platform Errors", budget : "Not set" },
    { id : 4, name : "Launch our Mobile App", budget : "$20,500" },
    { id : 5, name : "Add the New Pricing Page", budget : "$500" },
    { id : 6, name : "Redesign New Online Shop", budget :  "$2,000" },
  ];
console.log(rows)
const ProjectsCard
 = () => {


  return (
    <TableContainer component={Paper} sx={{ width: "60%", height: "auto" }}>
      <Table sx={{ minWidth: "500px" , bgcolor : "red" }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "light" }}>COMPANIES</TableCell>
            <TableCell sx={{ fontWeight: "light" }}>MEMBERS</TableCell>
            <TableCell sx={{ fontWeight: "light" }}>BUDGET</TableCell>
            <TableCell sx={{ fontWeight: "light" }}>COMPLETION</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((e) => {

       
            <TableRow  key ={e.id} >
              <TableCell sx={{bgcolor : "yellow" , height : "500px"}}>{e.name}</TableCell>
              <TableCell >{e.budget} </TableCell>
           
            </TableRow>;
    })}
        </TableBody>
               
      </Table>
    </TableContainer>
  );
};

export default ProjectsCard
;
