import { ChatGPTAPI } from 'chatgpt'

export default async function  handler(req, res) {
    const api = new ChatGPTAPI({
      // apiKey: process.env.OPENAI_API_KEY
      apiKey:'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'
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