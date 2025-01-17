const User = require("../Models/userModel");

// Get all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({
            status: "success",
            results: users.length,
            data: {
                users,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message,
        });
    }
};

exports.createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json({
            status: "success",
            data: {
                user: newUser,
            },
        });
    } catch (err) {
        console.error("Error creating user:", err);
        res.status(400).json({
            status: "fail",
            message: err.message,
        });
    }
};

// exports.deleteUser = async (req, res) => {
//     try {
//         await User.findByIdAndDelete(req.params.id);
//         res.status(204).json({
//             status: "success",
//             data: null,
//         });
//     } catch (err) {
//         res.status(400).json({
//             status: "fail",
//             message: err.message,
//         });
//     }
// };

// exports.updateUser = async (req, res) => {
//     try {
//         const user = await User.findByIdAndUpdate(req.params.id, req.body, {
//             new: true,
//         });
//         res.status(200).json({
//             status: "success",
//             data: {
//                 user,
//             },
//         });
//     } catch (err) {
//         res.status(400).json({
//             status: "fail",
//             message: err.message,
//         });
//     }
// };
