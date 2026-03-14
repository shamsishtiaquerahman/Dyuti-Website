import { Seo } from "@/features/seo/Seo";
import { useContent } from "@/shared/hooks/useContent";
import { HeroSection } from "./sections/HeroSection";
import { ServicesPreviewSection } from "./sections/ServicesPreviewSection";
import { PackagesPreviewSection } from "./sections/PackagesPreviewSection";
import { FaqPreviewSection } from "./sections/FaqPreviewSection";
export function HomePage() { const content = useContent(); return <><Seo title="DYUTI Group" description={content.home.heroText} /><HeroSection content={content} /><ServicesPreviewSection content={content} /><PackagesPreviewSection content={content} /><FaqPreviewSection content={content} /></>; }
