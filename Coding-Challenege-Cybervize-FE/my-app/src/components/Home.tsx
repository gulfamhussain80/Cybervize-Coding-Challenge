import React, { useEffect, useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import API from '../services/api';
import { Drug } from '../types/types';
import DrugCard from './shared/DrugCard';

const Home = () => {
  const [search, setSearch] = useState('')

  const [drugs, setDrugs] = useState<Drug []>([]);

  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async (search?:string) => {
    let result;
    if(search){
        result = await API.get(`/drugs?search=${search}`)
    }else{
        result = await API.get(`/drugs`);
    }
    setDrugs(result.data);
  };

  const handleSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if(name==='search'){
        setSearch(value)
    }
  }

  const handleSearchButtonClick = () => {
    fetchData(search);
  }

  return (
    <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: '100vh' }}
    >
        <Grid item>
            <img src="./assets/Logo.png" alt="" />
        </Grid>
        <Grid item>
            <Grid container direction="row" alignItems = "center" justifyContent="space-around">
                <Grid item xs={10} md={10} lg={10} sm={10} style={{textAlign: "center"}}>
                    <TextField
                        label="Search"
                        sx={{width: "80%"}}
                        name="search"
                        placeholder='Search by drug name or disease'
                        value={search}
                        onChange={handleSearchTextChange}
                    />
                </Grid>
                <Grid item xs={2} md={2} lg={2} sm={2} style={{textAlign: "center"}}>
                    <Button variant='contained' onClick={handleSearchButtonClick}>Search</Button>
                </Grid>
            </Grid>
        </Grid>
        {
            drugs.map((drug:Drug) => {
                return (
                    <Grid item mb={2}>
                        <DrugCard drug={drug} />
                    </Grid>
                )
            })
        }
    </Grid>  
  );
};

export default Home;
