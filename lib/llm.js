/**
 * Central LLM helper
 * - Exports `getModel()` which resolves the model to use (env fallback)
 * - Exports `callLLM(prompt, opts)` as a small wrapper for Anthropic/Claude
 *
 * Notes:
 * - This file is intentionally small and safe to include. It requires
 *   `ANTHROPIC_API_KEY` in environment when calling Anthropic.
 * - It defaults to `claude-haiku-4.5` when `DEFAULT_LLM` is not set.
 */

const DEFAULT_MODEL = process.env.DEFAULT_LLM || 'claude-haiku-4.5'

function getModel() {
  return DEFAULT_MODEL
}

/**
 * Minimal wrapper to call Anthropic/Claude.
 * - If you use a different provider, update this function accordingly.
 * - This uses the fetch API available in Node 18+ / Next.js runtime.
 */
async function callLLM(prompt, opts = {}) {
  const model = getModel()

  if (!model.toLowerCase().includes('claude')) {
    throw new Error('callLLM currently only supports Claude-style models. Update `lib/llm.js` to add other providers.')
  }

  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    throw new Error('Missing ANTHROPIC_API_KEY in environment. Set it in .env.local or the hosting environment.')
  }

  const body = {
    model: model,
    prompt: prompt,
    max_tokens: opts.max_tokens || 300,
    temperature: typeof opts.temperature === 'number' ? opts.temperature : 0.0,
  }

  const res = await fetch('https://api.anthropic.com/v1/complete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': apiKey,
    },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    const text = await res.text()
    const err = new Error(`LLM request failed: ${res.status} ${res.statusText}`)
    err.responseText = text
    throw err
  }

  return res.json()
}

module.exports = {
  getModel,
  callLLM,
}
