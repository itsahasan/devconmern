const mongoose = require('mongoose')

const ProfileSchema = new mongoose.Schema({
  user:{
    type : mongoose.Schema.Types.ObjectId,
    ref:'user'
  },
  company:{
    type: String
  },
  website:{
    type: String
  },
  location:{
    type: String
  },
  status:{
    type: String,
    required: true
  },
  skills:{
    type: [String],
    required: true
  },
  bio:{
    type: String
  },
  githubunsername:{
    type: String
  },
  expreience:[
    {
      title:{
        type: String,
        required: true
      },
      company:{
        type: String,
        required: true
      },
      location:{
        type: String
      },
      from:{
        type: Date,
        required: true
      },
      to:{
        type: Date
      },
      current:{
        type: Boolean,
        default: false
      },
      description:{
        type: String
      }
    }
  ],
  education:[
    {
      schools:{
        type: String,
        required: true
      },
      degree:{
        type: String,
        required: true
      },
      fieldofstudy:{
        type: String,
        required: true
      },
      from:{
        type: Date,
        required:true
      },
      to:{
        type: Date
      },
      current:{
        type: Boolean,
        default: false
      },
      description:{
        type: String
      }
    }

  ],
  social:{
    youtube:{
      type: String
    },
     twitter:{
      type: String
    },
     facebook:{
      type: String
    },
     linkedin:{
      type: String
    },
    instragram:{
      type: String
    }
  }


},
 { timestamps: true }
)

module.exports = mongoose.model('profile', ProfileSchema )