import { ContextMessageUpdate } from 'telegraf'

import axios, { AxiosResponse } from 'axios'
import summary from '../types/summary'


export default async (ctx: ContextMessageUpdate) => {
    let res: AxiosResponse<summary> = 
        await axios.get(process.env.API_URI + 'summary')

    return ctx.answerInlineQuery([
        ({
            type: 'article',
            id: '1',
            title: `☣️ Covi19Cuba ${res.data.fecha}`,
            input_message_content: {
                message_text: `
                🤒 <b>Diagnosticados</b>: ${res.data.total_diagnosticados}
                🔬 <b>Diagnosticados hoy</b>: ${res.data.diagnosticados_hoy}
                🤧 <b>Activos</b>: ${res.data.activos}
                😃 <b>Recuperados</b>: ${res.data.total_recuperados}
                🤩 <b>Índice de Recuperación</b>: ${res.data.recuperacion}%
                ✈️ <b>Evacuados</b>: ${res.data.total_evacuados}
                ⚰️ <b>Fallecidos</b>: ${res.data.total_fallecidos}
                😵 <b>Mortalidad</b>: ${res.data.mortalidad}%
                🏥 <b>Ingresados</b>: ${res.data.total_ingresados}
                📆 <b>Actualizado</b>: ${res.data.fecha})
                `
            },
        })
    ])
}