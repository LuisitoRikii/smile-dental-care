import type { Metadata } from "next";

import { SmileCtaBand } from "@/components/smile/SmileCtaBand";
import { SmileFooter } from "@/components/smile/SmileFooter";
import { SmileGallery } from "@/components/smile/SmileGallery";
import { SmileHeader } from "@/components/smile/SmileHeader";
import { SmileOverlays } from "@/components/smile/SmileOverlays";
import { SmilePageHero } from "@/components/smile/SmilePageHero";
import { IMG } from "@/components/smile/data";
import { GALLERY_PAGE } from "@/components/smile/pages";

export const metadata: Metadata = {
  title: "Galeria | Smile Dental Care",
  description: GALLERY_PAGE.title,
};

export default function GalleryPage() {
  return (
    <>
      <SmileHeader />
      <main>
        <SmilePageHero
          eyebrow={GALLERY_PAGE.navLabel}
          title={GALLERY_PAGE.title}
          image={`${IMG}/hero-lg.jpg`}
          titleMaxWidth="820px"
        />

        <section className="sm-section bg-white">
          <div className="sm-container">
            <SmileGallery images={GALLERY_PAGE.images} />
          </div>
        </section>

        <SmileCtaBand />
      </main>
      <SmileFooter />
      <SmileOverlays />
    </>
  );
}
