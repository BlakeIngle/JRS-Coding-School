module.exports = mongoose => {

    var schema = mongoose.Schema({
        title: String,
        colors: [String]
    });

    const Palette = mongoose.model(
        "palette", schema);

    return Palette;
};