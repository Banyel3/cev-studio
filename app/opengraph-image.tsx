import { ImageResponse } from "next/og";

export const alt = "cev.studio — a digital studio for web, mobile, brand & 3D";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "96px",
        backgroundColor: "#08080b",
        color: "#fafafa",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          width: 132,
          height: 8,
          borderRadius: 9999,
          background: "linear-gradient(115deg, #FF2D9B, #FF8A3D, #8B5CF6)",
        }}
      />
      <div
        style={{
          marginTop: 40,
          fontSize: 132,
          fontWeight: 800,
          letterSpacing: -4,
        }}
      >
        cev.studio
      </div>
      <div
        style={{
          marginTop: 16,
          fontSize: 36,
          color: "#a1a1aa",
          maxWidth: 820,
        }}
      >
        We design, build & render what&apos;s next.
      </div>
      <div
        style={{
          marginTop: 48,
          fontSize: 24,
          color: "#71717a",
          letterSpacing: 4,
          textTransform: "uppercase",
        }}
      >
        Web · Mobile · Brand · 3D
      </div>
    </div>,
    { ...size },
  );
}
