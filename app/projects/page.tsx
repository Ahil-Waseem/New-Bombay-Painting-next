import ProjectsClient from "./Projects.client";

export const metadata = {
  title:
    "Projects Gallery | Painting, Texture, Polish & POP Work in Mumbai",
  description:
    "Explore New Bombay Painting projects gallery showcasing interior painting, exterior painting, texture finishes, wood polish, lamination and POP work completed across Mumbai, Navi Mumbai and Pune.",
  keywords: [
    "Painting projects Mumbai",
    "Texture work gallery",
    "Polish work images",
    "POP work gallery",
    "Interior painting projects",
    "Exterior painting projects",
    "House painting gallery Mumbai",
    "Wood polish work images"
  ],
  alternates: {
    canonical: "https://newbombaypainting.in/projects",
  },
  openGraph: {
    title:
      "Projects Gallery | New Bombay Painting",
    description:
      "View our completed painting, texture, polish and POP projects across Mumbai and beyond.",
    url: "https://newbombaypainting.in/projects",
    siteName: "New Bombay Painting",
    type: "website",
  },
};


export default function ProjectsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "@id": "https://newbombaypainting.in/projects",
            name: "Projects Gallery",
            url: "https://newbombaypainting.in/projects",
            description:
              "Gallery showcasing interior painting, exterior painting, texture finishes, polish work, POP ceiling and lamination projects completed by New Bombay Painting.",
            publisher: {
              "@type": "Organization",
              name: "New Bombay Painting",
              url: "https://newbombaypainting.in/"
            }
          }),
        }}
      />

      <ProjectsClient />
    </>
  );
}

