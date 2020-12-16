import axios, { AxiosResponse } from 'axios'
import { ContextMessageUpdate } from 'telegraf'
import summary from '../types/summary'



export default async (ctx: ContextMessageUpdate) => {
    let res: AxiosResponse<summary> =
        await axios.get(process.env.API_URI + '/summary')

    return ctx.answerInlineQuery([
        ({
            type: 'article',
            id: '1',
            title: `☣️ Covi19Cuba ${res.data.fecha}`,
            input_message_content: {
                message_text: `
🤒 Diagnosticados: ${res.data.total_diagnosticados}
🔬 Diagnosticados hoy: ${res.data.diagnosticados_hoy}
🤧 Activos: ${res.data.activos}
😃 Recuperados: ${res.data.total_recuperados}
🤩 Índice de Recuperación: ${res.data.recuperacion}%
✈️ Evacuados: ${res.data.total_evacuados}
⚰️ Fallecidos: ${res.data.total_fallecidos}
😵 Mortalidad: ${res.data.mortalidad}%
🏥 Ingresados: ${res.data.total_ingresados}
📆 Actualizado: ${res.data.fecha}

Mas información en @covid19cubadata_bot
                `
            },
        })
    ])
}