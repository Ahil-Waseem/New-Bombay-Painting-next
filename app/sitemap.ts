import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://newbombaypainting.in";

  return [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/services`, lastModified: new Date() },
    { url: `${baseUrl}/services/interior-painting`, lastModified: new Date() },
    { url: `${baseUrl}/services/exterior-painting`, lastModified: new Date() },
    { url: `${baseUrl}/services/texture-painting`, lastModified: new Date() },
    { url: `${baseUrl}/services/wood-polish`, lastModified: new Date() },
    { url: `${baseUrl}/services/wood-polish-lamination`, lastModified: new Date() },
    { url: `${baseUrl}/services/wallpaper-installation`, lastModified: new Date() },
    { url: `${baseUrl}/services/pop-false-ceiling`, lastModified: new Date() },
    { url: `${baseUrl}/services/home-renovation`, lastModified: new Date() },
    { url: `${baseUrl}/projects`, lastModified: new Date() },
    { url: `${baseUrl}/blog`, lastModified: new Date() },
    { url: `${baseUrl}/painter-near-me/mumbai`, lastModified: new Date() },
    { url: `${baseUrl}/painter-near-me/pune`, lastModified: new Date() },
    { url: `${baseUrl}/painter-near-me/navi-mumbai`, lastModified: new Date() },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date() },
    { url: `${baseUrl}/terms`, lastModified: new Date() },
  ];
}
