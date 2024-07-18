const mongoose = require("mongoose")
const AutoIncrement = require("mongoose-sequence")(mongoose)
const todosSchema = new mongoose.Schema(
    {
        assignedTo: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        title: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
        isCompleted: {
            type: Boolean,
            default: false,
        },
    },

    {
        timestamps: true,
    }
)

todosSchema.plugin(AutoIncrement, {
    inc_field: "ticket", //
    id: "ticketNums",
    start_seq: 524,
})
module.exports = mongoose.model("Todo", todosSchema)
