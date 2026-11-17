// Método Camocim — função de servidor (Vercel)
// Guarda a chave da API Anthropic no servidor, fora do navegador.
// Variáveis de ambiente no Vercel:
//   ANTHROPIC_API_KEY  (obrigatória)  chave sk-ant-...
//   APP_SENHA          (opcional)     senha exigida para gerar questões
//   ANTHROPIC_MODEL    (opcional)     padrão: claude-sonnet-5-5

module.exports = async (req, res) => {
  const key = process.env.ANTHROPIC_API_KEY;
  const senha = process.env.APP_SENHA || "";

  if (req.method === "GET") {
    return res.status(200).json({ configured: !!key, senha: !!senha });
  }
  if (req.method !== "POST") return res.status(405).json({ error: "Método não permitido" });
  if (!key) return res.status(500).json({ error: "ANTHROPIC_API_KEY não configurada no Vercel" });
  if (senha && req.headers["x-app-senha"] !== senha) {
    return res.status(401).json({ error: "Senha de acesso incorreta" });
  }

  const prompt = req.body && req.body.prompt;
  if (typeof prompt !== "string" || !prompt.trim() || prompt.length > 300000) {
    return res.status(400).json({ error: "Pedido inválido" });
  }

  try {
    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": key,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: process.env.ANTHROPIC_MODEL || "claude-sonnet-5-5",
        max_tokens: 12000,
        messages: [{ role: "user", content: prompt }],
      }),
    });
    const j = await r.json().catch(() => ({}));
    if (!r.ok) {
      const msg = (j.error && j.error.message) || "Erro da API Anthropic";
      return res.status(r.status === 429 ? 429 : 502).json({ error: msg });
    }
    const text = (j.content || []).map((c) => c.text || "").join("");
    return res.status(200).json({ text });
  } catch (e) {
    return res.status(502).json({ error: "Falha ao contatar a API: " + e.message });
  }
};
