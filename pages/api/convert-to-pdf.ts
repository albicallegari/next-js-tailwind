import type { NextApiRequest, NextApiResponse } from "next";
const html_to_pdf = require('html-pdf-node');

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    let file = { content: `
        <div>
            <h1>${req.body.title}</h1>
            <ul>
                ${req.body.clients.map(s => `<li>${s.title}</li>`).join()}
            </ul>
        </div>
    `};

    html_to_pdf.generatePDF(file, { format: 'A4' }).then(pdfBuffer => {
        res.setHeader('Content-Type', 'application/pdf')
        res.setHeader('Content-disposition', 'attachment; filename=name.Pdf')
        res.setHeader('Content-length', pdfBuffer.length)
        res.end(pdfBuffer)
    });
};

export default handler;