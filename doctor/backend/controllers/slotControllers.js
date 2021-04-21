const Slot = require('../models/slot');

// GET ALL USERS
const getALlSlot = async (req, res) => {
  const slots = await Slot.find()
  res.status(200).json({
    status: 'success',
    results: slots.length,
    data: slots
  });
}

// // GET A SINGLE USER
// const getSingleUser = async (req, res) => {
//   const user = await User.findById(req.params.id);
//   res.status(200).json({
//     status: 'success',
//     data: {
//       user,
//     },
//   });
// }
// // GET SINGLE BY EMAIL
// const getUserByEmail = async (req, res) => {
  
//   const user = await User.findOne({email:req.params.email});  
//   res.status(200).json({
//     status: 'success',
//     data: {
//       user,
//     },
//   });
// }

// CREATE A SLOT
const createSlot = async (req, res) => {
  
  const { time } = req.body;
  const slotExist = await Slot.findOne({ time });
  if (slotExist) {
    res.status(400).json({
      status: 'fail',
      message: 'Slot Already exist'
    });
  } else {
    const slot = await Slot.create(req.body)
    res.status(201).json({
      status: 'success',
      data: {
        slot,
      },
    });
  }

}

// UPDATE A SLOT
const updateSlot = async (req, res) => {
  const slot = await Slot.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  res.status(201).json({
    status: 'success',
    data: {
      slot,
    },
  });
}

// DELETE A USER 
const deleteSlot = async (req, res) => {
  const slot = await Slot.findByIdAndDelete(req.params.id);
  res.status(200).json({
    status: 'success',
    data: {
      massage: 'Delete Successfully',
    },
  });
}

module.exports = {
  getALlSlot,
  //getSingleUser,
  createSlot,
  updateSlot,
  deleteSlot
  //getUserByEmail 
}