import axios from 'axios';
import { ContextMessageUpdate } from 'telegraf';
import nogroup from './nogroup';


export default async (ctx: ContextMessageUpdate) => {
    let chatId = ctx.message?.chat.id

    let type = ctx.chat?.type

    if (type === 'supergroup' || type === 'group') {
        nogroup(ctx)
    }
    else {

        ctx.telegram.sendChatAction(chatId || 0, 'typing')
        var graph = await axios.get(`${process.env.API_URI}/provincias_graph`, { responseType: 'arraybuffer' })
        ctx.replyWithPhoto({ source: Buffer.from(graph.data) })

        ctx.telegram.sendChatAction(chatId || 0, 'typing')
        var graph = await axios.get(`${process.env.API_URI}/municipios_graph`, { responseType: 'arraybuffer' })
        ctx.replyWithPhoto({ source: Buffer.from(graph.data) })
    }
}