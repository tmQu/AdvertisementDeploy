import mongoose from 'mongoose';

const billboardSchema = new mongoose.Schema({
  boardLocation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'board_locations',
    required: true,
  },
  imgBillboard: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  boardType: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'board_types',
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  expireDate: {
    // date with iso8601 format
    type: Date,
    required: true,
    default: Date.now,
  },
  isLicense: {
    type: Boolean,
    default: false,
  },
  status: {
    type: String,
    default: 'active',
  }
});

billboardSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'boardType',
    select: 'boardType',
  });
  next();
});

const billboardModel = mongoose.model('boards', billboardSchema);
export default billboardModel;
