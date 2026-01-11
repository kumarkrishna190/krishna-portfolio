export default function robots() {
    return {
      rules: [
        {
          userAgent: "*",
          allow: "/",
        },
      ],
      sitemap: "https://krishna-portfolio-lime.vercel.app/sitemap.xml",
    };
  }
  