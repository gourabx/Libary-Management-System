const db = require("../../config/mySql");
module.exports = class bookServices {
  static async addbook(body) {
    const book = await db.book.create(body);
    return product;
  }
  static async findbook(id) {
    const book = db.book.findAll({ where: { user_id: id } });
    return product;
  }
  static async deletebook(id) {
    const user = db.book.destroy({ where: { id: id } });
    return user;
  }
};
