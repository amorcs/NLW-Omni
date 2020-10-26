import multer from 'multer';
import path from 'path';

export default {
    storage: multer.diskStorage({
        destination: path.join(__dirname, '..', '..', 'uploads'),
        filename: (request, file, cb) =>{
            //gera um novo nome para o arquivo
            const fileName = `${Date.now()}=${file.originalname}`;

            cb(null, fileName);
        },
    })
}