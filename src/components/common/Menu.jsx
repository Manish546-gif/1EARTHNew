import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import logo from "../../assets/1earthcompletelogo.svg";

const MenuContent = ({ onClose }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = prev);
  }, []);

  const navItem = (num, label, to) => (
    <button
      onClick={() => navigate(to)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 20,
        background: "transparent",
        border: "none",
        color: "#fff",
        cursor: "pointer",
        padding: 0,
        textAlign: "left",
      }}
    >
      <span style={{ color: "rgba(255,255,255,0.75)", fontFamily: "sans-serif", fontSize: 14 }}>
        ({num})
      </span>
      <span
        style={{
          fontFamily: "serif",
          fontSize: 48,
          lineHeight: 1,
          letterSpacing: 2,
          textTransform: "uppercase",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>
    </button>
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999999,
        background: "#0a0a0a",
        color: "#fff",
        padding: 40,
        boxSizing: "border-box",
        overflow: "auto",
        WebkitOverflowScrolling: "touch",
      }}
    >
      <div style={{ position: "absolute", top: 20, right: 20 }}>
        <button
          onClick={onClose}
          aria-label="Close menu"
          style={{
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.2)",
            color: "#fff",
            padding: "8px 12px",
            cursor: "pointer",
            fontSize: 14,
          }}
        >
          Close
        </button>
      </div>

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          height: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 0.9fr",
          gap: 24,
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 28, justifyContent: "center" }}>
          {navItem("01", "HOME", "/")}
          {navItem("02", "ABOUT", "/about")}
          {navItem("03", "PROJECTS", "/projects")}
          {navItem("04", "SERVICES", "/services")}
          {navItem("05", "JOURNAL", "/journal")}
          {navItem("06", "CONTACT", "/contact")}
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src={logo} alt="EARTH logo" style={{ maxHeight: 160, width: "auto", objectFit: "contain" }} />
        </div>

        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "flex-start" }}>
          <div style={{ maxWidth: 320, lineHeight: 1.7 }}>
            <div style={{ marginBottom: 18 }}>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", letterSpacing: 1 }}>EMAIL</div>
              <div style={{ marginTop: 8, fontSize: 14, color: "rgba(255,255,255,0.95)" }}>CONTACT@OEP.COM</div>
            </div>

            <div style={{ marginBottom: 18 }}>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", letterSpacing: 1 }}>PHONE NO.</div>
              <div style={{ marginTop: 8, fontSize: 14, color: "rgba(255,255,255,0.95)" }}>+91 123 456 7890</div>
            </div>

            <div style={{ marginBottom: 18 }}>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", letterSpacing: 1 }}>OFFICE</div>
              <div style={{ marginTop: 8, fontSize: 14, color: "rgba(255,255,255,0.95)" }}>OFFICE ADDRESS</div>
            </div>

            <div style={{ marginBottom: 8 }}>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", letterSpacing: 1 }}>SOCIAL</div>
              <div style={{ marginTop: 8, display: "flex", flexDirection: "column", gap: 6 }}>
                <button onClick={() => window.open("https://instagram.com", "_blank")} style={{ background: "transparent", border: "none", color: "rgba(255,255,255,0.95)", textAlign: "left", padding: 0, cursor: "pointer" }}>INSTAGRAM</button>
                <button onClick={() => window.open("https://facebook.com", "_blank")} style={{ background: "transparent", border: "none", color: "rgba(255,255,255,0.95)", textAlign: "left", padding: 0, cursor: "pointer" }}>FACEBOOK</button>
                <button onClick={() => window.open("https://linkedin.com", "_blank")} style={{ background: "transparent", border: "none", color: "rgba(255,255,255,0.95)", textAlign: "left", padding: 0, cursor: "pointer" }}>LINKEDIN</button>
              </div>
            </div>

            <div style={{ marginTop: 18, fontSize: 12, color: "rgba(255,255,255,0.6)" }}>© {new Date().getFullYear()} EARTH Properties</div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .menu-grid { grid-template-columns: 1fr !important; padding-top: 28px; }
        }
      `}</style>
    </div>
  );
};

const Menu = () => {
  const navigate = useNavigate();
  if (typeof document === "undefined") return null;

  const handleClose = () => navigate(-1);

  return createPortal(<MenuContent onClose={handleClose} />, document.body);
};

export default Menu;