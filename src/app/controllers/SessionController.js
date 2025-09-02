import User from '../models/User';
import * as Yup from 'yup';

class SessionController {
    async store(request, response) {
        const schema = Yup.object({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
            password: Yup.string().min(6).required(),
            admin: Yup.boolean(),
        });
        const isValid = await schema.isValid(request.body);
        const emailOrPasswordIncorrect = () => {
            return response
                .status(401)
                .json({ error: 'Make sure your email or password are correct' });
        };

        if (!isValid) {
            return emailOrPasswordIncorrect();
        }

        const { email, password } = request.body;

        const user = await User.findOne({
            where: { email },
        });
        if (!user) {
            return emailOrPasswordIncorrect();
        }

        const isSamePassword = await user.checkPassword(password);
        if (!isSamePassword) {
            return emailOrPasswordIncorrect();
        }

        return response.status(201).json({
            id: user.id,
            name: user.name,
            email: user.email,
            admin: user.admin,
        });
    }
}

export default new SessionController();

