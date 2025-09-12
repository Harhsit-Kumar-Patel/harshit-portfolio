import React from 'react';
import { motion } from 'framer-motion';
import { FiFileText } from 'react-icons/fi';

const PDFViewer = ({ pdfPath, title }) => {
  const openPDFInNewTab = () => {
    window.open(pdfPath, '_blank');
  };

  return (
    <motion.button
      onClick={openPDFInNewTab}
      className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <FiFileText className="w-5 h-5" />
      <span>View Full Case Study PDF</span>
    </motion.button>
  );
};

export default PDFViewer;
