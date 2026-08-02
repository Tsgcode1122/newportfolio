interface Article {
  title: string;
  summary: string;
  date: string;
  category: string;
  url: string;
}

const articles: Article[] = [
  {
    title: "Building Accessible Higher-Education Websites",
    summary:
      "Practical lessons for improving headings, links, images, forms, and other website content to provide a more accessible experience.",
    date: "July 2026",
    category: "Accessibility",
    url: "#",
  },
  {
    title: "What I Learned Building My First Chrome Extension",
    summary:
      "A look at how I designed, developed, tested, and published an AI-powered Chrome extension.",
    date: "June 2026",
    category: "Development",
    url: "#",
  },
  {
    title: "Designing Digital Experiences for University Audiences",
    summary:
      "How clear navigation, responsive design, and organized content can improve the experience of students, faculty, and visitors.",
    date: "May 2026",
    category: "User Experience",
    url: "#",
  },
];

function Articles() {
  return (
    <section>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-700">
        Articles
      </p>

      <h2 className="mt-4 max-w-2xl text-4xl font-bold leading-tight sm:text-5xl">
        Ideas and lessons from my work.
      </h2>

      <div className="mt-12 divide-y divide-stone-300 border-y border-stone-300">
        {articles.map((article) => (
          <article key={article.title} className="py-8">
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
              <span className="font-semibold text-orange-700">
                {article.category}
              </span>

              <span className="text-stone-500">{article.date}</span>
            </div>

            <h3 className="mt-4 text-2xl font-bold">{article.title}</h3>

            <p className="mt-4 max-w-2xl leading-7 text-stone-600">
              {article.summary}
            </p>

            <a
              href={article.url}
              className="mt-5 inline-block font-semibold text-orange-700 hover:underline"
            >
              Read article →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Articles;