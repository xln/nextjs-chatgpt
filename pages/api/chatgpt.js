import { ChatGPTAPI } from 'chatgpt'

export default async function  handler(req, res) {
    const api = new ChatGPTAPI({
      // apiKey: process.env.OPENAI_API_KEY
      apiKey:req.query.apikey||'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'
    })
    try{
      const {parentMessageId,conversationId,question} = req.query;
      const _res = await api.sendMessage(question,parentMessageId&&conversationId?{parentMessageId,conversationId}:{})
      res.status(200).json(_res)
    }catch(e){
      console.log(e.toString());
      res.status(200).json({ text: e.toString(),error:true })
    }
  }