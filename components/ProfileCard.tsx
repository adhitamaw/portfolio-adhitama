import Image from "next/image";

export default function ProfileCard() {
  return (
    <div className="space-y-6 lg:space-y-8">
      {/* Profile Image */}
      <div className="glass-card rounded-3xl p-2 relative group overflow-hidden max-w-[200px] mx-auto lg:max-w-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="aspect-square w-full rounded-2xl overflow-hidden border border-white/5 relative">
          <Image
            src="/profile.jpg"
            alt="Adhitama Wichaksono"
            fill
            className="object-cover object-top grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500"
            priority
          />
        </div>
      </div>

      {/* Profile Info */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter text-gradient">
            Adhitama Wichaksono
          </h1>
          <p className="text-primary font-medium tracking-wide uppercase text-sm">
            Data Analyst &amp; Backend Developer
          </p>
        </div>

        {/* Bio Card */}
        <div className="glass-card p-6 rounded-2xl border-l-4 border-l-primary">
          <h3 className="text-sm font-bold text-slate-400 uppercase mb-3 flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">person</span>
            Professional Summary
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed font-sans">
            Informatics graduate from Telkom University with a strong analytical and technical background in Data Analytics, 
            Data Engineering, and Backend Development. Experienced as a Data Analyst & Engineer at Toyota Astra Motor, 
            contributing to data-driven decision-making through Power BI dashboards and Python-based ETL pipelines. 
            Proficient in Python, PHP, Golang, and Java with solid analytical skills, as well as experience in coordinating 
            and collaborating on academic team projects. Seeking challenging career opportunities to leverage technical expertise 
            and an analytical mindset to contribute to organizational performance and business growth.
          </p>
        </div>

        {/* Location */}
        <div className="glass-card p-4 rounded-xl flex items-center gap-3">
          <span className="material-symbols-outlined text-primary">location_on</span>
          <span className="text-sm text-slate-300">Jakarta, Indonesia</span>
        </div>

        {/* Connect Links */}
        <div id="connect" className="space-y-4 scroll-mt-24">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">
            Connect
          </h3>
          <div className="space-y-3">
            {/* Email */}
            <a
              href="mailto:adhit1312@gmail.com"
              className="glass-card p-4 rounded-xl flex items-center gap-4 hover:bg-white/[0.07] transition-all group"
            >
              <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">alternate_email</span>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider">Email</p>
                <p className="text-sm text-white group-hover:text-primary transition-colors">adhit1312@gmail.com</p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+6281290586078"
              className="glass-card p-4 rounded-xl flex items-center gap-4 hover:bg-white/[0.07] transition-all group"
            >
              <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">phone</span>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider">Phone</p>
                <p className="text-sm text-white group-hover:text-primary transition-colors">+62 812-9058-6078</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/adhitama-wichaksono-15b56b199/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 rounded-xl flex items-center gap-4 hover:bg-white/[0.07] transition-all group"
            >
              <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">link</span>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider">LinkedIn</p>
                <p className="text-sm text-white group-hover:text-primary transition-colors">adhitama-wichaksono</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
