import { useState, useEffect } from "react";
import {
  ArrowLeft, MapPin, Calendar, Users, Zap, CheckCircle,
  PhoneCall, Mail, ArrowUpRight, FileText, Shield, Settings
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useParams, Link, Navigate } from "react-router";
import { getProject, getProjects, type ApiProject } from "../../lib/api";

const iconMap: Record<string, LucideIcon> = {
  zap: Zap, users: Users, shield: Shield, settings: Settings,
};

function MetaItem({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) {
  if (!value) return null;
  return (
    <div className="flex items-center gap-2 text-sm">
      <Icon size={16} className="text-[#b71508]" />
      <div>
        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{label}</div>
        <div className="font-bold text-[#111827]">{value}</div>
      </div>
    </div>
  );
}

export function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<ApiProject | null>(null);
  const [related, setRelated] = useState<ApiProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    getProject(id)
      .then((data) => {
        if ((data as { message?: string }).message) { setNotFound(true); return; }
        setProject(data);
        if (data.category) {
          getProjects({ category: data.category, limit: "4" }).then((r) => {
            setRelated((r.projects ?? []).filter((p) => p._id !== data._id).slice(0, 3));
          });
        }
      })
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return (
    <div className="flex items-center justify-center min-h-[60vh] text-gray-400 text-lg">Đang tải...</div>
  );
  if (notFound || !project) return <Navigate to="/projects" replace />;

  const metrics = project.keyMetrics ?? [];
  const scope = project.scope ?? [];
  const challenges = project.challenges ?? [];
  const outcomes = project.outcomes ?? [];
  const gallery = project.galleryImages ?? [];

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero */}
      <div className="relative w-full h-[520px] flex items-end bg-gray-900 overflow-hidden">
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-8 pb-16 w-full">
          <div className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400 flex items-center gap-2">
            <Link to="/projects" className="hover:text-white flex items-center gap-1 transition-colors">
              <ArrowLeft size={12} /> Dự án
            </Link>
            <span>/</span>
            <span className="text-gray-300 truncate max-w-sm">{project.title}</span>
          </div>
          {project.label && (
            <div className="inline-block bg-[#b71508] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm mb-4">
              {project.label}
            </div>
          )}
          <h1 className="text-5xl font-bold text-white mb-4 leading-tight max-w-3xl">{project.title}</h1>
          {project.subtitle && (
            <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">{project.subtitle}</p>
          )}
        </div>
      </div>

      {/* Meta bar */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-8 py-5 flex flex-wrap gap-8 items-center">
          <MetaItem icon={MapPin} label="VỊ TRÍ" value={project.location} />
          {project.location && project.duration && <div className="w-px h-8 bg-gray-200" />}
          <MetaItem icon={Calendar} label="THỜI GIAN" value={project.duration} />
          {project.duration && project.client && <div className="w-px h-8 bg-gray-200" />}
          <MetaItem icon={Users} label="CHỦ ĐẦU TƯ" value={project.client} />
          {project.status && (
            <>
              <div className="w-px h-8 bg-gray-200" />
              <div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">TRẠNG THÁI</div>
                <span className="text-sm font-bold px-3 py-1 rounded-full text-green-600 bg-green-50">
                  {project.status}
                </span>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="max-w-7xl mx-auto px-8 py-16 w-full grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Main */}
        <div className="lg:col-span-2 flex flex-col gap-14">
          {/* Overview */}
          {project.description && (
            <div>
              <h2 className="text-2xl font-bold text-[#111827] mb-5">Tổng quan dự án</h2>
              <p className="text-gray-600 leading-relaxed text-base">{project.description}</p>
            </div>
          )}

          {/* Gallery */}
          {gallery.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-[#111827] mb-5">Hình ảnh thực tế</h2>
              <div className="grid grid-cols-3 gap-4">
                {gallery.map((src, i) => (
                  <div
                    key={i}
                    className={`rounded-lg overflow-hidden ${i === 0 ? "col-span-2" : ""} aspect-video`}
                  >
                    <img
                      src={src}
                      alt={`Gallery ${i + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Scope */}
          {scope.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-[#111827] mb-6">Phạm vi công việc</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {scope.map((section, i) => (
                  <div key={i} className="bg-[#f8fafc] border border-gray-100 rounded-lg p-7">
                    <div className="flex items-center gap-2 mb-5">
                      <div className="w-1 h-5 bg-[#b71508] rounded-full" />
                      <h3 className="font-bold text-[#111827] text-sm uppercase tracking-wider">{section.title}</h3>
                    </div>
                    <ul className="space-y-3">
                      {(section.items ?? []).map((item, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm text-gray-600">
                          <CheckCircle size={15} className="text-[#b71508] shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Challenges */}
          {challenges.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-[#111827] mb-6">Thách thức kỹ thuật & Giải pháp</h2>
              <div className="space-y-6">
                {challenges.map((c, i) => (
                  <div key={i} className="border-l-4 border-[#b71508] pl-6 py-2">
                    <h3 className="font-bold text-[#111827] mb-2">{c.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{c.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Outcomes */}
          {outcomes.length > 0 && (
            <div className="bg-[#111827] rounded-xl p-8 text-white">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Shield size={20} className="text-[#b71508]" /> Kết quả đạt được
              </h2>
              <ul className="space-y-4">
                {outcomes.map((o, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#b71508] shrink-0 mt-1.5" />
                    <span className="text-gray-300 text-sm leading-relaxed">{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-8">
          {/* Key Metrics */}
          {metrics.length > 0 && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">CHỈ SỐ CHÍNH</h3>
              <div className="grid grid-cols-2 gap-3">
                {metrics.map((m, i) => {
                  const MetricIcon = iconMap[m.icon] ?? Zap;
                  return (
                    <div key={i} className="bg-[#f8fafc] border border-gray-100 rounded-lg p-5 flex flex-col">
                      <MetricIcon size={18} className="text-[#b71508] mb-3" />
                      <div className="text-2xl font-bold text-[#111827] leading-none mb-1">{m.value}</div>
                      <div className="text-[9px] font-bold text-gray-500 uppercase tracking-widest leading-tight">{m.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Certifications */}
          <div className="bg-[#f0f4ff] border border-[#c7d2fe] rounded-lg p-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#3b4b8a] mb-4">CHỨNG NHẬN ÁP DỤNG</h3>
            <div className="space-y-2">
              {["ISO 9001:2015", "OHSAS 18001", "IEC 61850", "IEC 60076"].map((cert) => (
                <div key={cert} className="flex items-center gap-2 text-sm font-bold text-[#3b4b8a]">
                  <CheckCircle size={14} className="text-[#3b4b8a]" /> {cert}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-[#b71508] text-white rounded-xl p-7">
            <h3 className="font-bold text-lg mb-3">Tư vấn dự án tương tự</h3>
            <p className="text-red-100 text-sm mb-5 leading-relaxed">
              Liên hệ đội ngũ kỹ sư để được tư vấn giải pháp phù hợp với quy mô và yêu cầu kỹ thuật của dự án bạn.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <PhoneCall size={16} className="text-red-200" />
                <span className="font-bold">0900.555.888</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail size={16} className="text-red-200" />
                <span className="font-bold">projects@tuanloc.vn</span>
              </div>
            </div>
            <Link
              to="/contact"
              className="mt-5 block bg-white text-[#b71508] font-bold py-3 rounded text-xs uppercase tracking-wider text-center hover:bg-red-50 transition-colors"
            >
              Liên hệ ngay
            </Link>
          </div>

          {/* Download */}
          <button className="border border-[#3b4b8a] text-[#3b4b8a] font-bold py-3 px-4 rounded text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#f0f4ff] transition-colors">
            <FileText size={16} /> Tải hồ sơ năng lực dự án
          </button>
        </div>
      </div>

      {/* Related Projects */}
      {related.length > 0 && (
        <div className="bg-[#f8fafc] border-t border-gray-100 py-16 w-full">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="text-2xl font-bold text-[#111827] mb-8">Dự án liên quan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((rel) => (
                <Link
                  key={rel._id}
                  to={`/projects/${rel._id}`}
                  className="group flex gap-5 bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-shadow"
                >
                  <div className="w-28 h-20 rounded-lg overflow-hidden shrink-0 bg-gray-100">
                    {rel.image && (
                      <img src={rel.image} alt={rel.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    )}
                  </div>
                  <div className="flex flex-col justify-center">
                    {rel.label && (
                      <div className="text-[10px] font-bold text-[#b71508] uppercase tracking-widest mb-1">{rel.label}</div>
                    )}
                    <div className="font-bold text-[#111827] text-sm group-hover:text-[#b71508] transition-colors leading-snug">{rel.title}</div>
                    <div className="mt-2 flex items-center gap-1 text-[#b71508] text-xs font-bold uppercase tracking-wider">
                      Xem chi tiết <ArrowUpRight size={12} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
