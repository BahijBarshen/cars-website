import mongoose from 'mongoose';

const ImageSchema = new mongoose.Schema({
  nameProdect:{type:String,required:true},
  price:{type:String,required:true},
  filename: { type: String, required: true },
});

const Image = mongoose.model('Image', ImageSchema);

export default Image;