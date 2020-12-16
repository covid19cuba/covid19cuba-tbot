import axios, { AxiosResponse } from 'axios';
import { Request, Response } from 'express';
import bot from '../bot';
import Chats from '../models/Chats';
import summary from '../types/summary';




export default async (req: Request, res: Response) => {
    if (req.headers.stoken === process.env.STOKEN) {
        sender()

        res.send('OK')
    }
    else {
        res.send('Unauthorized')
    }
}

const sender = async () => {
    const chats = await Chats.find()

    let res: AxiosResponse<summary> =
        await axios.get(process.env.API_URI + '/summary')

    chats.forEach((c) => {
        bot.telegram.sendMessage(c.id, `
ℹ️ La base de datos se ha actualizado
📆 ${res.data.fecha}

🤒 Diagnosticados: ${res.data.total_diagnosticados}
🔬 Diagnosticados hoy: ${res.data.diagnosticados_hoy}
🤧 Activos: ${res.data.activos}
😃 Recuperados: ${res.data.total_recuperados}
🤩 Índice de Recuperación: ${res.data.recuperacion}%
✈️ Evacuados: ${res.data.total_evacuados}
⚰️ Fallecidos: ${res.data.total_fallecidos}
😵 Mortalidad: ${res.data.mortalidad}%
🏥 Ingresados: ${res.data.total_ingresados}
`)
    })
}
