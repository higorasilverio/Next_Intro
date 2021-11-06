import { NextApiHandler } from "next";

const Hello: NextApiHandler = (req, res) => {
  res.status(200).json({
    hello: "it's me",
  });
};

export default Hello;
