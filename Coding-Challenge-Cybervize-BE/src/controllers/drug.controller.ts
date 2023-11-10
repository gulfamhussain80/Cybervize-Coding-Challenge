import { Request, Response } from 'express';
import Drug from '../models/drug.model';

export const createDrug = async (req: Request, res: Response) => {
  try {
    const newDrug = new Drug(req.body);
    await newDrug.save();
    res.status(201).json(newDrug);
  } catch (error) {
    res.status(500).json({ error: 'Could not add new Drug' });
  }
};

export const getAllDrugs = async (req: Request, res: Response) => {
  try {
    let drugs;
    if(req?.query?.search) 
    {
      let search = req?.query?.search;
      drugs = await Drug.find({
        $or:[
          {name: { $regex: '.*' + search + '.*', $options: 'i' } },
          {diseases: { $regex: '.*' + search + '.*', $options: 'i' } }
        ]
      });
    }
    else{
      drugs = await Drug.find();
    }
    if(!drugs) return res.status(204).json({"message": "No Drugs found"});
    
    res.status(200).json(drugs);
  } catch (error) {
    res.status(500).json({ error: 'Could not fetch Drugs' });
  }
}

export const getDrugByID = async (req: Request, res: Response) => {
  try {
    if(!req?.params?.id){
      return res.status(400).json({"message":"Drug Id is required"});
    }
    const drug = await Drug.findOne({_id:req.params.id});
    if(!drug){
        return res.status(400).json({"message": `No Drug found against Id ${req.params.id}`});
    }
    
    res.status(200).json(drug);
  } catch (error) {
    res.status(500).json({ error: 'Could not fetch Drug' });
  }
}

export const deleteDrugByID = async (req: Request, res: Response) => {
  try {
      if(!req?.body?.id){
          return res.status(400).json({"message":"Drug Id is required"});
      }
      const drug = await Drug.findOne({_id: req.body.id}).exec();
      if(!drug){
        return res.status(400).json({"message": `No Drug found againt Id ${req.body.id}`});
      }
      const result = await Drug.deleteOne({_id:req.body.id});
      res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Could not delete Drug' });
  }
}

export const updateDrugByID = async (req: Request, res: Response) => {
  try {
      const drug = await Drug.findOne({_id: req.body.id}).exec();
      if(!drug){
          return res.status(204).json({"message": `No Drug matches with Id ${req.body.id}`});
      }
      if(req.body?.name) drug.name = req.body.name;
      if(req.body?.diseases) drug.diseases = req.body.diseases;
      if(req.body?.description) drug.description = req.body.description;
      if(req.body?.released) drug.released = req.body.released;
      const result = await drug.save();
      res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Could not update Drug' });
  }
}
