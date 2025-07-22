const UserServices = require("../services/UserServices");

const createUser = async (req, res) => {
  const { email, password,} = req.body;
  console.log("req==>", req);
  const user = await UserServices.checkUser(email);
  if (user) {
    res.status(200).send({ status: false, msg: "Already registered" });
    return;
  }
  const reqBody = {
    email: email,
    password: password,
   
  };
  const createUser = await UserServices.addUser(reqBody);
  res
    .status(200)
    .send({ status: true, msg: "user created successfully", data: createUser });
};
const findAllUser = async (req, res) => {
  console.log("req==>", req);
  const allUser = await UserServices.getUser();
  res
    .status(200)
    .send({ status: true, msg: "data fetch successfully", data: allUser });
};
const findUser = async (req, res) => {
  const { id } = req.params;
  const allUser = await UserServices.getUserByid(id);
  if (allUser) {
    res
      .status(200)
      .send({ status: true, msg: "data fetch successfully", data: allUser });
  } else {
    res.status(200).send({ status: false, msg: "no data found" });
  }
};
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { email, password} = req.body;
  const reqBody = {
    email: email,
    password: password,
    
  };
  const updateuser = await UserServices.updateUser(reqBody, id);
  if (updateuser) {
    res.status(200).send({ status: true, msg: "user updated successfully" });
  } else {
    res.status(200).send({ status: false, msg: "user update unsuccessful" });
  }
};
const deleteUser = async (req, res) => {
  const { id } = req.params;
  const allUser = await UserServices.deleteUser(id);
  if (allUser) {
    res
      .status(200)
      .send({ status: true, msg: "delete successfully", data: allUser });
  } else {
    res.status(200).send({ status: false, msg: "no data found" });
  }
};

const login = async (req, res) => {
  console.log("req", req);

  try {
    const { email, password } = req.body;
    const user = await UserServices.checkUser(email);
    console.log("user", user);

    if (user) {
      if (password == user.dataValues.password) {
        res
          .status(200)
          .send({ status: true, msg: "login successfully", data: user });
      } else {
        res.status(200).send({ status: false, msg: "login failed" });
      }
    } else {
      res.status(200).send({ status: false, msg: "user not found" });
    }
    // console.log("user=====>", user.dataValues);
  } catch (error) {
    console.log("error===>", error);
  }

  // if (allUser) {
  //   res
  //     .status(200)
  //     .send({ status: true, msg: "delete successfully", data: allUser });
  // } else {
  //   res.status(200).send({ status: false, msg: "no data found" });
  // }
};
module.exports.createUser = createUser;
module.exports.findAllUser = findAllUser;
module.exports.findUser = findUser;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;
module.exports.login = login;
