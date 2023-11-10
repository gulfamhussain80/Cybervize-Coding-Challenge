import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Drug } from '../../types/types';
import { Grid, List, ListItem } from '@mui/material';


const DrugCard = ( { drug }: { drug: Drug } ) => {
  return (
    <Card sx={{ width: 270, marginTop: "2rem" }}>
      <CardContent>
        <Grid container direction="row" justifyContent="space-between">
           <Grid item>
                <Typography variant='h4'>
                    {drug.name}
                </Typography>
            </Grid> 
            <Grid item>
                <Typography variant='body1'>
                    {drug.released}
                </Typography>
            </Grid> 
        </Grid>
        <Typography variant='h6'>
            Diseases
        </Typography>
        <List>
            {
                drug.diseases.map((disease:string) => {
                    return (
                        <ListItem>
                            {disease}
                        </ListItem>
                    );
                })
            }   
        </List>
        <Typography variant='h6'>
            Description
        </Typography>
        <Typography variant="body2">
          {drug.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default DrugCard;