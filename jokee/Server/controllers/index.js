const JokersDocument = require("../models/jokersDocument");

const jokersDocumentCtrl = {
  getAll: async (_, res) => {
    try {
      const jokersDocument = await JokersDocument.find({});
      return res.json({ jokersDocument: jokersDocument });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  postVote: async (req, res) => {
    try {
      const { id, vote } = req.params;
      if (!id && !vote) {
        return res.status(500).json({ msg: "post vote error!" });
      }
      if (!["like", "dislike"].includes(vote)) {
        return res.status(405).json({ msg: "Method Not Allowed" });
      }
      await JokersDocument.findOneAndUpdate(
        { _id: id },
        { $inc: { [vote]: 1 } }
      );
      return res.json({ msg: "success" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = jokersDocumentCtrl;
