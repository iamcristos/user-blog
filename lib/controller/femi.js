import Db from '../model/femi';

class Femi {
  static async getId(req, res) {
    try {
      const id = await Db.find(db => db.id === 1);
      if (!id) throw new Error('Canot find Id');
      return res.status(200).send({
        data: id,
      });
    } catch (e) {
      return res.status(404).send({
        status: 404,
        message: 2,
        error: e.message,
      });
    }
  }
}

export default Femi;
