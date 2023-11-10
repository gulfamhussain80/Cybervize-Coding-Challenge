import { Schema, model, Document } from 'mongoose';

export interface IDrug extends Document {
  diseases: string[];
  description: string;
  name: string;
  released: string;
}

const drugSchema = new Schema<IDrug>({
  diseases: [{type: String}  ],
  description: { 
    type: String, 
    required: true 
  },
  name: { 
    type: String, 
    required: true 
  },
  released: { 
    type: String, 
    required: true 
  },
});

export default model<IDrug>('Drug', drugSchema);
