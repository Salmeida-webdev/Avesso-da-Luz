import type { MetadataRoute } from "next";

export const dynamic = "force-static";
const base = process.env.NEXT_PUBLIC_SITE_URL || "https://avessodaluz.example";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/estudio/", "/servicos/", "/trabalhos/", "/contato/"].map((path) => ({
    url: new URL(path, base).toString(),
    lastModified: new Date("2026-10-17"),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
