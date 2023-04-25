const yup = require("yup");

const userSchema = yup.object().shape({
  name: yup.string().required("O nome é obrigatório"),
  email: yup
    .string()
    .email("Digite um endereço de e-mail válido.")
    .required("Digite seu endereço de e-mail."),
  username: yup.string().required("Nome de usuário é obrigatória"),
  password: yup
    .string()
    .required("A senha é obrigatória")
    .min(8, "A senha deve conter no mínimo 8 caracteres."),
});

function validateUser(request, response, next) {
  try {
    userSchema.validateSync(request.body, { abortEarly: false });
    next();
  } catch (err) {
    response.status(400).json({ message: err.errors });
  }
}

module.exports = validateUser;
