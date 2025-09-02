import User from '../models/User';
import * as Yup from 'yup';

class SessionController {
    async store(request, response) {
        const schema = Yup.object({
        });

        const isValid = await schema.isValid(request.body);

        const emailOrPasswordIncorrect = () => {
            response
                .status(400)
                .json({ error: 'Validation fails' });
        }

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
            email,
            admin: user.admin,
        });
    }
}

export default new SessionController();

