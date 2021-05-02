
import mongoose from 'mongoose'

const packersSchema = mongoose.Schema({

    name:{  type: String,
            required: true
        },
    phonenumber:{  type: String,
        required: true
    },
    email_id:{  type: String,
        required: true
    },
    from_address:{  type: String,
        required: true
    },
    from_city:{  type: String,
        required: true
    },
    from_state:{  type: String,
        required: true
    },
    from_zipcode:{  type: String,
        required: true
    },
    Num_of_workers_required:{  type: Number,
        required: true
    },
    Num_of_trucks_required:{  type: Number,
        required: true
    },
    to_address:{  type: String,
        required: true
    },
    to_city:{  type: String,
        required: true
    },
    to_state:{  type: String,
        required: true
    },
    to_zipcode:{  type: String,
        required: true
    },
    date_of_moving:{  type: String,
        required: true
    }
}
    , {
        timestamps: true
    })

    const Packers = mongoose.model('packers', packersSchema)

    export default Packers