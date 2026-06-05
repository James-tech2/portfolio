import { content } from "../lib/content";

const Skills = () => {
  const SkillCard = ({
    title,
    items,
  }: {
    title: string;
    items: { name: string; level: string; value: number }[];
  }) => (
    <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/6 rounded-3xl">
      <h3 className="text-xl font-semibold mb-5 text-sky-300">{title}</h3>
      <div className="space-y-5">
        {items.map((item) => (
          <div key={item.name}>
            <div className="flex items-center justify-between gap-4 mb-2">
              <div>
                <p className="font-medium text-white">{item.name}</p>
                <p className="text-sm text-gray-400">{item.level}</p>
              </div>
              <span className="text-sm font-semibold text-sky-300">
                {item.value}%
              </span>
            </div>
            <div className="h-2 rounded-full bg-white/10">
              <div
                className="h-2 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500"
                style={{ width: `${item.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section
      id="skills"
      className="min-h-full py-16 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-white"
    >
      <div className="max-w-5xl mx-auto px-6">
        <header className="mb-10 text-center">
          <h2 className="text-3xl font-bold">Skills</h2>
          <p className="text-gray-300 mt-2 max-w-2xl mx-auto">
            Full-stack developer — front-end, back-end, cloud & tooling. I build
            reliable, performant, and maintainable applications across the
            stack.
          </p>
        </header>

        <div className="grid gap-6 xl:grid-cols-2">
          <SkillCard title="Front-end" items={content.skill.frontEnd} />
          <SkillCard
            title="Back-end & Databases"
            items={content.skill.backEnd}
          />
          <SkillCard title="Cloud & DevOps" items={content.skill.cloud} />
          <SkillCard title="Tools & Testing" items={content.skill.tools} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
