import { useRef, useState } from "react";
import { Upload, PlayCircle, Info } from "lucide-react";

export default function VideoAnalyzer() {
  const [file, setFile] = useState(null);
  const videoRef = useRef(null);

  const onSelect = (e) => {
    const f = e.target.files?.[0];
    if (f) setFile(Object.assign(f, { preview: URL.createObjectURL(f) }));
  };

  const onAnalyze = () => {
    // Backend endpoint intentionally not called yet per instructions.
    alert(
      "AI analysis will be enabled once the backend is connected. You can still preview your recording here."
    );
  };

  return (
    <section id="analyzer" className="bg-gray-50 py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Gameplay Analyzer</h2>
            <p className="mt-1 text-gray-600">
              Upload a screen recording of your match. The AI will break down mistakes,
              rotations, and better lines once connected.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-5">
          <div className="md:col-span-2">
            <label
              htmlFor="video"
              className="group flex cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-indigo-300 bg-white p-8 text-center text-indigo-700 hover:border-indigo-500"
            >
              <Upload className="h-8 w-8" />
              <div>
                <p className="font-medium">Drop your video here or click to browse</p>
                <p className="text-xs text-indigo-500">MP4, MOV, WEBM up to ~100MB</p>
              </div>
              <input
                id="video"
                type="file"
                accept="video/*"
                className="hidden"
                onChange={onSelect}
              />
            </label>

            <button
              onClick={onAnalyze}
              disabled={!file}
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-white shadow disabled:cursor-not-allowed disabled:bg-indigo-300"
            >
              <PlayCircle className="h-5 w-5" />
              Analyze Recording
            </button>

            <div className="mt-3 flex items-start gap-2 rounded-lg bg-indigo-50 p-3 text-sm text-indigo-800">
              <Info className="mt-0.5 h-4 w-4" />
              <p>
                This prototype focuses on the coaching experience. The AI engine will be added
                via a secure backend for processing and feedback.
              </p>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="aspect-video w-full overflow-hidden rounded-xl border border-gray-200 bg-black/5">
              {file ? (
                <video
                  ref={videoRef}
                  src={file.preview}
                  className="h-full w-full"
                  controls
                />
              ) : (
                <div className="flex h-full items-center justify-center text-sm text-gray-500">
                  Video preview will appear here
                </div>
              )}
            </div>
            {file && (
              <p className="mt-2 truncate text-xs text-gray-500">Selected: {file.name}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
