"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects, Project } from "@/lib/projects";
import { FaHeart } from "react-icons/fa";

/* ================= IMAGE CAROUSEL ================= */
function DetailImageCarousel({ project }: { project: Project }) {
  const images =
    project.images && project.images.length > 0
      ? project.images.slice(0, 3)
      : [project.image];

  const [current, setCurrent] = useState(0);

  const prev = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrent((c) => (c - 1 + images.length) % images.length);
  };

  const next = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrent((c) => (c + 1) % images.length);
  };

  return (
    <div className="relative h-96 md:h-125 rounded-2xl overflow-hidden mb-8 bg-gray-100">
      <Image
        src={images[current]}
        alt={project.title}
        fill
        className="object-cover"
        priority
      />

      {/* Badges */}
      <div className="absolute top-6 left-6 flex gap-2 z-10">
        {project.featured && (
          <span className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold shadow">
            Featured
          </span>
        )}
        <span className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow">
          {project.status}
        </span>
      </div>

      {/* Buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center"
          >
            ‹
          </button>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center"
          >
            ›
          </button>
        </>
      )}
    </div>
  );
}

/* ================= MAIN PAGE ================= */
export default function ProjectDetailsPage() {
  const params = useParams();
  const router = useRouter();

  const [project, setProject] = useState<Project | null>(null);
  const [similarProjects, setSimilarProjects] = useState<Project[]>([]);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (!params.slug) return;

    const slug =
      typeof params.slug === "string"
        ? params.slug
        : params.slug[0];

    // ✅ NO ZONE FILTER
    const foundProject = projects.find((p) => p.slug === slug);

    if (!foundProject) {
      router.push("/projects");
      return;
    }

    setProject(foundProject);

    const similar = projects
      .filter((p) => p.slug !== slug)
      .slice(0, 3);

    setSimilarProjects(similar);
  }, [params.slug, router]);

  if (!project) {
    return <div className="py-32 text-center text-xl">Loading...</div>;
  }

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">

        {/* ================= BREADCRUMB ================= */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link href="/projects" className="hover:text-primary">
            All Projects
          </Link>
          <span>/</span>
          <span className="text-secondary font-medium">
            {project.title}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ================= LEFT ================= */}
          <div className="lg:col-span-2">

            {/* Carousel + Heart */}
            <div className="relative">
              <DetailImageCarousel project={project} />

              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className={`absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${
                  isFavorite
                    ? "bg-red-500 text-white"
                    : "bg-white text-gray-600"
                }`}
              >
                <FaHeart />
              </button>
            </div>

            {/* Info Card */}
            <div className="bg-white rounded-2xl shadow-sm p-8">

              {/* Title */}
              <div className="flex justify-between mb-6">
                <h1 className="text-4xl font-bold text-secondary">
                  {project.title}
                </h1>
                <div className="text-3xl font-bold text-primary">
                  {project.displayPrice}
                </div>
              </div>

              {/* Location */}
              <p className="text-gray-600 mb-6 text-lg">
                📍 {project.location}
              </p>

              {/* Features */}
              <div className="grid grid-cols-3 gap-6 py-6 border-y">
                <div className="text-center">
                  <p className="font-bold">{project.bedrooms} BHK</p>
                  <span className="text-sm text-gray-500">Configuration</span>
                </div>

                <div className="text-center">
                  <p className="font-bold">{project.status}</p>
                  <span className="text-sm text-gray-500">Status</span>
                </div>

                <div className="text-center">
                  <p className="font-bold capitalize">{project.zone}</p>
                  <span className="text-sm text-gray-500">Zone</span>
                </div>
              </div>

              {/* Description */}
              <div className="mt-6">
                <h2 className="text-xl font-bold mb-2">Description</h2>
                <p className="text-gray-600">{project.description}</p>
              </div>

              {/* Details */}
              <div className="mt-6">
                <p><b>Plot Area:</b> {project.PlotArea}</p>
                <p><b>Address:</b> {project.address}</p>
              </div>
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div>
            <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-4">
                Request Info
              </h3>

              <input className="w-full mb-3 p-3 border rounded" placeholder="Name" />
              <input className="w-full mb-3 p-3 border rounded" placeholder="Email" />
              <input className="w-full mb-3 p-3 border rounded" placeholder="Phone" />

              <button className="w-full bg-primary text-white py-3 rounded">
                Send Message
              </button>
            </div>
          </div>

        </div>

        {/* ================= SIMILAR ================= */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">
            Similar Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {similarProjects.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded shadow">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={200}
                />
                <h3 className="mt-2 font-semibold">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}