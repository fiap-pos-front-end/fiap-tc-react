const team = [
  {
    name: "João Cardoso",
    photo: "https://avatars.githubusercontent.com/u/209392975",
    role: "@Jao-Cardoso",
  },
  {
    name: "João Veronese",
    photo: "https://avatars3.githubusercontent.com/u/28982977",
    role: "@joaodos3v",
  },
  {
    name: "Leonardo Henrique",
    photo: "https://avatars.githubusercontent.com/u/134629428",
    role: "@leonardognh",
  },
];

export default function AboutUs() {
  return (
    <section className="px-2 max-w-7xl mx-auto">
      <h1 className="ml-2 text-2xl">Sobre Nós</h1>
      <p className="mb-4 ml-2 text-gray-500 text-md">
        Somos um time de desenvolvedores front-end apaixonados por tecnologia e
        inovação. Atualmente, estamos em fase de pós-graduação com foco no
        front-end.
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        {team.map((member) => (
          <div
            key={member.name}
            className="
              w-full         /* 1 col (mobile) */
              sm:w-1/2       /* 2 cols (>=640px) */
              md:w-1/3       /* 3 cols (>=768px) */
              flex flex-col items-center
              bg-white p-6 rounded-xl
              border-1
            "
          >
            <img
              src={member.photo}
              alt={member.name}
              className="w-32 h-32 rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold mb-1">{member.name}</h2>
            <p className="flex justify-center items-center text-sm text-gray-600">
              <i className="pi pi-github mr-1"></i> {member.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
