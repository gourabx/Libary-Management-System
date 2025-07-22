const db = require("../../config/mySql");
module.exports = class UserServices {
  static async addUser(body) {
    const user = await db.User.create(body);
    return user;
  }
  static async getUser(where) {
    const user = db.User.findAll({ where });
    return user;
  }
  static async getUserByid(id) {
    const user = db.User.findOne({ where: { id: id } });
    return user;
  }
  static async checkUser(email) {
    const user = db.User.findOne({ where: { email: email } });
    return user;
  }
  static async updateUser(reqBody, id) {
    try {
      const updatedUser = await db.User.update(reqBody, { where: { id: id } });
      return updatedUser;
    } catch (error) {
      throw new Error("Failed to update user: " + error.message);
    }
  }
  static async deleteUser(id) {
    const user = db.User.destroy({ where: { id: id } });
    return user;
  }
};
