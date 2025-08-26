import * as Yup from 'yup';
import { compare } from './../../../node_modules/bcryptjs/index';
import User from '../models/User.js';


class SessionController {
    async store(req, res) {
        const schema = Yup.object({
            email: Yup.string().email().required(),
            password: Yup.string().min(6).required(),
        })
        const isValid = await schema.isValid(req.body);
        if (!isValid) {
            return res.status(400).json({ error: 'Validation fails' });
        }
        const { email, password } = req.body;
        //return res.json({ message: 'Session created' });

        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(401).json({ error: 'User not found' });
        }
        const isSamePassword = await user.comparePassword(password);

        console.log(isSamePassword);

        return res.json({ message: 'Session created' });

    }
}
export default new SessionController();
