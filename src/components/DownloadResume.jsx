/* eslint-disable react/prop-types */

const DownloadPDF = ({ fileId, fileName = "download.pdf" }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `https://drive.google.com/uc?export=download&id=${fileId}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
    >
      Resume 
    </button>
  );
};

export default DownloadPDF;
