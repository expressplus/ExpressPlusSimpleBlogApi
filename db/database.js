import { Mongoose } from '@ulvimemmeedov/expressjsplus';

export const conn = async () =>{

    try {
        await Mongoose.connect('<MongoDbURL>', { useNewUrlParser: true, useFindAndModify: false,
            useCreateIndex: true,
            useUnifiedTopology:true });

        console.log('db connection success')
    } catch (error) {

        console.log(error);

    }

}

