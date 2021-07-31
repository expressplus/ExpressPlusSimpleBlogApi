import {Mongoose} from "@ulvimemmeedov/expressjsplus";

const Schema = Mongoose.Schema;

const connection = Mongoose.createConnection("<MongoDbURL>",{ useNewUrlParser: true,

    useFindAndModify: false,

    useCreateIndex: true,

    useUnifiedTopology:true

});
const PostsSchema = new Schema({

    title:String,

    body:{type:String ,maxnlength : 240},

    author :String

});

export const Posts = connection.model("Posts",PostsSchema);

