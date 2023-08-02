export default function handler(req, res) {
  if (req.method == "POST") {
    return res.status(200).json("POST REQUEST");
  }
  if (req.method == "GET") {
    return res.status(200).json("GET REQUEST");
  }
}
