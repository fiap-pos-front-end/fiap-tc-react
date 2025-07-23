const team = [
  {
    name: "Alice Souza",
    role: "CEO",
    photo: "https://via.placeholder.com/150",
    bio: "Apaixonada por tecnologia e liderança.",
  },
  {
    name: "Bruno Lima",
    role: "CTO",
    photo: "https://via.placeholder.com/150",
    bio: "Especialista em frontend e arquitetura de microfrontends.",
  },
  {
    name: "Carla Dias",
    role: "Design Lead",
    photo: "https://via.placeholder.com/150",
    bio: "Cria experiências incríveis com UI/UX.",
  },
];

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Sobre Nós</h1>
      <p className="text-lg mb-8">
        Somos um time nerd, metódico e fora da caixinha, focado em criar
        soluções front‑end de alta qualidade.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {team.map((member) => (
          <div
            key={member.name}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <img
              src={member.photo}
              alt={member.name}
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h2 className="text-2xl font-semibold text-center">
              {member.name}
            </h2>
            <p className="text-sm text-center text-gray-600 mb-4">
              {member.role}
            </p>
            <p className="text-gray-700 text-sm">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
