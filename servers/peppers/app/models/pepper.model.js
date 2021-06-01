module.exports = mongoose => {
    const Pepper = mongoose.model(
        "pepper",
        mongoose.Schema({
            name: String,
            color: String,
            shu: {
                min: Number,
                max: Number
            }
        })

        // var schema = mongoose.Schema(...) 
        // schema.method("toJSON", function() {
        //     const { __v, _id, ...object } = this.toObject();
        //     object.id = _id;
        //     return object;
        //   });
        // this will turn _id -> id
    );

    return Pepper;
};