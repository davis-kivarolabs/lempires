import { useState, useRef } from "react";

const ResumeUpload = () => {
    const [fileName, setFileName] = useState("");
    const fileInputRef: any = useRef(null);

    const handleFileChange = (e: any) => {
        const file = e.target.files?.[0];
        if (file) setFileName(file.name);
    };

    return (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span>Attach your Resume</span>
            <span
                style={{ cursor: "pointer", color: "#3CBBCE", fontWeight: 600 }}
                onClick={() => fileInputRef.current.click()}
            >
                +
            </span>

            {fileName && (
                <span style={{ marginLeft: "12px", fontSize: "14px" }}>
                    {fileName}
                </span>
            )}

            <input
                type="file"
                accept=".pdf,.doc,.docx"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
            />
        </div>
    );
}

export default ResumeUpload;