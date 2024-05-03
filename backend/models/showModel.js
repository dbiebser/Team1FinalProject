import mongoose from "mongoose";

const showSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        rating: {
            rate: {
                type: Number,
                required: true,
            },
            count: {
                rate: {
                    type: Number,
                    required: true,
                }
            }
        },
        // character1: {
        //     image: {
        //         type: String,
        //         required: true,
        //     },
        //     name: {
        //         type: String,
        //         required: true,
        //     },
        //     info: {
        //         type: String,
        //         required: true,
        //     }
        // },
        // character2: {
        //     image: {
        //         type: String,
        //         required: true,
        //     },
        //     name: {
        //         type: String,
        //         required: true,
        //     },
        //     info: {
        //         type: String,
        //         required: true,
        //     }
        // },
        // character3: {
        //     image: {
        //         type: String,
        //         required: true,
        //     },
        //     name: {
        //         type: String,
        //         required: true,
        //     },
        //     info: {
        //         type: String,
        //         required: true,
        //     }
        // },
        // character4: {
        //     image: {
        //         type: String,
        //         required: true,
        //     },
        //     name: {
        //         type: String,
        //         required: true,
        //     },
        //     info: {
        //         type: String,
        //         required: true,
        //     }
        // }
    }
);

export const Show = mongoose.model('Show', showSchema);