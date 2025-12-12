import { useState } from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Send from "@mui/icons-material/Send";
import Email from "@mui/icons-material/Email";
import Phone from "@mui/icons-material/Phone";
import TextField from "@mui/material/TextField";
import Person from "@mui/icons-material/Person";
import CardContent from "@mui/material/CardContent";
import LinkedIn from "@mui/icons-material/LinkedIn";
import WhatsApp from "@mui/icons-material/WhatsApp";
import { toast, ToastContainer } from 'react-toastify';
import ContactMail from "@mui/icons-material/ContactMail";
import emailjs from 'emailjs-com';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim()) {
      toast.error("Le nom et l'email sont obligatoires.");
      return;
    }

    // Envoi via EmailJS
    emailjs.send(
      'service_j61db1h',      // Service ID
      'template_tc2xicv',     // Template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      'Z_FGIeluSy3icSw0A'       // Public Key
    )
    .then(
      () => {
        toast.success("Votre message a été envoyé !");
        setFormData({ name: "", email: "", message: "" });
      },
      () => {
        toast.error("Erreur lors de l'envoi du message.");
      }
    );
  };

  return (
    <div className="relative max-w-5xl mx-auto p-6 md:p-12 bg-white rounded-2xl shadow-lg">
      <ToastContainer position="top-right" autoClose={5000} />
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Contact <ContactMail className="text-purple-900" />
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Section Infos Contact */}
        <Card className="shadow-md rounded-xl">
          <CardContent>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Me contacter</h3>
            <p className="text-gray-500 mb-4">
              N'hésitez pas à me contacter pour discuter de vos projets ou pour toute autre question.
            </p>
            <ul className="space-y-4 ">
              <li className="flex items-center gap-3 text-red-400">
                <Email /> <a href="mailto:michelramanantenasoa@gmail.com">michelramanantenasoa@gmail.com</a>
              </li>
              <li className="flex items-center gap-3 text-blue-500">
                <LinkedIn /> <a href="https://www.linkedin.com/in/michel-ramanantenasoa-3270002a1/" target="_blank">Michel Ramanantenasoa</a>
              </li>
              <li className="flex items-center gap-3 text-green-400">
                <WhatsApp /> <a href="tel:+261340309755">+261 34 03 097 55</a>
              </li>
              <li className="flex items-center gap-3 text-gray-800">
                <Phone /> <a href="tel:+261340309755">+261 34 03 097 55</a>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Formulaire de Contact */}
        <Card className="shadow-md rounded-xl">
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <TextField
                fullWidth
                label="Nom"
                name="name"
                variant="outlined"
                value={formData.name}
                onChange={handleChange}
                InputProps={{ startAdornment: <Person className="text-gray-500" /> }}
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                variant="outlined"
                value={formData.email}
                onChange={handleChange}
                InputProps={{ startAdornment: <Email className="text-gray-500" /> }}
              />
              <TextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={4}
                variant="outlined"
                value={formData.message}
                onChange={handleChange}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className="w-full md:w-auto flex items-center gap-2"
              >
                <Send /> Envoyer
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
