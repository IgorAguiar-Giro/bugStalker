function status(request, response) {
  response.status(200).json({ chave: "testando database" });
}

export default status;
