const { Schema, model } = require("mongoose");
const StatusEnum = require("../../common/status.enum");


const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        default: 0
    },
    quality: {
        type: Number,
        default: 0
    },
    exp:{
        type: Number,
        required: true
    },
    status: {
        type: String,
        defalut: StatusEnum.ACTIVE
    }
}, { timestamps: true, strict: true})  //"strict" not allow other data out of scheema to import!

const ProductModel = model('product', ProductSchema);  //paramiter  1.payloadที่จะใส่เข้าไป  2.Schemaที่เป็นตัวกำกับชนิดของข้อมูล

module.exports = ProductModel;