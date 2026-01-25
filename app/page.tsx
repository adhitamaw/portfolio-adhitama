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
    <div className="relative min-h-screen w-full overflow-x-hidden bg-mesh">
      <Header />

      <main className="mx-auto max-w-7xl px-6 pt-32 pb-20 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8 sticky top-32">
            <ProfileCard />
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-8 space-y-16">
            <Education />
            <Timeline />
            <OrganizationalImpact />
            <Skills />
            <Projects />

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
