import { useState, useEffect } from "react";

const AdminMessages = () => {
  const [messages, setMessages] = useState<{ name: string; email: string; message: string }[]>([]);
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Charger les messages du localStorage
  useEffect(() => {
    const storedMessages = localStorage.getItem("messages");
    if (storedMessages) {
      try {
        setMessages(JSON.parse(storedMessages));
      } catch (error) {
        console.error("Erreur de parsing des messages :", error);
      }
    }
  }, []);

  // Fonction de connexion
  const handleLogin = () => {
    if (password === "       ") {
      setIsAuthenticated(true);
    } else {
      alert("Mot de passe incorrect");
    }
  };

  // Supprimer un message spécifique
  const deleteMessage = (index: number) => {
    const updatedMessages = messages.filter((_, i) => i !== index);
    setMessages(updatedMessages);
    localStorage.setItem("messages", JSON.stringify(updatedMessages));
  };

  return (
    <div className="ml-96 text-center items-center  p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md text-gray-900">
      {!isAuthenticated ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Accès Admin</h2>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Entrez le mot de passe"
            className="border p-2 rounded-md mb-4 w-full"
          />
          <button
            onClick={handleLogin}
            className="bg-blue-500 text-white p-2 rounded-md w-full hover:bg-blue-600 transition"
          >
            Se connecter
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold mb-4">Messages Reçus</h2>
          {messages.length === 0 ? (
            <p className="text-gray-500">Aucun message pour le moment.</p>
          ) : (
            <ul className="space-y-4">
              {messages.map((ms, index) => (
                <li key={index} className="border p-4 rounded-lg shadow-md bg-gray-50">
                  <p><strong>Nom:</strong> {ms.name}</p>
                  <p><strong>Email:</strong> {ms.email}</p>
                  <p><strong>Message:</strong> {ms.message}</p>
                  <button
                    onClick={() => deleteMessage(index)}
                    className="mt-2 bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition"
                  >
                    Supprimer
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminMessages;
