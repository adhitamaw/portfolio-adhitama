import Header from "@/components/Header";
import ProfileCard from "@/components/ProfileCard";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import OrganizationalImpact from "@/components/OrganizationalImpact";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Publications from "@/components/Publications";
import Projects from "@/components/Projects";
import DownloadCV from "@/components/DownloadCV";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden ben-day-bg">
      <div className="fixed top-0 left-0 w-full h-1.5 bg-pop-black z-50"></div>
      <div className="fixed bottom-0 left-0 w-full h-1.5 bg-pop-black z-50"></div>
      <div className="fixed left-0 top-0 h-full w-1.5 bg-pop-black z-50"></div>
      <div className="fixed right-0 top-0 h-full w-1.5 bg-pop-black z-50"></div>

      <Header />

      <main className="mx-auto max-w-7xl px-6 pt-32 pb-20 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <aside className="lg:col-span-4 lg:sticky lg:top-32">
            <ProfileCard />
          </aside>

          <div className="lg:col-span-8 space-y-24">
            <Skills />
            <Timeline />
            <Projects />
            <OrganizationalImpact />
            <Education />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <Certifications />
              <Publications />
            </div>

            <DownloadCV />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
